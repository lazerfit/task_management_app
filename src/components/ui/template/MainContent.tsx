interface MainContentProps {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  children: React.ReactNode;
}

const MainContent = ({ children, className }: MainContentProps) => {
  return (
    <div className={`w-full h-full mt-20 flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default MainContent;
