import './globals.css';

export const metadata = {
  title: 'Dots Presentations Homepage',
  description:
    'Your Story. Your Goals. Connected. Make your next presentation stand out with our Professional, Time-Saving, and price competitive services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <header>Nav Bar: TODO</header>
        {children}
        <footer>Footer: TODO</footer>
      </body>
    </html>
  );
}
