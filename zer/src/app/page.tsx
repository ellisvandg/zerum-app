"use client";
import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <header className="w-full flex justify-between items-center px-8 py-6 absolute top-0 left-0 z-10">
        <div className="text-2xl font-bold text-white">Zerum</div>
        <nav className="space-x-6 flex items-center">
          {["Features", "Pricing", "Login"].map((label) => (
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
        </div>
        <div className="absolute inset-0 z-1">
          <Canvas>
            <Stars radius={90} count={1200} factor={4} fade speed={1} />
          </Canvas>
        </div>
      </motion.section>
    </div>
  );
}
