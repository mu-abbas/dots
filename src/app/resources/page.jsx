import Footer from '@/components/footer/Footer';
import Header from '@/components/resources/Header';
import Main from '@/components/resources/Main';

export const metadata = {
  title: 'Presentation Design Resources | Dots Presentations',
  description:
    'Access valuable resources to improve your presentation skills. From evaluating your slides to reading our blog, we provide tips and insights to help you create impactful presentations.',
  openGraph: {
    title: 'Presentation Design Resources | Dots Presentations',
    description:
      'Access valuable resources to improve your presentation skills. From evaluating your slides to reading our blog, we provide tips and insights to help you create impactful presentations.',
    url: 'https://dotspresentations.com/resources',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/resourcesog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presentation Design Resources | Dots Presentations',
    description:
      'Access valuable resources to improve your presentation skills. From evaluating your slides to reading our blog, we provide tips and insights to help you create impactful presentations.',
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/resourcesog.jpeg'],
  },
};

function resources() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default resources;
