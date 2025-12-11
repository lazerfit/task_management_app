import TaskFormHeader from '@/features/task/TaskFormHeader';
import TaskFormMain from '@/features/task/TaskFormMain';

const AddTaskPage = () => {
  return (
    <div className="relative flex h-full w-full flex-col border">
      <TaskFormHeader />
      <TaskFormMain />
    </div>
  );
};

export default AddTaskPage;
