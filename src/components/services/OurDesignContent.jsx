import CTALinkV2 from '../navigation/CTALinkV2';

function OurDesignContent({ content }) {
  const { secondHeading, description, href, linkLabel } = content;
  return (
    <div className="grid grid-cols-2 pt-12 lg:pt-14 xl:pt-16 2xl:pt-18">
      <h3 className="px-12 py-6 font-light text-5xlplus leading-12 2xl:text-6xl 2xl:leading-13 3xl:text-7xl 3xl:leading-14">
        {secondHeading}
      </h3>
      <div className="px-12 py-6 border-l-[0.5px] border-lightGrey flex flex-col gap-12 justify-center">
        <p className="max-w-lg text-xl 3xl:max-w-3xl 3xl:text-3xl 2xl:max-w-2xl xl:text-2xl font-extralight font-poppins 3xl:leading-10">
          {description}
        </p>
        <CTALinkV2 href={href} label={linkLabel} color="green" />
      </div>
    </div>
  );
}

export default OurDesignContent;
