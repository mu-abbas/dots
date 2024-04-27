'use client';
function FilterButton({ onClick, active, children }) {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-3 border border-grey rounded-md hover:border-blue hover:bg-blue hover:text-offWhite transition duration-300 font-light text-lg xl:text-xl 3xl:text-3xl 2xl:text-2xl ${
        active ? 'bg-grey bg-opacity-15 border-opacity-5' : ''
      }`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
