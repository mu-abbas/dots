'use client';
function TabItem({ children, title, isActive }) {
  return (
    <div role="tabpanel" hidden={!isActive} id={`tab-${title}`} aria-labelledby={`tab-link-${title}`}>
      {children}
    </div>
  );
}

export default TabItem;
