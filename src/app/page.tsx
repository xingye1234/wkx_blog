// "use client";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import {SparklesPreview} from "./components/Sparkles";


export default function Home() {
  return (
    <ThemeProvider attribute="class">
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
