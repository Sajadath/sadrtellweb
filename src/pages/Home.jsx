import Banners from "../ui/home/Banners";
import FullAppleSet from "../ui/home/FullAppleSet";
import QuickCategories from "../ui/home/QuickCategories";
import ThreeDCarousel from "../ui/home/ThreeDCarousel";

function Home() {
  return (
    <div className="text-center">
      <Banners />

      <div className="mx-auto hidden w-[70%] lg:block">
        <QuickCategories />
      </div>

      <ThreeDCarousel />

      <FullAppleSet />
    </div>
  );
}

export default Home;
