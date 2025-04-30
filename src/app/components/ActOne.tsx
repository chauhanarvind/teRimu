import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";

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

  return (
    <div className="container">
      <h2 className="act-heading">Life in the 18th century</h2>
      {dialogues.map((value, index) => (
        <div className="overlay-container" key={index}>
          <StoryImage src={value.image} alt={`Story image ${index + 1}`} />
          <DialogueBox dialogue={value} />
        </div>
      ))}
    </div>
  );
}
