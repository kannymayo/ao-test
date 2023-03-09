import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function BannerParallaxed({ imgSrc, refScrollContainer }) {
  const refFeaturedBg = useRef(null);
  const { scrollYProgress: p } = useScroll({
    container: refScrollContainer,
    target: refFeaturedBg,
    offset: ["start start", "end end"],
  });
  const scrollPercent = useTransform(p, [0, 0.3, 0.7, 1], [0, 10, 90, 100]);
  const objectPosition = useMotionTemplate`50% ${scrollPercent}%`;

  return (
    <div ref={refFeaturedBg} className="h-[14em] relative">
      <motion.img
        style={{
          objectPosition,
        }}
        src={imgSrc}
        alt="featured-background"
        className="h-full w-full object-cover"
      />
      <div className="text-white font-bold tracking-wider absolute right-1/4 top-1/4 w-1/4">
        I am not going to be anyone's burden. So they are happy to have me on
        every trip. And many times, a woman can lead as well.
      </div>
    </div>
  );
}
