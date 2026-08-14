import Link from "next/link";
import { courseSource } from "@/lib/source";
import { OverviewContainer } from "@/components/layout/overview-container";

// @note index page listing all course lessons in order
export default function CoursePage() {
  const lessons = courseSource.getPages();

  return (
    <OverviewContainer>
      <div className="max-w-[720px] px-6 pt-14 pb-12 space-y-10 overflow-hidden text-[#1c1917] dark:text-white/70">
        <div>
          <h1 className="text-[32px] leading-[1.15] font-bold tracking-tight mb-3 text-[#1c1917] dark:text-white">
            Course
          </h1>
          <p className="text-[#78716c] dark:text-white/45 text-[15px]">
            Belajar menulis kode AHA! Lang dari nol — 10 pelajaran bertahap, dari Hello, World sampai proyek kecil.
          </p>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-[#e7e5e4] dark:bg-white/[0.06]" />
        </div>

        <ol className="space-y-3">
          {lessons.map((lesson, index) => (
            <li key={lesson.url}>
              <Link
                href={lesson.url}
                className="flex items-start gap-4 p-5 rounded-xl border border-[#e7e5e4] dark:border-white/[0.08] hover:border-[#d6d3d1] dark:hover:border-white/[0.16] transition-colors"
              >
                <span className="shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-full bg-[#1c1917] dark:bg-white text-[#fafaf9] dark:text-[#0a0a0c] text-[13px] font-semibold">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-[16px] font-semibold text-[#1c1917] dark:text-white">{lesson.data.title}</h2>
                  {lesson.data.description && (
                    <p className="mt-1 text-[14px] text-[#78716c] dark:text-white/45">{lesson.data.description}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </OverviewContainer>
  );
}