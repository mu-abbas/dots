'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import Accordion from './Accordion';

const items = [
  {
    title: `What software does Dots use to design presentations?`,
    content: `Our presentation designers are experts in all popular presentation software, including Microsoft PowerPoint, Google Slides, Prezi, and Keynote. If you have a specific preference, please let us know.`,
  },
  {
    title: `Will I be Protected by an NDA?`,
    content: `Absolutely. We take the confidentiality of our clients' information very seriously and we will never share it with anyone without their permission.`,
  },
  {
    title: `Can Dots visually tailor the presentation to my different audiences?`,
    content: `Sure, we can. We choose engaging and relevant visuals that support your message and tailored to your audience.`,
  },
  {
    title: `How will dots know what I like when it comes to design?`,
    content: `To start your project, we'll schedule a call to learn about your presentation goals, target audience, and design preferences. We'll then create a design brief that includes a mood board, color palette, typography style guide, timeline, and budget.`,
  },
  {
    title: `How long does it takes from dots to design a presentation?`,
    content: `The timelines will vary depending on the presentation requirements, complexity, and the number of slides.`,
  },
  {
    title: `How much does it cost to design a presentation with Dots?`,
    content: `Presentation design cost depends on the complexity of the topic, length of the presentation, and desired level of polish. We work with our clients to understand their needs and deliver high-quality presentations on time and within budget.`,
  },
  {
    title: `What are the prerequisites for starting a presentation design project with Dots?`,
    content: (
      <>
        <span>To ensure a successful start to our collaboration, please provide the following:</span>
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
    <section className="bg-black -mt-[0.5px] text-grey">
      <Container>
        <SpaceY>
          <div className="space-y-6">
            <h2 className="text-2xl font-light">FAQS</h2>
            <h3 className="text-3xl lg:text-4xl text-offWhite">Here's What You Might Want to Know</h3>
          </div>
          <div>
            <Accordion items={items} />
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Faqs;
