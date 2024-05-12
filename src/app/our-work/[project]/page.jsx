import Header from '@/components/show-cases/Header';
import Main from '@/components/show-cases/Main';
import projectsPages from '@/data/projectsPages';

export async function generateStaticParams() {
  return projectsPages.map(project => ({
    project: project.href,
  }));
}

export async function generateMetadata({ params }) {
  const { project } = params;
  const [{ title }] = projectsPages.filter(item => item.href === project);
  return {
    title: title,
    description: 'TODO',
  };
}

function page({ params }) {
  const { project } = params;
  const [{ title, href }] = projectsPages.filter(item => item.href === project);
  return (
    <>
      <Header title={title} />
      <Main href={href} />
    </>
  );
}

export default page;
