'use client';
import React, { useState } from 'react';
import TabItem from './TabItem';
import TabLink from './TabLink';
import SpaceY from '../micro/SpaceY';

function Tabs({ items }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleTabClick = index => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <SpaceY>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-evenly">
          {items.map((item, index) => (
            <TabLink
              key={item.title}
              title={item.title}
              isActive={index === activeIndex}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </div>
        <div>
          {items.map((item, index) => (
            <TabItem key={item.title} title={item.title} isActive={index === activeIndex}>
              {item.content}
            </TabItem>
          ))}
        </div>
      </SpaceY>
    </div>
  );
}

export default Tabs;