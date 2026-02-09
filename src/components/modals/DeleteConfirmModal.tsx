"use client";

import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface DeleteProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, title }: DeleteProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-card w-full max-w-sm rounded-3xl border border-border p-6 shadow-2xl text-center"
          >
            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle size={32} />
            </div>
            
            <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
            <p className="text-muted-foreground mb-6">
              You are about to delete <span className="font-semibold text-foreground">"{title}"</span>. This action cannot be undone.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={onClose} className="rounded-xl font-semibold">
                Cancel
              </Button>
              <Button 
                onClick={onConfirm}
                className="bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold"
              >
                Delete Now
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}