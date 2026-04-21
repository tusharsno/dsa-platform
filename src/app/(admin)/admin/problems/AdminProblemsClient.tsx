"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddProblemModal } from "./AddProblemModal";
import DeleteConfirmModal from "@/components/modals/DeleteConfirmModal";
import { deleteProblemAdmin } from "@/lib/admin-actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function AdminProblemsClient({ initialProblems }: { initialProblems: any[] }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingProblem, setEditingProblem] = useState<any>(null);
  const [selectedProblem, setSelectedProblem] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("All");
  const router = useRouter();

  const filteredProblems = initialProblems.filter((prob) => {
    const matchesSearch = prob.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === "All" || prob.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const confirmDelete = async () => {
    if (!selectedProblem) return;
    
    const result = await deleteProblemAdmin(selectedProblem.id);
    
    if (result.success) {
      alert("Record Deleted Successfully!");
      setIsDeleteModalOpen(false);
      router.refresh();
    } else {
      alert("Failed to delete problem");
    }
  };

  const difficultyColor = {
    Easy: "bg-green-500/10 text-green-600",
    Medium: "bg-yellow-500/10 text-yellow-600",
    Hard: "bg-red-500/10 text-red-600",
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Problems</h1>
          <p className="text-muted-foreground">{initialProblems.length} total problems</p>
        </div>
        <Button
          onClick={() => {
            setEditingProblem(null);
            setIsAddModalOpen(true);
          }}
          className="rounded-xl font-bold"
        >
          <Plus size={18} className="mr-2" /> Add Problem
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search problems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-border bg-background outline-none"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="p-4 font-bold text-xs uppercase tracking-wider">Title</th>
              <th className="p-4 font-bold text-xs uppercase tracking-wider">Topic</th>
              <th className="p-4 font-bold text-xs uppercase tracking-wider">Difficulty</th>
              <th className="p-4 font-bold text-xs uppercase tracking-wider">Solutions</th>
              <th className="p-4 font-bold text-xs uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {filteredProblems.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-muted-foreground">
                  No problems found
                </td>
              </tr>
            ) : (
              filteredProblems.map((prob) => (
              <tr key={prob.id} className="hover:bg-muted/20 transition-colors">
                <td className="p-4 font-semibold">{prob.title}</td>
                <td className="p-4 text-sm text-muted-foreground">{prob.topic.name}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-[10px] font-black rounded-md uppercase ${difficultyColor[prob.difficulty as keyof typeof difficultyColor]}`}>
                    {prob.difficulty}
                  </span>
                </td>
                <td className="p-4 text-sm text-muted-foreground">{prob._count.solutions}</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-1">
                    <Link href={`/problems/${prob.slug}`} target="_blank">
                      <button className="p-2 hover:bg-muted rounded-md text-primary">
                        <Eye size={16} />
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        setEditingProblem(prob);
                        setIsAddModalOpen(true);
                      }}
                      className="p-2 hover:bg-blue-500/10 rounded-md text-blue-500"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProblem(prob);
                        setIsDeleteModalOpen(true);
                      }}
                      className="p-2 hover:bg-red-500/10 rounded-md text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
            )}
          </tbody>
        </table>
      </div>

      <AddProblemModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingProblem(null);
        }}
        editData={editingProblem}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title={selectedProblem?.title || ""}
      />
    </div>
  );
}
