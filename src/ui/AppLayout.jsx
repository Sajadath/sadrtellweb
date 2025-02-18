import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <main className="bg-stone-100">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
