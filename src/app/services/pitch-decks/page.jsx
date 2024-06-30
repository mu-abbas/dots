import Footer from '@/components/footer/Footer';
import Header from '@/components/pitch-decks/Header';
import Main from '@/components/pitch-decks/Main';

export const metadata = {
  title: 'Pitch Decks',
  description: `Pitch Decks That Close Deals It's your chance to make a great first impression on investors, partners, and customers. So far we have accomplished 0 + Clients 0 + Countries 0 % Client Retention 0 % Satisfied clients Pitch Decks that win Ready to start the project? Connect with Dots.`,
  openGraph: {
    title: 'Pitch Decks - DOTS',
    description: `Pitch Decks That Close Deals It's your chance to make a great first impression on investors, partners, and customers. So far we have accomplished 0 + Clients 0 + Countries 0 % Client Retention 0 % Satisfied clients Pitch Decks that win Ready to start the project? Connect with Dots.`,
    url: 'https://dotspresentations.com/services/pitch-decks/',
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
    title: 'Pitch Decks - DOTS',
    description: `Pitch Decks That Close Deals It's your chance to make a great first impression on investors, partners, and customers. So far we have accomplished 0 + Clients 0 + Countries 0 % Client Retention 0 % Satisfied clients Pitch Decks that win Ready to start the project? Connect with Dots.`,
    creator: '@dotsppts',
    images: ['https://i.ibb.co/tM39yJ3/meta.png'],
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
