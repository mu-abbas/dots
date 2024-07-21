import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Capabilities from './Capabilities';
import Offers from './Offers';
import PowerOfDots from './PowerOfDots';
import Hero from './Hero';

function Main() {
  return (
    <main className="sticky">
      <Hero />
      <PowerOfDots />
      <Capabilities />
      <Offers />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
