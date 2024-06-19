// components/Typewriter.tsx
import Typewriter from "typewriter-effect";
import { JetBrains_Mono as JetBrainsMono } from "next/font/google";
import React from "react";

const jetBrainsMono = JetBrainsMono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface TypeGenProps {
  text: string;
}

const TypeGen: React.FC<TypeGenProps> = ({ text }) => {
  return (
    <div className="text-3xl ${jetBrainsMono.className} font-mono items-center justify-center">
      <Typewriter
        options={{
          cursor: "_",
        }}
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
      />
    </div>
  );
};

export default TypeGen;
