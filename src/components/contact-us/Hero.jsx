'use client';

import Container from '../micro/Container';
import ContactForm from './ContactForm';
import HeroHeading from './HeroHeading';

function Hero() {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-16 xl:flex-row">
          <HeroHeading />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
