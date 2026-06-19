export default function SectionTitle({ eyebrow, title, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <p className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
        {title}
      </h2>
    </div>
  );
}
