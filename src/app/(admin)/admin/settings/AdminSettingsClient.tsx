"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  createTopicAdmin,
  updateTopicAdmin,
  deleteTopicAdmin,
  createTagAdmin,
  deleteTagAdmin,
  createCompanyAdmin,
  deleteCompanyAdmin,
} from "@/lib/admin-actions";
import { useRouter } from "next/navigation";

export function AdminSettingsClient({
  topics,
  tags,
  companies,
}: {
  topics: any[];
  tags: any[];
  companies: any[];
}) {
  const [activeTab, setActiveTab] = useState<"topics" | "tags" | "companies">("topics");
  const [newTopicName, setNewTopicName] = useState("");
  const [newTopicSlug, setNewTopicSlug] = useState("");
  const [newTopicIcon, setNewTopicIcon] = useState("");
  const [newTopicDescription, setNewTopicDescription] = useState("");
  const [newTopicContent, setNewTopicContent] = useState("");
  const [newTagName, setNewTagName] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");
  const [editingTopic, setEditingTopic] = useState<any>(null);
  const router = useRouter();

  const handleAddTopic = async () => {
    if (!newTopicName || !newTopicSlug) {
      alert("Name and slug are required!");
      return;
    }

    const result = await createTopicAdmin({
      name: newTopicName,
      slug: newTopicSlug,
      icon: newTopicIcon,
      description: newTopicDescription,
      content: newTopicContent,
      order: topics.length + 1,
    });

    if (result.success) {
      alert("Topic added successfully!");
      setNewTopicName("");
      setNewTopicSlug("");
      setNewTopicIcon("");
      setNewTopicDescription("");
      setNewTopicContent("");
      router.refresh();
    } else {
      alert(result.error || "Failed to add topic");
    }
  };

  const handleDeleteTopic = async (id: string, name: string) => {
    if (!confirm(`Delete topic "${name}"?`)) return;

    const result = await deleteTopicAdmin(id);
    if (result.success) {
      alert("Topic deleted successfully!");
      router.refresh();
    } else {
      alert(result.error || "Failed to delete topic");
    }
  };

  const handleEditTopic = (topic: any) => {
    setEditingTopic(topic);
    setNewTopicName(topic.name);
    setNewTopicSlug(topic.slug);
    setNewTopicIcon(topic.icon || "");
    setNewTopicDescription(topic.description || "");
    setNewTopicContent(topic.content || "");
  };

  const handleUpdateTopic = async () => {
    if (!editingTopic || !newTopicName || !newTopicSlug) {
      alert("Name and slug are required!");
      return;
    }

    const result = await updateTopicAdmin(editingTopic.id, {
      name: newTopicName,
      slug: newTopicSlug,
      icon: newTopicIcon,
      description: newTopicDescription,
      content: newTopicContent,
    });

    if (result.success) {
      alert("Topic updated successfully!");
      setEditingTopic(null);
      setNewTopicName("");
      setNewTopicSlug("");
      setNewTopicIcon("");
      setNewTopicDescription("");
      setNewTopicContent("");
      router.refresh();
    } else {
      alert(result.error || "Failed to update topic");
    }
  };

  const handleCancelEdit = () => {
    setEditingTopic(null);
    setNewTopicName("");
    setNewTopicSlug("");
    setNewTopicIcon("");
    setNewTopicDescription("");
    setNewTopicContent("");
  };

  const handleAddTag = async () => {
    if (!newTagName) {
      alert("Tag name is required!");
      return;
    }

    const result = await createTagAdmin({ name: newTagName });
    if (result.success) {
      alert("Tag added successfully!");
      setNewTagName("");
      router.refresh();
    } else {
      alert(result.error || "Failed to add tag");
    }
  };

  const handleDeleteTag = async (id: string, name: string) => {
    if (!confirm(`Delete tag "${name}"?`)) return;

    const result = await deleteTagAdmin(id);
    if (result.success) {
      alert("Tag deleted successfully!");
      router.refresh();
    } else {
      alert(result.error || "Failed to delete tag");
    }
  };

  const handleAddCompany = async () => {
    if (!newCompanyName) {
      alert("Company name is required!");
      return;
    }

    const result = await createCompanyAdmin({ name: newCompanyName });
    if (result.success) {
      alert("Company added successfully!");
      setNewCompanyName("");
      router.refresh();
    } else {
      alert(result.error || "Failed to add company");
    }
  };

  const handleDeleteCompany = async (id: string, name: string) => {
    if (!confirm(`Delete company "${name}"?`)) return;

    const result = await deleteCompanyAdmin(id);
    if (result.success) {
      alert("Company deleted successfully!");
      router.refresh();
    } else {
      alert(result.error || "Failed to delete company");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Platform Settings</h1>
        <p className="text-muted-foreground">Manage topics, tags, and companies</p>
      </div>

      <div className="flex gap-2 border-b border-border">
        {["topics", "tags", "companies"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-3 font-semibold capitalize transition-colors ${
              activeTab === tab
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "topics" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">
              {editingTopic ? "Edit Topic" : "Add New Topic"}
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Topic Name"
                  value={newTopicName}
                  onChange={(e) => setNewTopicName(e.target.value)}
                  className="px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  placeholder="Slug (e.g., arrays)"
                  value={newTopicSlug}
                  onChange={(e) => setNewTopicSlug(e.target.value)}
                  className="px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  placeholder="Icon (optional)"
                  value={newTopicIcon}
                  onChange={(e) => setNewTopicIcon(e.target.value)}
                  className="px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <textarea
                placeholder="Short Description (optional)"
                value={newTopicDescription}
                onChange={(e) => setNewTopicDescription(e.target.value)}
                rows={2}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
              <textarea
                placeholder="Full Content/Guide (Markdown supported)"
                value={newTopicContent}
                onChange={(e) => setNewTopicContent(e.target.value)}
                rows={8}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20 font-mono text-sm"
              />
            </div>
            <div className="flex gap-3 mt-4">
              {editingTopic ? (
                <>
                  <Button onClick={handleUpdateTopic} className="rounded-xl font-bold">
                    <Save size={16} className="mr-2" /> Update Topic
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                    className="rounded-xl font-bold"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={handleAddTopic} className="rounded-xl font-bold">
                  <Plus size={16} className="mr-2" /> Add Topic
                </Button>
              )}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-bold">All Topics ({topics.length})</h3>
            </div>
            <div className="divide-y divide-border">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-4 flex items-center justify-between hover:bg-muted/20 transition-colors"
                >
                  <div>
                    <p className="font-semibold">{topic.name}</p>
                    <p className="text-sm text-muted-foreground">/{topic.slug}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditTopic(topic)}
                      className="p-2 hover:bg-primary/10 rounded-md text-primary"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteTopic(topic.id, topic.name)}
                      className="p-2 hover:bg-red-500/10 rounded-md text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "tags" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Add New Tag</h3>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Tag Name"
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button onClick={handleAddTag} className="rounded-xl font-bold">
                <Plus size={16} className="mr-2" /> Add Tag
              </Button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-bold">All Tags ({tags.length})</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium">{tag.name}</span>
                  <button
                    onClick={() => handleDeleteTag(tag.id, tag.name)}
                    className="p-1 hover:bg-red-500/10 rounded text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "companies" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Add New Company</h3>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Company Name"
                value={newCompanyName}
                onChange={(e) => setNewCompanyName(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button onClick={handleAddCompany} className="rounded-xl font-bold">
                <Plus size={16} className="mr-2" /> Add Company
              </Button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-bold">All Companies ({companies.length})</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium">{company.name}</span>
                  <button
                    onClick={() => handleDeleteCompany(company.id, company.name)}
                    className="p-1 hover:bg-red-500/10 rounded text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
