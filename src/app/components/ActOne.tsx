"use client";

import { useEffect } from "react";
import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";
import { motion } from "framer-motion";

export default function ActOne() {
  const dialogues = [
    {
      speaker: "narrator",
      text: "Long ago, the Waioweka River sparkled with life. Birds sang, trees danced, and the water whispered softly.",
      image: "/narrator.png",
    },
    {
      speaker: "elder",
      text: "Te Rimu watches over us. He is the spirit of the river. Respect the water, and it will care for us in return.",
      image: "/elder.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/teRimu.png",
    },
    {
      speaker: "child",
      text: "Look! A log floats by… wait—did it blink?",
      image: "/child.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/3_TaniwhaLog.png",
    },
    {
      speaker: "narrator",
      text: "Te Rimu sometimes takes the shape of a log… or an eel. He is always watching, always listening.",
      image: "/narrator.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/1_Taniwha2.png",
    },
  ];

  // 🍃 Apply Act 1 background on mount
  useEffect(() => {
    document.body.className = "act-one";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="container">
      {/* 📖 Chapter Marker */}
      <div className="chapter-marker">Chapter 1</div>
      <h2 className="act-heading">Life in the 18th Century</h2>

      {/* 🖼️ Animated storytelling cards */}
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

      <div className="fact-bubble">
        🧠 Did you know? Māori see rivers as ancestors.
        <br />
        <a
          href="https://teara.govt.nz/en/freshwater-ecosystems"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}
