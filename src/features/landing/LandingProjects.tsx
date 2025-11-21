import { GoArrowUpRight } from 'react-icons/go';

const LandingProjects = () => {
  return (
    <div className="w-full mt-6 flex flex-col items-start justify-start gap-3 border overflow-y-auto flex-1 min-h-0">
      <div className="w-full h-30 border rounded-2xl py-4 px-2.5 shrink-0 flex">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <div>Task Management</div>
            <GoArrowUpRight />
          </div>
          <div className="text-xs">진행상황</div>
          <div className="border h-2"></div>
          <div className="text-xs">12 tasks</div>
        </div>
        <div></div>
      </div>
      <div className="w-full h-30 border rounded-2xl py-4 px-2.5 shrink-0">
        Snapping
      </div>
      <div className="w-full h-30 border rounded-2xl py-4 px-2.5 shrink-0">
        Snapping
      </div>
    </div>
  );
};

export default LandingProjects;
