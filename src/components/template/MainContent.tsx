interface MainContentProps {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  children: React.ReactNode;
}

const MainContent = ({ children, className }: MainContentProps) => {
  return (
    <div className={`mt-20 flex h-full w-full flex-col ${className}`}>
      {children}
    </div>
  );
};

export default MainContent;
