import { getTopicBySlug, getAllTopics } from "@/lib/database-actions";
import { notFound } from "next/navigation";
import TopicDetailClient from "./TopicDetailClient";

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams?.id;

  // Fetch current topic and all topics
  const [topicData, allTopics] = await Promise.all([
    getTopicBySlug(slug),
    getAllTopics(),
  ]);
  
  if (!topicData) return notFound();

  return <TopicDetailClient topicData={topicData} allTopics={allTopics} currentSlug={slug} />;
}
