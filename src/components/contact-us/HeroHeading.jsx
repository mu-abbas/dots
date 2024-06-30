'use client';

function HeroHeading() {
  return (
    <section className="flex flex-col gap-12 space-y-12 xl:w-full xl:justify-around">
      <h1 className="mx-auto text-5xl font-light text-center lg:px-0 lg:text-6xl md:text-5xlplus md:max-w-2xl md:px-4 xl:text-7xl xl:max-w-full 3xl:text-8xl">
        We&apos;re glad you ended up here
      </h1>
      <figure className="flex items-center justify-around gap-4 sm:gap-0 md:px-16 lg:px-32 xl:flex-col xl:gap-12 xl:items-start xl:px-16 3xl:px-32">
        <img src="/image/contact-us/social.png" alt="social icons" className="w-24 sm:w-32 lg:w-40 xl:w-48 3xl:w-56" />
        <figcaption className="flex flex-col items-center lg:gap-4 sm:gap-2 xl:pb-12">
          <p className="uppercase lg:text-lg xl:text-xl">Follow Us On</p>
          <div className="flex items-center gap-2 xl:scale-125">
            <a
              href="https://www.linkedin.com/company/dots-presentations/"
              target="blank"
              className="transition duration-300 active:scale-95"
            >
              <img src="/icon/linkedIn.svg" alt="linkedin page" />
            </a>
            <a
              href="https://www.instagram.com/dotspresentations/"
              target="blank"
              className="transition duration-300 active:scale-95"
            >
              <img src="/icon/instagram.svg" alt="instagram page" />
            </a>
            <a
              href="https://www.twitter.com/DotsPPTs"
              target="blank"
              className="transition duration-300 active:scale-95"
            >
              <img src="/icon/twitter.svg" alt="twitter page" />
            </a>
            <a
              href="https://www.youtube.com/@DotsPresentations"
              target="blank"
              className="transition duration-300 active:scale-95"
            >
              <img src="/icon/youtube.svg" alt="youtube page" />
            </a>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

export default HeroHeading;
