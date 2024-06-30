import Header from '@/components/about-us/Header';
import Main from '@/components/about-us/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'About Us',
  description: `Dots Presentations is a creative design studio that specializes in creating powerful presentations and visually compelling data visualizations. Our core mission is to take complex data and turn it into clear, engaging narratives that resonate with diverse audiences. We are passionate about helping businesses, organizations, and individuals tell their stories effectively, ensuring that their message is not only understood but also remembered. At Dots Presentations, we connect the dots to deliver clarity, impact, and insight.`,
  openGraph: {
    title: 'About Us - DOTS',
    description:
      'Dots Presentations is a creative design studio that specializes in creating powerful presentations and visually compelling data visualizations. Our core mission is to take complex data and turn it into clear, engaging narratives that resonate with diverse audiences. We are passionate about helping businesses, organizations, and individuals tell their stories effectively, ensuring that their message is not only understood but also remembered. At Dots Presentations, we connect the dots to deliver clarity, impact, and insight.',
    url: 'https://dotspresentations.com/about-us',
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
    title: 'About Us - DOTS',
    description:
      'Dots Presentations is a creative design studio that specializes in creating powerful presentations and visually compelling data visualizations. Our core mission is to take complex data and turn it into clear, engaging narratives that resonate with diverse audiences. We are passionate about helping businesses, organizations, and individuals tell their stories effectively, ensuring that their message is not only understood but also remembered. At Dots Presentations, we connect the dots to deliver clarity, impact, and insight.',
    creator: '@dotsppts',
    images: ['https://i.ibb.co/tM39yJ3/meta.png'],
  },
};

function AboutUs() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default AboutUs;
