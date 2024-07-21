import CountUp from 'react-countup';

function CounterItem({ number, sign, label }) {
  return (
    <figure className="flex flex-col items-center justify-center gap-4 bg-opacity-25 border border-opacity-15 rounded-3xl size-60 3xl:size-72 bg-grey border-lightGrey">
      <div className="flex text-5xl text-blue 3xl:text-6xl">
        <CountUp end={number} duration={5} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={300} />
        <span>{sign}</span>
      </div>
      <figcaption className="text-2xl font-light font-poppins 3xl:text-3xl">{label}</figcaption>
    </figure>
  );
}

export default CounterItem;
