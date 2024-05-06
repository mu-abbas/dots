'use client';
function PowerItem({ children }) {
  return (
    <li className="p-6 font-light text-center transition duration-300 border rounded-full cursor-default border-opacity-15 w-60 md:px-12 md:w-auto text-green border-green hover:bg-green hover:text-black md:text-lg min-w-max lg:text-2xl xl:py-8 xl:px-16">
      {children}
    </li>
  );
}

export default PowerItem;
