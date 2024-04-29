'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../micro/Container';
import projects from '@/data/projects';
import SpaceY from '../micro/SpaceY';
import FilterButton from './FilterButton';
import GalleryItem from './GalleryItem';
import { useRouter } from 'next/navigation';

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
