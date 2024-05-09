'use client';
import CountUp from 'react-countup';

function CounterItem({ number, sign, label }) {
  return (
    <figure className="flex flex-col items-center justify-center gap-4 bg-opacity-25 border rounded-full border-opacity-15 size-60 3xl:size-72 bg-lightNavy border-lightNavy">
      <div className="flex text-5xl 3xl:text-6xl">
        <CountUp end={number} duration={5} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={300} />
        <span>{sign}</span>
      </div>
      <figcaption className="text-2xl font-light font-poppins 3xl:text-3xl">{label}</figcaption>
    </figure>
  );
}

export default CounterItem;
