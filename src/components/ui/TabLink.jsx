function TabLink({ title, onClick, isActive }) {
  return (
    <button
      className={`focus:outline-none font-extralight font-poppins ${
        isActive ? 'text-offWhite' : 'text-grey'
      } text-xl 2xl:text-2xl 3xl:text-3xl`}
      role="tab"
      id={`tab-link-${title}`}
      aria-selected={isActive}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default TabLink;
