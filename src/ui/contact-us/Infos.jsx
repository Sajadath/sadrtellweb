import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Infos() {
  return (
    <div
      dir="rtl"
      className="bg-sadrtell m-auto w-[70%] space-x-5 p-10 text-center text-lg text-white"
    >
      <div className="flex flex-col items-center justify-center gap-5 text-sm lg:flex-row lg:text-base">
        <div className="flex items-center justify-center gap-2">
          <IoCallSharp />
          <span className="text-xs lg:text-base">تلفن :‌ 88938967 - 021</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MdEmail />
          <span className="text-xs lg:text-base">
            پست الکترونیک :‌ info@sadrtell.ir
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 lg:mt-0">
        <FaMagnifyingGlass />
        <p className="text-xs lg:text-base">
          نشانی : تهران - خیابان قائم مقام فراهانی - بن بست ممتاز - پلاک ۳ -
          واحد ۱
        </p>
      </div>
    </div>
  );
}

export default Infos;
