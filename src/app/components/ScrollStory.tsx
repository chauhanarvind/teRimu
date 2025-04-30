import Image from "next/image";
import "./ScrollStory.css";

export default function ScrollStory() {
  return (
    <div className="container">
      <div className="image-box">
        <Image src="/cody.png" alt="cody" width={500} height={500} />
      </div>
      <div className="dialogue-box">
        <div className="p-elements">
          <p className="narrator">But… Cody Cat?</p>
          <p className="cody">Yeah?</p>
          <p>
            Have you noticed something…?You have fur. You must feel it more than
            me!You have fur. You must feel it more than me!You have fur. You
            must feel it more than me!You have fur. You must feel it more than
            me!You have fur. You must feel it more than me!You have fur. You
            must feel it more than me!
          </p>
          <p className="cody">What?</p>
          <p>Umm… Now it’s getting hot!</p>
          <p className="cody">Well, maybe a little…</p>
          <p>You have fur. You must feel it more than me!</p>
          <p>But… Cody Cat?</p>
          <p className="cody">Yeah?</p>
          <p>Have you noticed something…?</p>
          <p className="cody">What?</p>
          <p>Umm… Now it’s getting hot!</p>
          <p className="cody">Well, maybe a little…</p>
          <p>You have fur. You must feel it more than me!</p>
          <p>You have fur. You must feel it more than me!</p>
          <p>But… Cody Cat?</p>
          <p className="cody">Yeah?</p>
          <p>Have you noticed something…?</p>
          <p className="cody">What?</p>
          <p>Umm… Now it’s getting hot!</p>
          <p className="cody">Well, maybe a little…</p>
          <p>You have fur. You must feel it more than me!</p>
        </div>
      </div>
    </div>
  );
}
