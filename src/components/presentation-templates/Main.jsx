import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Features from './Features';
import Hero from './Hero';

function Main() {
  return (
    <main className="sticky">
      <Hero />
      <Features />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
