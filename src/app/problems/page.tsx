import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";

export default function ProblemsPage() {
  const problems = [
    { id: "two-sum", title: "Two Sum", topic: "Arrays", difficulty: "Easy" },
    { id: "number-of-islands", title: "Number of Islands", topic: "Graph", difficulty: "Medium" },
    // আরও ডাটা...
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container px-4 mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-2">Problems</h1>
        <p className="text-muted-foreground mb-8">Practice coding problems to strengthen your DSA skills.</p>

        {/* Stats Cards like Lovable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center">
            <h2 className="text-3xl font-bold text-green-600">6</h2>
            <p className="text-green-600/70 font-medium">Easy</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
            <h2 className="text-3xl font-bold text-orange-600">2</h2>
            <p className="text-orange-600/70 font-medium">Medium</p>
          </div>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center">
            <h2 className="text-3xl font-bold text-red-600">0</h2>
            <p className="text-red-600/70 font-medium">Hard</p>
          </div>
        </div>

        {/* Problems Table/List */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {problems.map((p) => (
            <Link key={p.id} href={`/problems/${p.id}`} className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors border-b border-border last:border-0 group">
              <div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.topic}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                  p.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {p.difficulty}
                </span>
                <ChevronRight size={18} className="text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import { Plus, Search, Filter, Edit2, Trash2, Eye } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // ডামি ডাটা (পরবর্তীতে ডাটাবেস থেকে আসবে)
// const initialProblems = [
//   { id: 1, title: "Two Sum", topic: "Arrays", level: "Easy" },
//   { id: 2, title: "Reverse Linked List", topic: "Linked List", level: "Easy" },
//   { id: 3, title: "Number of Islands", topic: "Graph", level: "Medium" },
// ];

// export default function ProblemsPage() {
//   const [problems, setProblems] = useState(initialProblems);

//   return (
//     <div className="container mx-auto py-10 px-4 mt-20">
//       <div className="flex justify-between items-end mb-8">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">Manage Problems</h1>
//           <p className="text-muted-foreground">Add, edit, or remove DSA problems from the list.</p>
//         </div>
//         {/* রিকোয়ারমেন্ট ২: নতুন রেকর্ড ইনপুট করার বাটন */}
//         <Button className="rounded-xl flex gap-2">
//           <Plus size={18} /> Add New Problem
//         </Button>
//       </div>

//       {/* রিকোয়ারমেন্ট ৩: ক্লিন ইন্টারফেস ও সার্চ */}
//       <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-muted/50 border-b border-border">
//             <tr>
//               <th className="p-4 font-semibold">Problem Title</th>
//               <th className="p-4 font-semibold">Topic</th>
//               <th className="p-4 font-semibold">Difficulty</th>
//               <th className="p-4 font-semibold text-right">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {problems.map((prob) => (
//               <tr key={prob.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
//                 <td className="p-4 font-medium">{prob.title}</td>
//                 <td className="p-4 text-muted-foreground">{prob.topic}</td>
//                 <td className="p-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-bold ${
//                     prob.level === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
//                   }`}>
//                     {prob.level}
//                   </span>
//                 </td>
//                 <td className="p-4 text-right space-x-2">
//                   {/* রিকোয়ারমেন্ট ১: দেখার সুবিধা (View) */}
//                   <button className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors"><Eye size={18} /></button>
//                   {/* রিকোয়ারমেন্ট ২: মডিফাই করার বাটন (Edit/Delete) */}
//                   <button className="p-2 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors"><Edit2 size={18} /></button>
//                   <button className="p-2 hover:bg-red-100 rounded-lg text-red-600 transition-colors"><Trash2 size={18} /></button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { 
//   Plus, 
//   Search, 
//   Edit2, 
//   Trash2, 
//   Eye, 
//   Filter,
//   CheckCircle2
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import AddProblemModal from "@/components/modals/AddProblemModal";
// import DeleteConfirmModal from "@/components/modals/DeleteConfirmModal";

// // ১. ডাটা ভিউয়িং (Requirement 1): বেসিক গ্রিড বা টেবিল ডাটা প্রদর্শনের জন্য
// const initialProblems = [
//   { id: 1, title: "Two Sum", topic: "Arrays", level: "Easy" },
//   { id: 2, title: "Reverse Linked List", topic: "Linked List", level: "Easy" },
//   { id: 3, title: "Number of Islands", topic: "Graph", level: "Medium" },
//   { id: 4, title: "Valid Parentheses", topic: "Stack", level: "Easy" },
// ];

// export default function ProblemsPage() {
//   const [problems, setProblems] = useState(initialProblems);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [selectedProblem, setSelectedProblem] = useState<{id: number, title: string} | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   // ২. ডাটা মডিফিকেশন (Requirement 2): ডিলিট ফাংশনালিটি
//   const handleDeleteClick = (prob: {id: number, title: string}) => {
//     setSelectedProblem(prob);
//     setIsDeleteModalOpen(true);
//   };

//   const confirmDelete = () => {
//     // টেকনিক্যাল ইনটিগ্রেশন (Requirement 4): ডিলিট রিকোয়েস্ট সিমুলেশন
//     setProblems(problems.filter(p => p.id !== selectedProblem?.id));
//     setIsDeleteModalOpen(false);
//     setSelectedProblem(null);
//     // ইউজার ইন্টারফেস (Requirement 3): ডিলিট সাকসেস নোটিফিকেশন
//     alert("Problem deleted successfully!");
//   };

//   return (
//     <div className="container mx-auto py-12 px-4 mt-16 min-h-screen bg-background">
//       {/* হেডার সেকশন */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
//         <div>
//           <h1 className="text-4xl font-black tracking-tight text-foreground mb-2">Manage Problems</h1>
//           <p className="text-muted-foreground font-medium">Create, view, and organize your DSA problem sets.</p>
//         </div>
        
//         {/* রিকোয়ারমেন্ট ২: নতুন রেকর্ড যোগ করার বাটন */}
//         <Button 
//           onClick={() => setIsAddModalOpen(true)} 
//           className="h-12 px-6 rounded-xl flex gap-2 font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all"
//         >
//           <Plus size={20} /> Add New Problem
//         </Button>
//       </div>

//       {/* সার্চ এবং ফিল্টার (Requirement 3: UI Essentials) */}
//       <div className="flex gap-4 mb-6">
//         <div className="relative flex-grow max-w-md">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
//           <input 
//             type="text" 
//             placeholder="Search problems..." 
//             className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card outline-none focus:ring-2 focus:ring-primary/20 transition-all"
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//         <Button variant="outline" className="rounded-xl flex gap-2 font-semibold">
//           <Filter size={18} /> Filter
//         </Button>
//       </div>

//       {/* ৩. ক্লিন ইন্টারফেস (Requirement 3): টেবিল ফরম্যাটে ডাটা প্রদর্শন */}
//       <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl shadow-black/5">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead className="bg-muted/40 border-b border-border">
//               <tr>
//                 <th className="p-5 font-bold text-sm uppercase tracking-wider text-muted-foreground">Title</th>
//                 <th className="p-5 font-bold text-sm uppercase tracking-wider text-muted-foreground">Topic</th>
//                 <th className="p-5 font-bold text-sm uppercase tracking-wider text-muted-foreground">Difficulty</th>
//                 <th className="p-5 font-bold text-sm uppercase tracking-wider text-muted-foreground text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-border/50">
//               {problems.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map((prob) => (
//                 <tr key={prob.id} className="group hover:bg-muted/30 transition-colors">
//                   <td className="p-5 font-bold text-foreground/90">{prob.title}</td>
//                   <td className="p-5">
//                     <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-bold border border-border">
//                       {prob.topic}
//                     </span>
//                   </td>
//                   <td className="p-5">
//                     <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${
//                       prob.level === 'Easy' ? 'bg-green-500/10 text-green-600' : 'bg-orange-500/10 text-orange-600'
//                     }`}>
//                       <span className="w-1.5 h-1.5 rounded-full bg-current" />
//                       {prob.level}
//                     </span>
//                   </td>
//                   <td className="p-5 text-right">
//                     <div className="flex justify-end gap-2">
//                       <button className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-all"><Eye size={18} /></button>
//                       <button className="p-2 hover:bg-blue-500/10 rounded-lg text-blue-500 transition-all"><Edit2 size={18} /></button>
//                       {/* রিকোয়ারমেন্ট ২: প্রতিটি রেকর্ডের পাশে ডিলিট বাটন */}
//                       <button 
//                         onClick={() => handleDeleteClick(prob)}
//                         className="p-2 hover:bg-red-500/10 rounded-lg text-red-500 transition-all"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ৪. টেকনিক্যাল কম্পোনেন্টস: মডালসমূহ */}
      
//       {/* Add New Problem Modal */}
//       <AddProblemModal 
//         isOpen={isAddModalOpen} 
//         onClose={() => setIsAddModalOpen(false)} 
//       />

//       {/* Delete Confirmation Modal */}
//       <DeleteConfirmModal 
//         isOpen={isDeleteModalOpen}
//         onClose={() => setIsDeleteModalOpen(false)}
//         onConfirm={confirmDelete}
//         title={selectedProblem?.title || ""}
//       />
//     </div>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2, Search, Zap, LayoutGrid, List } from "lucide-react";
// import { useState } from "react";

// export default function ProblemsDiscoveryPage() {
//   // ডাটা যা অ্যাডমিন প্যানেল থেকে ইনপুট দেওয়া হয়েছে
//   const [problems] = useState([
//     { id: 1, title: "Two Sum", topic: "Arrays", level: "Easy", solved: 450 },
//     { id: 2, title: "Valid Parentheses", topic: "Stack", level: "Easy", solved: 320 },
//     { id: 3, title: "Reverse String", topic: "Strings", level: "Easy", solved: 180 },
//   ]);

//   return (
//     <div className="pt-32 pb-20 min-h-screen bg-background px-4">
//       <div className="container mx-auto">
//         {/* HEADER SECTION */}
//         <header className="max-w-4xl mb-16">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-2 text-primary font-bold mb-4"
//           >
//             <Zap size={18} fill="currentColor" /> <span>CURATED CHALLENGES</span>
//           </motion.div>
//           <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
//             Master Every <span className="text-muted-foreground/30">Algorithm.</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
//             From basic arrays to complex graphs, level up your coding skills with our interactive problem sets.
//           </p>
//         </header>

//         {/* CONTROLS */}
//         <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
//           <div className="relative w-full md:w-96">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
//             <input 
//               placeholder="Search problems..." 
//               className="w-full pl-12 pr-6 py-4 rounded-2xl bg-card border border-border outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
//             />
//           </div>
//           <div className="flex items-center gap-2 bg-card p-1 rounded-xl border border-border">
//             <button className="p-2 bg-background rounded-lg shadow-sm text-primary"><LayoutGrid size={20}/></button>
//             <button className="p-2 text-muted-foreground hover:text-foreground"><List size={20}/></button>
//           </div>
//         </div>

//         {/* PROBLEMS GRID - Lovable Style */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {problems.map((prob, index) => (
//             <motion.div
//               key={prob.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative bg-card border border-border p-8 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500"
//             >
//               <div className="flex justify-between items-start mb-10">
//                 <div className="p-4 bg-background rounded-2xl border border-border group-hover:scale-110 transition-transform duration-500">
//                   <Code2 className="text-primary" size={24} />
//                 </div>
//                 <div className="flex flex-col items-end">
//                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 mb-1">Difficulty</span>
//                   <span className="text-xs font-bold text-green-500 flex items-center gap-1.5 bg-green-500/5 px-3 py-1 rounded-full">
//                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> {prob.level}
//                   </span>
//                 </div>
//               </div>

//               <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">{prob.title}</h3>
//               <p className="text-muted-foreground text-sm mb-8 italic">Master the core concepts of {prob.topic.toLowerCase()}.</p>
              
//               <div className="flex items-center justify-between pt-6 border-t border-border/50">
//                 <span className="text-xs font-medium text-muted-foreground">{prob.solved} solved</span>
//                 <Button className="h-12 px-6 rounded-xl font-bold bg-foreground text-background hover:bg-primary hover:text-white transition-all shadow-lg shadow-black/5 active:scale-95">
//                   Solve Now <ArrowRight size={16} className="ml-2" />
//                 </Button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }