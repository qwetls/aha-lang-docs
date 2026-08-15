import {
  docsEn,
  docsId,
  blogEn,
  blogId,
  courseEn,
  courseId,
} from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import {
  BookOpen,
  CircleHelp,
  ListTodo,
  Blocks,
  Rocket,
  Code2,
  Terminal,
  Cpu,
  Braces,
  Zap,
  Brackets,
  SquareTerminal,
  FileCode,
} from "lucide-react";

export type Locale = "en" | "id";
export const locales: Locale[] = ["en", "id"];
export const defaultLocale: Locale = "en";

// @note maps icon names to components for sidebar
const icons = {
  BookOpen,
  CircleHelp,
  ListTodo,
  Blocks,
  Rocket,
  Code2,
  Terminal,
  Cpu,
  Braces,
  Zap,
  Brackets,
  SquareTerminal,
  FileCode,
};

export function icon(icon?: string) {
  if (!icon) return;
  if (icon in icons) {
    return createElement(icons[icon as keyof typeof icons]);
  }
}

const docsSources = {
  en: loader({ baseUrl: "/en", source: docsEn.toFumadocsSource(), icon }),
  id: loader({ baseUrl: "/id", source: docsId.toFumadocsSource(), icon }),
};

const blogSources = {
  en: loader({ baseUrl: "/en/blog", source: blogEn.toFumadocsSource(), icon }),
  id: loader({ baseUrl: "/id/blog", source: blogId.toFumadocsSource(), icon }),
};

const courseSources = {
  en: loader({ baseUrl: "/en/course", source: courseEn.toFumadocsSource(), icon }),
  id: loader({ baseUrl: "/id/course", source: courseId.toFumadocsSource(), icon }),
};

export function getSource(lang: string) {
  return docsSources[(lang as Locale) in docsSources ? (lang as Locale) : defaultLocale];
}

export function getBlogSource(lang: string) {
  return blogSources[(lang as Locale) in blogSources ? (lang as Locale) : defaultLocale];
}

export function getCourseSource(lang: string) {
  return courseSources[(lang as Locale) in courseSources ? (lang as Locale) : defaultLocale];
}
