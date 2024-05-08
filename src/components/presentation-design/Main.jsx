'use client';

import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Capabilities from './Capabilities';
import Offers from './Offers';
import PowerOfDots from './PowerOfDots';

function Main() {
  return (
    <main className="bg-beige">
      <PowerOfDots />
      <Capabilities />
      <Offers />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
