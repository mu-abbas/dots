'use client';
import Container from '../micro/Container';
import CTALinkV2 from '../navigation/CTALinkV2';
import Tabs from '../ui/Tabs';

function Featured() {
  return (
    <section className="bg-black text-offWhite">
      <Container>
        <div className="space-y-12 sm:spaace-y-14 md:space-y-16 lg:space-y-20 xl:space-y-24 2xl:spacey-y-28">
          <div className="flex flex-col items-center gap-4 pb-10 border-b md:flex-row md:items-center md:justify-between border-lightGrey">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xlplus 3xl:text-6xl">Featured Projects</h2>
            <CTALinkV2 href="#" color="black" label="See all Projects" greyBorder={true} />
          </div>
          <Tabs
            items={[
              { title: 'Presentation Design', content: 'Presentation Design: TODO' },
              { title: 'Pitch Decks', content: 'Pitch Decks: TODO' },
              { title: 'Presentation Templates', content: 'Presentation Templates: TODO' },
              { title: 'Document Design', content: 'Document Design: TODO' },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

export default Featured;
