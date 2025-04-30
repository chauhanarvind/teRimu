import ScrollStory from "./components/ScrollStory";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="story-title">Te Rimu’s Tale</h1>

      <ScrollStory />
    </main>
  );
}
