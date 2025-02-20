import logo from "../../logo/sadrtellfinal-removebg-preview-3.png";
function Footer() {
  return (
    <footer dir="rtl">
      <div className="m-auto mt-12 flex w-[70%] flex-col items-center justify-center gap-5 p-3 text-right md:flex-row">
        <img className="w-60" src={logo} alt="sadrtell-logo" />
        <p>
          صدرتل با تمرکز بر فروش کالاهای دیجیتال به صورت تکی و عمده ، تلاش
          می‌کند بهترین محصولات دیجیتال از جمله موبایل،ساعت‌های هوشمند و گجت‌های
          روز دنیا را با بالاترین کیفیت و مناسب‌ترین قیمت به مشتریان ارائه دهد.
          هدف ما ایجاد تجربه‌ای لذت‌بخش از خرید آنلاین همراه با ضمانت اصالت و
          پشتیبانی حرفه‌ای است.
        </p>
      </div>

      <ul className="mt-4 mb-8 flex flex-col flex-wrap items-center justify-center gap-5 sm:flex-row">
        <li>
          <a
            className="transition-all duration-200 hover:text-gray-400"
            href="/contact-us"
          >
            تماس با ما
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-gray-400"
            href="#"
          >
            سوالات متداول
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-gray-400"
            href="#"
          >
            قوانین و مقررات
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-gray-400"
            href="#"
          >
            نمایندگی ها
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-gray-400"
            href="/about-us"
          >
            درباره ما
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-gray-400"
            href="#"
          >
            پیگیری سفارش
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-gray-400"
            href="/customer-rights"
          >
            منشور حقوق مشتریان
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-gray-400"
            href="#"
          >
            فعالسازی تلفن همراه
          </a>
        </li>
      </ul>

      <div className="m-auto w-[70%] border-t-1 border-gray-200 pt-4 pb-4 text-gray-600">
        <p className="text-gray-400">
          تمامی حقوق برای شرکت پرتو تجارت صدر محفوظ است
        </p>
      </div>
    </footer>
  );
}

export default Footer;
