import Header from '@/components/layouts/Header';
import avatar from '@/assets/img/avatar_01.jpg';
import { IoMenuOutline } from 'react-icons/io5';

const LandingHeader = () => {
  return (
    <Header>
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-bold text-lg">Hi, 성광</p>
      </div>
      <div>
        <IoMenuOutline size="26px" />
      </div>
    </Header>
  );
};

export default LandingHeader;
