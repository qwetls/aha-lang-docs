import { getBlogSource, locales } from "@/lib/source";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { DocsBody } from "fumadocs-ui/page";
import { OverviewContainer } from "@/components/layout/overview-container";
import { getUI } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export default async function BlogPostPage(props: PageProps) {
  const params = await props.params;
  const t = getUI(params.lang);

  const page = getBlogSource(params.lang).getPage([params.slug]);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <OverviewContainer>
      <div className="max-w-[720px] px-6 pt-14 pb-12 space-y-10 overflow-hidden text-[#1c1917] dark:text-white/70">
        <div>
          <h1 className="text-[32px] leading-[1.15] font-bold tracking-tight mb-3 text-[#1c1917] dark:text-white">
            {page.data.title}
          </h1>
          {page.data.description && (
            <p className="text-[#78716c] dark:text-white/45 text-[15px]">{page.data.description}</p>
          )}
          {page.data.date && (
            <p className="mt-3 text-[13px] text-[#a8a29e] dark:text-white/35">
              {new Date(page.data.date).toLocaleDateString(t.localeDate, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-[#e7e5e4] dark:bg-white/[0.06]" />
        </div>

        <div className="text-[15px] leading-relaxed">
          <DocsBody>
            <MDX components={getMDXComponents({})} />
          </DocsBody>
        </div>
      </div>
    </OverviewContainer>
  );
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const p of getBlogSource(lang).generateParams()) {
      if (p.slug.length > 0) params.push({ lang, slug: p.slug[0] });
    }
  }
  return params;
}
