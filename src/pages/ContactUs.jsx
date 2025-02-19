import ContactInfos from "../ui/contact-us/ContactInfos";
import Faq from "../ui/contact-us/Faq";
import Form from "../ui/contact-us/Form";
import Infos from "../ui/contact-us/Infos";

function ContactUs() {
  return (
    <div dir="rtl" className="py-8">
      <Infos />
      <div className="m-auto flex w-[70%]">
        <div className="w-[50%]">
          <Faq />
        </div>
        <div className="mb-10 w-[50%]">
          <Form />
        </div>
      </div>
      <div className="m-auto w-[70%]">
        <ContactInfos />
      </div>
    </div>
  );
}

export default ContactUs;
