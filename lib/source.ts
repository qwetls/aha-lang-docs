import { docs } from "@/.source/server";
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

export const source = loader({
  baseUrl: "/",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;
    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
});