"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type ElementType = {
  name: string;
  src: string;
};

type PositionedElement = ElementType & {
  top: number;
  left: number;
  id: string;
};

const elements: ElementType[] = [
  { name: "bird", src: "/assets/EnvironmentalElements/bird-2.png" },
  { name: "bird", src: "/assets/EnvironmentalElements/bird-3.png" },
  { name: "bird", src: "/assets/EnvironmentalElements/bird-4.png" },
  { name: "bird", src: "/assets/EnvironmentalElements/bird.png" },
  { name: "bush", src: "/assets/EnvironmentalElements/bush-2.png" },
  { name: "bush", src: "/assets/EnvironmentalElements/bush-3.png" },
  { name: "bush", src: "/assets/EnvironmentalElements/bush-4.png" },
  { name: "bush", src: "/assets/EnvironmentalElements/bush-5.png" },
  { name: "bush", src: "/assets/EnvironmentalElements/bush.png" },
  { name: "duck", src: "/assets/EnvironmentalElements/duck-1.png" },
  { name: "duck", src: "/assets/EnvironmentalElements/duck-2.png" },
  { name: "duck", src: "/assets/EnvironmentalElements/duck.png" },
  { name: "flower", src: "/assets/EnvironmentalElements/flower-2.png" },
  { name: "flower", src: "/assets/EnvironmentalElements/flower-3.png" },
  { name: "flower", src: "/assets/EnvironmentalElements/flower.png" },
  { name: "grass", src: "/assets/EnvironmentalElements/grass-2.png" },
  { name: "grass", src: "/assets/EnvironmentalElements/grass-3.png" },
  { name: "grass", src: "/assets/EnvironmentalElements/grass-4.png" },
  { name: "grass", src: "/assets/EnvironmentalElements/grass-5.png" },
  { name: "grass", src: "/assets/EnvironmentalElements/grass-6.png" },
  { name: "grass", src: "/assets/EnvironmentalElements/grass.png" },
  { name: "leaves", src: "/assets/EnvironmentalElements/leaves.png" },
  { name: "plant", src: "/assets/EnvironmentalElements/plant-1.png" },
  { name: "plant", src: "/assets/EnvironmentalElements/plant-2.png" },
  { name: "plant", src: "/assets/EnvironmentalElements/plant-3.png" },
  { name: "plant", src: "/assets/EnvironmentalElements/plant-4.png" },
  { name: "plant", src: "/assets/EnvironmentalElements/plant.png" },
  { name: "tree", src: "/assets/EnvironmentalElements/tree-1.png" },
  { name: "tree", src: "/assets/EnvironmentalElements/tree-2.png" },
  { name: "tree", src: "/assets/EnvironmentalElements/tree-3.png" },
  { name: "tree", src: "/assets/EnvironmentalElements/tree-4.png" },
  { name: "tree", src: "/assets/EnvironmentalElements/tree-5.png" },
  { name: "tree", src: "/assets/EnvironmentalElements/tree-6.png" },
];

function getTopRange(name: string): [number, number] {
  if (name === "bird") return [5, 20];
  if (["tree", "plant"].includes(name)) return [70, 90];
  if (["grass", "bush", "duck", "flower"].includes(name)) return [80, 95];
  return [40, 70];
}

export default function FloatingDecor() {
  const [decorations, setDecorations] = useState<PositionedElement[]>([]);

  useEffect(() => {
    const placed = elements.map((el, i) => {
      const [min, max] = getTopRange(el.name);
      return {
        ...el,
        top: Math.random() * (max - min) + min,
        left: Math.random() * 90,
        id: `${el.name}-${i}`,
      };
    });

    setDecorations(placed);
  }, []);

  return (
    <div className="floating-decor-wrapper">
      {decorations.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt={item.name}
          width={60}
          height={60}
          className="floating-decor"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
          }}
        />
      ))}
    </div>
  );
}
