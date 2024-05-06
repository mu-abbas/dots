'use client';
function EveryPresentation() {
  return (
    <div className="flex px-8 lg:px-0 lg:h-[700px] items-center lg:pt-32 lg:pb-24">
      <div className="relative hidden h-full lg:block translate-y-[10%]">
        <span className="inline-block h-full">
          <img
            src="/image/about-us/left-bottom-slide.jpeg"
            alt="motto mockup slide"
            className="object-cover object-left h-full"
          />
        </span>
        <span className="absolute inset-0 inline-block h-full -translate-x-[15%] -translate-y-[35%]">
          <img
            src="/image/about-us/left-top-slide.jpeg"
            alt="motto mockup slide"
            className="object-cover object-center h-[125%]"
          />
        </span>
      </div>
      <div className="mx-auto text-center">
        <h3 className="py-12 mx-auto text-xl font-light text-center border-b lg:text-4xl xl:text-5xl lg:px-12 lg:border-none border-opacity-15 border-lightGrey lg:w-[470px] xl:w-[620px]">
          Every Presentation is an opportunity to make a lasting impression
        </h3>
      </div>
      <div className="relative hidden h-full lg:block translate-y-[10%]">
        <span className="inline-block h-full">
          <img
            src="/image/about-us/right-bottom-slide.jpeg"
            alt="motto mockup slide"
            className="object-cover object-left h-full"
          />
        </span>
        <span className="absolute inset-0 inline-block h-full translate-x-[15%] -translate-y-[35%]">
          <img
            src="/image/about-us/right-top-slide.jpeg"
            alt="motto mockup slide"
            className="object-cover object-center h-[125%]"
          />
        </span>
      </div>
    </div>
  );
}

export default EveryPresentation;
