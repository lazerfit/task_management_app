import Header from '@/components/layouts/Header';
import avatar from '@/assets/img/avatar_01.jpg';
import { IoMenuOutline } from 'react-icons/io5';

const LandingHeader = () => {
  return (
    <Header>
      <div className="flex gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src={avatar}
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-lg font-bold">Hi, 성광</p>
      </div>
      <div>
        <IoMenuOutline size="26px" />
      </div>
    </Header>
  );
};

export default LandingHeader;
