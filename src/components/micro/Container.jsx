'use client';
function Container({ children }) {
  return (
    <div className="container px-8 py-12 mx-auto sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-14 lg:py-20 xl:px-16 xl:py-24 2xl:py-28 2xl:px-20">
      {children}
    </div>
  );
}

export default Container;
