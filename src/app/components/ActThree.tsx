"use client";
import { useEffect } from "react";
import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ActThree() {
  const dialogues = [
    {
      speaker: "narrator",
      text: "Years passed. The forest faded. The river turned grey and quiet.",
      image: "/narrator.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/3_Unnamed Image Apr 29 2025 (5).png",
    },
    {
      speaker: "aroha",
      text: "Why is the water so dirty? What’s this... a blinking piece of wood?",
      image: "/aroha.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/3_TaniwhaLog.png",
    },
    {
      speaker: "teRimu",
      text: "Aroha... help... protect...",
      image: "/assets/VisualElements/3_Taniwha.png",
    },
    {
      speaker: "narrator",
      text: "Aroha listened. A story had found her. A new chapter was about to begin.",
      image: "/narrator.png",
    },
  ];

  // 🎨 Set act-specific background
  useEffect(() => {
    document.body.className = "act-three";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="container">
      {/* 📖 Chapter Marker */}
      <div className="chapter-marker">Chapter 3</div>

      <h2 className="act-heading">Aroha’s Discovery</h2>

      {/* 🍂 Floating leaf decoration */}
      <Image
        src="/assets/EnvironmentalElements/Unnamed Image Apr 29 2025 (1).png"
        alt="leaf"
        width={60}
        height={60}
        className="floating-leaf"
      />

      {dialogues.map((value, index) => (
        <motion.div
          className="overlay-container"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <StoryImage src={value.image} alt={`Story image ${index + 1}`} />
          <DialogueBox dialogue={value} />
        </motion.div>
      ))}
    </div>
  );
}
