export default async function page({ params }) {
  const pageInfo = await params;

  const MDXContent = await import(
    `@/content/${pageInfo.topic}/${pageInfo.slug}.mdx`
  );

  return (
    <div>
      <MDXContent />
    </div>
  );
}
