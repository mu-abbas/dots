'use client';
import { useState } from 'react';
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        className={`w-full p-4 border-b border-grey focus:outline-none ${
          isOpen ? 'text-navy' : 'text-offWhite'
        } text-left flex justify-between items-center text-sm transition duration-300`}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span className="p-3 border rounded-full border-grey">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.2087 0.455078L10.4997 19.7733M10.4997 19.7733L19.7725 10.3407M10.4997 19.7733L1.22701 10.3407"
              stroke="#2B65F4"
              stroke-width="2.14962"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="p-4 text-sm font-light origin-top border-b font-poppins text-offWhite border-grey animate-expand">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <AccordionItem key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
