'use client';
import FeaturedTabContent from './FeaturedTabContent';
import Container from '../micro/Container';
import CTALinkV2 from '../navigation/CTALinkV2';
import Tabs from '../ui/Tabs';
import SpaceY from '../micro/SpaceY';

const presentationDesigns = [
  { src: 'image/home/p-design-1.jpeg', alt: 'Surgio Health', href: '#' },
  { src: 'image/home/p-design-2.jpeg', alt: 'Topo Chico', href: '#' },
  { src: 'image/home/p-design-3.jpeg', alt: 'Marriott', description: 'Board of Directors Presentation', href: '#' },
  { src: 'image/home/p-design-4.jpeg', alt: 'Marriott', description: 'Customer Engagement Centers', href: '#' },
];

const pitchDecks = [
  { src: 'image/home/p-deck-1.jpeg', alt: 'Cloud Flyer', href: '#' },
  { src: 'image/home/p-deck-2.jpeg', alt: 'Decast', href: '#' },
  { src: 'image/home/p-deck-3.jpeg', alt: 'Oversubscribed', href: '#' },
  { src: 'image/home/p-deck-4.jpeg', alt: 'League of Play', href: '#' },
];
const presentationTemplates = [
  { src: 'image/home/p-template-1.jpeg', alt: 'Venus', href: '#' },
  { src: 'image/home/p-template-2.jpeg', alt: 'Dolormin', href: '#' },
  { src: 'image/home/p-template-3.jpeg', alt: 'DRES', href: '#' },
  { src: 'image/home/p-template-4.jpeg', alt: 'BIG', href: '#' },
];
const documentDesigns = [
  { src: 'image/home/d-design-1.jpeg', alt: 'BIG', href: '#' },
  { src: 'image/home/d-design-2.jpeg', alt: 'Together', href: '#' },
  { src: 'image/home/d-design-3.jpeg', alt: 'Y20', href: '#' },
  { src: 'image/home/d-design-4.jpeg', alt: 'CCL', href: '#' },
];

function Featured() {
  return (
    <section className="bg-black text-offWhite">
      <Container>
        <SpaceY>
          <div className="flex flex-col items-center gap-4 pb-10 border-b md:flex-row md:items-center md:justify-between border-grey">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xlplus 3xl:text-6xl">Featured Projects</h2>
            <CTALinkV2 href="#" color="black" label="See all Projects" greyBorder={true} />
          </div>
          <Tabs
            items={[
              { title: 'Presentation Design', content: <FeaturedTabContent items={presentationDesigns} /> },
              { title: 'Pitch Decks', content: <FeaturedTabContent items={pitchDecks} /> },
              { title: 'Presentation Templates', content: <FeaturedTabContent items={presentationTemplates} /> },
              { title: 'Document Design', content: <FeaturedTabContent items={documentDesigns} /> },
            ]}
          />
        </SpaceY>
      </Container>
    </section>
  );
}

export default Featured;
