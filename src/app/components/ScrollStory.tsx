import ActFour from "./ActFour";
import ActOne from "./ActOne";
import ActThree from "./ActThree";
import ActTwo from "./ActTwo";
import "./ScrollStory.css";

export default function ScrollStory() {
  return (
    <div className="container">
      <ActOne />
      <ActTwo />
      <ActThree />
      <ActFour />
    </div>
  );
}
