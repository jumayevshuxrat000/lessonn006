import React from "react";

function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Biz haqimizda</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-purple-600">Topshirish punktlari</a></li>
            <li><a href="#" className="hover:text-purple-600">Vakansiyalar</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Foydalanuvchilarga</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-purple-600">Biz bilan bog‘lanish</a></li>
            <li><a href="#" className="hover:text-purple-600">Savol-Javob</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Tadbirkorlarga</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-purple-600">Uzumda soting</a></li>
            <li><a href="#" className="hover:text-purple-600">Sotuvchi kabinetiga kirish</a></li>
            <li><a href="#" className="hover:text-purple-600">Topshirish punktini ochish</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Ilovani yuklab olish</h3>
          <div className="flex gap-3 mb-4">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                alt="App Store"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-8"
              />
            </a>
          </div>

          <h3 className="font-semibold mb-3">Uzum ijtimoiy tarmoqlarda</h3>
          <div className="flex gap-4">
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="h-6" />
            </a>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" className="h-6" />
            </a>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="YouTube" className="h-6" />
            </a>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Facebook" className="h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t text-center text-sm text-gray-500 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4">
          <div className="flex gap-5">
            <a href="#" className="hover:text-purple-600">Maxfiylik kelishuvi</a>
            <a href="#" className="hover:text-purple-600">Foydalanuvchi kelishuvi</a>
          </div>
          <p>«2025© XK MCHJ “UZUM MARKET”. STIR 309376127. Barcha huquqlar himoyalangan»</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
