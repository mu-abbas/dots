'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import CTALinkV2 from '../navigation/CTALinkV2';

function Story() {
  return (
    <section className="bg-black text-offWhite">
      <Container>
        <SpaceY>
          <h2 className="text-2xl leading-tight md:text-3xl lg:text-4xl xl:text-5xlplus 3xl:text-7xl xl:tracking-tighter 2xl:tracking-normal xl:leading-none">
            Clear Story, Well-defined goals and impressive presentations, On Time and On Budget
          </h2>
          <figure className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:justify-between">
            <img
              src="image/home/clear-story.jpeg"
              alt="cloudflyer project sample"
              className="order-1 rounded-xl lg:w-1/2"
            />
            <div className="flex flex-col items-center border-t-[0.5px] lg:items-start border-grey lg:w-2/5">
              <p className="py-12 font-light lg:py-16 2xl:py-20 md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl font-poppins">
                We will work with you to understand your message and create a presentation that is connected to your
                audience, visually appealing and easy to follow.
              </p>
              <CTALinkV2 href="services" label="Dicover our process" color="black" greyBorder={true} />
            </div>
          </figure>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Story;
