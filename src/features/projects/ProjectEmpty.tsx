import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from '@/components/ui/empty';
import { IconFolderCode } from '@tabler/icons-react';

const ProjectEmpty = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven't created projects yet. Get started by creating your first
          project.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

export default ProjectEmpty;
