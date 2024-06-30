import Header from '@/components/document-design/Header';
import Main from '@/components/document-design/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Document Design',
  description: `Your All-in-One Solution forYour All-in-OneSolution for Document Design Get your documents noticed with our professional design and layout services. We create custom reports, fillable forms, and other documents that match your needs, informative, visually appealing, and follow your brand look and feel. Annual Reports Design Story-driven customized charts, illustrations, infographics, and formats.`,
  openGraph: {
    title: 'Document Design - DOTS',
    description: `Your All-in-One Solution forYour All-in-OneSolution for Document Design Get your documents noticed with our professional design and layout services. We create custom reports, fillable forms, and other documents that match your needs, informative, visually appealing, and follow your brand look and feel. Annual Reports Design Story-driven customized charts, illustrations, infographics, and formats.`,
    url: 'https://dotspresentations.com/services/document-design/',
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
    title: 'Document Design - DOTS',
    description: `Your All-in-One Solution forYour All-in-OneSolution for Document Design Get your documents noticed with our professional design and layout services. We create custom reports, fillable forms, and other documents that match your needs, informative, visually appealing, and follow your brand look and feel. Annual Reports Design Story-driven customized charts, illustrations, infographics, and formats.`,
    creator: '@dotsppts',
    images: ['https://i.ibb.co/tM39yJ3/meta.png'],
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
