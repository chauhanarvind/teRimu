"use client";
import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";
import { motion } from "framer-motion";

export default function ActTwo() {
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

  return (
    <div className="container">
      <h2 className="act-heading">Foreign Invasion</h2>

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
