'use client';
import Container from '../micro/Container';
import packages from '@/data/packages';
import Accordion from './PackagesAccordion';

function Packages() {
  return (
    <section className="bg-beige">
      <div className="grid grid-col-1 lg:grid-cols-[1.1fr_0.8fr]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="pb-8 space-y-3 sm:pb-12 3xl:space-y-4">
              <h2 className="text-4xl font-light md:text-4xlplus lg:text-5xl xl:text-5xlplus 3xl:text-6xl">Packages</h2>
              <p className="font-light font-poppins sm:text-lg 3xl:text-2xl">
                Choose the bundle that best meets your needs and budget.
              </p>
            </div>
            <Accordion items={packages} />
          </div>
        </Container>
        <figure className="items-center hidden h-full lg:flex bg-purple">
          <img
            src="/image/retainership/Slide2-12.jpg"
            alt="random slide"
            className="w-full translate-x-[10%] max-h-[90%] object-contain"
          />
        </figure>
      </div>
    </section>
  );
}

export default Packages;
