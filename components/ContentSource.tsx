import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  source: string;
}

function ContentSource({ source }: Props) {
  return (
    <article>
      <MDXRemote source={source} />
    </article>
  );
}

export { ContentSource };
