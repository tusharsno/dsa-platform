"use client";

import { useState } from "react";
import { Plus, Search, Edit2, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
// মডালগুলো আপনার components ফোল্ডার থেকেই ইমপোর্ট হবে
import AddProblemModal from "@/components/modals/AddProblemModal";
import DeleteConfirmModal from "@/components/modals/DeleteConfirmModal";

const initialProblems = [
  { id: 1, title: "Two Sum", topic: "Arrays", level: "Easy" },
  { id: 2, title: "Valid Parentheses", topic: "Stack", level: "Easy" },
  { id: 3, title: "Reverse String", topic: "Strings", level: "Easy" },
];

export default function AdminProblemsPage() {
  const [problems, setProblems] = useState(initialProblems);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingProblem, setEditingProblem] = useState<any>(null);
  const [selectedProblem, setSelectedProblem] = useState<any>(null);

  // Requirement 2: Create/Update Logic
  const handleSaveProblem = (probData: any) => {
    if (editingProblem) {
      setProblems(problems.map(p => p.id === probData.id ? probData : p));
      alert("Record Updated Successfully!"); // Requirement 3
    } else {
      setProblems([...problems, { ...probData, id: Date.now() }]);
      alert("Record Added Successfully!"); // Requirement 3
    }
    setIsAddModalOpen(false);
    setEditingProblem(null);
  };

  // Requirement 2: Delete Logic
  const confirmDelete = () => {
    setProblems(problems.filter(p => p.id !== selectedProblem?.id));
    setIsDeleteModalOpen(false);
    alert("Record Deleted Successfully!"); // Requirement 3
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Problems</h1>
          <p className="text-muted-foreground">Teacher's Requirement: CRUD Operations Dashboard</p>
        </div>
        <Button onClick={() => { setEditingProblem(null); setIsAddModalOpen(true); }} className="rounded-xl font-bold">
          <Plus size={18} className="mr-2" /> Add Problem
        </Button>
      </div>

      {/* Requirement 1: Data Viewing (Table) */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="p-4 font-bold text-xs uppercase tracking-wider">Title</th>
              <th className="p-4 font-bold text-xs uppercase tracking-wider">Topic</th>
              <th className="p-4 font-bold text-xs uppercase tracking-wider">Level</th>
              <th className="p-4 font-bold text-xs uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {problems.map((prob) => (
              <tr key={prob.id} className="hover:bg-muted/20 transition-colors">
                <td className="p-4 font-semibold">{prob.title}</td>
                <td className="p-4 text-sm text-muted-foreground">{prob.topic}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-500/10 text-green-600 text-[10px] font-black rounded-md uppercase">
                    {prob.level}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-1">
                    <button className="p-2 hover:bg-muted rounded-md text-primary"><Eye size={16}/></button>
                    {/* Requirement 2: Edit */}
                    <button 
                      onClick={() => { setEditingProblem(prob); setIsAddModalOpen(true); }}
                      className="p-2 hover:bg-blue-500/10 rounded-md text-blue-500"
                    >
                      <Edit2 size={16}/>
                    </button>
                    {/* Requirement 2: Delete */}
                    <button 
                      onClick={() => { setSelectedProblem(prob); setIsDeleteModalOpen(true); }}
                      className="p-2 hover:bg-red-500/10 rounded-md text-red-500"
                    >
                      <Trash2 size={16}/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <AddProblemModal 
        isOpen={isAddModalOpen} 
        onClose={() => { setIsAddModalOpen(false); setEditingProblem(null); }}
        onSave={handleSaveProblem}
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