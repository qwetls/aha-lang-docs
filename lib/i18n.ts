import type { Locale } from "@/lib/source";

export type { Locale };

// @note UI string dictionary per locale. Content (docs/blog/course) lives in MDX;
// this covers chrome: sidebar, landing page, list page descriptions.
export const ui = {
  en: {
    tagline: "Easy to read. Powerful to wield.",
    heroLead: "AHA! Lang",
    heroBody:
      "is a modern programming language with an LLVM backend. A full compiler pipeline in Rust — lexer, Pratt parser, type system, LLVM IR codegen, and built-in JIT execution — built on inkwell with LLVM 14.",
    heroBody2:
      "These docs cover everything: building the compiler from source, a tour of the language, functions & strings, builtins, arrays, the CLI, ready-to-run snippets, and the compiler architecture.",
    resultLabel: "Program executed successfully. Result:",
    whyTitle: "Why AHA!?",
    readyLead: "Ready to dive in? Start here:",
    gettingStarted: "Getting Started",
    languageTour: "Language Tour",
    fullDocs: "Full Docs",
    features: {
      llvm: {
        title: "LLVM-Powered",
        description:
          "Compiles to LLVM IR and runs through a built-in JIT — native-level performance from day one.",
      },
      boolean: {
        title: "Boolean Algebra That Composes",
        description:
          "==, !=, &&, || all return Int 0/1 — so logic flows straight into arithmetic: is_even(n) * 100 just works.",
      },
      strings: {
        title: "Strings Done Right",
        description:
          "Strings are a real {pointer, length} struct — safe concatenation, ==/!= comparison, and an O(1) len() builtin.",
      },
      types: {
        title: "Expressive Type Discipline",
        description:
          "First-class Int, Bool, and String with a compile-time type-checking pass. Type errors are caught at compile time, not at runtime.",
      },
      control: {
        title: "Modern Control Flow",
        description:
          "if/else, while, and for loops with break/continue. Functions with parameters, return, forward references, and mutual recursion.",
      },
      tooling: {
        title: "Honest Tooling",
        description:
          "A clean CLI (--file, --emit-ir, --version), a VS Code syntax-highlighting extension, and a CI pipeline running 305+ tests on every commit.",
      },
    },
    nav: [
      { slug: "", label: "Overview" },
      { slug: "introduction", label: "Introduction" },
      { slug: "getting-started", label: "Getting Started" },
      { slug: "language-tour", label: "Language Tour" },
      { slug: "course", label: "Course" },
      { slug: "blog", label: "Blog" },
    ],
    guidesLabel: "Guides",
    guides: [
      { slug: "functions", label: "Functions" },
      { slug: "strings", label: "Strings" },
      { slug: "arrays", label: "Arrays" },
      { slug: "lists", label: "Lists" },
      { slug: "maps", label: "Maps" },
      { slug: "error-handling", label: "Error Handling" },
      { slug: "modules", label: "Modules" },
      { slug: "memory-management", label: "Memory Management" },
      { slug: "builtins", label: "Builtins" },
      { slug: "cli", label: "CLI Reference" },
      { slug: "snippets", label: "Code Snippets" },
      { slug: "architecture", label: "Architecture" },
      { slug: "changelog", label: "Changelog" },
      { slug: "faq", label: "FAQ" },
    ],
    linksLabel: "Links",
    devStatus: "early development",
    blogDescription:
      "Roadmap, release updates, tutorials, and thoughts about AHA! Lang.",
    courseDescription:
      "Learn to write AHA! Lang from scratch — 10 step-by-step lessons, from Hello, World to a small project.",
    localeDate: "en-US",
  },
  id: {
    tagline: "Mudah dibaca. Ampuh digunakan.",
    heroLead: "AHA! Lang",
    heroBody:
      "adalah bahasa pemrograman modern dengan backend LLVM. Pipeline kompiler lengkap dalam Rust — lexer, Pratt parser, sistem tipe, codegen LLVM IR, dan eksekusi JIT bawaan — dibangun di atas inkwell dengan LLVM 14.",
    heroBody2:
      "Dokumentasi ini mencakup semuanya: membangun kompiler dari sumber, tur bahasa, fungsi & string, builtin, array, CLI, cuplikan kode siap jalan, dan arsitektur kompiler.",
    resultLabel: "Program berhasil dijalankan. Hasil:",
    whyTitle: "Kenapa AHA!?",
    readyLead: "Siap mulai? Mulai dari sini:",
    gettingStarted: "Memulai",
    languageTour: "Tur Bahasa",
    fullDocs: "Dokumentasi Lengkap",
    features: {
      llvm: {
        title: "Ditenagai LLVM",
        description:
          "Dikompilasi ke LLVM IR dan dijalankan lewat JIT bawaan — performa setara native sejak hari pertama.",
      },
      boolean: {
        title: "Aljabar Boolean yang Menyatu",
        description:
          "==, !=, &&, || semuanya menghasilkan Int 0/1 — jadi logika mengalir langsung ke aritmetika: is_even(n) * 100 langsung bekerja.",
      },
      strings: {
        title: "String yang Benar",
        description:
          "String adalah struct {pointer, length} sungguhan — penggabungan aman, perbandingan ==/!=, dan builtin len() O(1).",
      },
      types: {
        title: "Disiplin Tipe yang Ekspresif",
        description:
          "Int, Bool, dan String sebagai warga kelas satu dengan pemeriksaan tipe saat kompilasi. Kesalahan tipe tertangkap saat kompilasi, bukan saat runtime.",
      },
      control: {
        title: "Alur Kendali Modern",
        description:
          "if/else, while, dan for dengan break/continue. Fungsi dengan parameter, return, forward reference, dan rekursi timbal balik.",
      },
      tooling: {
        title: "Perkakas yang Jujur",
        description:
          "CLI yang rapi (--file, --emit-ir, --version), ekstensi penyorotan sintaks VS Code, dan pipeline CI menjalankan 305+ tes di setiap commit.",
      },
    },
    nav: [
      { slug: "", label: "Ikhtisar" },
      { slug: "introduction", label: "Pengantar" },
      { slug: "getting-started", label: "Memulai" },
      { slug: "language-tour", label: "Tur Bahasa" },
      { slug: "course", label: "Kursus" },
      { slug: "blog", label: "Blog" },
    ],
    guidesLabel: "Panduan",
    guides: [
      { slug: "functions", label: "Fungsi" },
      { slug: "strings", label: "String" },
      { slug: "arrays", label: "Array" },
      { slug: "lists", label: "List" },
      { slug: "maps", label: "Map" },
      { slug: "error-handling", label: "Penanganan Error" },
      { slug: "modules", label: "Modul" },
      { slug: "memory-management", label: "Manajemen Memori" },
      { slug: "builtins", label: "Builtin" },
      { slug: "cli", label: "Referensi CLI" },
      { slug: "snippets", label: "Cuplikan Kode" },
      { slug: "architecture", label: "Arsitektur" },
      { slug: "changelog", label: "Changelog" },
      { slug: "faq", label: "FAQ" },
    ],
    linksLabel: "Tautan",
    devStatus: "pengembangan awal",
    blogDescription:
      "Roadmap, pembaruan rilis, tutorial, dan pemikiran seputar AHA! Lang.",
    courseDescription:
      "Belajar menulis kode AHA! Lang dari nol — 10 pelajaran bertahap, dari Hello, World sampai proyek kecil.",
    localeDate: "id-ID",
  },
} as const;

export function getUI(lang: string) {
  return lang === "id" ? ui.id : ui.en;
}
