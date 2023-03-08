import StorySection from "./Section";

export default function Sections({
  children,
  childrenInjectedAfter,
  sections,
}) {
  return sections.map((section, idx) => {
    if (childrenInjectedAfter !== undefined && idx === childrenInjectedAfter)
      return (
        <div key={section.title}>
          <StorySection
            title={section.title}
            paragraphs={section.paragraphs}
            img={section.img}
          />
          {children}
        </div>
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
