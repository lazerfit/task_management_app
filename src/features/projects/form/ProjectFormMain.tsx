import MainContent from '@/components/template/MainContent';
import Input from '@/components/common/Input';
import { useState } from 'react';
import SubmitButton from '@/components/common/SubmitButton';
import { useCreateProject } from '../hooks/useProjectQueries';

const ProjectFormMain = () => {
  const [value, setValue] = useState('');
  const { mutate: createProject } = useCreateProject();

  const handleSave = () => {
    if (value.trim() === '') return;
    createProject({
      name: value,
    });
  };

  return (
    <MainContent className="flex flex-col">
      <div className="align-center flex w-full flex-col justify-center gap-3">
        <Input
          label="Project Name"
          placeholder="Enter project name"
          value={value}
          onChange={setValue}
        />
        <SubmitButton
          label="Save Project"
          onClick={handleSave}
          enabled={value.trim() !== ''}
        />
      </div>
    </MainContent>
  );
};

export default ProjectFormMain;
