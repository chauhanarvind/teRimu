"use client";

import { Scrollama, Step } from "react-scrollama";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ScrollStory() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const dialogues = [
    "🌿 'The river and I are one. Protect it, and you protect the future.'",
    "⚔️ 'Foreigners have come... the river is crying.'",
    "🌟 'Aroha, you must awaken the guardian!'",
    "🌱 'Together, we heal the river and the land!'",
  ];

  const backgrounds = [
    "bg-gradient-to-b from-blue-200 to-green-100", // Clean river
    "bg-gradient-to-b from-gray-500 to-gray-700", // Pollution
    "bg-gradient-to-b from-yellow-100 to-pink-200", // Magical discovery
    "bg-gradient-to-b from-green-200 to-blue-100", // Healing river
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`transition-colors duration-700 ${backgrounds[currentStepIndex]}`}
    >
      <Scrollama
        offset={0.5}
        onStepEnter={({ data }) => {
          setCurrentStepIndex(data as number);
        }}
      >
        {dialogues.map((text, index) => (
          <Step data={index} key={index}>
            <div className="h-screen flex flex-col items-center justify-center space-y-8">
              {/* Image always rendered */}
              <motion.img
                src={`/assets/EnvironmentalElements/image-${index + 1}.png`}
                alt={`Scene ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentStepIndex === index ? 1 : 0,
                  scale: currentStepIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className="w-[400px] h-auto object-contain"
              />

              {/* Cloud Dialogue always rendered */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentStepIndex === index ? 1 : 0,
                  scale: currentStepIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
                className="cloud-shape"
              >
                <p className="text-xl font-semibold">{text}</p>
              </motion.div>
            </div>
          </Step>
        ))}
      </Scrollama>
    </motion.div>
  );
}
