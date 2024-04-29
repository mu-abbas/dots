import Nav from '@/components/navigation/Nav';
import projectsPages from '@/data/projectsPages';
export async function generateStaticParams() {
  return projectsPages.map(project => ({
    project: project.href,
  }));
}

function page({ params }) {
  const { project } = params;
  const [{ title, src }] = projectsPages.filter(item => item.href === project);
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
