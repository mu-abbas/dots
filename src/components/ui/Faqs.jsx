'use client';
import Container from '../micro/Container';
import Accordion from './Accordion';

const items = [
  {
    title: `What software does Dots use to design presentations?`,
    content: (
      <>
        <p>
          Our presentation designers are experts in all popular presentation software, including Microsoft PowerPoint,
          Google Slides, Prezi, and Keynote. If you have a specific preference, please let us know.
        </p>
      </>
    ),
  },
  {
    title: `Will I be Protected by an NDA?`,
    content: (
      <>
        <p>
          Absolutely. We take the confidentiality of our clients' information very seriously and we will never share it
          with anyone without their permission.
        </p>
      </>
    ),
    open: true,
  },
  {
    title: `Can Dots visually tailor the presentation to my different audiences?`,
    content: (
      <>
        <p>
          Sure, we can. We choose engaging and relevant visuals that support your message and tailored to your audience.
        </p>
      </>
    ),
  },
  {
    title: `How will dots know what I like when it comes to design?`,
    content: (
      <>
        <p>
          To start your project, we'll schedule a call to learn about your presentation goals, target audience, and
          design preferences. We'll then create a design brief that includes a mood board, color palette, typography
          style guide, timeline, and budget.
        </p>
      </>
    ),
  },
  {
    title: `How long does it takes from dots to design a presentation?`,
    content: (
      <>
        <p>The timelines will vary depending on the presentation requirements, complexity, and the number of slides.</p>
      </>
    ),
  },
  {
    title: `How much does it cost to design a presentation with Dots?`,
    content: (
      <>
        <p>
          Presentation design cost depends on the complexity of the topic, length of the presentation, and desired level
          of polish. We work with our clients to understand their needs and deliver high-quality presentations on time
          and within budget.
        </p>
      </>
    ),
  },
  {
    title: `What are the prerequisites for starting a presentation design project with Dots?`,
    content: (
      <>
        <p>To ensure a successful start to our collaboration, please provide the following:</p>
        <ul className="ml-12 list-disc">
          <li>Content and goals</li>
          <li>Target audience</li>
          <li>Brand Guidelines (if available)</li>
        </ul>
      </>
    ),
  },
];

function Faqs() {
  return (
    <section className="bg-black -mt-[0.5px]">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="space-y-6 xl:space-y-8 2xl:space-y-12">
            <h2 className="text-xl font-light opacity-50 text-offWhite lg:text-2xl">FAQS</h2>
            <h3 className="text-3xl lg:text-4xl text-offWhite 2xl:text-5xl 2xl:leading-13 lg:leading-11">
              Here's What You Might Want to Know
            </h3>
          </div>
          <div className="border-t border-grey lg:w-full xl:w-3/4 3xl:w-1/2">
            <Accordion items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Faqs;
