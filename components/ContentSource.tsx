import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  source: string;
}

function ContentSource({ source }: Props) {
  return <MDXRemote source={source} />;
}

export { ContentSource };
