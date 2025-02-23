import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";

function AppLayout() {
  const menuHider = useSelector((state) => state.shadow.menuHider);
  return (
    <div>
      <Header />
      <main className="relative bg-stone-100">
        <div className="z-1">
          <Outlet />
        </div>
        {menuHider && (
          <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/70"></div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
