import Header from '@/components/about-us/Header';
import Main from '@/components/about-us/Main';

export const metadata = {
  title: 'About Us',
  description: `Dots Presentations is a creative design studio that specializes in creating powerful presentations and visually compelling data visualizations. Our core mission is to take complex data and turn it into clear, engaging narratives that resonate with diverse audiences. We are passionate about helping businesses, organizations, and individuals tell their stories effectively, ensuring that their message is not only understood but also remembered. At Dots Presentations, we connect the dots to deliver clarity, impact, and insight.`,
};

function AboutUs() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default AboutUs;
