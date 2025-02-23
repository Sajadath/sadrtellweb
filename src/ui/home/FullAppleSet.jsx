import { useEffect, useState } from "react";

function FullAppleSet() {
  const days = 1;

  // State to track the time in seconds
  const [timeInSeconds, setTimeInSeconds] = useState(days * 24 * 60 * 60); // Convert days to seconds (1 day = 86400 seconds)

  // Function to convert seconds into days, hours, minutes, and seconds
  const getTimeBreakdown = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    setTimeInSeconds(days * 24 * 60 * 60);

    const timer = setInterval(() => {
      setTimeInSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [days]);

  const {
    days: displayDays,
    hours,
    minutes,
    seconds,
  } = getTimeBreakdown(timeInSeconds);

  return (
    <div
      dir="rtl"
      className="bg-gradient-to-br from-pink-100 to-blue-100 text-right"
    >
      <div className="mx-auto w-[70%]">
        <h2 className="pt-12 pb-6 text-xl sm:text-6xl">
          ست اپل خودتو کامل کن !
        </h2>
        <p className="text-lg text-gray-500 sm:text-2xl">
          محصولات اپل رو با قیمت استثنایی خرید کنید
        </p>

        <div
          dir="ltr"
          className="my-8 flex flex-wrap justify-end gap-3 text-center"
        >
          <div className="min-w-21 rounded-xl bg-white p-3">
            <p>{displayDays}</p>
            <p>روز</p>
          </div>
          <div className="min-w-21 rounded-xl bg-white p-3">
            <p>{hours}</p>
            <p>ساعت</p>
          </div>
          <div className="min-w-21 rounded-xl bg-white p-3">
            <p>{minutes}</p>
            <p>دقیقه</p>
          </div>
          <div className="min-w-21 rounded-xl bg-white p-3">
            <p>{seconds}</p>
            <p>ثانیه</p>
          </div>
        </div>

        <button className="bg-sadrtell hover:bg-sadrtell/90 cursor-pointer rounded-lg px-6 py-2 text-white">
          خرید محصولات اپل
        </button>

        <div className="flex flex-col flex-wrap items-center justify-center gap-10 py-8 lg:flex-row">
          <div className="flex gap-2 rounded-2xl bg-white p-8 text-center">
            <img
              className="w-40 transform transition-transform duration-300 ease-in-out hover:scale-110"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1He7LD5p1Nlu-SQ48nS5eKriDMPZmUNjqoQ&s"
              alt="airpod"
            />
            <div className="flex flex-col">
              <p className="grow">هدفون اپل</p>
              <p className="text-sadrtell font-bold">قیمت: 10 هزار تومان</p>
            </div>
          </div>
          <div className="flex w-fit gap-2 rounded-2xl bg-white p-8 text-center">
            <img
              className="w-40 transform transition-transform duration-300 ease-in-out hover:scale-110"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgflzyAhuTCFuXlatIHvymLUnoElJG62S7GQ&s"
              alt="iphone"
            />
            <div className="flex flex-col">
              <p className="grow">گوشی اپل</p>
              <p className="text-sadrtell font-bold">قیمت: 10 هزار تومان</p>
            </div>
          </div>
          <div className="flex w-fit gap-2 rounded-2xl bg-white p-8 text-center">
            <img
              className="w-40 transform transition-transform duration-300 ease-in-out hover:scale-110"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAntEGcircmCSFkvnLvRpDGdBpMsZtm8o4Dw&s"
              alt="airpod"
            />
            <div className="flex flex-col">
              <p className="grow">ایرپاد اپل</p>
              <p className="text-sadrtell font-bold">قیمت: 10 هزار تومان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullAppleSet;
