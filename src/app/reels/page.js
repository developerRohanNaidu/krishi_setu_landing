"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link"; // ✅ Import Link

export default function Reels() {
  const reels = [
    { id: 1, video: "/videos/farm1.mp4", caption: "🌾 Wheat harvest success after investment" },
    { id: 2, video: "/videos/goat.mp4", caption: "🐐 Goat farming boosting rural income" },
    { id: 3, video: "/videos/fish.mp4", caption: "🐟 Fish farming powered by community" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollTop / window.innerHeight);
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* ✅ Fixed Back button */}
      <Link
        href="/"
        className="absolute top-6 left-4 z-50 bg-white/20 hover:bg-white/40 p-2 rounded-full"
      >
        <ChevronLeft className="text-white" size={28} />
      </Link>

      {/* Vertical reels container */}
      <div
        onScroll={handleScroll}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      >
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="h-screen w-full snap-start relative flex flex-col justify-end items-center"
          >
            <video
              src={reel.video}
              autoPlay={index === currentIndex}
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Overlay caption */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 bg-black/40 text-white p-4 rounded-xl mb-16 max-w-xs text-center"
            >
              {reel.caption}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
