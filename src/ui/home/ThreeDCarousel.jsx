import { useState } from "react";
import { motion } from "framer-motion";

function ThreeDCarousel() {
  // Define carousel items with URLs and Persian briefs
  const items = [
    {
      image:
        "https://wallpapers.com/images/featured/apple-logo-4k-uzxvz854vxuglpqy.jpg",
      text: "اپل",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp28KNbT_76szjMx8V-F90zVouUYg3BblgtA&s",
      text: "سامسونگ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JUC-uLN5sYyEXKovnykmH7ZE1dh5NnZZHw&s",
      text: "شیائومی",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemRc-25FJPvvCk8-ahLvW4Ke0erqhstnlrA&s",
      text: "جی بی ال ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlZbblmQbin3rXPA2vV7Xd68J9BMKgGUwww&s",
      text: "سونی",
    },
  ];

  // State for current index and drag offset
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const itemWidth = 250; // Width of each item including margins
  const totalItems = items.length;

  // Handle drag end to snap to the next or previous item
  const handleDragEnd = (event, info) => {
    const swipeThreshold = itemWidth / 2;
    let newIndex = currentIndex;

    if (info.offset.x > swipeThreshold) {
      // Swipe right: go to previous item
      newIndex = (currentIndex - 1 + totalItems) % totalItems;
    } else if (info.offset.x < -swipeThreshold) {
      // Swipe left: go to next item
      newIndex = (currentIndex + 1) % totalItems;
    }

    setCurrentIndex(newIndex);
    setDragOffset(0); // Reset drag offset after snapping
  };

  // Button handlers
  const goLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setDragOffset(0);
  };
  const goRight = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    setDragOffset(0);
  };

  // Calculate the base position for infinite looping
  const getPosition = (i) => {
    const offset = i - currentIndex;
    return offset * itemWidth + dragOffset;
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center overflow-hidden bg-gray-100">
      {/* Carousel Container */}
      <motion.div
        className="relative h-[300px] w-full perspective-[1000px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((item, i) => {
          const xPos = getPosition(i);
          const distance = Math.abs(xPos / itemWidth); // Distance from center
          const rotateY = distance > 1 ? 0 : -xPos * 0.1; // Bend effect
          const scale = distance > 1 ? 0.8 : 1 - distance * 0.2; // Scale down edges
          const opacity = distance > 1 ? 0.5 : 1 - distance * 0.3; // Fade edges

          return (
            <motion.div
              key={i}
              className="absolute flex h-[250px] w-[200px] flex-col items-center justify-center rounded-lg bg-white shadow-lg"
              style={{
                transformStyle: "preserve-3d",
                left: "50%",
                marginLeft: "-100px", // Center horizontally
              }}
              animate={{
                x: xPos,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
                z: -distance * 50, // Depth effect
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDrag={(e, info) => setDragOffset(info.offset.x)}
              onDragEnd={handleDragEnd}
            >
              <img
                src={item.image}
                alt={item.text}
                className="h-[150px] w-[150px] object-contain"
                draggable="false" // Prevent image dragging
              />
              <p className="mt-2 text-center text-sm text-gray-700" dir="rtl">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="bg-sadrtell hover:bg-sadrtell/90 focus:ring-sadrtell/50 min-w-18 transform rounded-full px-6 py-2 font-semibold tracking-wide text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:ring-4 focus:outline-none"
          onClick={goLeft}
        >
          Left
        </button>
        <button
          className="bg-sadrtell hover:bg-sadrtell/90 focus:ring-sadrtell/50 min-w-18 transform rounded-full px-6 py-2 font-semibold tracking-wide text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:ring-4 focus:outline-none"
          onClick={goRight}
        >
          Right
        </button>
      </div>
    </div>
  );
}

export default ThreeDCarousel;
