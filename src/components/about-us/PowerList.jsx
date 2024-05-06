'use client';
function PowerList({ children }) {
  return (
    <ul className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-end lg:gap-4 xl:gap-6">
      {children}
    </ul>
  );
}

export default PowerList;
