'use client';
import SpaceY from '../micro/SpaceY';

function Description({ descriptionImage, description }) {
  return (
    <section className="sticky sticky-margin">
      <SpaceY>
        <div className="relative -mb-[1.5rem] lg:-mb-[2rem] 2xl:-mb-[2.5rem]">
          <img src={descriptionImage} alt="header image for the project" className="w-full" />
          <span className="w-full inline-block bg-beige pt-[1.5rem] lg:pt-[2rem] 2xl:pt-[2.5rem] absolute bottom-0 sticky-top-rounded"></span>
        </div>
        <div className="container px-8 mx-auto sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
          <p className="max-w-md mx-auto font-light font-poppins md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl 2xl:leading-10 3xl:max-w-6xl 3xl:leading-11">
            {description}
          </p>
        </div>
      </SpaceY>
    </section>
  );
}

export default Description;
