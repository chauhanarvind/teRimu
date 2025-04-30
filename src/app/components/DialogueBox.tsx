type Dialogue = {
  text: string;
  speaker?: string;
};

type DialogueBoxProps = {
  dialogue: Dialogue;
};

export default function DialogueBox({ dialogue }: DialogueBoxProps) {
  return (
    <div className="dialogue-box">
      {dialogue.speaker && (
        <div className="p-elements">
          <p className={dialogue.speaker || ""}>{dialogue.text}</p>
        </div>
      )}
    </div>
  );
}
