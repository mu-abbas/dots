'use client';
import CTALinkV2 from '../navigation/CTALinkV2';

function OurDesignCarouselItem({ firstHeading, secondHeading, icon, description, href, linkLabel }) {
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 h-[400px] sm:h-[490px] grid grid-cols-1 items-start">
      <h3 className="flex items-center gap-2 sm:gap-4 border-b-[0.5px] border-lightGrey justify-center pb-4 sm:pb-6 md:pb-8">
        <img src={icon} alt={`${firstHeading} service icon`} className="size-8 sm:size-16" />
        <span className="text-lg font-light leading-7 capitalize sm:text-2xl">{firstHeading}</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <h4 className="py-4 mx-auto text-xl font-light text-center sm:p-6 sm:text-3xl md:p-8 sm:text-left md:text-4xl">
          {secondHeading}
        </h4>
        <div className="py-4 sm:p-6 md:p-8 sm:border-l-[0.5px] border-lightGrey flex flex-col gap-6 md:gap-8 justify-center">
          <p className="text-sm text-center font-extralight font-poppins sm:text-base sm:text-left md:text-lg">
            {description}
          </p>
        </div>
      </div>
      <div className="justify-center hidden mt-auto sm:flex">
        <CTALinkV2 href={href} label={linkLabel} color="green" />
      </div>
      <div className="flex justify-center sm:hidden">
        <CTALinkV2 href={href} label="Learn More" color="green" />
      </div>
    </div>
  );
}

export default OurDesignCarouselItem;
