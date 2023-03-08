import StorySection from "./Section";

export default function Sections({
  children,
  childrenInjectedAfter,
  sections,
}) {
  return sections.map((section, idx) => {
    if (childrenInjectedAfter !== undefined && idx === childrenInjectedAfter)
      return (
        <>
          <StorySection
            key={section.title}
            title={section.title}
            paragraphs={section.paragraphs}
            img={section.img}
          />
          {children}
        </>
      );
    else
      return (
        <StorySection
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
          img={section.img}
        />
      );
  });
}
