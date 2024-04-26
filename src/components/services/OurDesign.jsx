'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import OurDesignTab from './OurDesignTab';
import OurDesignTabs from './OurDesignTabs';

function OurDesign() {
  return (
    <section className="relative bg-blue text-offWhite">
      <div className="absolute inset-0 z-10 origin-bottom-left scale-105 bg-left-bottom bg-no-repeat bg-contain bg-ourDesign opacity-10"></div>
      <div className="relative z-50">
        <Container>
          <SpaceY>
            <h2 className="text-2xl font-light text-center md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus">
              Our Design Services
            </h2>
            <div className="hidden lg:block">
              <OurDesignTabs
                items={[
                  {
                    title: <OurDesignTab heading="presentation design" icon="/icon/presentation-icon.svg" />,
                    content: {
                      heading: 'Impressive Presentations, Every Time!',
                      description:
                        'We offer a variety of presentation design services that can make your message, delivered with Impact!',
                      href: '/services/presentation-design',
                      linkLabel: 'View All Presentation Design',
                    },
                  },
                  {
                    title: <OurDesignTab heading="pitch deck" icon="/icon/pitch-deck-icon.svg" />,
                    content: {
                      heading: 'Deck Up Your Pitch!',
                      description:
                        'It’s your chance to make a great first impression on investors, partners, and customers.',
                      href: '/services/pitch-decks',
                      linkLabel: 'View All Pitch Decks',
                    },
                  },
                  {
                    title: <OurDesignTab heading="presentation templates" icon="/icon/presentation-temp-icon.svg" />,
                    content: {
                      heading: 'Plug In Your Content And Go!',
                      description:
                        'With our templates, you can create professional looking presentations/Slides in minutes that follow your brand guidelines and are customized to your needs.',
                      href: '/services/presentation-templates',
                      linkLabel: 'View All Presentation Templates',
                    },
                  },
                  {
                    title: <OurDesignTab heading="document design" icon="/icon/document-design-icon.svg" />,
                    content: {
                      heading: 'Complex Dots, Easily Connected!',
                      description:
                        'We offer a complete range of document design and layout services, from simple documents to complex financial reports that meets your specific needs, Timeline and budget.',
                      href: '/services/document-design',
                      linkLabel: 'View All Document Design',
                    },
                  },
                ]}
              />
            </div>
          </SpaceY>
        </Container>
      </div>
    </section>
  );
}

export default OurDesign;
