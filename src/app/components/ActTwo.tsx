import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";

export default function ActTwo() {
  const dialogues = [
    {
      speaker: "narrator",
      text: "One day, strangers came. They cut trees and built roads. The river began to cry.",
      image: "/narrator.png",
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
      speaker: "narrator",
      text: "From the river’s depths, Te Rimu surged up, waves crashing. Nature itself stood beside the people.",
      image: "/narrator.png",
    },
  ];

  return (
    <div className="container">
      {dialogues.map((value, index) => (
        <div className="overlay-container" key={index}>
          <StoryImage src={value.image} alt={`Story image ${index + 1}`} />
          <DialogueBox dialogue={value} />
        </div>
      ))}
    </div>
  );
}
