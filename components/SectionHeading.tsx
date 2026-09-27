interface SectionHeadingProps {
  title: string;
  description: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="font-body text-sm uppercase tracking-[0.3em] text-teal">{title}</p>
      <h2 className="mt-4 text-3xl font-heading font-semibold leading-tight text-[var(--navy)] sm:text-4xl">
        {description}
      </h2>
    </div>
  );
}
