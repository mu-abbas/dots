'use client';
import React, { useState } from 'react';
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        type="button"
        className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          isOpen ? 'bg-gray-200 text-indigo-600' : 'text-gray-600'
        }`}
        onClick={toggleAccordion}
      >
        {title}
      </button>
      {isOpen && (
        <div className="p-4 bg-white border rounded-lg">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map(item => (
        <AccordionItem key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
