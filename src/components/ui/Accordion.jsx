'use client';
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <AccordionItem key={item.title} title={item.title} content={item.content} open={item.open} />
      ))}
    </div>
  );
};

export default Accordion;
