import Image from "next/image";

type StoryImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function StoryImage({
  src,
  alt,
  width = 400,
  height = 400,
}: StoryImageProps) {
  return (
    <div className="image-box">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
