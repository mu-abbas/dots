'use client';
import Container from '../micro/Container';
import ServicesCard from './ServicesCard';

function OurServices() {
  return (
    <section className="bg-blue text-offWhite">
      <Container>
        <div className="space-y-12 sm:spaace-y-14 md:space-y-16 lg:space-y-20 xl:space-y-24 2xl:spacey-y-28">
          <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xlplus 3xl:text-6xl">Our Services</h2>
            <p className="mt-2 md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl font-poppins">
              Tell Your Story, Dazzle Your audience,and make your slides stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
            <ServicesCard
              href="services/presentation-design"
              heading="presentation design"
              icon="presentation-icon.svg"
            />
            <ServicesCard href="services/pitch-decks" heading="pitch deck" icon="pitch-deck-icon.svg" />
            <ServicesCard
              href="services/presentation-templates"
              heading="presentation templates"
              icon="presentation-temp-icon.svg"
            />
            <ServicesCard href="services/document-design" heading="document design" icon="document-design-icon.svg" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurServices;
