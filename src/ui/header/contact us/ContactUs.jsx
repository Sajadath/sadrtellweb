import { HiPhone, HiTruck } from "react-icons/hi2";
function ContactUs() {
  return (
    <div className="flex gap-2 text-sm">
      <div>
        <HiTruck size="35px" />
      </div>
      <div className="text-sm">
        <p>ارسال به سراسر کشور</p>
        <p className="text-blue-500">ارسال فوری در تهران</p>
      </div>
      <div>
        <HiPhone size="28px" />
      </div>
      <div>
        <p>پشتیبانی تلفنی</p>

        <p dir="ltr">۰۲۱-۵۸۶۴۶</p>
      </div>
    </div>
  );
}

export default ContactUs;
