'use client';
import { useEffect, useRef } from 'react';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import ServicesCard from './ServicesCard';

function OurServices() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    if (window.innerWidth >= 768) return;
    const currentViewPortEnd = window.innerHeight;
    const currentElementEnd = ref.current.getBoundingClientRect().bottom;
    const currentElementTop = ref.current.getBoundingClientRect().top;
    if (currentElementEnd <= currentViewPortEnd && ref.current.style.top === 'unset') {
      ref.current.style.top = `${currentElementTop}px`;
    } else if (currentElementEnd > currentViewPortEnd) {
      ref.current.style.top = 'unset';
    }
  }

  return (
    <section
      ref={ref}
      className="bg-blue text-offWhite sticky md:top-0 pb-[2rem] lg:pb-[3rem] 2xl:pb-[4rem] lg:-mt-[3rem] 2xl:-mt-[4rem] -mt-[2rem]"
    >
      <Container>
        <SpaceY>
          <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xlplus 3xl:text-6xl">Our Services</h2>
            <p className="mt-2 md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl font-poppins">
              Tell Your Story, Dazzle Your audience,and make your slides stand out.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
            <ServicesCard
              href="/services/presentation-design"
              heading="presentation design"
              icon="/icon/presentation-icon.svg"
            />
            <ServicesCard href="/services/pitch-decks" heading="pitch deck" icon="/icon/pitch-deck-icon.svg" />
            <ServicesCard
              href="/services/presentation-templates"
              heading="presentation templates"
              icon="/icon/presentation-temp-icon.svg"
            />
            <ServicesCard
              href="/services/document-design"
              heading="document design"
              icon="/icon/document-design-icon.svg"
            />
          </ul>
        </SpaceY>
      </Container>
    </section>
  );
}

export default OurServices;
