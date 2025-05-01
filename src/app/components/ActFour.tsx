"use client";

import { useEffect, useRef } from "react";
import DialogueBox from "./DialogueBox";
import StoryImage from "./StoryImage";
import { motion } from "framer-motion";

export default function ActFour() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const dialogues = [
    {
      speaker: "tawa",
      text: "The river is sick. But we can help. Who will join me?",
      image: "/tawa.png",
    },
    {
      speaker: "children",
      text: "We will!",
      image: "/assets/VisualElements/4_Cleaning Group.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/4_Cleaning 2.png",
    },
    {
      speaker: "narrator",
      text: "They picked up rubbish, planted trees, tested water.",
      image: "/narrator.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/4_Cleaning.png",
    },
    {
      speaker: "aroha",
      text: "Te Rimu... can you see? We’re trying. We’re learning.",
      image: "/aroha.png",
    },
    {
      speaker: "",
      text: "",
      image: "/assets/VisualElements/teRimu.png",
    },
    {
      speaker: "narrator",
      text: "And deep below, the river blinked again — gently.",
      image: "/narrator.png",
    },
  ];

  useEffect(() => {
    document.body.className = "act-four";

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
      <audio ref={audioRef} src="/audio/act4.mp3" loop muted />

      {/* Chapter marker */}
      <div className="chapter-marker">Chapter 4</div>
      <h2 className="act-heading">A Call to Action</h2>

      {/* Fact bubble */}
      <div className="fact-bubble">
        🧠 Kids across NZ are joining river cleanups! <br />
        <a
          href="https://www.facebook.com/groups/mightywaikatorivercleanup/"
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
