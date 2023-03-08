import imgStoryAvatar from "../assets/story-avatar.png";
import imgIconQuote from "../assets/icon-quote.png";

export default function SectionQuote() {
  return (
    <section className="mx-64">
      {/* Heading */}
      <div className="flex justify-center items-center mx-12 gap-1">
        <div className="shrink-0">
          <img src={imgStoryAvatar} alt="story-avatar" className="w-28" />
        </div>
        <div className="self-start shrink-0">
          <img src={imgIconQuote} alt="" className="w-10" />
        </div>
        <span className="uppercase font-bold text-lg leading-5 text-yellow-800">
          I have always dreamed that if I could afford a nice motorcycle one
          day, it would be a Harley-Davidson
        </span>
      </div>
    </section>
  );
}
