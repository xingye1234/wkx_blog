// "use client";
import { Theme } from "@radix-ui/themes";
import Header from "./components/Header";
import { SparklesPreview } from "./components/Sparkles";
import { ThemeProvider } from "next-themes";


export default function Home() {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Theme>
        <Header />
        <main>
          <SparklesPreview>
          </SparklesPreview>
        </main>
      </Theme>
    </ThemeProvider>
  );
}
