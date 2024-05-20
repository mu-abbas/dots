'use client';

import Container from '../micro/Container';

function Slides({ slides }) {
  return (
    <section>
      <Container>
        <div
          role="presentation"
          aria-label="image gallery"
          className="grid grid-cols-1 gap-6 2xl:gap-8 3xl:gap-12 lg:grid-cols-2"
        >
          {slides.map((slide, index) => (
            <img
              src={slide}
              alt="slide"
              key={index}
              className="mx-auto transition duration-300 cursor-pointer sm:max-w-lg lg:max-w-full hover:brightness-75"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Slides;
