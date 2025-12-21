import { AsideIndex } from "@/components/AsideIndex";
import { AsideNavigation } from "@/components/AsideNavigation";
import { ContentSource } from "@/components/ContentSource";
import { Section } from "@/components/Section/Section";
import { getDoc } from "@/lib/getDoc";

interface Props {
  params: Promise<{ topic: string; slug: string }>;
}

export default async function page({ params }: Props) {
  const paramsData = await params;
  const source = getDoc(paramsData.topic, paramsData.slug);

  return (
    <Section className="grid grid-cols-[200px_1fr_200px]">
      <AsideNavigation navigation={[]} />
      <ContentSource source={source} />
      <AsideIndex />
    </Section>
  );
}
