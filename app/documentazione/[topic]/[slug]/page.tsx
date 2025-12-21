import { MDXRemote } from "next-mdx-remote/rsc";

export default async function page({ params }) {
  const pageInfo = await params;

  const MDXContent = await import(
    `@/content/${pageInfo.topic}/${pageInfo.slug}.mdx`
  );

  return (
    <div className="mt-20">
      <MDXRemote source={MDXContent} />
    </div>
  );
}
