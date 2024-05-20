'use client';
import { useState } from 'react';
import TabItem from '../ui/TabItem';
import OurDesignTabsLink from './OurDesignTabsLink';
import OurDesignContent from './OurDesignContent';
import OurDesignTab from './OurDesignTab';

function OurDesignTabs({ items }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleTabClick = index => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-center gap-4 border-b-[0.5px] xl:gap-6 border-lightGrey pb-12 lg:pb-14 xl:pb-16 2xl:pb-18"
        role="tablist"
      >
        {items.map((item, index) => (
          <OurDesignTabsLink
            key={index}
            title={<OurDesignTab heading={item.firstHeading} icon={item.icon} />}
            isActive={index === activeIndex}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div>
        {items.map(({ firstHeading, secondHeading, description, href, linkLabel }, index) => (
          <TabItem key={index} title={firstHeading} isActive={index === activeIndex}>
            <OurDesignContent content={{ secondHeading, description, href, linkLabel }} />
          </TabItem>
        ))}
      </div>
    </div>
  );
}

export default OurDesignTabs;
