'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';

function Steps() {
  return (
    <section className="text-center text-black bg-beige">
      <Container>
        <SpaceY>
          <div className="lg:mt-24">
            <SpaceY>
              <h2 className="max-w-md mx-auto text-lg font-light text-center sm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl lg:mt-12 xl:mt-16 2xl:mt-20">
                Get a free, quick and easy check of your slides in just 3 steps:
              </h2>
            </SpaceY>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Steps;
