import PackageItem from './PackageItem';

const Accordion = ({ items }) => {
  return (
    <div className="space-y-3 xl:space-y-4 3xl:space-y-6">
      {items.map(item => (
        <PackageItem key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
