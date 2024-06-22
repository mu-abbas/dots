import Header from '@/components/contact-us/Header';
import Main from '@/components/contact-us/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Contact Us',
  description: `We’re glad you ended up here Follow Us On Linkedin-in Instagram Facebook-square Link your presentation Send **Response time 6-8 hours Want to schedule a phone call instead? We got you! follow the steps in the calendar to pick the best time and you’ll be all set.`,
};

function ContactUs() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default ContactUs;
