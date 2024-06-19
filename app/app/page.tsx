"use client";
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";
import DiscordComponent from "@/components/Discord";
import AboutComponent from "@/components/AboutComponent";
import TypeGen from "@/components/TypeGen";
import ModeSwtich from "@/components/ModeSwitch";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center justify-start transition-colors duration-500">
      <Navbar />
      <div className="flex flex-col mt-48">
        <TypeGen text="cal.ceo" />
      </div>

      <div className="mt-4">
        <DiscordComponent />
      </div>
      <div className="md:w-[30%] w-[70%] mt-4">
        <AboutComponent />
      </div>
      <div className="bottom-10 absolute flex space-x-4">
        <SocialMedia />
      </div>
    </main>
  );
}
