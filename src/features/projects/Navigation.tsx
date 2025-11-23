const Navigation = () => {
  return (
    <div className="flex gap-5 border">
      <button className="py-2 px-4 border rounded-xl text-sm cursor-pointer hover:bg-gray-100">
        All
      </button>
      <button className="py-2 px-4 border rounded-xl text-sm">
        In progress
      </button>
      <button className="py-2 px-4 border rounded-xl text-sm">Completed</button>
    </div>
  );
};

export default Navigation;
