import Header from '@/components/evaluate/Header';
import Main from '@/components/evaluate/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Slide Evaluation Tool',
  description:
    'Use our slide evaluation tool to get professional feedback on your presentation slides. Improve your design and effectiveness with expert recommendations.',
  openGraph: {
    title: 'Slide Evaluation Tool | Dots Presentations',
    description:
      'Use our slide evaluation tool to get professional feedback on your presentation slides. Improve your design and effectiveness with expert recommendations.',
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
    title: 'Slide Evaluation Tool | Dots Presentations',
    description:
      'Use our slide evaluation tool to get professional feedback on your presentation slides. Improve your design and effectiveness with expert recommendations.',
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
