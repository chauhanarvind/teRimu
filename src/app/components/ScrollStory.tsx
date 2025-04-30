"use client";

import ActOne from "./ActOne";
import ActTwo from "./ActTwo";
import ActThree from "./ActThree";
import ActFour from "./ActFour";
import FloatingDecor from "./FloatDecor";
import "./ScrollStory.css";

export default function ScrollStory() {
  return (
    <>
      {/* 🍃 Floating elements outside content flow */}
      <FloatingDecor />

      {/* 📖 Scrollable storytelling content */}
      <div className="main-container">
        <ActOne />
        <ActTwo />
        <ActThree />
        <ActFour />
      </div>
    </>
  );
}
