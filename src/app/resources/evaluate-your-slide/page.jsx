import Header from '@/components/evaluate/Header';
import Main from '@/components/evaluate/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Evaluate Your Slide',
  description:
    'Get a free, expert slide evaluation on your slides before you deliver your presentation. on your slides before you deliver your presentation. Link your presentation/Slides here UPLOAD Get a free, quick and easy check of your slides in just 3 steps Get a free, quick and easy check of your slides in just 3 steps.',
  openGraph: {
    title: 'Evaluate Your Slide - DOTS',
    description:
      'Get a free, expert slide evaluation on your slides before you deliver your presentation. on your slides before you deliver your presentation. Link your presentation/Slides here UPLOAD Get a free, quick and easy check of your slides in just 3 steps Get a free, quick and easy check of your slides in just 3 steps.',
    url: 'https://dotspresentations.com/resources/evaluate-your-slide',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://i.ibb.co/tM39yJ3/meta.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evaluate Your Slide - DOTS',
    description:
      'Get a free, expert slide evaluation on your slides before you deliver your presentation. on your slides before you deliver your presentation. Link your presentation/Slides here UPLOAD Get a free, quick and easy check of your slides in just 3 steps Get a free, quick and easy check of your slides in just 3 steps.',
    creator: '@dotsppts',
    images: ['https://i.ibb.co/tM39yJ3/meta.png'],
  },
};

function EvaluateYourSlide() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default EvaluateYourSlide;
