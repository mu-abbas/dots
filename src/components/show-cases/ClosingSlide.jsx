'use client';

function ClosingSlide({ src }) {
  return (
    <section>
      <div className="container px-8 mx-auto -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-0 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
        <img src={src} alt="closing slide" className="mx-auto sm:max-w-lg rounded-xl lg:max-w-full" />
      </div>
    </section>
  );
}

export default ClosingSlide;
