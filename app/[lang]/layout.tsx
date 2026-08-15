import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/source";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  return <>{children}</>;
}
