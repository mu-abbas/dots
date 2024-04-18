'use client';
import React, { useState } from 'react';
import TabItem from './TabItem';
import TabLink from './TabLink';

function Tabs({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = index => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full mb-4">
      <div className="flex justify-evenly">
        {items.map((item, index) => (
          <TabLink
            key={item.title}
            title={item.title}
            isActive={index === activeIndex}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="mt-4">
        {items.map((item, index) => (
          <TabItem key={item.title} title={item.title} isActive={index === activeIndex}>
            {item.content}
          </TabItem>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
