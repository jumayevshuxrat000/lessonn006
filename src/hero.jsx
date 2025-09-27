import { useState } from "react";

import heroCat from "./assets/svg/herocat.jpg";
import iphone from "./assets/svg/iphone17.jpg";
import samsung from "./assets/svg/sumsunghero.jpg";
import tv from "./assets/svg/tvhero.jpg";

const images = [heroCat, iphone, samsung, tv];


export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <section className="max-w-6xl mx-auto mt-6 px-4">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`slide-${idx}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
        >
          ›
        </button>
      </div>
    </section>
  );
}
