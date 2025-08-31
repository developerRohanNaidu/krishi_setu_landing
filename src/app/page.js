"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const reels = [
    { id: 1, video: "/videos/farm1.mp4", caption: "Wheat harvest after support 🌾" },
    { id: 2, video: "/videos/goat.mp4", caption: "Goat farming success 🐐" },
    { id: 3, video: "/videos/fish.mp4", caption: "Fish farming boost 🐟" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-700 to-green-900 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 sticky top-0 bg-green-900 z-50 shadow-md">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/krishi_setu.png" alt="Krishi Setu" width={50} height={50} />
            <span className="text-xl font-bold">Krishi Setu</span>
          </Link>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#how" className="hover:text-yellow-400">How It Works</a>
          <a href="#reels" className="hover:text-yellow-400">Stories</a>
          <Link href="/investments" className="hover:text-yellow-400">Investments</Link>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Support Farmers, <span className="text-yellow-400">Grow Together</span>
        </motion.h2>
        <p className="mt-6 text-lg max-w-2xl">
          Krishi Setu is a simple platform that connects farmers with people who want to support them. 
          Empower farmers, and share in the harvest of success.
        </p>
        <p className="mt-4 italic text-yellow-300 font-medium">
          🚜 “From Seeds to Success — Together We Cultivate the Future” 🌾
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="#how"
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-green-900"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="px-6 py-16 bg-green-900 text-center">
        <h3 className="text-3xl font-bold mb-8">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-green-700 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-3">1. Farmers Post</h4>
            <p>Farmers share their needs and timeline in simple steps.</p>
          </div>
          <div className="p-6 bg-green-700 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-3">2. People Support</h4>
            <p>Supporters invest or donate to help farmers grow.</p>
          </div>
          <div className="p-6 bg-green-700 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-3">3. Shared Success</h4>
            <p>Everyone benefits when the harvest succeeds.</p>
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section id="reels" className="px-6 py-20 bg-green-800 text-center">
        <h3 className="text-3xl font-bold mb-10">🎥 Farmer Stories</h3>
        <div className="flex gap-6 overflow-x-auto snap-x pb-6">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              className="min-w-[250px] max-w-[250px] snap-center rounded-xl overflow-hidden shadow-lg bg-black"
              whileHover={{ scale: 1.05 }}
            >
              <video
                src={reel.video}
                controls
                className="w-full h-64 object-cover"
              />
              <p className="p-3 text-sm">{reel.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-green-950 text-center py-6">
        <p>© {new Date().getFullYear()} Krishi Setu. All rights reserved.</p>
      </footer>

      {/* Modal Join Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl p-8 w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4">Join Us</h3>
            <p className="mb-4">Be part of Krishi Setu. Enter your details below:</p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-lg"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-600"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 text-red-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
