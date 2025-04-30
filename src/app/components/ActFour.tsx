"use client";
import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";
import { motion } from "framer-motion";

export default function ActFour() {
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

  return (
    <div className="container">
      <h2 className="act-heading">A Call to Action</h2>

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
