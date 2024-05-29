'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';

function Process() {
  return (
    <section>
      <Container>
        <div className="border-t border-black">
          <SpaceY>
            <h2 className="text-2xl font-light text-left sm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl lg:mt-12 xl:mt-16 2xl:mt-20 sm:max-w-md md:max-w-max md:text-center md:mx-auto md:leading-10 lg:leading-11 lg:max-w-2xl xl:max-w-4xl">
              Our evaluation process is designed to be both helpful and constructive.
            </h2>
            <div className="flex gap-4">
              <img
                src="/image/evaluate/AdobeStock_487504282.jpeg"
                alt="illustrating image"
                className="w-1/2 rounded-xl"
              />
              <div>
                <h3>We Provide our clients a free detailed presentation review, covering the following key areas:</h3>
                <ul>
                  <li>Presentation Purpose</li>
                  <li>Presentation Structure</li>
                  <li>Slides Design</li>
                </ul>
              </div>
            </div>
          </SpaceY>
        </div>
      </Container>
    </section>
  );
}

export default Process;
