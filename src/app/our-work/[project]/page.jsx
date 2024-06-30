import Footer from '@/components/footer/Footer';
import Header from '@/components/show-cases/Header';
import Main from '@/components/show-cases/Main';
import projectsPages from '@/data/projectsPages';

function findNext(array, href) {
  const current = array.findIndex(current => current.href === href);
  if (current >= array.length - 1) return `/our-work/${array[0]?.href}`;
  return `/our-work/${array[current + 1]?.href}`;
}

function findPrevious(array, href) {
  const current = array.findIndex(current => current.href === href);
  if (current < 1) return `/our-work/${array[array.length - 1]?.href}`;
  return `/our-work/${array[current - 1]?.href}`;
}

export async function generateStaticParams() {
  return projectsPages.map(project => ({
    project: project.href,
  }));
}

export async function generateMetadata({ params }) {
  const { project } = params;
  const [{ title, details }] = projectsPages.filter(item => item.href === project);
  return {
    title: title,
    description: details.description,
    openGraph: {
      title: `${title} - DOTS`,
      description: details.description,
      url: `https://dotspresentations.com/${project}`,
      siteName: 'Dotspresentaions',
      images: [
        {
          url: `https://dotspresentations.com${details.descriptionImage}`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - DOTS`,
      description: details.description,
      creator: '@dotsppts',
      images: [`https://dotspresentations.com${details.descriptionImage}`],
    },
  };
}

function page({ params }) {
  const { project } = params;
  const [{ title, href, details }] = projectsPages.filter(item => item.href === project);

  const next = findNext(projectsPages, href);
  const previous = findPrevious(projectsPages, href);

  return (
    <>
      <Header />
      <Main details={details} next={next} previous={previous} title={title} />
      <Footer />
    </>
  );
}

export default page;
