import Footer from '@/components/footer/Footer';
import Header from '@/components/pitch-decks/Header';
import Main from '@/components/pitch-decks/Main';

export const metadata = {
  title: 'Pitch Decks',
  description: `Pitch Decks That Close Deals It's your chance to make a great first impression on investors, partners, and customers. So far we have accomplished 0 + Clients 0 + Countries 0 % Client Retention 0 % Satisfied clients Pitch Decks that win Ready to start the project? Connect with Dots.`,
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
