'use client';
import Container from '../micro/Container';
import CTALink from '../navigation/CTALink';

function Story() {
  return (
    <section className="bg-black text-offWhite">
      <Container>
        <div className="py-8 space-y-16 sm:py-10 md:py-12 lg:py-16 2xl:py-20">
          <h2 className="text-2xl leading-tight md:text-3xl lg:text-4xl xl:text-5xlplus 3xl:text-7xl xl:tracking-tighter 2xl:tracking-normal xl:leading-none">
            Clear Story, Well-defined goals and impressive presentations, On Time and On Budget
          </h2>
          <figure className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:justify-between">
            <img src="clear-story.jpeg" alt="cloudflyer project sample" className="order-1 rounded-xl lg:w-1/2" />
            <div className="flex flex-col items-center border-t-[0.5px] lg:items-start border-lightGrey lg:w-2/5">
              <p className="py-12 lg:py-16 2xl:py-20 md:text-lg lg:text-xl 2xl:text-2xl">
                We will work with you to understand your message and create a presentation that is connected to your
                audience, visually appealing and easy to follow.
              </p>
              <CTALink href="services" label="Dicover our process" color="black" greyBorder={true} />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}

export default Story;
