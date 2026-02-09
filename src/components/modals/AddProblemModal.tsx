// "use client";

// import { useState } from "react";
// import { X, CheckCircle2, AlertCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function AddProblemModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

//   if (!isOpen) return null;

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
    
//     // রিকোয়ারমেন্ট ৪: Basic client-side checks
//     const title = formData.get("title");
//     if (!title) {
//       setStatus("error");
//       return;
//     }

//     // সিমুলেটিং POST রিকোয়েস্ট
//     setStatus("idle");
//     setTimeout(() => {
//       setStatus("success"); // রিকোয়ারমেন্ট ৩: Simple notification
//       setTimeout(() => {
//         onClose();
//         setStatus("idle");
//       }, 2000);
//     }, 1000);
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//       <div className="bg-card w-full max-w-md rounded-3xl border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
//         <div className="p-6 flex justify-between items-center border-b border-border">
//           <h2 className="text-xl font-bold">Add New Problem</h2>
//           <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors"><X size={20}/></button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           {/* রিকোয়ারমেন্ট ২: Simple form to input data */}
//           <div className="space-y-1.5">
//             <label className="text-sm font-semibold">Problem Title</label>
//             <input 
//               name="title" 
//               required 
//               placeholder="e.g. Valid Parentheses" 
//               className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20 transition-all"
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label className="text-sm font-semibold">Topic</label>
//             <select name="topic" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none">
//               <option>Arrays</option>
//               <option>Linked List</option>
//               <option>Stack</option>
//               <option>Graph</option>
//             </select>
//           </div>

//           <Button type="submit" className="w-full py-6 rounded-xl font-bold text-lg shadow-lg shadow-primary/20">
//             Save Record
//           </Button>

//           {/* রিকোয়ারমেন্ট ৩: Notifications */}
//           {status === "success" && (
//             <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl border border-green-200 animate-in fade-in slide-in-from-bottom-2">
//               <CheckCircle2 size={18} /> Record Added Successfully!
//             </div>
//           )}
//           {status === "error" && (
//             <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in">
//               <AlertCircle size={18} /> Title is required!
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AddProblemModal({ isOpen, onClose, onSave, editData }: any) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("Arrays");

  // Edit করার সময় ডাটা ফর্মে সেট করা (Pre-population)
  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setTopic(editData.topic);
    } else {
      setTitle("");
      setTopic("Arrays");
    }
  }, [editData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Requirement 4: Technical validation
    if (!title) return alert("Title is required!");
    
    onSave({ id: editData?.id, title, topic, level: "Easy" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-card w-full max-w-md rounded-3xl border border-border shadow-2xl overflow-hidden animate-in zoom-in-95">
        <div className="p-6 flex justify-between items-center border-b border-border">
          <h2 className="text-xl font-bold">{editData ? "Edit Problem" : "Add New Problem"}</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full"><X size={20}/></button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold">Problem Title</label>
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required // Requirement 4: HTML5 validation
              placeholder="e.g. Reverse String" 
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold">Topic</label>
            <select 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background outline-none"
            >
              <option>Arrays</option>
              <option>Linked List</option>
              <option>Stack</option>
              <option>Graph</option>
            </select>
          </div>

          <Button type="submit" className="w-full py-6 rounded-xl font-bold text-lg">
            {editData ? "Update Record" : "Save Record"}
          </Button>
        </form>
      </div>
    </div>
  );
}