// Hero Section Animation Constants
export const HERO_ANIMATIONS = {
  TYPING_SPEED: 50,
  TYPING_DELAY: 2000,
  TERMINAL_DELAY: 0.5,
  LABEL_DELAY: 0.2,
  HEADING_DELAY: 0.3,
  GRADIENT_DELAY: 0.5,
  DESCRIPTION_DELAY: 0.6,
  CTA_DELAY: 0.7,
  STATS_DELAY: 0.8,
  RIGHT_CONTENT_DELAY: 0.4,
  CODE_BLOCK_DELAY: 0.2,
  SCROLL_INDICATOR_DURATION: 2,
  BACKGROUND_ROTATION_DURATION: 20,
  BACKGROUND_ROTATION_REVERSE_DURATION: 25,
  MOUSE_FOLLOW_DAMPING: 30,
  MOUSE_FOLLOW_STIFFNESS: 200,
  BUTTON_HOVER_SCALE: 1.02,
  BUTTON_TAP_SCALE: 0.98,
  BUTTON_ICON_ROTATION_DURATION: 3,
  GLOW_HOVER_DURATION: 0.5,
  PULSE_DURATION: 2,
  CURSOR_BLINK_DURATION: 0.8,
  MAIN_CONTENT_DURATION: 0.8,
  STAT_HOVER_Y: -3,
  CODE_BLOCK_HOVER_Y: -10,
  CODE_BLOCK_HOVER_ROTATE: 2,
  CODE_BLOCK_INITIAL_ROTATE: -5,
  CODE_BLOCK_INITIAL_Y: 50,
  TERMINAL_SCALE_INITIAL: 0.95,
  SCROLL_Y_OFFSET: 8,
  SCROLL_WHEEL_Y_OFFSET: 6,
} as const;

export const HERO_STATS = [
  { value: "100+", label: "Problems", ariaLabel: "Over 100 coding problems available" },
  { value: "8", label: "Topics", ariaLabel: "8 different data structure topics" },
  { value: "24/7", label: "Access", ariaLabel: "24/7 platform access" },
] as const;

export const CODE_SNIPPETS = [
  {
    language: "Arrays",
    code: "Two Pointers\nSliding Window\nPrefix Sum\nBinary Search",
    color: "from-yellow-500 to-orange-500",
    ariaLabel: "Array algorithms including Two Pointers, Sliding Window, Prefix Sum, and Binary Search",
  },
  {
    language: "Trees",
    code: "DFS / BFS\nBinary Search Tree\nBalanced Trees\nHeap",
    color: "from-blue-500 to-cyan-500",
    ariaLabel: "Tree algorithms including DFS, BFS, Binary Search Tree, Balanced Trees, and Heap",
  },
  {
    language: "Graphs",
    code: "Dijkstra's Algorithm\nBFS / DFS\nTopological Sort\nUnion Find",
    color: "from-red-500 to-pink-500",
    ariaLabel: "Graph algorithms including Dijkstra's Algorithm, BFS, DFS, Topological Sort, and Union Find",
  },
] as const;

export const TERMINAL_TEXT = "$ dsa-platform --learn --master --succeed";

export const TERMINAL_MESSAGES = [
  "✓ Loading 100+ DSA problems...",
  "✓ Initializing interactive editor...",
  "✓ Ready to learn!",
] as const;

export const FLOATING_CODE_BLOCK_STYLES = {
  WIDTH: 280,
  HORIZONTAL_OFFSET: 120,
  VERTICAL_OFFSET: 80,
} as const;

export const MOUSE_FOLLOW_GLOW = {
  SIZE: 384,
  BLUR_OFFSET: 192,
} as const;

export const DEFAULT_TOTAL_USERS = 500;
