'use client';
function OurDesignTabsLink({ title, onClick, isActive }) {
  return (
    <button
      className={`focus:outline-none border-[0.5px] hover:bg-navy hover:border-navy transition duration-300 rounded-xl border-lightGrey 2xl:rounded-2xl ${
        isActive ? 'bg-navy border-navy' : ''
      }`}
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

export default OurDesignTabsLink;
