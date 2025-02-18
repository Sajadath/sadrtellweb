import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
