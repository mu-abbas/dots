import Header from '@/components/home/Header';
import Main from '@/components/home/Main';

export const metadata = {
  title: 'Home Page - DOTS',
  description:
    'Your Story. Your Goals. Connected. Make your next presentation stand out with our Professional, Time-Saving, and price competitive services.',
};

function HomePage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default HomePage;
