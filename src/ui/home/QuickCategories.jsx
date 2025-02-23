import iphone from "./home imgs/categories/iphone 13.jpg";
import charger from "./home imgs/categories/charger.jpg";
import handsfree from "./home imgs/categories/handsfree.jpg";
import speaker from "./home imgs/categories/speaker.jpg";
import tablet from "./home imgs/categories/tablet.jpg";
import watches from "./home imgs/categories/watches.jpg";

function QuickCategories() {
  return (
    <div dir="rtl" className="min-h-50">
      <div className="quick-categories mx-auto my-10 flex w-[70%] items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              className="category-img w-35 cursor-pointer rounded-4xl transition-all duration-300 hover:w-40"
              src={iphone}
              alt=""
            />
          </a>
          <h3>موبایل</h3>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              className="category-img w-35 cursor-pointer rounded-4xl transition-all duration-300 hover:w-40"
              src={charger}
              alt=""
            />
          </a>
          <h3>شارژر</h3>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              className="category-img w-35 cursor-pointer rounded-4xl transition-all duration-300 hover:w-40"
              src={handsfree}
              alt=""
            />
          </a>
          <h3>هنزفری</h3>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              className="category-img w-35 cursor-pointer rounded-4xl transition-all duration-300 hover:w-40"
              src={speaker}
              alt=""
            />
          </a>
          <h3>اسپیکر</h3>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              className="category-img w-35 cursor-pointer rounded-4xl transition-all duration-300 hover:w-40"
              src={tablet}
              alt=""
            />
          </a>
          <h3>تبلت</h3>
        </div>
        <div className="flex flex-col items-center">
          <a href="#">
            <img
              className="category-img w-35 cursor-pointer rounded-4xl transition-all duration-300 hover:w-40"
              src={watches}
              alt=""
            />
          </a>
          <h3>ساعت هوشمند</h3>
        </div>
      </div>
    </div>
  );
}

export default QuickCategories;
