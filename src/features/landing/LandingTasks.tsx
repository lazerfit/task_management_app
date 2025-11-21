import { GoArrowUpRight } from 'react-icons/go';

const LandingTasks = () => {
  return (
    <div className="mt-20 border h-65 w-full flex flex-wrap items-center justify-between gap-2">
      <div className="w-full font-bold text-xl">Tasks</div>
      <div className="border h-25 w-49 rounded-2xl flex flex-col justify-start items-start px-2.5 py-4">
        <GoArrowUpRight style={{ marginLeft: 'auto' }} />
        <p>Todo</p>
        <p className="text-xs">10 tasks</p>
      </div>
      <div className="border h-25 w-49 rounded-2xl flex flex-col justify-center items-start">
        <p>In Progress</p>
        <p className="text-xs">20 tasks</p>
      </div>
      <div className="border h-25 w-49 rounded-2xl flex flex-col justify-center items-start">
        <p>Completed</p>
        <p className="text-xs">14 tasks</p>
      </div>
      <div className="border h-25 w-49 rounded-2xl flex flex-col justify-center items-start">
        <p>Cancled</p>
        <p className="text-xs">2 tasks</p>
      </div>
    </div>
  );
};

export default LandingTasks;
