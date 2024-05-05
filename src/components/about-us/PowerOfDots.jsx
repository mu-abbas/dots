'use client';

import PowerItem from './PowerItem';
import PowerList from './PowerList';

function PowerOfDots() {
  return (
    <div className="px-8 py-12 space-y-8 bg-no-repeat bg-contain bg-[top_left_-15rem] bg-DotsPower md:bg-[top_left_-25rem]">
      <h3 className="flex flex-col">
        <span className="text-2xl font-light">The power of</span>
        <span className="font-semibold font-clash text-blue text-8xl">DOTS</span>
      </h3>
      <ul className="flex flex-col gap-3">
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
