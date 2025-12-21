import { ContentSource } from "@/components/ContentSource";
import { getDoc } from "@/lib/getDoc";

interface Props {
  params: Promise<{ topic: string; slug: string }>;
}

export default async function page({ params }: Props) {
  const paramsData = await params;
  const source = getDoc(paramsData.topic, paramsData.slug);

  return (
    <div className="mt-20">
      <ContentSource source={source} />
    </div>
  );
}
