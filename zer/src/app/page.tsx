"use client";
import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import localFont from "next/font/local";

const interFont = localFont({
  src:"/fonts/InterVariable.ttf",
});

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #0f172a 50%, ${color})`;
  const featuresBG = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #0f172a 50%, ${color})`;
  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div className={`min-h-screen ${interFont.className}`} style={{backgroundImage, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
      <header className="w-full flex justify-between items-center px-8 py-6 absolute top-0 left-0 z-10">
        <div className="text-2xl font-bold text-white">Zerum</div>
        <nav className="space-x-24 flex items-center">
          {["Dashboard", "Features", "Login"].map((label) => (
            <motion.a
              key={label}
              href="#"
              initial={{
                backgroundImage: "linear-gradient(90deg, white, white)",
              }}
              whileHover={{
                backgroundImage:
                  "linear-gradient(90deg, #13FFAA, #1E67C6, #CE84CF, #DD335C)",
                backgroundSize: "200%",
                backgroundPosition: "left center",
              }}
              transition={{ duration: 0.5 }}
              className="bg-clip-text text-transparent"
            >
              {label}
            </motion.a>

          ))}
        </nav>
      </header>

      <motion.section
        style={{ backgroundImage }}
        id="herosection"
        className="flex items-center justify-center min-h-screen text-center px-4"
      >
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: useMotionTemplate`linear-gradient(90deg, ${color}, #13FFAA, ${color})`,
            }}
          >
            Your Space, your way.
          </motion.h1>
          <p className="text-sm sm:text-sm max-w-lg leading-relaxed mx-auto text-white">
            Build your perfect dashboard with full customisable widgets, play
            YouTube playlists, manage to-do lists, plan with a calendar, pin
            moodboard images, jot down notes, and more. Everything you need,
            just the way you want it.
          </p>
          <motion.button 
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            transition={{type: "spring", stiffness:300}}
            style={{border, boxShadow}}
            className="mt-8 px-6 py-3 bg-transparent text-white font-semibold rounded-3xl shadow-md mx-auto block"
            onClick={() => {
              const el = document.getElementById("features");
              el?.scrollIntoView({ behavior: "smooth" });
            }}>
              Features
            </motion.button>
        </div> 
      </motion.section>

      <motion.section style={{backgroundImage: featuresBG}} id="features" className="min-h-screen bg-[#0f172a] px-4 py-20 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Features</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Customise your dashboard with widgets, manage tasks, track the weather, view crypto prices, and more. 
        </p>
        <div className="grid grid-cols-2 gap-6 p-6">
          <div className="bg-transparent border-[1px] border-red-100 rounded-xl p-6 text-center">Test1</div>
          <div className="bg-transparent border-[1px] border-red-100  rounded-xl p-6 text-center">Test2</div>
          <div className="bg-transparent border-[1px] border-red-100  rounded-xl p-6 text-center">Test2</div>
          <div className="bg-transparent border-[1px] border-red-100  rounded-xl p-6 text-center">Test2</div>
        </div>
      </motion.section>
    </motion.div>
  );
}
