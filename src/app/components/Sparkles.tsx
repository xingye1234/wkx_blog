"use client";
import React, {useState ,createContext } from "react";
import { SparklesCore } from "./ui/sparkles";
import { MovingBorderDemo } from "./MovieButton";

export function SparklesPreview({ children }: { children?: React.ReactNode }) {
  
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
     
        {showMainContent ? (
          children
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center dark:text-white relative z-20 mb-6">
              Wang KeXing
            </h1>

            <MovingBorderDemo setShowMainContent={setShowMainContent}/>
          </div>
        )}
    </div>
  );
}
