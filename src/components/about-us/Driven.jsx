'use client';
import drivenProps from '@/data/drivenProps';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import DrivenProp from './DrivenProp';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

function Driven() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section className="sticky bg-purple text-offWhite sticky-padding sticky-margin sticky-top-rounded" ref={ref}>
      <Container>
        <SpaceY>
          <div>
            <h2 className="text-2xl leading-7 tracking-tight sm:tracking-normal md:text-3xl lg:text-4xl xl:text-4xlplus 3xl:text-5xl">
              Driven to Create Extraordinary Presentations
            </h2>
            <p className="py-4 leading-5 md:leading-6 font-extralight font-poppins md:text-lg xl:text-xl 3xl:text-2xl">
              We don&apos;t just craft slides, we craft experiences..! That&apos;s why we&apos;re driven by Four Core
              Values:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
            {drivenProps.map(({ src, title, description }, index) => (
              <DrivenProp src={src} title={title} description={description} key={index} />
            ))}
          </div>
          <h2 className="pt-12 text-2xl leading-7 tracking-tight lg:leading-10 md:leading-9 xl:leading-11 3xl:leading-12 sm:tracking-normal md:text-3xl lg:text-4xl xl:text-4xlplus 3xl:text-5xl">
            We Are Driven to Make a Lasting Impression, Both in Business and in the Community.
          </h2>
          <figure className="flex flex-col gap-6 lg:gap-12 2xl:gap-16 3xl:gap-24 lg:flex-row">
            <img src="/image/about-us/driven.jpeg" alt="driven info graphic" className="lg:w-1/2 rounded-xl" />
            <figcaption className="flex flex-col justify-center gap-4 lg:pl-12 font-extralight 2xl:gap-8 sm:text-lg 3xl:text-3xl xl:text-2xl xl:leading-9 font-poppins 3xl:leading-10 2xl:pl-16 3xl:pl-24 lg:border-l-[0.5px] border-lightGrey">
              <p>
                Dots Presentations is a creative design studio that specializes in creating powerful presentations and
                visually compelling data visualizations. Our core mission is to transform rough presentations into
                impactful visual stories, helping our clients deliver their message with clarity, confidence, and style.
                We are passionate about helping businesses, organizations, and individuals tell their stories
                effectively, ensuring that their message is not only understood but also remembered.
              </p>
              <p>At Dots Presentations, we connect the dots to deliver clarity, impact, and insight.</p>
            </figcaption>
          </figure>
          {/* <p className="p-6 text-sm shadow-sm md:p-8 bg-opacity-10 bg-lightPurple rounded-xl font-poppins lg:text-base xl:text-xl 3xl:text-2xl lg:p-12 xl:p-14 3xl:p-18">
            In addition, this year we are planning to provide annual trainings and workshops in schools to nurture the
            next generation of visual storytellers. We want to teach students how to use presentation design to
            communicate their ideas effectively and persuasively.
          </p> */}
        </SpaceY>
      </Container>
    </section>
  );
}

export default Driven;
