import Header from '@/components/document-design/Header';
import Main from '@/components/document-design/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Document Design Services',
  description: `Enhance your business documents with our professional design services. From reports to brochures, we create visually appealing and well-organized documents that reflect your brand.`,
  openGraph: {
    title: 'Document Design Services | Dots Presentations',
    description: `Enhance your business documents with our professional design services. From reports to brochures, we create visually appealing and well-organized documents that reflect your brand.`,
    url: 'https://dotspresentations.com/services/document-design/',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/documentog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document Design Services | Dots Presentations',
    description: `Enhance your business documents with our professional design services. From reports to brochures, we create visually appealing and well-organized documents that reflect your brand.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/homeog.jpeg'],
  },
  alternates: {
    canonical: '/services/document-design',
  },
};

function DocumentDesign() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default DocumentDesign;
