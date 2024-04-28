import Nav from '@/components/navigation/Nav';

const projects = [
  {
    title: 'Topo Chico',
    src: '/image/our-work/TopoChico-4.jpg',
    href: 'topochico',
  },
  {
    title: 'Marriott BOD',
    src: '/image/our-work/BOD-1.jpg',
    href: 'marriott-bod',
  },
  {
    title: 'Venus Presentation',
    src: '/image/our-work/venus-2.jpg',
    href: 'venus-presentation',
  },
  {
    title: 'Surgio Health',
    src: '/image/our-work/Surgio-Health-4.jpg',
    href: 'surgio-health',
  },
  {
    title: 'Marriott CEC',
    src: '/image/our-work/CEC-2.jpg',
    href: 'marriott-cec',
  },
  {
    title: 'Cloud Flyer',
    src: '/image/our-work/CloudFlyer-5.jpg',
    href: 'cloud-flyer',
  },
  {
    title: 'League of Play',
    src: '/image/our-work/League-of-play.jpg',
    href: 'league-of-play',
  },
  {
    title: 'SMS',
    src: '/image/our-work/SMS-2.jpg',
    href: 'sms',
  },
  {
    title: 'Oversubscribed',
    src: '/image/our-work/Oversubscribe.jpg',
    href: 'oversubscribed',
  },
  {
    title: 'Decast',
    src: '/image/our-work/Decast-3.jpg',
    href: 'decast',
  },
  {
    title: 'Gruppi',
    src: '/image/our-work/Gruppi-2.jpg',
    href: 'gruppi',
  },
  {
    title: 'Collection XYZ',
    src: '/image/our-work/CollectionXYZ-1.jpg',
    href: 'collection-xyz',
  },
  {
    title: 'Stake Sauce',
    src: '/image/our-work/Stake-Sauce.jpg',
    href: 'stake-sauce',
  },
  {
    title: 'Marriott DRES',
    src: '/image/our-work/DRES-2.jpg',
    href: 'marriott-dres',
  },
  {
    title: 'Novonordisk BIG',
    src: '/image/our-work/BIG-template.jpg',
    href: 'novonordisk-big-template',
  },
  {
    title: 'Marriott Event template',
    src: '/image/our-work/Marriott-Connecting-the-dots.jpg',
    href: 'marriott-event-template',
  },
  {
    title: 'Venus template',
    src: '/image/our-work/Venus-Template-1.jpg',
    href: 'venus-template',
  },
  {
    title: 'Dolormin template',
    src: '/image/our-work/Dolormin-3.jpg',
    href: 'dolormin',
  },
  {
    title: 'Together E-book',
    src: '/image/our-work/together.jpg',
    href: 'together-ebook',
  },
  {
    title: 'Y20 Whitepaper',
    src: '/image/our-work/Y20-CCL.jpg',
    href: 'y20-whitepaper',
  },
  {
    title: 'BIG Report',
    src: '/image/our-work/BIG-NOVO.jpg',
    href: 'novonordisk-big-report',
  },
  {
    title: 'Together Whitepaper',
    src: '/image/our-work/Together-Ebook-1.jpg',
    href: 'together-whitepaper',
  },
];

export async function generateStaticParams() {
  return projects.map(project => ({
    project: project.href,
  }));
}

function page({ params }) {
  const { project } = params;
  const [{ title, src }] = projects.filter(item => item.href === project);
  return (
    <>
      <header className="bg-beige">
        <Nav />
        <h1>client name: {`${title}`}</h1>
      </header>
      <main>
        <img src={src} alt={`${title} project`} className="object-cover w-screen h-screen" />
      </main>
    </>
  );
}

export default page;
