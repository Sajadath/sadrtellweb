import QnA from "./QnA";

const QA = [
  {
    question: "ساعت کاری شرکت به چه صورت است ؟",
    answer:
      "ساعت کاری شرکت شنبه تا چهارشنبه از ساعت ۹ الی ۱۸ می باشد و روز های پنچشنبه از ساعت ۹ الی ۱۳ امکان ارتباط با تیم فروش و پشتیبانی فراهم است",
  },
  {
    question: "سفارش های من کی ارسال میشوند؟",
    answer:
      "سفارش‌هایی که در ساعات کاری ثبت شوند، در همان روز پردازش می‌شوند. سفارش‌هایی که بعد از ساعت کاری یا در روزهای تعطیل ثبت شوند، در روز کاری بعدی ارسال می‌شوند.",
  },
  {
    question: "چگونه میتوانم وضعیت سفارش های خود را پیگیری کنم؟",
    answer:
      "پس از ثبت سفارش، یک کد پیگیری برای شما ارسال می‌شود که می‌توانید از طریق وبسایت یا تماس با پشتیبانی وضعیت سفارش خود را بررسی کنید.",
  },
  {
    question: "چه زمانی میتوانم با پشتیبانی تماس بگیرم",
    answer: "پشتیبانی در ساعات کاری، از ۹ صبح تا ۱۸ بعدازظهر در دسترس است",
  },
  {
    question: "ارسال به کدام شهرها امکانپذیر است؟",
    answer: "ارسال به تمامی شهرهای ایران امکان‌پذیر است.",
  },
];

function Faq() {
  return (
    <div className="pt-4 pr-10">
      <span className="text-stone-400">
        درصورتی که سوال شما در سوالات زیر نیست لطفا فرم روبرو رو تکمیل کنید
      </span>
      <h2 className="mt-2 border-b-1 border-stone-300 pb-8 text-3xl">
        سوالات متداول
      </h2>

      <ul>
        {QA.map((ce, index) => (
          <QnA key={index} questionAndAnswer={ce} />
        ))}
      </ul>
    </div>
  );
}

export default Faq;
