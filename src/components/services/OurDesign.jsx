'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import OurDesignTab from './OurDesignTab';

function OurDesign() {
  return (
    <section className="bg-blue text-offWhite">
      <Container>
        <SpaceY>
          <h2 className="text-2xl font-light text-center md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus">
            Our Design Services
          </h2>
          <div className="hidden lg:block">
            <div className="flex justify-center gap-4 xl:gap-6">
              <OurDesignTab heading="presentation design" icon="/icon/presentation-icon.svg" />
              <OurDesignTab heading="pitch deck" icon="/icon/pitch-deck-icon.svg" />
              <OurDesignTab heading="presentation templates" icon="/icon/presentation-temp-icon.svg" />
              <OurDesignTab heading="document design" icon="/icon/document-design-icon.svg" />
            </div>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default OurDesign;
