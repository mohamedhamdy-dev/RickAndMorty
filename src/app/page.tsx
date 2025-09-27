"use client";
import { motion } from "motion/react";
import Image from "next/image";
const homePageVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={homePageVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-5 flex flex-col gap-8 rounded-3xl border-2 border-white bg-black p-8 text-center lg:container xl:h-[38rem] xl:flex-row xl:gap-0 xl:p-16 xl:text-left"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-9">
        {/* Small tagline */}
        <span className="bg-center font-semibold uppercase italic tracking-wide text-green-700">
          🚀 Welcome to the Multiverse
        </span>

        {/* Main heading */}
        <h2 className="bg-gradient-to-r from-green-900 to-green-400 bg-clip-text bg-center text-3xl font-bold italic leading-tight text-transparent sm:text-5xl md:text-6xl">
          Rick & Morty Explorer
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-100 md:text-lg">
          Dive into the multiverse! Browse characters, locations, and episodes
          straight from the official Rick and Morty API.
        </p>

        {/* Feature highlights */}
        <ul className="space-y-2 text-sm text-gray-300 md:text-base">
          <li>✅ Explore 800+ characters from all dimensions</li>
          <li>🌌 Discover episodes and crazy locations</li>
          <li>🎲 Meet a surprise character every time</li>
          <li>🛸 Travel across the multiverse with ease</li>
        </ul>

        {/* Buttons */}
        <div className="mt-auto">
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 0 25px rgba(34,197,94,0.9), 0 0 50px rgba(34,197,94,0.5)",
            }}
            href="/character"
            className="rounded-full bg-[url(/home-btn.jpg)] bg-cover bg-no-repeat px-6 py-3 font-bold"
          >
            Start Exploring
          </motion.a>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <Image
          src="/rick-img.jpg"
          alt="rick sanchez"
          width={343}
          height={506}
        />
      </div>
    </motion.div>
  );
}
