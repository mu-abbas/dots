import Link from 'next/link';
import Container from '../micro/Container';
import Previous from './Previous';
import Next from './Next';

function Pagination({ next, previous }) {
  return (
    <section className="bg-beige pb-[1.5rem] lg:pb-[2rem] 2xl:pb-[2.5rem]">
      <Container>
        <div className="flex items-center justify-between">
          <Previous previous={previous} />
          <Link
            href="/resources"
            className="text-sm uppercase transition duration-300 border-b border-black sm:text-base lg:text-lg hover:text-blue hover:border-blue 3xl:text-xl"
          >
            Back to our blog
          </Link>
          <Next next={next} />
        </div>
      </Container>
    </section>
  );
}

export default Pagination;
