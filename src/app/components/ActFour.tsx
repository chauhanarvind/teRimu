import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";

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
      image: "/children.png",
    },
    {
      speaker: "narrator",
      text: "They picked up rubbish, planted trees, tested water.",
      image: "/narrator.png",
    },
    {
      speaker: "aroha",
      text: "Te Rimu... can you see? We’re trying. We’re learning.",
      image: "/aroha.png",
    },
    {
      speaker: "narrator",
      text: "And deep below, the river blinked again — gently.",
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
