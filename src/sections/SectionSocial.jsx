import imgIconWhatsapp from "../assets/icon-whatsapp.png";
import imgIconFacebook from "../assets/icon-facebook.png";
import imgIconTwitter from "../assets/icon-twitter.png";

export default function SectionLeading() {
  return (
    <section className="mx-64 p-2 pt-8 gap-10 flex flex-col">
      <div className="flex justify-center gap-2 w-full">
        <a href="" className="">
          <img className="w-6" src={imgIconWhatsapp} alt="whatsapp" />
        </a>
        <a href="" className="">
          <img className="w-6" src={imgIconFacebook} alt="facebook" />
        </a>
        <a href="" className="">
          <img className="w-6" src={imgIconTwitter} alt="twitter" />
        </a>
      </div>
    </section>
  );
}
