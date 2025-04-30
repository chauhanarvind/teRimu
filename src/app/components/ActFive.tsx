import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";

export default function ActFive() {
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
      speaker: "teRimu",
      text: "Aroha... help... protect...",
      image: "/teRimu.png",
    },
    {
      speaker: "narrator",
      text: "Aroha listened. A story had found her. A new chapter was about to begin.",
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
