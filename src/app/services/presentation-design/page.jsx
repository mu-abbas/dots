import Footer from '@/components/footer/Footer';
import Header from '@/components/presentation-design/Header';
import Main from '@/components/presentation-design/Main';

export const metadata = {
  title: 'Custom Presentation Design',
  description:
    'Dots Custom Presentation Design services are the solution that helps you create engaging, Flawless, and Effective Presentations. On Budget. On-Time!.',
  openGraph: {
    title: 'Custom Presentation Design | Dots Presentations ',
    description: `Dots Custom Presentation Design services are the solution that helps you create engaging, Flawless, and Effective Presentations. On Budget. On-Time!.`,
    url: 'https://dotspresentations.com/services/presentation-design/',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/presentationog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Presentation Design | Dots Presentations ',
    description: `Dots Custom Presentation Design services are the solution that helps you create engaging, Flawless, and Effective Presentations. On Budget. On-Time!.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/presentationog.jpeg'],
  },
  alternates: {
    canonical: '/services/presentation-design',
  },
};

function PresentationDesign() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default PresentationDesign;
