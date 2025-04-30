import DialogueBox from "./DialogueBox";
import "./ScrollStory.css";
import StoryImage from "./StoryImage";

export default function ActOne() {
  const dialogues = [
    {
      speaker: "narrator",
      text: "Long ago, the Waioweka River sparkled with life.",
      image: "/narrator.png",
    },
    {
      speaker: "narrator",
      text: "Birds sang, trees danced, and the water whispered softly.",
      image: "/narrator.png",
    },
    {
      speaker: "elder",
      text: "Te Rimu watches over us. He is the spirit of the river.",
      image: "/elder.png",
    },
    {
      speaker: "elder",
      text: "Respect the water, and it will care for us in return.",
      image: "/elder.png",
    },
    {
      speaker: "child",
      text: "Look! A log floats by… wait—did it blink?",
      image: "/child.png",
    },
    {
      speaker: "narrator",
      text: "Te Rimu sometimes takes the shape of a log… or an eel.",
      image: "/narrator.png",
    },
    {
      speaker: "narrator",
      text: "He is always watching, always listening.",
      image: "/narrator.png",
    },
  ];

  return (
    <div className="container">
      {dialogues.map((value, index) => (
        <div key={index}>
          <StoryImage src={value.image} alt={`Story image ${index + 1}`} />
          <DialogueBox dialogue={value} />
        </div>
      ))}
    </div>
  );
}
