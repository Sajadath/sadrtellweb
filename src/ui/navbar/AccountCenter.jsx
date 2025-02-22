import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";

function AccountCenter() {
  //   const [auth, setAuth] = useState(false);
  const [redHeart, setRedHeart] = useState(false);
  return (
    <>
      <div className="bg-sadrtell rounded-3xl p-2.5 text-white">
        <a className="block" href="#">
          فروش همکاری
        </a>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="rounded-full bg-stone-100">
          <a className="block p-2" href="/panel">
            <AiOutlineUser size="1.7rem" />
          </a>
        </div>
        <div className="relative rounded-full bg-stone-100">
          <a className="block p-2" href="#">
            <IoIosGitCompare size="1.7rem" />
          </a>
          <div
            dir="rtl"
            className="light-shadow absolute top-0 left-0 flex translate-x-[-20%] translate-y-[-10%] rounded-full"
          >
            <p className="flex size-4 items-center justify-center rounded-full bg-white text-center text-[14px]">
              7
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => setRedHeart(true)}
          onMouseLeave={() => setRedHeart(false)}
          className="relative rounded-full bg-stone-100"
        >
          <a className="block p-2" href="#">
            {redHeart ? (
              <MdOutlineFavorite color="red" size="1.7rem" />
            ) : (
              <GrFavorite size="1.7rem" />
            )}
          </a>
          <div
            dir="rtl"
            className="light-shadow absolute top-0 left-0 flex translate-x-[-20%] translate-y-[-10%] rounded-full"
          >
            <p className="flex size-4 items-center justify-center rounded-full bg-white text-center text-[14px]">
              5
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountCenter;
