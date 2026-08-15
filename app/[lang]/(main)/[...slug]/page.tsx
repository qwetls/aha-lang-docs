import { getSource } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import { DocsBody } from 'fumadocs-ui/page';
import { OverviewContainer } from "@/components/layout/overview-container";
import { locales } from "@/lib/source";

interface PageProps {
  params: Promise<{ lang: string; slug?: string[] }>;
}

export default async function OverviewDocsPage(props: PageProps) {
  const params = await props.params;
  const source = getSource(params.lang);

  // if slug is "introduction", map it to the index []
  let searchSlug = params.slug;
  if (params.slug?.length === 1 && params.slug[0] === 'introduction') {
     searchSlug = [];
  }

  const page = source.getPage(searchSlug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <OverviewContainer>
      <div className="max-w-[720px] px-6 pt-14 pb-12 space-y-10 overflow-hidden text-[#1c1917] dark:text-white/70">
      <div>
        <h1 className="text-[32px] leading-[1.15] font-bold tracking-tight mb-3 text-[#1c1917] dark:text-white">{page.data.title}</h1>
        {page.data.description && <p className="text-[#78716c] dark:text-white/45 text-[15px]">{page.data.description}</p>}
      </div>

      {/* section divider matching overview page */}
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
  const params: { lang: string; slug: string[] }[] = [];
  for (const lang of locales) {
    const source = getSource(lang);
    for (const p of source.generateParams()) {
      params.push({
        lang,
        slug: p.slug.length === 0 ? ['introduction'] : p.slug,
      });
    }
  }
  return params;
}
