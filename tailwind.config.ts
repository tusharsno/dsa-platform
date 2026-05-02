import type { Config } from "tailwindcss";

const config: Config = {
  // ... আপনার অন্যান্য কনফিগ
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      // এখানে অ্যানিমেশনটি ডিফাইন করুন
      animation: {
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;