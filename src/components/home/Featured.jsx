'use client';
import FeaturedTabContent from './FeaturedTabContent';
import Container from '../micro/Container';
import CTALinkV2 from '../navigation/CTALinkV2';
import Tabs from '../ui/Tabs';
import SpaceY from '../micro/SpaceY';
import { presentationDesigns, pitchDecks, presentationTemplates, documentDesigns } from '@/data/featured';

function Featured() {
  return (
    <section className="bg-black text-offWhite">
      <Container>
        <SpaceY>
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xlplus 3xl:text-6xl">Featured Projects</h2>
            <CTALinkV2 href="#" color="black" label="See all Projects" greyBorder={true} />
          </div>
          <div className="pt-10 border-t md:pt-12 lg:pt-14 xl:pt-14 2xl:pt-16 3xl:pt-20 border-grey">
            <Tabs
              items={[
                { title: 'Presentation Design', content: <FeaturedTabContent items={presentationDesigns} /> },
                { title: 'Pitch Decks', content: <FeaturedTabContent items={pitchDecks} /> },
                { title: 'Presentation Templates', content: <FeaturedTabContent items={presentationTemplates} /> },
                { title: 'Document Design', content: <FeaturedTabContent items={documentDesigns} /> },
              ]}
            />
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Featured;
