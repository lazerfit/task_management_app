# GEMINI.md - 프로젝트 상태 보고서

## 1. 프로젝트 개요

**이름:** 03_streamline
**설명:** React와 Vite를 기반으로 한 태스크 관리 애플리케이션

## 2. 기술 스택

- **Core:** React 19, TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4, clsx, tailwind-merge
- **UI Components:** shadcn/ui (Label, Radio Group, Select), React Icons, Swiper
- **Routing:** React Router DOM v7
- **Package Manager:** pnpm
- **Test:** Vitest, React Testing Library
- **Utils:** Day.js, clsx, tailwind-merge, prettier-plugin-tailwindcss

## 3. 프로젝트 구조

기능(Feature) 단위의 폴더 구조를 채택하고 있습니다.

- `src/features/`: 주요 기능 모듈
  - `calendar/`: 캘린더 뷰 및 날짜 선택 (현재 작업 중)
  - `landing/`: 랜딩 페이지
  - `addTask/`: 할 일 추가
  - `projects/`: 프로젝트 관리
  - `setting/`: 설정 및 테마
- `src/components/`: 공통 컴포넌트 (`ui`, `layouts`)
- `src/pages/`: 라우트 페이지 컴포넌트
- `src/hooks/`, `src/utils/`, `src/types/`: 유틸리티 및 타입 정의

layout과 ui 컴포넌트는 src/components 폴더에 위치하고 있습니다.

- `src/components/layouts/`: 레이아웃 컴포넌트
- `src/components/ui/`: shadcn/ui 컴포넌트

## 4. 현재 상태 (2025-11-26 기준)

- **라우팅:**
  - `/`: LandingPage
  - `/tasks/new`: AddTaskPage
  - `/projects`: ProjectsPage
  - `/setting`: SettingPage (하위: ThemePage)
  - `/calendar`: CalendarPage
- **최근 작업:**
  - 캘린더 기능 (`CalendarMain`, `DateStrip`, `DateScroll`) 구현 완료.
    - `DateScroll`: Swiper 적용, Day.js 기반 동적 날짜 생성, 선택된 날짜 중앙 정렬.
    - `TimelineItem`: 타임라인 아이템 컴포넌트 추가.
  - 레이아웃 및 공통 템플릿 작업.
  - 캘린더 관련 테스트 파일 6개 추가 (`CalendarPage`, `CalendarHeader`, `CalendarMain`, `DateStrip`, `DateScroll`, `TimelineItem`).
  - 테스트 환경 개선: `@testing-library/user-event` 추가.
  - 코드 개선: `TimelineItem` 리스트 렌더링 키 경고 수정, `CalendarHeader` 접근성(`aria-label`) 개선.
- **코드 품질:**
  - Lint: 양호 (사소한 스타일 경고 존재 가능).
  - Test: 28개의 테스트 파일 존재, Vitest로 실행 가능.

## 5. 주요 명령어

- `pnpm dev`: 개발 서버 실행
- `pnpm build`: 프로덕션 빌드
- `pnpm lint`: 린트 검사
- `pnpm test`: 테스트 실행

## 6. Testing Guidelines (Vitest & React Testing Library)

모든 테스트 코드는 다음 원칙을 준수하여 작성해야 합니다.

### 1. Core Philosophy

- **Test Behavior, Not Implementation:** 컴포넌트의 내부 상태(state)나 메서드를 직접 테스트하지 마십시오. 사용자가 화면을 보고 상호작용하는 방식(클릭, 입력, 텍스트 확인)으로 테스트를 작성합니다.
- **Accessibility First:** 요소를 선택할 때는 접근성 관련 쿼리를 최우선으로 사용합니다.

### 2. Tools & Setup

- **Runner:** Vitest를 사용합니다. (`describe`, `it`, `expect` from 'vitest')
- **Mocking:** Jest 객체 대신 `vi` 유틸리티를 사용합니다. (예: `vi.fn()`, `vi.spyOn()`)
- **Rendering:** `@testing-library/react`의 `render`, `screen`을 사용합니다.
- **User Interaction:** `fireEvent` 대신 반드시 `@testing-library/user-event`를 사용합니다.

### 3. Query Priority (Selectors)

요소를 찾을 때 다음 우선순위를 엄격히 따르십시오:

1.  `getByRole` (가장 권장됨: `name` 옵션과 함께 사용)
    - 예: `screen.getByRole('button', { name: /submit/i })`
2.  `getByLabelText` (폼 입력 필드)
3.  `getByPlaceholderText`
4.  `getByText`
5.  `getByTestId` (최후의 수단으로만 사용, `data-testid` 속성 필요)

### 4. Writing Tests

- **Describe Block:** 테스트 대상을 명확히 그룹화합니다.
- **Test Name (`it`):** "should"로 시작하기보다 행위의 결과를 명확히 서술합니다. (예: `it('renders the user profile when data loads')`)
- **Async Handling:** 비동기 작업이나 UI 업데이트가 포함된 경우 `waitFor` 또는 `findBy*` 쿼리를 사용합니다.
- **Setup:** `userEvent.setup()`은 각 테스트 케이스 내부나 `beforeEach`에서 호출합니다.

### 5. Mocking Strategy

- API 호출은 실제 네트워크 요청을 보내지 않고 Mocking 합니다 (MSW 또는 `vi.mock` 사용).
- 하위 컴포넌트가 너무 복잡하거나 테스트 범위를 벗어나는 경우에만 Shallow Rendering 대신 Mock Component를 고려합니다.

### 6. Code Example

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import LoginForm from './LoginForm';

// Mock setup (if needed)
const mockLogin = vi.fn();

describe('LoginForm', () => {
  it('calls the login function with email and password when submitted', async () => {
    const user = userEvent.setup();
    render(<LoginForm onLogin={mockLogin} />);

    // 1. Verify Elements (Accessibility first)
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    // 2. Simulate User Interaction
    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    // 3. Assertions
    expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});
```

## 7. Code Style Guidelines (React & TypeScript)

프로젝트의 일관성과 가독성을 위해 다음 스타일 가이드를 엄격히 준수합니다.

### 1. General TypeScript & Syntax

- **Strict Typing:** `any` 타입 사용을 금지합니다. 명시적인 인터페이스(`interface`)나 타입(`type`)을 정의하여 사용합니다.
- **Immutability:** 변수는 기본적으로 `const`를 사용하고, 재할당이 꼭 필요한 경우에만 `let`을 사용합니다. (`var` 금지)
- **Equality:** 항상 엄격한 동등 연산자(`===`, `!==`)를 사용합니다.
- **Async/Await:** 비동기 처리는 `.then().catch()` 체이닝보다 `async/await` 구문을 선호합니다.

### 2. React Components

- **Functional Components:** 모든 컴포넌트는 화살표 함수(Arrow Function) 기반의 함수형 컴포넌트로 작성합니다.
- **Named Exports:** 디버깅과 리팩토링 용이성을 위해 `default export` 대신 `named export`를 사용합니다.
- **Props Destructuring:** Props는 컴포넌트 매개변수에서 즉시 구조 분해 할당(Destructuring)하여 사용합니다.
- **Event Handler Naming:**
  - Props 이름: `on`으로 시작 (예: `onClick`, `onSubmit`)
  - 핸들러 함수 이름: `handle`로 시작 (예: `handleClick`, `handleSubmit`)

### 3. Hooks & State Management

- **Logic Separation:** UI 로직이 복잡해질 경우, Custom Hook으로 분리하여 컴포넌트 본문을 간결하게 유지합니다.
- **Hook Ordering:** Hooks는 컴포넌트 최상단에 선언하며, 조건문 안에서 호출하지 않습니다.
- **Fragment:** 불필요한 `<div>` 래퍼 대신 React Fragment (`<>...</>`)를 사용합니다.

### 4. Naming Conventions

- **PascalCase:** 컴포넌트, 인터페이스, 타입 정의, Enum (예: `UserProfile`, `UserProps`)
- **camelCase:** 변수, 함수, Hooks, 인스턴스 (예: `isValid`, `fetchData`, `useAuth`)
- **UPPER_SNAKE_CASE:** 상수 (예: `API_BASE_URL`, `MAX_COUNT`)
- **Boolean Prefixes:** Boolean 변수는 `is`, `has`, `should`, `can` 접두사를 사용하여 의미를 명확히 합니다. (예: `isLoading`, `hasError`)

### 5. Code Example

```tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Type Definition
interface UserCardProps {
  userId: string;
  userName: string;
  onProfileClick: (id: string) => void;
}

// Component Definition (Named Export)
export const UserCard = ({
  userId,
  userName,
  onProfileClick,
}: UserCardProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // Handler
  const handleCardClick = () => {
    setIsActive(!isActive);
    onProfileClick(userId);
  };

  // Render
  return (
    <div className="card-container">
      <h3>{userName}</h3>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <Button onClick={handleCardClick}>View Profile</Button>
    </div>
  );
};
```
