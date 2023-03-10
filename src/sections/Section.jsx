import imgIconQuote from "../assets/icon-quote.png";

export default function StorySection({
  seq,
  title,
  paragraphs,
  img,
  quote,
  quoteAvatar,
}) {
  return (
    <section
      id={`section-${seq}`}
      className="lg:mx-48 2xl:mx-96 sm:mx-24 mx-6 p-2 flex flex-col gap-4 scroll-m-4"
    >
      <span
        className={`text-yellow-800 font-bold text-xl ${
          // heading of first section gets special styling
          seq === 0
            ? "lg:px-20 md:px-6 text-center tracking-wide"
            : "uppercase tracking-tight"
        }`}
      >
        {title}
      </span>
      {/* paragraphs with optional floating image */}
      {img ? (
        <div className="flex flex-col sm:block">
          <img
            src={img}
            alt="paragraph-aside"
            className="sm:float-left sm:m-4 sm:mr-8 sm:mb-2 sm:w-1/2 lg:w-1/3"
          />
          {paragraphs.map((p, idx) => (
            // cannot use flex with gap, set individual margins
            <p className="my-4" key={idx}>
              {p}
            </p>
          ))}
        </div>
      ) : (
        paragraphs.map((p, idx) => <p key={idx}>{p}</p>)
      )}
      {/* this block present if any of quote + quote avatar is present */}
      {quote || quoteAvatar ? (
        <div className="flex flex-col md:flex-row justify-center items-center md:mx-12 mx-4 gap-1 mt-8">
          {/* quote avatar */}
          {quoteAvatar ? (
            <div className="shrink-0">
              <img src={quoteAvatar} alt="story-avatar" className="w-30" />
            </div>
          ) : null}
          {/* quote */}
          {quote ? (
            <>
              <div className="self-start shrink-0 -mt-6 md:mt-0">
                <img src={imgIconQuote} alt="" className="w-10" />
              </div>
              <span className="uppercase font-bold text-lg leading-5 text-yellow-800 opacity-80">
                {quote}
              </span>
            </>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
