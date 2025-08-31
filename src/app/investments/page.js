"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ Import Link

export default function Investments() {
  const opportunities = [
    { title: "Crops", emoji: "🌱", desc: "Support seasonal crop farming" },
    { title: "Goat & Chicken", emoji: "🐐🐓", desc: "Boost livestock farming" },
    { title: "Fish Farming", emoji: "🐟", desc: "Help farmers grow aquaculture" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-700 to-green-900 text-white px-6 py-16">
      {/* ✅ Optional: Back link to home */}
      <Link href="/" className="text-yellow-300 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <h2 className="text-4xl font-bold text-center mb-10">🌾 Investment Opportunities</h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {opportunities.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-green-800 rounded-2xl shadow-lg text-center"
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
