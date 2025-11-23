interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="border w-full h-full relative flex flex-col overflow-hidden">
      {children}
    </div>
  );
};

export default Page;
