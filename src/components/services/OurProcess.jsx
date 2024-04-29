'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import ProcessItem from './ProcessItem';
import processes from '@/data/processes';
function OurProcess() {
  return (
    <section className="bg-beige">
      <Container>
        <SpaceY>
          <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 3xl:gap-32 md:flex-row">
            <h2 className="px-4 py-3 text-xl font-medium border rounded-lg opacity-75 md:px-6 md:py-4 text-grey border-grey min-w-max sm:text-2xl lg:text-3xl 3xl:text-4xl">
              Our Process
            </h2>
            <p className="max-w-xs text-xl md:text-2xl md:max-w-sm xl:text-3xl xl:max-w-md">
              Professional, Organized, and Fast-Paced.
            </p>
          </div>
          <div className="divide-y-[0.5px]">
            {processes.map(({ num, heading, content, color }) => (
              <ProcessItem num={num} heading={heading} content={content} color={color} key={num} />
            ))}
          </div>
          <img src="/image/services/Surgio-Health-1.jpg" alt="surgio health project" className="rounded-xl" />
        </SpaceY>
      </Container>
    </section>
  );
}

export default OurProcess;
