import React from "react";
import Star from "./assets/svg/image.png";

const Header = () => {
  return (
    <>
      <div className="hidden md:flex justify-between items-center text-sm bg-gray-100 px-6 py-2 text-gray-700">
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">
            <i className="fa-solid fa-location-dot"></i> Toshkent
          </span>
          <span className="cursor-pointer">Topshirish punktlari</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-purple-600">
            Sotuvchi bo‘lish
          </a>
          <a href="#">Topshirish punktini ochish</a>
          <a href="#">Savol-javob</a>
          <a href="#">Buyurtmalarim</a>
          <span className="flex items-center space-x-1 cursor-pointer">
            <span className="w-4 h-4 rounded-full bg-green-600 border border-blue-500"></span>
            <span>O‘zbekcha</span>
          </span>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center px-6 py-4 border-b max-w-[1280px] mx-auto">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-purple-700 text-2xl font-bold">Uzum Market</h1>
          </div>
          <button className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg flex-1">
            <span>
              <i className="fa-solid fa-layer-group"></i>
            </span>
            <span>Katalog</span>
          </button>
          <div className="flex border rounded-lg overflow-hidden ml-4">
            <input
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
              className="px-4 py-2 w-106 outline-none"
            />
            <button className="bg-gray-100 px-4">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-gray-700">
          <a href="#" className="flex items-center space-x-1 hover:text-purple-600">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Kirish</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-purple-600">
            <span>
              <i className="fa-solid fa-heart"></i>
            </span>
            <span>Saralangan</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-purple-600">
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span>Savat</span>
          </a>
        </div>
      </div>

      <div className="hidden md:flex space-x-6 px-6 py-3 text-gray-700 text-sm max-w-[1280px] mx-auto">
        <a href="#" className="flex items-center space-x-1 text-pink-600 font-medium">
          <span>
            <img className="w-4" src={Star} alt="" />
          </span>
          <span>Hafta tovarlari</span>
        </a>
        <a href="#">Elektronika</a>
        <a href="#">Maishiy texnika</a>
        <a href="#">Kiyim</a>
        <a href="#">Poyabzallar</a>
        <a href="#">Aksessuarlar</a>
        <a href="#">Go‘zallik va parvarish</a>
        <a href="#">Salomatlik</a>
        <a href="#">Uy-ro‘zg‘or buyumlari</a>
        <a href="#">Qurilish va ta’mirlash</a>
        <a href="#">Yana ▼</a>
      </div>

      <div className="flex md:hidden justify-between items-center px-4 py-3 border-b">
        <div className="flex items-center space-x-2">
          <div>
            <img
              className="w-18 h-8 mr-6"
              src="./assets/uzum-market-seeklogo.png"
              alt="logo"
            />
          </div>
        </div>
        <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
          Yuklab olish
        </button>
      </div>

      <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md md:hidden">
        <div className="flex justify-between items-center text-gray-600">
          <a
            href="#"
            className="flex-1 flex flex-col items-center py-2 hover:text-purple-600"
          >
            <span>
              <img className="w-8" src="./assets/home.png" alt="home" />
            </span>
            <span className="text-xs">Bosh sahifa</span>
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col items-center py-2 hover:text-purple-600"
          >
            <span>
              <i className="fa-solid fa-layer-group"></i>
            </span>
            <span className="text-xs">Katalog</span>
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col items-center py-2 hover:text-purple-600"
          >
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="text-xs">Savat</span>
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col items-center py-2 hover:text-purple-600"
          >
            <span>
              <i className="fa-solid fa-heart"></i>
            </span>
            <span className="text-xs">Saralangan</span>
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col items-center py-2 hover:text-purple-600"
          >
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <span className="text-xs">Kabinet</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
