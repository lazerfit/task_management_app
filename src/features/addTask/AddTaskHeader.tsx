import Header from '@/components/layouts/Header';
import { GoArrowLeft } from 'react-icons/go';
import { IoMenuOutline } from 'react-icons/io5';

const AddTaskHeader = () => {
  return (
    <Header>
      <div className="cursor-pointer">
        <GoArrowLeft size="26px" />
      </div>
      <div className="font-bold text-3xl font-english">Add Task</div>
      <div className="cursor-pointer">
        <IoMenuOutline size="26px" />
      </div>
    </Header>
  );
};

export default AddTaskHeader;
