'use client';

import drivenProps from '@/data/drivenProps';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import DrivenProp from './DrivenProp';

function Driven() {
  return (
    <section className="bg-purple text-offWhite">
      <Container>
        <SpaceY>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xlplus 3xl:text-5xl">
              Driven to Create Extraordinary Presentations
            </h2>
            <p className="py-2 font-extralight font-poppins md:text-lg xl:text-xl 3xl:text-2xl">
              We don&apos;t just craft slides; we craft experiences..! That&apos;s why we&apos;re driven by Four Core
              Values:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
            {drivenProps.map(({ src, title, description }, index) => (
              <DrivenProp src={src} title={title} description={description} key={index} />
            ))}
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Driven;
