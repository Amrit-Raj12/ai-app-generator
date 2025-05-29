"use client";

import { useEffect, useMemo, useState } from "react";
import { Sparkle, Wand2 } from "lucide-react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";

interface GenerateButtonProps {
  isGenerating: boolean;
  onClick: () => void;
}

const options = {
  key: "star",
  name: "Star",
  particles: {
    number: {
      value: 20,
      density: { enable: false },
    },
    color: {
      value: ["#142140", "#172856", "#28337E", "#1B3272", "#1C357D", "#1C357C", "#579AFF"],
    },
    shape: {
      type: "star",
      options: {
        star: { sides: 4 },
      },
    },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 4 } },
    rotate: {
      value: { min: 0, max: 360 },
      enable: true,
      direction: "clockwise",
      animation: { enable: true, speed: 10, sync: false },
    },
    links: { enable: false },
    reduceDuplicates: true,
    move: {
      enable: true,
      center: { x: 120, y: 45 },
    },
  },
  interactivity: { events: {} },
  smooth: true,
  fpsLimit: 120,
  background: { color: "transparent", size: "cover" },
  fullScreen: { enable: false },
  detectRetina: true,
  absorbers: [
    {
      enable: true,
      opacity: 0,
      size: {
        value: 1,
        density: 1,
        limit: { radius: 5, mass: 5 },
      },
      position: { x: 110, y: 45 },
    },
  ],
  emitters: [
    {
      autoPlay: true,
      fill: true,
      life: { wait: true },
      rate: { quantity: 5, delay: 0.5 },
      position: { x: 110, y: 45 },
    },
  ],
  autoPlay: true,
};

export default function GenerateButton({ isGenerating, onClick }: GenerateButtonProps) {
  const [particleState, setParticlesReady] = useState<"loaded" | "ready" | undefined>();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesReady("loaded");
    });
  }, []);

  const modifiedOptions = useMemo(() => {
    options.autoPlay = isHovering;
    return options;
  }, [isHovering]);

  return (
    <button
      className={`group relative rounded-[10px] bg-gradient-to-r from-[#10A6CC]/30 via-[#4088D2]/30 via-40% to-[#8A57D9]/30 p-[2px] text-white transition-transform ${
        isGenerating ? "opacity-70 cursor-not-allowed" : "hover:scale-110 active:scale-105 cursor-pointer"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      disabled={isGenerating}
    >
      <div className="relative flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#10A6CC] via-[#4088D2] via-40% to-[#8A57D9] px-4 py-2 text-white">
        {isGenerating ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-[10px] animate-spin" />
            <span className="text-sm">Generating...</span>
          </>
        ) : (
          <>
            <Wand2 size={16} className="shrink-0" />
            <span className="font-normal text-[14px] leading-[100%] tracking-[0]">Generate</span>

            {/* Sparkles */}
            {/* <Sparkle className="size-[22px] -translate-y-0.5 animate-sparkle fill-white" /> */}
            {/* <Sparkle
              style={{ animationDelay: "1s" }}
              className="absolute bottom-2.5 left-3.5 z-20 size-2 rotate-12 animate-sparkle fill-white"
            />
            <Sparkle
              style={{ animationDelay: "1.5s", animationDuration: "2.5s" }}
              className="absolute left-5 top-2.5 size-1 -rotate-12 animate-sparkle fill-white"
            />
            <Sparkle
              style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
              className="absolute left-3 top-3 size-1.5 animate-sparkle fill-white"
            /> */}
          </>
        )}
      </div>

      {!isGenerating && particleState === "ready" && (
        <Particles
          id="generate-particles"
          className="pointer-events-none absolute -bottom-4 -left-4 -right-4 -top-4 z-0 opacity-0 transition-opacity group-hover:opacity-100"
          particlesLoaded={async () => {
            setParticlesReady("ready");
          }}
          options={modifiedOptions}
        />
      )}
    </button>
  );
}
