import { AsideTOC } from "@/components/documentation/AsideTOC";
import { ContentSource } from "@/components/documentation/ContentSource";
import { getDoc } from "@/lib/docs";
import { generateTOC } from "@/lib/generateTOC";

interface Props {
  params: Promise<{ topic: string; slug: string }>;
}

export default async function page({ params }: Props) {
  const paramsData = await params;
  const source = getDoc(paramsData.topic, paramsData.slug);
  const toc = generateTOC(source);

  return (
    <>
      <ContentSource source={source} />
      <AsideTOC headings={toc} />
    </>
  );
}
