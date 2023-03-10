import { useRef } from "react";
import {
  motion,
  easeOut,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function BannerParallaxed({ imgSrc }) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const refFeaturedBg = useRef(null);
  const { scrollYProgress: p } = useScroll({
    target: refFeaturedBg,
    offset: ["start start", "end end"],
  });
  const scrollPercent = useTransform(p, [0, 1], [0, 100], {
    ease: easeOut,
  });
  const scrollPercentMobile = useTransform(p, [0, 1], [10, 25]);
  const objectPosition = useMotionTemplate`50% ${scrollPercent}%`;
  const objectPositionMobile = useMotionTemplate`${scrollPercentMobile}% 50%`;

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? objectPositionMobile : objectPosition,
      }}
      ref={refFeaturedBg}
      className="sm:h-[14em] h-[18em] flex items-end justify-end p-12 lg:pr-64"
    >
      <div className="text-white font-bold tracking-wide sm:w-1/2 md:w-1/3 lg:w-1/4">
        I am not going to be anyone's burden. So they are happy to have me on
        every trip. And many times, a woman can lead as well.
      </div>
    </motion.div>
  );
}
