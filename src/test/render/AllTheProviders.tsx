import { queryWrapper } from '../queryWrapper';

const QueryProvider = queryWrapper();

export const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <QueryProvider>{children}</QueryProvider>;
};
