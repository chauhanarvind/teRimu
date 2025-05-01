"use client";

import { useEffect, useRef } from "react";
import DialogueBox from "./DialogueBox";
import StoryImage from "./StoryImage";
import { motion } from "framer-motion";

export default function ActTwo() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const dialogues = [
    {
      speaker: "narrator",
      text: "One day, strangers came. They cut trees and built roads. The river began to cry.",
      image: "/narrator.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/2_invaders3.png",
    },
    {
      speaker: "teRimu",
      text: "They harm the land... I must rise.",
      image: "/teRimu.png",
    },
    {
      speaker: "warrior",
      text: "Stand with us, Te Rimu! Protect the forest!",
      image: "/warrior.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/1_MarriPeople.png",
    },
    {
      speaker: "narrator",
      text: "From the river’s depths, Te Rimu surged up, waves crashing. Nature itself stood beside the people.",
      image: "/narrator.png",
    },
  ];

  useEffect(() => {
    document.body.className = "act-two";

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
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.className = "";
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* audio */}
      <audio ref={audioRef} src="/audio/act2.mp3" loop muted />

      {/* Chapter marker */}
      <div className="chapter-marker">Chapter 2</div>
      <h2 className="act-heading">Foreign Invasion</h2>

      {/* Fact bubble */}
      <div className="fact-bubble">
        🧠 Logging & colonization caused mass deforestation in NZ. <br />
        <a
          href="https://teara.govt.nz/en/interactive/11674/deforestation-of-new-zealand#:~:text=By%20the%20time%20European%20settlement,easily%20accessible%20conifer%E2%80%93broadleaf%20forest."
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more →
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
