import { getAllTopics } from "@/lib/database-actions";
import TopicsClient from "./TopicsClient";

export default async function TopicsPage() {
  const topics = await getAllTopics();

  return <TopicsClient topics={topics} />;
}
