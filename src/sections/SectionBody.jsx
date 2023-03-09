import { Fragment } from "react";
import StorySection from "./Section";

export default function Sections({
  children,
  childrenInjectedAfter,
  sections,
}) {
  return sections.map((section, idx) => {
    if (childrenInjectedAfter !== undefined && idx === childrenInjectedAfter)
      return (
        <Fragment key={section.title}>
          <StorySection
            seq={idx}
            title={section.title}
            paragraphs={section.paragraphs}
            img={section.img}
            quote={section.quote}
            quoteAvatar={section.quoteAvatar}
          />
          {children}
        </Fragment>
      );
    else
      return (
        <StorySection
          seq={idx}
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
          img={section.img}
          quote={section.quote}
          quoteAvatar={section.quoteAvatar}
        />
      );
  });
}
