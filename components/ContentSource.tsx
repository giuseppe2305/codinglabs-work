import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  source: string;
}

function ContentSource({ source }: Props) {
  const components = useMDXComponents();

  return (
    <article>
      <MDXRemote source={source} components={components} />
    </article>
  );
}

export { ContentSource };
