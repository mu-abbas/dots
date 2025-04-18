import Footer from '@/components/footer/Footer';
import Header from '@/components/pitch-decks/Header';
import Main from '@/components/pitch-decks/Main';

export const metadata = {
  title: 'Pitch Deck Template',
  description: `Dots offers you Pitch Decks Templates That Close Deals.
It's your chance to make a great first impression on investors, partners, and customers.`,
  openGraph: {
    title: 'Pitch Deck Template | Dots Presentations',
    description: `Dots offers you Pitch Decks Templates That Close Deals.
It's your chance to make a great first impression on investors, partners, and customers.`,
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
    title: 'Pitch Deck Template | Dots Presentations',
    description: `Dots offers you Pitch Decks Templates That Close Deals.
It's your chance to make a great first impression on investors, partners, and customers.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/pitchog.jpeg'],
  },
  alternates: {
    canonical: '/services/pitch-decks',
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
