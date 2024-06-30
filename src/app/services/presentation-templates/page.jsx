import Footer from '@/components/footer/Footer';
import Header from '@/components/presentation-templates/Header';
import Main from '@/components/presentation-templates/Main';

export const metadata = {
  title: 'Presentation Templates',
  description:
    'Save Time and Get Your Message Across with Style! Get Your Message Across with Style! Our Presentation Templates Service is here to save your time and create visually appealing Slides/ Presentations that follow your brand guidelines and are customized to your needs. Save Time and Effort Especially if you need to create multiple presentations.',
  openGraph: {
    title: 'Presentation Templates - DOTS',
    description: `Save Time and Get Your Message Across with Style! Get Your Message Across with Style! Our Presentation Templates Service is here to save your time and create visually appealing Slides/ Presentations that follow your brand guidelines and are customized to your needs. Save Time and Effort Especially if you need to create multiple presentations.`,
    url: 'https://dotspresentations.com/services/presentation-templates/',
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
    title: 'Presentation Templates - DOTS',
    description: `Save Time and Get Your Message Across with Style! Get Your Message Across with Style! Our Presentation Templates Service is here to save your time and create visually appealing Slides/ Presentations that follow your brand guidelines and are customized to your needs. Save Time and Effort Especially if you need to create multiple presentations.`,
    creator: '@dotsppts',
    images: ['https://i.ibb.co/tM39yJ3/meta.png'],
  },
};

function PresentationTemplates() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default PresentationTemplates;
