import ActFour from "./ActFour";
import ActOne from "./ActOne";
import ActThree from "./ActThree";
import ActTwo from "./ActTwo";
import FloatingDecor from "./FloatDecor";
import "./ScrollStory.css";

export default function ScrollStory() {
  return (
    <>
      <FloatingDecor />
      <div className="main-container">
        <ActOne />
        <ActTwo />
        <ActThree />
        <ActFour />
      </div>
    </>
  );
}
