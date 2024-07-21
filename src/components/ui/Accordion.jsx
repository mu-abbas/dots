import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <AccordionItem key={item.title} title={item.title} content={item.content} open={item.open} />
      ))}
    </ul>
  );
};

export default Accordion;
