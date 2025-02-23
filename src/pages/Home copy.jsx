import { useState, useRef } from "react";
import banner1 from "../banners/banner1.jpg";
import banner2 from "../banners/banner2.jpg";
import banner3 from "../banners/banner3.jpg";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  const banners = [banner1, banner2, banner3];
  const bannerCount = banners.length;

  const handleDragStart = (e) => {
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const diffX = clientX - startX;
    setTranslateX(diffX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 100; // Pixels to trigger a slide
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        setCurrentIndex((prev) => Math.max(prev - 1, 0)); // Don’t go below 0
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, bannerCount - 1)); // Don’t exceed max
      }
    }
    setTranslateX(0); // Reset after drag
  };

  return (
    <div className="h-[1900px] text-center">
      <div
        ref={sliderRef}
        className="relative h-[500px] w-full cursor-grab overflow-hidden select-none"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
            width: `${100}%`,
          }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={banner}
                alt={`banner${index + 1}`}
                className="pointer-events-none h-full w-full object-cover"
                onError={() =>
                  console.error(`Failed to load banner${index + 1}`)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
