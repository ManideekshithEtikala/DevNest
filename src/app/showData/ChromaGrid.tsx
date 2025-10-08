'use client'
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

interface Item {
  title: string;
  handle: string;
  subtitle: string;
  image: string;
  gradient: string;
}

interface ChromaGridProps {
  items: Item[];
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

export const ChromaGrid: React.FC<ChromaGridProps> = ({ 
  items, 
  radius = 250, 
  damping = 0.5,
  fadeOut = 0.5,
  ease = "power3.out",
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !gridRef.current) return;

    const grid = gridRef.current;
    const cards = Array.from(grid.children) as HTMLElement[];

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = grid.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const mouseX = clientX - centerX;
      const mouseY = clientY - centerY;

      cards.forEach((card) => {
        const cardBounds = card.getBoundingClientRect();
        const cardCenterX = cardBounds.left + cardBounds.width / 2;
        const cardCenterY = cardBounds.top + cardBounds.height / 2;

        const diffX = cardCenterX - clientX;
        const diffY = cardCenterY - clientY;
        const dist = Math.sqrt(diffX * diffX + diffY * diffY);

        // Spotlight effect
        const spotlightX = (clientX - cardBounds.left) / cardBounds.width * 100;
        const spotlightY = (clientY - cardBounds.top) / cardBounds.height * 100;
        card.style.setProperty("--mouse-x", `${spotlightX}%`);
        card.style.setProperty("--mouse-y", `${spotlightY}%`);
        
        // Animate non-affected cards
        if (dist > radius) {
          gsap.to(card, {
            x: 0,
            y: 0,
            scale: 1,
            filter: "grayscale(1) brightness(0.6)", // back to initial
            ease: ease,
            duration: 1.5,
            overwrite: true
          });
        } else {
          // Animate cards within radius
          const angle = Math.atan2(diffY, diffX);
          const newX = mouseX * (1 - dist / radius) * damping;
          const newY = mouseY * (1 - dist / radius) * damping;

          gsap.to(card, {
            x: -newX,
            y: -newY,
            scale: 1.05,
            filter: `grayscale(0) brightness(1) opacity(${1 - (dist/radius) * fadeOut})`, // animate effect
            ease: ease,
            duration: 1.8,
            overwrite: true
          });
        }
      });
    };

    grid.addEventListener("mousemove", onMouseMove);

    return () => {
      grid.removeEventListener("mousemove", onMouseMove);
    };

  }, [isClient, radius, damping, fadeOut, ease]);

  return (
    <div className="chroma-grid" ref={gridRef}>
      {items.map((item, i) => (
        <div 
          key={i} 
          className="chroma-card" 
          style={{ 
            ["--card-gradient" as any]: item.gradient,
          }} 
        >
          <div className="chroma-img-wrapper">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="chroma-info">
            <h3 className="name">{item.title}</h3>
            <p className="handle">{item.handle}</p>
            <p className="role">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
