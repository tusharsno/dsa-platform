"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  createProblemAdmin,
  updateProblemAdmin,
  getAllTopicsAdmin,
  getAllTagsAdmin,
  getAllCompaniesAdmin,
} from "@/lib/admin-actions";
import { useRouter } from "next/navigation";

export function AddProblemModal({ isOpen, onClose, editData }: any) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const [topicId, setTopicId] = useState("");
  const [starterCode, setStarterCode] = useState("");
  
  const [topics, setTopics] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setSlug(editData.slug);
      setDescription(editData.description);
      setDifficulty(editData.difficulty);
      setTopicId(editData.topicId);
      setStarterCode(editData.starterCode || "");
      setSelectedTags(editData.tags?.map((t: any) => t.id) || []);
      setSelectedCompanies(editData.companies?.map((c: any) => c.id) || []);
    } else {
      resetForm();
    }
  }, [editData, isOpen]);

  const loadData = async () => {
    const [topicsData, tagsData, companiesData] = await Promise.all([
      getAllTopicsAdmin(),
      getAllTagsAdmin(),
      getAllCompaniesAdmin(),
    ]);
    setTopics(topicsData);
    setTags(tagsData);
    setCompanies(companiesData);
    if (!topicId && topicsData.length > 0) {
      setTopicId(topicsData[0].id);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setDescription("");
    setDifficulty("Easy");
    setTopicId("");
    setStarterCode("");
    setSelectedTags([]);
    setSelectedCompanies([]);
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!editData) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !slug || !description || !topicId) {
      alert("Please fill all required fields!");
      return;
    }

    const data = {
      title,
      slug,
      description,
      difficulty,
      topicId,
      starterCode,
      tagIds: selectedTags,
      companyIds: selectedCompanies,
    };

    const result = editData
      ? await updateProblemAdmin(editData.id, data)
      : await createProblemAdmin(data);

    if (result.success) {
      alert(editData ? "Record Updated Successfully!" : "Record Added Successfully!");
      onClose();
      router.refresh();
    } else {
      alert(result.error || "Failed to save problem");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-card w-full max-w-2xl rounded-3xl border border-border shadow-2xl overflow-hidden my-8">
        <div className="p-6 flex justify-between items-center border-b border-border">
          <h2 className="text-xl font-bold">
            {editData ? "Edit Problem" : "Add New Problem"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold">Problem Title *</label>
              <input
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                placeholder="e.g. Two Sum"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold">Slug *</label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
                placeholder="two-sum"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold">Description *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              placeholder="Problem description..."
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold">Topic *</label>
              <select
                value={topicId}
                onChange={(e) => setTopicId(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none"
              >
                <option value="">Select Topic</option>
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold">Difficulty *</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold">Starter Code</label>
            <textarea
              value={starterCode}
              onChange={(e) => setStarterCode(e.target.value)}
              rows={3}
              placeholder="function solution() { ... }"
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20 font-mono text-sm"
            />
          </div>

          <Button type="submit" className="w-full py-6 rounded-xl font-bold text-lg">
            {editData ? "Update Record" : "Save Record"}
          </Button>
        </form>
      </div>
    </div>
  );
}
