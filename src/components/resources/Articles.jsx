'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import FilterButton from './FilterButton';
import { useRouter } from 'next/navigation';
import ArticleCard from './ArticleCard';

function Articles({ posts }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const filter = searchParams.get('filter') || 'recent';
  const filteredPosts = filter === 'recent' && posts.length > 3 ? posts.slice(0, 3) : posts;

  function filterHandler(value) {
    const params = new URLSearchParams(searchParams);
    params.set('filter', value);
    router.push(pathname + '?' + params.toString(), { scroll: false });
  }

  return (
    <section className="sticky z-10 sticky-bottom-rounded bg-beige">
      <Container>
        <SpaceY>
          <header>
            <div className="border-t-[0.5px] border-grey pt-8 opacity-25 lg:pt-10 2xl:pt-12"></div>
            <div className="flex flex-col flex-wrap gap-2 sm:flex-row xl:gap-3 3xl:gap-4">
              <FilterButton active={filter === 'all'} onClick={() => filterHandler('all')}>
                All
              </FilterButton>
              <FilterButton active={filter === 'recent'} onClick={() => filterHandler('recent')}>
                Recent
              </FilterButton>
            </div>
          </header>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map(({ imageURL, title, href }, index) => (
              <ArticleCard href={href} title={title} src={imageURL} key={index} />
            ))}
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Articles;
