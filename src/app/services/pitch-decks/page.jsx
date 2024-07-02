import Footer from '@/components/footer/Footer';
import Header from '@/components/pitch-decks/Header';
import Main from '@/components/pitch-decks/Main';

export const metadata = {
  title: 'Engaging Pitch Deck Design',
  description: `Make a lasting impression with our expertly crafted pitch decks. We design compelling slides that effectively communicate your vision and value proposition to investors.`,
  openGraph: {
    title: 'Engaging Pitch Deck Design | Dots Presentations',
    description: `Make a lasting impression with our expertly crafted pitch decks. We design compelling slides that effectively communicate your vision and value proposition to investors.`,
    url: 'https://dotspresentations.com/services/pitch-decks/',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/pitchog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engaging Pitch Deck Design | Dots Presentations',
    description: `Make a lasting impression with our expertly crafted pitch decks. We design compelling slides that effectively communicate your vision and value proposition to investors.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/pitchog.jpeg'],
  },
};

function PitchDecks() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default PitchDecks;
