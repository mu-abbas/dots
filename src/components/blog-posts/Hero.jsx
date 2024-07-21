import Container from '../micro/Container';

function Hero({ title, date, duration }) {
  return (
    <section className="sticky pt-24 sticky-bottom-rounded bg-beige">
      <Container>
        <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-4">
          <time dateTime={date} className="text-sm font-bold sm:text-base text-blue md:text-lg xl:text-xl 2xl:text-2xl">
            {date}
          </time>
          <h1 className="max-w-xs text-2xl font-light text-center lg:max-w-3xl sm:text-4xl sm:max-w-md md:text-5xl md:max-w-lg lg:text-6xl xl:text-7xl xl:max-w-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-light text-grey md:text-lg xl:text-xl 2xl:text-2xl sm:text-base">
            {duration}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
