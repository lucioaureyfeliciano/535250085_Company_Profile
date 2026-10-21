type SectionHeadingProps = {
  title: string;
  description?: string;
};

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-accent-400" aria-hidden />
      {description && <p className="mt-4 text-stone-600">{description}</p>}
    </div>
  );
}