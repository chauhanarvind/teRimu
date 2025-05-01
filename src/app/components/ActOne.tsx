"use client";

import { useEffect, useRef } from "react";
import DialogueBox from "./DialogueBox";
import StoryImage from "./StoryImage";
import { motion } from "framer-motion";

export default function ActOne() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    document.body.className = "act-one";

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
    handleScroll(); // check on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.className = "";
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* Ambient audio (muted initially) */}
      <audio ref={audioRef} src="/audio/act1.wav" loop muted />

      {/* Chapter Marker */}
      <div className="chapter-marker">Chapter 1</div>
      <h2 className="act-heading">Life in the 18th Century</h2>

      {/* Fact bubble */}
      <div className="fact-bubble">
        🧠 Did you know? Māori see rivers as ancestors. <br />
        <a
          href="https://www.learnz.org.nz/rivers201/discover/importance-rivers-m%C4%81ori#:~:text=their%20water%20bodies.-,M%C4%81ori%20identity%20is%20linked%20to%20rivers.,been%20with%20us%20throughout%20history."
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more →
        </a>
      </div>

      {/* Story Content */}
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
