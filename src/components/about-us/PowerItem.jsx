'use client';
function PowerItem({ children }) {
  return (
    <li className="p-6 font-light text-center transition duration-300 border rounded-full cursor-default border-opacity-15 w-60 text-green border-green hover:bg-green hover:text-black">
      {children}
    </li>
  );
}

export default PowerItem;
