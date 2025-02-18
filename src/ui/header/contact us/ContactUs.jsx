import { HiPhone, HiTruck } from "react-icons/hi2";
function ContactUs() {
  return (
    <div className="flex gap-2 text-xs">
      <div className="text-xs">
        <p>ارسال به سراسر کشور</p>
        <p className="text-blue-500">ارسال فوری در تهران</p>
      </div>
      <div>
        <HiTruck size="30px" />
      </div>
      <div>
        <p>پشتیبانی تلفنی</p>

        <p>۰۲۱−۵۸646</p>
      </div>
      <div>
        <HiPhone size="25px" />
      </div>
    </div>
  );
}

export default ContactUs;
