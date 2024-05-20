'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import CTALinkV2 from '../navigation/CTALinkV2';
import GalleryItem from '../ui/GalleryItem';
import FeatureItem from './FeatureItem';
import features from '@/data/pTemplatesFeatures';
import projects from '@/data/projects';

function Features() {
  return (
    <section>
      <Container>
        <SpaceY>
          <div className="mt-16 lg:mt-32 md:mt-24">
            <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 lg:gap-16">
              {features.map(({ src, label, content }, index) => (
                <FeatureItem src={src} label={label} content={content} key={index} />
              ))}
            </div>
          </div>
          <div>
            <SpaceY>
              <div className="border-t">&nbsp;</div>
              <div className="space-y-6">
                <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus">
                  Customized templates to fit all your needs
                </h2>
                <p className="font-light text-center lg:text-lg xl:text-xl 2xl:text-2xl font-poppins">
                  With our wide variety of tailored slide designs, you&apos;re sure to find the perfect one for your
                  needs..
                </p>
              </div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 3xl:gap-16">
                {projects
                  .filter(project => project.type === 'presentation-template')
                  .slice(0, 3)
                  .map(({ title, src, href }) => (
                    <GalleryItem src={src} title={title} href={href} key={Math.random()} />
                  ))}
              </div>
              <div className="flex justify-center">
                <CTALinkV2 href="/our-work/?filter=presentation-template" label="View All Templates" color="green" />
              </div>
            </SpaceY>
          </div>
          <div>
            <SpaceY>
              <div className="border-t">&nbsp;</div>
              <div className="space-y-6">
                <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus">
                  How our customized templates are different?
                </h2>
                <p className="font-light text-center lg:text-lg xl:text-xl 2xl:text-2xl font-poppins">
                  We&apos;re thrilled to guide you through the unique features of our custom-designed PowerPoint
                  templates
                </p>
              </div>
              <video playsInline controls className="w-full shadow-md rounded-xl">
                <source src="/video/templates-640.mp4" type="video/mp4" media="(max-width:640px)" />
                <source src="/video/templates-1280.mp4" type="video/mp4" media="(max-width:1536px)" />
                <source src="/video/templates-1920.mp4" type="video/mp4" />
                <p className="text-center">Your browser does not support the video tag. 😞</p>
              </video>
            </SpaceY>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Features;
