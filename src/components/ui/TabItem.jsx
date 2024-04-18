'use client';
function TabItem({ children, title, isActive }) {
  return (
    <div
      className={`p-4 text-center rounded-lg ${isActive ? 'bg-gray-200' : 'bg-white'}`}
      role="tabpanel"
      hidden={!isActive}
      id={`tab-${title}`}
      aria-labelledby={`tab-link-${title}`}
    >
      {children}
    </div>
  );
}

export default TabItem;
