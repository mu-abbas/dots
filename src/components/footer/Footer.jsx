'use client';

import Link from 'next/link';
import Container from '../micro/Container';
import Logo from '../navigation/Logo';

function Footer() {
  return (
    <footer className="bg-black text-offWhite">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-8 sm:grid-cols-2 sm:gap-16">
          <div className="space-y-8 border-b-[0.5px] lg:border-none border-grey pb-8 sm:pb-16 sm:col-span-2 lg:col-span-1">
            <Logo color="yellow" />
            <Link
              href="/contact-us"
              className="flex items-center gap-2 transition duration-300 border-black border-b-[0.5px] hover:text-green hover:border-green max-w-max xl:gap-4 2xl:gap-6"
            >
              <span className="text-xl font-light sm:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
                Tell us about your project
              </span>
              <span className="xl:scale-125 2xl:scale-150 3xl:scale-[175%]">
                <svg width="16" height="16" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.72573 18.8564L15.9666 1.26852M15.9666 1.26852L0.884648 3.15988M15.9666 1.26852L17.858 16.3505"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div className="space-y-4 2xl:space-y-6 3xl:space-y-8 sm:justify-self-center xl:text-lg 2xl:text-xl 3xl:text-2xl">
            <h2 className="text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-blue">Company</h2>
            <ul className="space-y-2 font-light 2xl:space-y-3 3xl:space-y-4 text-offWhite">
              <li className="transition duration-300 brightness-50 hover:brightness-100 max-w-max">
                <Link href="/about-us">Our Story</Link>
              </li>
              <li className="transition duration-300 brightness-50 hover:brightness-100 max-w-max">
                <Link href="/our-work">Our Work</Link>
              </li>
              <li className="transition duration-300 brightness-50 hover:brightness-100 max-w-max">
                <Link href="/resources">Our Articles</Link>
              </li>
              <li className="transition duration-300 brightness-50 hover:brightness-100 max-w-max">
                <Link href="/retainership">Retainership</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 2xl:space-y-6 sm:justify-self-center xl:text-lg 2xl:text-xl 3xl:text-2xl 3xl:space-y-8">
            <h2 className="text-xl xl:text-2xl 2xl:text-3xl text-blue 3xl:text-4xl">
              <Link href="/services">Services</Link>
            </h2>
            <ul className="space-y-2 font-light 3xl:space-y-4 2xl:space-y-3 text-offWhite">
              <li className="transition duration-300 brightness-50 hover:brightness-100 max-w-max">
                <Link href="/services/presentation-design">Presentation Design</Link>
              </li>
              <li className="transition duration-300 brightness-50 hover:brightness-100 max-w-max">
                <Link href="/services/pitch-decks">Pitch Decks</Link>
              </li>
              <li className="transition duration-300 brightness-50 hover:brightness-100 max-w-max">
                <Link href="/services/presentation-templates">Presentation Templates</Link>
              </li>
              <li className="transition duration-300 brightness-50 hover:brightness-100 max-w-max">
                <Link href="/services/document-design">Document Design</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-around py-4 sm:py-0 sm:justify-around text-offWhite sm:col-span-2 lg:col-span-1 lg:justify-between">
            <p className="text-lg font-light xl:text-2xl 2xl:text-3xl 3xl:text-4xl">Follow Us</p>
            <div className="flex items-center gap-2 xl:gap-3">
              <a
                href="https://www.linkedin.com/company/dots-presentations/"
                target="blank"
                className="transition duration-300 active:scale-95 hover:brightness-75"
              >
                <img src="/icon/footerLinkedIn.svg" alt="linkedin page" className="size-7 xl:size-8 3xl:size-9" />
              </a>
              <a
                href="https://www.instagram.com/dotspresentations/"
                target="blank"
                className="transition duration-300 active:scale-95 hover:brightness-75"
              >
                <img src="/icon/footerInstagram.svg" alt="instagram page" className="size-7 xl:size-8 3xl:size-9" />
              </a>
              <a
                href="https://www.twitter.com/DotsPPTs"
                target="blank"
                className="transition duration-300 active:scale-95 hover:brightness-75"
              >
                <img src="/icon/footerTwitter.svg" alt="twitter page" className="size-7 xl:size-8 3xl:size-9" />
              </a>
              <a
                href="https://www.youtube.com/@DotsPresentations"
                target="blank"
                className="transition duration-300 active:scale-95 hover:brightness-75"
              >
                <img src="/icon/footerYouTube.svg" alt="youtube page" className="size-7 xl:size-8 3xl:size-9" />
              </a>
            </div>
          </div>
          <p className="mx-auto text-sm font-light font-poppins text-grey max-w-max border-t-[0.5px] border-grey pt-12 sm:col-span-2 lg:border-none lg:pt-0 lg:text-base xl:text-lg xl:py-8 2xl:py-12 3xl:text-2xl 2xl:text-xl 3xl:py-16">
            &copy; Dots Presentations . All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
