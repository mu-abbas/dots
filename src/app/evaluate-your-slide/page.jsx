import Header from '@/components/evaluate/Header';
import Main from '@/components/evaluate/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Slide Evaluation Service',
  description:
    'With Dots Presentation Slide Evaluation Service, get a free, expert Evaluation of your slides in just 3 steps before you deliver your presentation.',
  openGraph: {
    title: 'Slide Evaluation Service | Dots Presentations',
    description:
      'With Dots Presentation Slide Evaluation Service, get a free, expert Evaluation of your slides in just 3 steps before you deliver your presentation.',
    url: 'https://dotspresentations.com/evaluate-your-slide',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/evaluateog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slide Evaluation Service | Dots Presentations',
    description:
      'With Dots Presentation Slide Evaluation Service, get a free, expert Evaluation of your slides in just 3 steps before you deliver your presentation.',
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/evaluateog.jpeg'],
  },
  alternates: {
    canonical: '/evaluate-your-slide',
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
