import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/source";

// @note root path redirects to the default locale
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
