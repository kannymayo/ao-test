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
    <section className="mx-64 p-2 flex flex-col gap-4">
      <div
        className={`text-yellow-800 font-bold text-xl ${
          seq === 0
            ? "px-20 text-center tracking-wide"
            : "uppercase tracking-tight"
        }`}
      >
        {title}
      </div>
      {/* paragraphs with optional floating image */}
      {img ? (
        <div className="">
          <img
            src={img}
            alt="paragraph-aside"
            className="float-left m-4 mr-8 mb-0"
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
      {/* block present if any of quote + quote avatar is present */}
      {quote || quoteAvatar ? (
        <div className="flex justify-center items-center mx-12 gap-1 mt-8">
          {/* quote avatar */}
          {quoteAvatar ? (
            <div className="shrink-0">
              <img src={quoteAvatar} alt="story-avatar" className="w-28" />
            </div>
          ) : null}
          {/* quote */}
          {quote ? (
            <>
              <div className="self-start shrink-0">
                <img src={imgIconQuote} alt="" className="w-10" />
              </div>
              <span className="uppercase font-bold text-lg leading-5 text-yellow-800">
                {quote}
              </span>
            </>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
