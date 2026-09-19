"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
};

export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const hasMultiple = images.length > 1;

  const showPrevious = () => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
      <Image
        src={images[index]}
        alt={`${alt} (${index + 1}/${images.length})`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />

      {hasMultiple ? (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-ink/50 text-white transition-colors duration-200 hover:bg-ink/70"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-ink/50 text-white transition-colors duration-200 hover:bg-ink/70"
          >
            <span aria-hidden="true">→</span>
          </button>
          <span className="absolute bottom-3 right-3 bg-ink/50 px-2 py-1 text-xs font-medium text-white">
            {index + 1} / {images.length}
          </span>
        </>
      ) : null}
    </div>
  );
}
