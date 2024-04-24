'use client';
import ScrollUp from '@/helpers/ScrollUp';
import Blog from '../ui/Blog';
import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Testimonials from '../ui/Testimonials';
import OurDesign from './OurDesign';
import OurProcess from './OurProcess';
function Main() {
  return (
    <main>
      <ScrollUp />
      <OurProcess />
      <OurDesign />
      <Testimonials />
      <Blog />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
