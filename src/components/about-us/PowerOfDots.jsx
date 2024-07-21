import PowerItem from './PowerItem';
import PowerList from './PowerList';

function PowerOfDots() {
  return (
    <div className="px-8 py-12 space-y-8 bg-no-repeat bg-contain bg-[top_left_-15rem] bg-DotsPower">
      <h3 className="flex flex-col lg:pl-8 2xl:pl-16">
        <span className="text-2xl font-light lg:text-3xl xl:text-4xl 2xl:text-5xl">The power of</span>
        <span className="font-semibold font-clash text-blue text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl">DOTS</span>
      </h3>
      <ul className="flex flex-col gap-3 lg:gap-4 xl:gap-6">
        <li>
          <PowerList>
            <PowerItem>Visually Appealing</PowerItem>
            <PowerItem>Strategic</PowerItem>
          </PowerList>
        </li>
        <li>
          <PowerList>
            <PowerItem>Engaging</PowerItem>
            <PowerItem>Innovative</PowerItem>
            <PowerItem>Problem Solving</PowerItem>
          </PowerList>
        </li>
        <li>
          <PowerList>
            <PowerItem>Creative</PowerItem>
            <PowerItem>Thought-provoking</PowerItem>
            <PowerItem>Research Based</PowerItem>
          </PowerList>
        </li>
      </ul>
    </div>
  );
}

export default PowerOfDots;
