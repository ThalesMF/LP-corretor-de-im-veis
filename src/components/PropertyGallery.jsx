// src/components/PropertyGallery.jsx
import React, { useState } from 'react';

export default function PropertyGallery({ images = [], title = "" }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/10] bg-brand-dark/10 rounded-2xl flex items-center justify-center text-brand-muted">
        Sem imagens disponíveis
      </div>
    );
  }

  const currentImage = images[selectedImageIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Imagem Principal em Destaque */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-brand-dark shadow-md">
        <img
          src={currentImage}
          alt={`${title} - foto ${selectedImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Miniaturas (Thumbnails) */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {images.map(function(imgUrl, index) {
            const isSelected = index === selectedImageIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={function() { setSelectedImageIndex(index); }}
                className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-18 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none ${
                  isSelected 
                    ? 'ring-3 ring-brand-gold scale-105 opacity-100' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label={`Ver foto ${index + 1} de ${images.length}`}
              >
                <img
                  src={imgUrl}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
