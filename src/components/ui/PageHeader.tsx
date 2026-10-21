import Link from "next/link";
import Container from "./Container";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
};

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-brand-900 py-12 text-white sm:py-16">
      <Container>
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-100">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-brand-100">{description}</p>}
      </Container>
    </section>
  );
}