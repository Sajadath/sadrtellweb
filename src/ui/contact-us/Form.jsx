import { useState } from "react";

function Form() {
  const [reqInput, setReqInput] = useState("");
  function handleReqChange(e) {
    console.log(reqInput.length);

    const newText = e.target.value;
    if (newText.length <= 600) {
      setReqInput(newText);
    }
  }

  return (
    <div className="pr-7" dir="rtl">
      <h2 className="mt-2 pb-8 text-3xl">تماس با ما</h2>
      <form>
        <div className="mb-3 flex gap-4">
          <div className="flex w-[45%] flex-col">
            <label className="mb-2 text-xl" htmlFor="name">
              نام{" "}
              <span className="text-base text-red-700 italic">(الزامی)</span>
            </label>
            <input
              id="name"
              required
              className="rounded-md border-1 border-stone-200 bg-white px-1.5 py-2"
              type="text"
            />
          </div>
          <div className="flex w-[45%] flex-col">
            <label className="mb-2 text-xl" htmlFor="familyName">
              نام خانوادگی{" "}
              <span className="text-base text-red-700 italic">(الزامی)</span>
            </label>
            <input
              id="familyName"
              required
              className="rounded-md border-1 border-stone-200 bg-white px-1.5 py-2"
              type="text"
            />
          </div>
        </div>
        <div className="mb-3 flex gap-4">
          <div className="flex w-[45%] flex-col">
            <label className="mb-2 text-xl" htmlFor="phone">
              شماره تماس
            </label>
            <input
              id="phone"
              className="rounded-md border-1 border-stone-200 bg-white px-1.5 py-2"
              type="tel"
            />
          </div>
          <div className="flex w-[45%] flex-col">
            <label className="mb-2 text-xl" htmlFor="email">
              ایمیل{" "}
              <span className="text-base text-red-700 italic">(الزامی)</span>
            </label>
            <input
              id="email"
              required
              className="rounded-md border-1 border-stone-200 bg-white px-1.5 py-2"
              type="email"
            />
          </div>
        </div>

        <div className="flex w-[calc(90%+16px)] flex-col">
          <label className="text-xl" htmlFor="request">
            درخواست{" "}
            <span className="text-base text-red-700 italic">(الزامی)</span>
          </label>
          <p className="my-3 text-lg text-stone-400">
            لطفا درخواست خود را به صورت کامل شرح دهید همکاران ما در سریعترین
            زمان با شما تماس می گیرند .
          </p>
          <textarea
            value={reqInput}
            onChange={handleReqChange}
            required
            className="min-h-40 resize-y rounded-sm border-1 border-stone-200 bg-white p-3"
            name="request"
            id="request"
          ></textarea>
          <h4 className="my-3 text-stone-400">
            {reqInput.length} از 600 حداکثر کاراکتر
          </h4>
        </div>

        <button className="bg-sadrtell rounded-4xl px-9 py-2 text-white">
          ثبت
        </button>
      </form>
    </div>
  );
}

export default Form;
