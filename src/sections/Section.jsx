export default function StorySection({ title, paragraphs, img }) {
  return (
    <section className="mx-64 p-2 flex flex-col gap-4">
      <div className="text-yellow-800 font-bold text-xl">{title}</div>
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
    </section>
  );
}
