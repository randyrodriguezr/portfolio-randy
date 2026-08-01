"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

interface ImageViewerProps {
  open: boolean;
  images?: string[];
  title?: string;
  onClose: () => void;
}

export default function ImageViewer({
  open,
  images = [],
  title,
  onClose,
}: ImageViewerProps) {

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/70 px-6 py-4 backdrop-blur">
          <h2 className="truncate text-lg font-semibold text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-white transition hover:bg-zinc-800"
          >
            <X size={22} />
          </button>
        </header>

        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={8}
          centerOnInit
          wheel={{ step: 0.15 }}
          doubleClick={{ disabled: false }}
          pinch={{ step: 5 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Botones */}

              <div className="absolute right-6 top-24 z-50 flex flex-col gap-3">

                <button
                  onClick={() => zoomIn()}
                  className="rounded-xl bg-zinc-800 p-3 text-white shadow-lg transition hover:bg-zinc-700"
                >
                  <ZoomIn size={20} />
                </button>

                <button
                  onClick={() => zoomOut()}
                  className="rounded-xl bg-zinc-800 p-3 text-white shadow-lg transition hover:bg-zinc-700"
                >
                  <ZoomOut size={20} />
                </button>

                <button
                  onClick={() => resetTransform()}
                  className="rounded-xl bg-zinc-800 p-3 text-white shadow-lg transition hover:bg-zinc-700"
                >
                  <RotateCcw size={20} />
                </button>

              </div>

              {/* Imagen */}

              <TransformComponent
                wrapperClass="!w-full !h-full"
                contentClass="flex items-center justify-center"
              >
                {images.length > 0 && (
                  <Image
                    src={images[0]}
                    alt={title ?? "Certificado"}
                    width={1600}
                    height={1200}
                    priority
                    className="max-h-[85vh] w-auto object-contain select-none"
                    draggable={false}
                  />
                )}
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}