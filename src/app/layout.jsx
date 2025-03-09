import { Space_Grotesk, Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'react-hot-toast';

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
      path: './fonts/ClashDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/ClashDisplay-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
    },
  ],
  display: 'swap',
  variable: '--font-clash',
});

export const metadata = {
  metadataBase: new URL('https://dotspresentations.com'),
  title: {
    template: '%s - Dots Presentations',
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
        <GoogleAnalytics gaId="G-ZSNCJRTQZD" />
        <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dots Presentations",
  "url": "https://dotspresentations.com/",
  "logo": "",
  "sameAs": [
    "https://www.instagram.com/dotspresentations/",
    "https://x.com/DotsPPTs",
    "https://www.linkedin.com/company/dots-presentations/",
    "https://www.youtube.com/@DotsPresentations"
  ]
}
</script>
      </head>
      <body className="relative overflow-x-hidden 2xl:text-lg 3xl:text-xl">
        <div className="absolute inset-0 z-40 hidden w-full h-full transition duration-300 animate-opacity overlay lg:hidden"></div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            className: 'text-sm',
            duration: 2000,
          }}
        />
        {children}
      </body>
    </html>
  );
}
