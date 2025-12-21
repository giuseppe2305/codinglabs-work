import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  source: string;
}

function ContentSource({ source }: Props) {
  return (
    <div>
      <MDXRemote source={source} />
    </div>
  );
}

export { ContentSource };
