import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import LandingPage from './pages/LandingPage';
import AddTaskPage from './pages/AddTaskPage';
import ProjectsPage from './pages/ProjectsPage';
import SettingPage from './pages/SettingPage';
import SettingMain from './features/setting/SettingMain';
import ThemePage from './features/setting/ThemePage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks/new" element={<AddTaskPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/setting" element={<SettingPage />}>
          <Route index element={<SettingMain />} />
          <Route path="theme" element={<ThemePage />} />
        </Route>
        <Route path="/calendar" element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}

export default App;
