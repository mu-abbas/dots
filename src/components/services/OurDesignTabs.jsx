'use client';
import React, { useState } from 'react';
import TabItem from '../ui/TabItem';
import SpaceY from '../micro/SpaceY';
import OurDesignTabsLink from './OurDesignTabsLink';
import OurDesignContent from './OurDesignContent';

function OurDesignTabs({ items }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleTabClick = index => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 border-b-[0.5px] xl:gap-6 border-lightGrey pb-12 lg:pb-14 xl:pb-16 2xl:pb-18">
        {items.map((item, index) => (
          <OurDesignTabsLink
            key={index}
            title={item.title}
            isActive={index === activeIndex}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div>
        {items.map((item, index) => (
          <TabItem key={index} title={item.title} isActive={index === activeIndex}>
            <OurDesignContent content={item.content} />
          </TabItem>
        ))}
      </div>
    </div>
  );
}

export default OurDesignTabs;
