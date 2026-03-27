'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `/gallery/images (${i + 1}).jpg`,
  alt: `Gallery image ${i + 1}`,
}));

const IMAGES_PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(images.length / IMAGES_PER_PAGE);
const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/cEiGXn2e9Hx49wSs5';

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goToPage = (page: number) => {
    setCurrentPage((page + TOTAL_PAGES) % TOTAL_PAGES);
  };

  const goToPrevious = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage]);

  const goToNext = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage]);

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const lightboxPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  }, [lightboxIndex]);

  const lightboxNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  }, [lightboxIndex]);

  const currentImages = images.slice(
    currentPage * IMAGES_PER_PAGE,
    (currentPage + 1) * IMAGES_PER_PAGE
  );

  const getGlobalIndex = (localIndex: number) => {
    return currentPage * IMAGES_PER_PAGE + localIndex;
  };

  return (
    <section className="w-full py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">攝影相簿</h2>
        <p className="text-sm text-gray-500">
          照片集說明來自 Google Maps，最近更新於 2026 年。如需查看所有圖片，請點擊箭頭跳轉連結到{' '}
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Maps
          </a>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {currentImages.map((image, localIndex) => {
          const globalIndex = getGlobalIndex(localIndex);
          return (
            <div
              key={globalIndex}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(globalIndex)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-sm font-medium">
                  查看原圖
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="上一頁"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'w-6 bg-orange-500'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`跳轉到第 ${index + 1} 頁`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="下一頁"
        >
          ›
        </button>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              lightboxPrev();
            }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-colors"
            aria-label="上一張"
          >
            ‹
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
            }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-colors"
            aria-label="下一張"
          >
            ›
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="關閉"
          >
            ✕
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
