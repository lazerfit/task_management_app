import AddTaskHeader from '@/features/addTask/AddTaskHeader';
import AddTaskMain from '@/features/addTask/AddTaskMain';

const AddTaskPage = () => {
  return (
    <div className="border w-full h-full flex flex-col relative">
      <AddTaskHeader />
      <AddTaskMain />
    </div>
  );
};

export default AddTaskPage;
