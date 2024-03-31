// "use client";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import {SparklesPreview} from "./components/Sparkles";
import {TabsContent} from "./components/Tabs";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Theme>
        <Header />
        <main>
          <SparklesPreview>
            <TabsContent/>
          </SparklesPreview>
        </main>
      </Theme>
    </ThemeProvider>
  );
}
