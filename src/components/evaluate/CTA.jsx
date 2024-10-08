import Container from '../micro/Container';
import CTALinkV2 from '../navigation/CTALinkV2';

function CTA() {
  return (
    <section className="bg-beige">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 p-6 lg:p-10 sm:gap-8 sm:p-8 bg-grey bg-opacity-10 rounded-xl xl:flex-row xl:justify-around xl:p-12 3xl:p-16">
          <p className="text-sm text-center sm:text-lg sm:max-w-md sm:mx-auto md:text-xl md:max-w-lg font-poppins lg:max-w-max xl:mx-0 2xl:text-2xl 3xl:text-3xl">
            We’ve designed our solutions to support your growth at every stage.
          </p>
          <CTALinkV2 href="/contact-us" label="Start Your Review" color="green" />
        </div>
      </Container>
    </section>
  );
}

export default CTA;
