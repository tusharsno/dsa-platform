import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import ConditionalShell from "@/components/common/ConditionalShell";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning style={{ scrollBehavior: "auto" }}>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('scrollRestoration' in window.history) {
                  window.history.scrollRestoration = 'manual';
                }
                window.addEventListener('beforeunload', () => {
                  window.scrollTo(0, 0);
                });
              `,
            }}
          />
        </head>
        <body className={cn(inter.className, "bg-black selection:bg-white/20")} suppressHydrationWarning>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ConditionalShell>{children}</ConditionalShell>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
