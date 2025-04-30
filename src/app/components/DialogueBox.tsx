type Dialogue = {
  text: string;
  speaker?: string;
};

type DialogueBoxProps = {
  dialogue: Dialogue;
};

export default function DialogueBox({ dialogue }: DialogueBoxProps) {
  if (!dialogue.text) return null;

  return (
    <div className="dialogue-box">
      <div className={`p-elements ${dialogue.speaker || ""}`}>
        <p>{dialogue.text}</p>
      </div>
    </div>
  );
}
