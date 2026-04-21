import {
  Layers,
  BrainCircuit,
  Zap,
  Hash,
  List,
  Database,
  Share2,
  RotateCw,
  Cpu,
  Binary,
  Undo2,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Layers,
  BrainCircuit,
  Zap,
  Hash,
  List,
  Database,
  Share2,
  RotateCw,
  Cpu,
  Binary,
  Undo2,
};

export function getIconComponent(iconName: string | null): LucideIcon {
  if (!iconName || !iconMap[iconName]) {
    return Layers; // Default fallback icon
  }
  return iconMap[iconName];
}
