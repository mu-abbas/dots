'use client';
import Container from '../micro/Container';
import Accordion from './Accordion';
import faqs from '@/data/faqs';

function Faqs() {
  return (
    <section className="sticky z-10 bg-black sticky-margin sticky-bottom-rounded sticky-top-rounded sticky-padding">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="space-y-6 xl:space-y-8 2xl:space-y-12">
            <h2 className="text-xl font-light opacity-50 text-offWhite lg:text-2xl">FAQS</h2>
            <h3 className="text-3xl lg:text-4xl text-offWhite 2xl:text-5xl 2xl:leading-13 lg:leading-11">
              Here&apos;s What You Might Want to Know
            </h3>
          </div>
          <div className="border-t border-grey lg:w-full xl:w-3/4 3xl:w-1/2">
            <Accordion items={faqs} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Faqs;
