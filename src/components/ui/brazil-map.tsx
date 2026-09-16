"use client";

import { useEffect, useRef, useState } from "react";
import {
  MAP_VIEWBOX,
  cityMarkers,
  highlightedStates,
  neutralStatePaths,
} from "@/lib/geography";

type BrazilMapProps = {
  className?: string;
};

export function BrazilMap({ className = "" }: BrazilMapProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <svg
        viewBox={MAP_VIEWBOX}
        role="img"
        aria-label="Mapa do Brasil com destaque para os estados de São Paulo, Pernambuco, Ceará e Bahia, onde a PPA Real Estate possui empreendimentos"
        className="h-auto w-full"
      >
        <g aria-hidden="true">
          {neutralStatePaths.map((d, index) => (
            <path key={index} d={d} className="fill-sand stroke-ink/20" strokeWidth={0.75} />
          ))}
        </g>

        {highlightedStates.map((state, index) => (
          <path
            key={state.code}
            d={state.path}
            className={`fill-accent stroke-ink/20 transition-opacity duration-700 motion-reduce:transition-none motion-reduce:opacity-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            strokeWidth={0.75}
            style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
          >
            <title>{state.name}</title>
          </path>
        ))}

        {cityMarkers.map((city, index) => (
          <circle
            key={city.name}
            cx={city.x}
            cy={city.y}
            r={4}
            className={`fill-white stroke-ink transition-opacity duration-500 motion-reduce:transition-none motion-reduce:opacity-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            strokeWidth={1.5}
            style={{ transitionDelay: isVisible ? `${500 + index * 80}ms` : "0ms" }}
          >
            <title>{`${city.name} — ${city.stateCode}`}</title>
          </circle>
        ))}
      </svg>
    </div>
  );
}
