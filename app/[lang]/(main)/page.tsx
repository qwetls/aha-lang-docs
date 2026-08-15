import OverviewPage from "@/components/pages/overview-page";
import { locales } from "@/lib/source";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page(props: PageProps) {
  const { lang } = await props.params;
  return <OverviewPage lang={lang} />;
}
