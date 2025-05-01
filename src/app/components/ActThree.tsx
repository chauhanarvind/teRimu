"use client";

import { useEffect, useRef } from "react";
import DialogueBox from "./DialogueBox";
import StoryImage from "./StoryImage";
import { motion } from "framer-motion";

export default function ActThree() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const dialogues = [
    {
      speaker: "narrator",
      text: "Years passed. The forest faded. The river turned grey and quiet.",
      image: "/narrator.png",
    },

    {
      speaker: "aroha",
      text: "Why is the water so dirty? What’s this... a blinking piece of wood?",
      image: "/aroha.png",
    },

    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/3_Unnamed Image Apr 29 2025 (8).png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/3_Unnamed Image Apr 29 2025 (5).png",
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

  useEffect(() => {
    document.body.className = "act-three";

    const handleScroll = () => {
      if (!audioRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        if (audioRef.current.paused) {
          audioRef.current.muted = false;
          audioRef.current.play().catch(() => {});
        }
      } else {
        audioRef.current.pause();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.className = "";
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* Ambient audio */}
      <audio ref={audioRef} src="/audio/act3.mp3" loop muted />

      {/* Chapter marker */}
      <div className="chapter-marker">Chapter 3</div>
      <h2 className="act-heading">Aroha’s Discovery</h2>

      {/* Fact bubble */}
      <div className="fact-bubble">
        🧠 Many NZ rivers are at risk due to farming runoff. <br />
        <a
          href="https://ehinz.ac.nz/indicators/water/recreational-water/agriculture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more →
        </a>
      </div>

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
