'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import FilterButton from './FilterButton';
import GalleryItem from './GalleryItem';
import { useRouter } from 'next/navigation';

const projects = [
  {
    title: 'Topo Chico',
    src: '/image/our-work/TopoChico-4.jpg',
    href: '/our-work/topochico',
    type: 'presentation-design',
  },
  {
    title: 'Marriott BOD',
    src: '/image/our-work/BOD-1.jpg',
    href: '/our-work/marriott-bod',
    type: 'presentation-design',
  },
  {
    title: 'Venus Presentation',
    src: '/image/our-work/venus-2.jpg',
    href: '/our-work/venus-presentation',
    type: 'presentation-design',
  },
  {
    title: 'Surgio Health',
    src: '/image/our-work/Surgio-Health-4.jpg',
    href: '/our-work/surgio-health',
    type: 'presentation-design',
  },
  {
    title: 'Marriott CEC',
    src: '/image/our-work/CEC-2.jpg',
    href: '/our-work/marriott-cec',
    type: 'presentation-design',
  },
  {
    title: 'Cloud Flyer',
    src: '/image/our-work/CloudFlyer-5.jpg',
    href: '/our-work/cloud-flyer',
    type: 'pitch-deck',
  },
  {
    title: 'League of Play',
    src: '/image/our-work/League-of-play.jpg',
    href: '/our-work/league-of-play',
    type: 'pitch-deck',
  },
  {
    title: 'SMS',
    src: '/image/our-work/SMS-2.jpg',
    href: '/our-work/sms',
    type: 'pitch-deck',
  },
  {
    title: 'Oversubscribed',
    src: '/image/our-work/Oversubscribe.jpg',
    href: '/our-work/oversubscribed',
    type: 'pitch-deck',
  },
  {
    title: 'Decast',
    src: '/image/our-work/Decast-3.jpg',
    href: '/our-work/decast',
    type: 'pitch-deck',
  },
  {
    title: 'Gruppi',
    src: '/image/our-work/Gruppi-2.jpg',
    href: '/our-work/gruppi',
    type: 'pitch-deck',
  },
  {
    title: 'Collection XYZ',
    src: '/image/our-work/CollectionXYZ-1.jpg',
    href: '/our-work/collection-xyz',
    type: 'pitch-deck',
  },
  {
    title: 'Stake Sauce',
    src: '/image/our-work/Stake-Sauce.jpg',
    href: '/our-work/stake-sauce',
    type: 'pitch-deck',
  },
  {
    title: 'Marriott DRES',
    src: '/image/our-work/DRES-2.jpg',
    href: '/our-work/marriott-dres',
    type: 'presentation-template',
  },
  {
    title: 'Novonordisk BIG',
    src: '/image/our-work/BIG-template.jpg',
    href: '/our-work/novonordisk-big-template',
    type: 'presentation-template',
  },
  {
    title: 'Marriott Event template',
    src: '/image/our-work/Marriott-Connecting-the-dots.jpg',
    href: '/our-work/marriott-event-template',
    type: 'presentation-template',
  },
  {
    title: 'Venus template',
    src: '/image/our-work/Venus-Template-1.jpg',
    href: '/our-work/venus-template',
    type: 'presentation-template',
  },
  {
    title: 'Dolormin template',
    src: '/image/our-work/Dolormin-3.jpg',
    href: '/our-work/dolormin',
    type: 'presentation-template',
  },
  {
    title: 'Together E-book',
    src: '/image/our-work/together.jpg',
    href: '/our-work/together-ebook',
    type: 'document-design',
  },
  {
    title: 'Y20 Whitepaper',
    src: '/image/our-work/Y20-CCL.jpg',
    href: '/our-work/y20-whitepaper',
    type: 'document-design',
  },
  {
    title: 'BIG Report',
    src: '/image/our-work/BIG-NOVO.jpg',
    href: '/our-work/novonordisk-big-report',
    type: 'document-design',
  },
  {
    title: 'Together Whitepaper',
    src: '/image/our-work/Together-Ebook-1.jpg',
    href: '/our-work/together-whitepaper',
    type: 'document-design',
  },
];

function Gallery() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const filter = searchParams.get('filter') || 'all';
  const filteredProjects = projects.filter(project => (filter === 'all' ? project : project.type === filter));

  function filterHandler(value) {
    const params = new URLSearchParams(searchParams);
    params.set('filter', value);
    router.push(pathname + '?' + params.toString(), { scroll: false });
  }

  return (
    <section>
      <Container>
        <SpaceY>
          <header>
            <div className="border-t-[0.5px] border-grey pt-8 opacity-25 lg:pt-10 2xl:pt-12 "></div>
            <div className="flex flex-col flex-wrap gap-2 sm:flex-row xl:gap-3 3xl:gap-4">
              <FilterButton active={filter === 'all'} onClick={() => filterHandler('all')}>
                All
              </FilterButton>
              <FilterButton
                active={filter === 'presentation-design'}
                onClick={() => filterHandler('presentation-design')}
              >
                Presentation Design
              </FilterButton>
              <FilterButton active={filter === 'pitch-deck'} onClick={() => filterHandler('pitch-deck')}>
                Pitch Decks
              </FilterButton>
              <FilterButton
                active={filter === 'presentation-template'}
                onClick={() => filterHandler('presentation-template')}
              >
                Presentation Templates
              </FilterButton>
              <FilterButton active={filter === 'document-design'} onClick={() => filterHandler('document-design')}>
                Document Design
              </FilterButton>
            </div>
          </header>
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-12 2xl:gap-16 3xl:gap-20">
            {filteredProjects.map(({ title, src, href }) => (
              <GalleryItem src={src} title={title} href={href} key={Math.random()} />
            ))}
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Gallery;
