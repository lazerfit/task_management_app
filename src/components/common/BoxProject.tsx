import { GoArrowUpRight } from 'react-icons/go';

const BoxProject = () => {
  return (
    <div className="mt-6 flex min-h-0 w-full flex-1 flex-col items-start justify-start gap-3 overflow-y-auto border">
      <div className="flex h-30 w-full shrink-0 rounded-2xl border px-2.5 py-4">
        <div className="flex w-full flex-col gap-2">
          <div className="flex justify-between">
            <div>Task Management</div>
            <GoArrowUpRight />
          </div>
          <div className="text-xs">진행상황</div>
          <div className="h-2 border"></div>
          <div className="text-xs">12 tasks</div>
        </div>
        <div></div>
      </div>
      <div className="h-30 w-full shrink-0 rounded-2xl border px-2.5 py-4">
        Snapping
      </div>
      <div className="h-30 w-full shrink-0 rounded-2xl border px-2.5 py-4">
        Snapping
      </div>
    </div>
  );
};

export default BoxProject;
