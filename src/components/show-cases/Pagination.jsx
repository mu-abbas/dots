'use client';

import Link from 'next/link';
import Container from '../micro/Container';
import Previous from './Previous';
import Next from './Next';

function Pagination({ next, previous }) {
  return (
    <section>
      <Container>
        <div className="flex items-center justify-between">
          <Previous previous={previous} />
          <Link
            href="/our-work"
            className="text-sm uppercase transition duration-300 border-b border-black sm:text-base lg:text-lg hover:text-blue hover:border-blue 3xl:text-xl"
          >
            Back to our work
          </Link>
          <Next next={next} />
        </div>
      </Container>
    </section>
  );
}

export default Pagination;
