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
      <div className="text-center text-yellow-800 font-bold text-xl px-16">
        Harley-Davidson riders on how motorcycles helped them find their purpose
      </div>
      <div className="flex flex-col gap-4">
        <p>
          Motorcycle groups are not just about fun and speed — for these two
          bikers, it's more about freedom and camaraderie.
        </p>
        <p>
          From raising money for charity to exploring untouched destinations,
          Yanisa, 43, and Mick, who is in his 50s, have had some epic adventures
          with their riding buddies and, of course, their trusty Harley-Davidson
          motorcycles.
        </p>
        <p>
          Their inspirational stories came to light during Harley-Davidson's
          #HDFreedomStoriesAsia crowdsourcing campaign last July and August,
          which called for contributions from riders around the region.
        </p>
        <p>
          Speaking to AsiaOne, the two Thai riders delve deeper into their
          hobby, which has now turned into a way of life.
        </p>
      </div>
    </section>
  );
}
