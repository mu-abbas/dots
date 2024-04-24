'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import ProcessItem from './ProcessItem';

const processes = [
  {
    num: '1',
    heading: 'Initial Contract',
    content:
      'Our First step is mainly “briefing Meeting” to discuss your needs, the key messages that need to be communicated, and the desired outcome of the presentation.',
    color: 'green',
  },
  {
    num: '2',
    heading: 'Design Draft',
    content: `
      We’ll develop 2-3 directions for presentation mood board and outline that match your brand guidelines.`,
    color: 'black',
  },
  {
    num: '3',
    heading: 'Review and Feedback',
    content: 'Review and refine the presentation design based on your feedback for the final delivery',
    color: 'white',
  },
  {
    num: '4',
    heading: 'Design Delivery',
    content: 'The approved presentation design delivery, and all visual elements needed.',
    color: 'purple',
  },
];

function OurProcess() {
  return (
    <section className="bg-offWhite">
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
