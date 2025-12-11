interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden border">
      {children}
    </div>
  );
};

export default Page;
