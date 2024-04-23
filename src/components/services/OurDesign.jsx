'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import ServicesCard from './ServicesCard';

function OurDesign() {
  return (
    <section className="bg-blue text-offWhite">
      <Container>
        <SpaceY>
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

export default OurDesign;
