import { ContentSource } from "@/components/ContentSource";
import { getDoc } from "@/lib/getDoc";

export default async function page({ params }) {
  const paramsData = await params;
  const source = getDoc(paramsData.topic, paramsData.slug);

  return (
    <div className="mt-20">
      <ContentSource source={source} />
    </div>
  );
}
