'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import processes from '@/data/evaluationProcesses';
import ProcessItem from './ProcessItem';

function Process() {
  return (
    <section>
      <Container>
        <div className="pt-12 border-t border-black sm:pt-14 md:pt-16 lg:pt-8 xl:pt-4 2xl:pt-0">
          <SpaceY>
            <h2 className="text-2xl font-light text-left sm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl lg:mt-12 xl:mt-16 2xl:mt-20 sm:max-w-md md:max-w-max md:text-center md:mx-auto md:leading-10 lg:leading-11 lg:max-w-2xl xl:max-w-4xl">
              Our evaluation process is designed to be both helpful and constructive.
            </h2>
            <div className="flex flex-col gap-16 lg:flex-row xl:gap-20 2xl:gap-24">
              <img
                src="/image/evaluate/AdobeStock_487504282.jpeg"
                alt="illustrating image"
                className="w-full max-w-xl mx-auto lg:max-w-max rounded-xl lg:w-1/2 lg:object-cover"
              />
              <div className="py-2 space-y-12 lg:w-1/2">
                <h3 className="text-xl font-medium md:text-2xl lg:max-w-2xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 3xl:max-w-3xl">
                  We Provide our clients a free detailed presentation review, covering the following key areas:
                </h3>
                <ul className="space-y-8 3xl:space-y-12">
                  {processes.map(({ src, label, content }, index) => (
                    <ProcessItem key={index} src={src} label={label} content={content} />
                  ))}
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
