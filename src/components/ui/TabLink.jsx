'use client';
function TabLink({ title, onClick, isActive }) {
  return (
    <button
      className={`focus:outline-none font-extralight font-poppins ${isActive ? 'text-offWhite' : 'text-grey'} text-xl`}
      role="tab"
      id={`tab-link-${title}`}
      aria-selected={isActive}
      aria-controls={`tab-${title}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default TabLink;