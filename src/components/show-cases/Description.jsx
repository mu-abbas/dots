'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';

function Description({ descriptionImage, description }) {
  return (
    <section>
      <SpaceY>
        <img
          src={descriptionImage}
          alt="header image for the project"
          className="object-cover w-full min-h-[250px] max-h-[75svh]"
        />
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