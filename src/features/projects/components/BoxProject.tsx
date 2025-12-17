import { IconArrowUpRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import type { ProjectStatus } from '../types/projectTypes';

interface BoxProjectProps {
  name: string;
  navigateTo: number;
  status: ProjectStatus;
}

const BoxProject = ({ name, navigateTo, status }: BoxProjectProps) => {
  const navigate = useNavigate();
  return (
    <div className="mt-6 flex min-h-0 w-full flex-1 flex-col items-start justify-start gap-3 overflow-y-auto border">
      <div className="flex h-30 w-full shrink-0 rounded-2xl border px-2.5 py-4">
        <button
          className="h-full w-full cursor-pointer border"
          onClick={() => navigate(`/projects/${navigateTo}`)}
        >
          <div className="align-center flex h-full w-full flex-col gap-2">
            <div className="flex justify-between">
              <div>{name}</div>
              <IconArrowUpRight size={20} />
            </div>
            <div className="flex w-full justify-between text-xs">
              <p>진행상황</p>
              <Badge className="bg-blue-600">{status}</Badge>
            </div>
            <div className="h-2 w-full border"></div>
            <div className="flex w-full justify-start text-xs">12 tasks</div>
          </div>
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default BoxProject;
