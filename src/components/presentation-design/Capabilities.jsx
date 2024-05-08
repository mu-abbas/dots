'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import CapabilityItem from './CapabilityItem';
import CapabilityList from './CapabilityList';

function Capabilities() {
  return (
    <section className="bg-green">
      <Container>
        <SpaceY>
          <h2 className="text-3xl text-center opacity-75 md:text-left md:text-4xl lg:text-5xl xl:text-5xlplus 3xl:text-6xl text-grey">
            Our Capabilities
          </h2>
          <ul className="flex flex-col gap-6 md:gap-3 lg:gap-4 xl:gap-6">
            <li>
              <CapabilityList>
                <CapabilityItem>Create Effective Storytelling</CapabilityItem>
              </CapabilityList>
            </li>
            <li>
              <CapabilityList>
                <CapabilityItem>Strategically Sound</CapabilityItem>
                <CapabilityItem>Simplify the Complex Concepts</CapabilityItem>
              </CapabilityList>
            </li>
            <li>
              <CapabilityList>
                <CapabilityItem>Create Tailored Solutions</CapabilityItem>
                <CapabilityItem>Fast and Efficient</CapabilityItem>
              </CapabilityList>
            </li>
            <li>
              <CapabilityList>
                <CapabilityItem>Visually Appealing Presentations</CapabilityItem>
              </CapabilityList>
            </li>
          </ul>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Capabilities;
