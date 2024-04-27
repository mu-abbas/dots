export async function generateStaticParams() {
  const posts = [{ name: 'topochico' }, { name: 'mariot1' }];

  return posts.map(post => ({
    project: post.name,
  }));
}

function page({ params }) {
  const { project } = params;
  return (
    <>
      <header>client name: {`${project}`}</header>
      <main>TODO</main>
    </>
  );
}

export default page;
