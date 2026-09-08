"use client";

import { useEffect, useRef, useState } from "react";

const DIMENSIONS = [
  {
    name: "Career",
    color: "#6b6ff0",
    image: "/assets/v3/dimension-career.jpg",
    position: "65% 50%",
    alt: "A team meeting where two colleagues shake hands",
    copy: "Make the move with people building too.",
  },
  {
    name: "Spiritual",
    color: "#f27690",
    image: "/assets/v3/dimension-spiritual.jpg",
    position: "50% 50%",
    alt: "A woman meditating outdoors with her full body and face visible",
    copy: "Go inward with people asking the same questions.",
  },
  {
    name: "Wealth",
    color: "#f3701e",
    image: "/assets/v3/dimension-wealth-user.jpeg",
    position: "50% 50%",
    alt: "Two professionals celebrating a financial milestone",
    copy: "Build freedom with people learning alongside you.",
  },
  {
    name: "Adventure",
    color: "#b9ee71",
    image: "/assets/v3/dimension-adventure.jpg",
    position: "50% 38%",
    alt: "A traveler with a camera and suitcase",
    copy: "Go somewhere new with people ready to explore.",
  },
  {
    name: "Health",
    color: "#f4bb51",
    image: "/assets/v3/dimension-health.jpg",
    position: "50% 56%",
    alt: "Two runners crouched at the starting line on an indoor track",
    copy: "Choose yourself with people doing the work too.",
  },
  {
    name: "Creative",
    color: "#3d70e9",
    image: "/assets/v3/dimension-creative.jpg",
    position: "55% 58%",
    alt: "An artist painting outdoors with a palette and canvas",
    copy: "Make it real with people who understand the process.",
  },
  {
    name: "Learning",
    color: "#e24d50",
    image: "/assets/v3/grouv-walk.jpg",
    position: "50% 44%",
    alt: "Students carrying books and laughing together",
    copy: "Become more with curious people beside you.",
  },
  {
    name: "Relationships",
    color: "#69d7b5",
    image: "/assets/v3/grouv-friends.jpg",
    position: "50% 45%",
    alt: "Close friends taking a photo and laughing together",
    copy: "Grow closer with people who value real connection.",
  },
];

export default function DimensionVisual() {
  const [index, setIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    DIMENSIONS.forEach((item) => {
      const preload = new window.Image();
      preload.src = item.image;
    });
  }, []);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    setIsChanging(true);
    timeoutRef.current = setTimeout(() => {
      setDisplayIndex(index);
      setIsChanging(false);
    }, 240);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DIMENSIONS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const item = DIMENSIONS[displayIndex];

  return (
    <div className="join-visual">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={isChanging ? "is-changing" : ""}
        src={item.image}
        alt={item.alt}
        style={{ objectPosition: item.position }}
      />
      <div className="scan" />
      <div className="join-badge" style={{ backgroundColor: item.color }}>
        {displayIndex + 1}
        <br />
        <small>{item.name.toUpperCase()}</small>
      </div>
      <div className="match-card">
        <small style={{ color: item.color }}>
          {String(displayIndex + 1).padStart(2, "0")} /{" "}
          {item.name.toUpperCase()}
        </small>
        <strong>{item.copy}</strong>
      </div>
    </div>
  );
}
