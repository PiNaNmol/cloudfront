
import React, { useState, useRef } from 'react';

interface MagnifyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  magnificationLevel?: number;
}

const MagnifyImage: React.FC<MagnifyImageProps> = ({ 
  src, 
  alt, 
  width = 400, 
  height = 400,
  magnificationLevel = 2.5
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      // Get the position of the image container
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      // Calculate relative position of mouse within the image
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      
      setMousePosition({ x, y });
    }
  };

  return (
    <div 
      className="relative cursor-zoom-in"
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={imageRef}
    >
      {/* Regular image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
      />
      
      {/* Magnifier lens */}
      {showMagnifier && (
        <div 
          className="absolute border border-gray-300 bg-white shadow-lg overflow-hidden rounded-lg pointer-events-none z-10"
          style={{
            width: `${width / 2}px`,
            height: `${height / 2}px`,
            top: '-75px',
            right: `-${width / 2 + 20}px`,
          }}
        >
          <img
            src={src}
            alt={`${alt} magnified`}
            className="absolute"
            style={{
              width: `${width * magnificationLevel}px`,
              height: `${height * magnificationLevel}px`,
              transformOrigin: '0 0',
              transform: `translate(-${mousePosition.x * magnificationLevel / 100 * width}px, -${mousePosition.y * magnificationLevel / 100 * height}px)`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MagnifyImage;
