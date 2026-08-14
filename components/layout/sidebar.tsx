"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/introduction", label: "Introduction" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/language-tour", label: "Language Tour" },
  { href: "/course", label: "Course" },
  { href: "/blog", label: "Blog" },
];

const guidesItems = [
  { href: "/functions", label: "Functions" },
  { href: "/strings", label: "Strings" },
  { href: "/builtins", label: "Builtins" },
  { href: "/architecture", label: "Architecture" },
  { href: "/changelog", label: "Changelog" },
  { href: "/faq", label: "FAQ" },
];

const externalLinks = [
  { href: "https://github.com/qwetls/aha-lang", label: "GitHub" },
];

// @note renders a single nav link with active indicator
function NavItem({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`relative block py-1.5 text-[14px] transition-colors ${
          isActive
            ? "text-[#1c1917] dark:text-white font-semibold"
            : "text-[#a8a29e] dark:text-white/40 hover:text-[#78716c] dark:hover:text-white/70"
        }`}
      >
        {isActive && (
          <span className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[2px] h-[16px] bg-[#1c1917] dark:bg-white rounded-full transition-colors" />
        )}
        {label}
      </Link>
    </li>
  );
}

// @note theme toggle button
function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-6 h-6" />; // placeholder

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-1.5 text-[#a8a29e] dark:text-white/40 hover:text-[#78716c] dark:hover:text-white/70 hover:bg-stone-100 dark:hover:bg-white/5 rounded-md transition-all"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      )}
    </button>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const sidebarContent = (
    <>
      {/* logo */}
      <div className="pt-12 md:pt-16 pb-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            width={28}
            height={28}
            alt="AHA! Lang"
          />
          <span className="text-[15px] font-semibold text-[#1c1917] dark:text-white/90 transition-colors">AHA! Lang</span>
        </Link>
      </div>

      {/* nav */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-0.5 mb-6 pl-3">
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} onClick={() => setOpen(false)} />
          ))}
        </ul>

        <p className="pl-3 mb-2 text-[11px] font-medium text-[#1c1917] dark:text-white/30 uppercase tracking-widest transition-colors">Guides</p>
        <ul className="space-y-0.5 mb-6 pl-3">
          {guidesItems.map((item) => (
            <NavItem key={item.href} {...item} onClick={() => setOpen(false)} />
          ))}
        </ul>

        <p className="pl-3 mb-2 text-[11px] font-medium text-[#1c1917] dark:text-white/30 uppercase tracking-widest transition-colors">Links</p>
        <ul className="space-y-0.5 pl-3">
          {externalLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 py-1.5 text-[14px] text-[#a8a29e] dark:text-white/40 hover:text-[#78716c] dark:hover:text-white/70 transition-colors"
              >
                {item.label}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* footer */}
      <div className="py-4 flex items-center justify-between">
        <span className="text-[12px] text-[#a8a29e] dark:text-white/30 transition-colors">early development</span>
        <ThemeToggle />
      </div>
    </>
  );

  return (
    <>
      {/* mobile topbar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-6 h-14 bg-[#fafaf9]/90 dark:bg-[#0a0a0c]/90 backdrop-blur-md border-b border-stone-200/60 dark:border-white/5 transition-colors">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={24}
            height={24}
            alt="AHA! Lang"
          />
          <span className="text-[14px] font-semibold text-[#1c1917] dark:text-white/90">AHA! Lang</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-stone-100 dark:hover:bg-white/5 text-[#1c1917] dark:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile backdrop */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black/10 dark:bg-black/30 md:hidden" onClick={() => setOpen(false)} />
      )}

      {/* mobile dropdown */}
      <aside
        className={`fixed top-14 left-0 right-0 z-40 max-h-[calc(100vh-3.5rem)] overflow-y-auto flex flex-col bg-[#fafaf9]/95 dark:bg-[#0a0a0c]/95 backdrop-blur-md border-b border-stone-200/60 dark:border-white/5 px-6 pb-4 transition-all duration-200 md:hidden ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="pt-3">
          <ul className="space-y-0.5 mb-4 pl-3">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} onClick={() => setOpen(false)} />
            ))}
          </ul>
          <p className="pl-3 mb-2 text-[11px] font-medium text-[#1c1917] dark:text-white/30 uppercase tracking-widest transition-colors">Guides</p>
          <ul className="space-y-0.5 mb-4 pl-3">
            {guidesItems.map((item) => (
              <NavItem key={item.href} {...item} onClick={() => setOpen(false)} />
            ))}
          </ul>
          <p className="pl-3 mb-2 text-[11px] font-medium text-[#1c1917] dark:text-white/30 uppercase tracking-widest transition-colors">Links</p>
          <ul className="space-y-0.5 pl-3">
            {externalLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 py-1.5 text-[14px] text-[#a8a29e] dark:text-white/40 hover:text-[#78716c] dark:hover:text-white/70 transition-colors"
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* desktop sidebar */}
      <aside className="hidden md:flex flex-col w-[200px] shrink-0 sticky top-0 h-screen overflow-y-auto">
        {sidebarContent}
      </aside>
    </>
  );
}