'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import FilterButton from './FilterButton';
import GalleryItem from './GalleryItem';

function Gallery() {
  const projects = [
    {
      title: 'Topo Chico',
      src: '/image/our-work/TopoChico-4.jpg',
      href: '/our-work/topochico',
      type: '',
    },
    {
      title: 'Marriott BOD',
      src: '/image/our-work/BOD-1.jpg',
      href: '/our-work/marriott-bod',
      type: '',
    },
    {
      title: 'Venus Presentation',
      src: '/image/our-work/venus-2.jpg',
      href: '/our-work/venus-presentation',
      type: '',
    },
    {
      title: 'Surgio Health',
      src: '/image/our-work/Surgio-Health-4.jpg',
      href: '/our-work/surgio-health',
      type: '',
    },
    {
      title: 'Marriott CEC',
      src: '/image/our-work/CEC-2.jpg',
      href: '/our-work/marriott-cec',
      type: '',
    },
    {
      title: 'Cloud Flyer',
      src: '/image/our-work/CloudFlyer-5.jpg',
      href: '/our-work/cloud-flyer',
      type: '',
    },
    {
      title: 'League of Play',
      src: '/image/our-work/League-of-play.jpg',
      href: '/our-work/league-of-play',
      type: '',
    },
    {
      title: 'SMS',
      src: '/image/our-work/SMS-2.jpg',
      href: '/our-work/sms',
      type: '',
    },
    {
      title: 'Oversubscribe',
      src: '/image/our-work/Oversubscribe.jpg',
      href: '/our-work/oversubscribe',
      type: '',
    },
    {
      title: 'Decast',
      src: '/image/our-work/Decast-3.jpg',
      href: '/our-work/decast',
      type: '',
    },
    {
      title: 'Gruppi',
      src: '/image/our-work/Gruppi-2.jpg',
      href: '/our-work/gruppi',
      type: '',
    },
    {
      title: 'Collection XYZ',
      src: '/image/our-work/CollectionXYZ-1.jpg',
      href: '/our-work/collection-xyz',
      type: '',
    },
    {
      title: 'Stake Sauce',
      src: '/image/our-work/Stake-Sauce.jpg',
      href: '/our-work/stake-sauce',
      type: '',
    },
    {
      title: 'Marriott DRES',
      src: '/image/our-work/DRES-2.jpg',
      href: '/our-work/marriott-dres',
      type: '',
    },
    {
      title: 'Novonordisk BIG',
      src: '/image/our-work/BIG-template.jpg',
      href: '/our-work/novonordisk-big-template',
      type: '',
    },
    {
      title: 'Marriott Event template',
      src: '/image/our-work/Marriott-Connecting-the-dots.jpg',
      href: '/our-work/marriott-event-template',
      type: '',
    },
    {
      title: 'Venus template',
      src: '/image/our-work/Venus-Template-1.jpg',
      href: '/our-work/venus-template',
      type: '',
    },
    {
      title: 'Dolormin template',
      src: '/image/our-work/Dolormin-3.jpg',
      href: '/our-work/dolormin',
      type: '',
    },
    {
      title: 'Dolormin template',
      src: '/image/our-work/Dolormin-3.jpg',
      href: '/our-work/dolormin',
      type: '',
    },
    {
      title: 'Together E-book',
      src: '/image/our-work/together.jpg',
      href: '/our-work/together-ebook',
      type: '',
    },
    {
      title: 'Y20 Whitepaper',
      src: '/image/our-work/Y20-CCL.jpg',
      href: '/our-work/y20-whitepaper',
      type: '',
    },
    {
      title: 'BIG Report',
      src: '/image/our-work/BIG-NOVO.jpg',
      href: '/our-work/novonordisk-big-report',
      type: '',
    },
    {
      title: 'Together Whitepaper',
      src: '/image/our-work/Together-Ebook-1.jpg',
      href: '/our-work/together-whitepaper',
      type: '',
    },
  ];

  return (
    <section>
      <Container>
        <SpaceY>
          <header>
            <div className="border-t-[0.5px] border-grey pt-8 opacity-25 lg:pt-12 2xl:pt-16 "></div>
            <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row xl:gap-3 3xl:gap-4">
              <FilterButton>All</FilterButton>
              <FilterButton>Presentation Design</FilterButton>
              <FilterButton>Pitch Decks</FilterButton>
              <FilterButton>Presentation Templates</FilterButton>
              <FilterButton>Document Design</FilterButton>
            </div>
          </header>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {projects.map(({ title, src, href }) => (
              <GalleryItem src={src} title={title} href={href} />
            ))}
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Gallery;
