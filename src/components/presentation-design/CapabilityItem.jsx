'use client';
function CapabilityItem({ children }) {
  return (
    <li className="p-6 font-light text-center text-black transition duration-300 bg-white border rounded-full cursor-default w-80 border-opacity-15 md:px-12 md:w-auto border-green hover:bg-mediumBlue hover:text-white md:text-lg min-w-max lg:text-2xl xl:py-8 xl:px-16">
      {children}
    </li>
  );
}

export default CapabilityItem;
