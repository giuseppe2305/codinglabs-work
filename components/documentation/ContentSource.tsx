import { useMDXRemoteComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  source: string;
}

function ContentSource({ source }: Props) {
  const components = useMDXRemoteComponents();

  return (
    <article className="row-span-2">
      <MDXRemote source={source} components={components} />
    </article>
  );
}

export { ContentSource };
