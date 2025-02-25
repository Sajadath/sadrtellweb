import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import { useState } from "react";

function AppLayout() {
  const menuHider = useSelector((state) => state.shadow.menuHider);
  const [cookies, setCookies] = useState(false);
  return (
    <>
      <div className="relative">
        <Header />
        <main className="relative bg-stone-100">
          <div className="z-1">
            <Outlet />
          </div>
          {menuHider && (
            <div className="appear absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/70"></div>
          )}
        </main>
        <Footer />
        {!cookies && (
          <div
            dir="rtl"
            className="animate-fade-up fixed bottom-0 flex w-full items-center justify-center gap-4 border-t-1 border-t-gray-400 bg-white py-3 text-2xl"
          >
            <p>کوکی میقولی ؟ :)</p>
            <button
              onClick={() => setCookies(true)}
              className="bg-sadrtell hover:bg-sadrtell/90 cursor-pointer rounded-xl px-3 py-1 text-white"
            >
              ارههههه
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AppLayout;
