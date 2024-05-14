import Footer from '@/components/footer/Footer';
import { Space_Grotesk, Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const grotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesk',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const clash = localFont({
  src: [
    {
      path: './ClashDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: './ClashDisplay-Medium.woff2',
      weight: '500',
    },
    {
      path: './ClashDisplay-Semibold.woff2',
      weight: '600',
    },
  ],
  display: 'swap',
  variable: '--font-clash',
});

export const metadata = {
  title: {
    template: '%s - DOTS',
    default: 'Dots Presentations',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${poppins.variable} ${clash.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="overflow-x-hidden 2xl:text-lg 3xl:text-xl">
        {children}
        <Footer />
      </body>
    </html>
  );
}
