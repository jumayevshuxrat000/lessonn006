import React from "react";
import bear from "./assets/svg/bear.png";
import truee from "./assets/svg/true.png";
import wearing from "./assets/svg/wearing.png";
import ball from "./assets/svg/ball.png";


export default function Features() {
  return (
    <section className="max-w-6xl mx-auto mt-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-6 mt-6">
        
        <div className="flex flex-col items-center justify-center text-center">
          <img className="w-12" src={bear} alt="Onalar va Bolalar uchun" />
          <span className="mt-2 text-sm md:text-base">Onalar va Bolalar uchun</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <img className="w-12" src={truee} alt="Arzon narxlar kafolati" />
          <span className="mt-2 text-sm md:text-base">Arzon narxlar kafolati</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <img className="w-12" src={wearing} alt="Zamonaviy Bozor" />
          <span className="mt-2 text-sm md:text-base">Zamonaviy Bozor</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <img className="w-12" src={ball} alt="Maktab bozori" />
          <span className="mt-2 text-sm md:text-base">Maktab bozori</span>
        </div>

      </div>
    </section>
  );
}
