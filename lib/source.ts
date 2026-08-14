import { docs, blog, course } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import { BookOpen, CircleHelp, ListTodo, Blocks, Rocket, Code2, Terminal, Cpu, Braces, Zap } from "lucide-react";

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
};

function icon(icon?: string) {
  if (!icon) return;
  if (icon in icons) {
    return createElement(icons[icon as keyof typeof icons]);
  }
}

export const source = loader({
  baseUrl: "/",
  source: docs.toFumadocsSource(),
  icon,
});

export const blogSource = loader({
  baseUrl: "/blog",
  source: blog.toFumadocsSource(),
  icon,
});

export const courseSource = loader({
  baseUrl: "/course",
  source: course.toFumadocsSource(),
  icon,
});