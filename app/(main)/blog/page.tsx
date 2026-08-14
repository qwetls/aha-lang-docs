import Link from "next/link";
import { blogSource } from "@/lib/source";
import { OverviewContainer } from "@/components/layout/overview-container";

// @note index page listing all blog posts (newest first)
export default function BlogPage() {
  const posts = blogSource
    .getPages()
    .sort((a, b) => (b.data.date ?? "").toString().localeCompare((a.data.date ?? "").toString()));

  return (
    <OverviewContainer>
      <div className="max-w-[720px] px-6 pt-14 pb-12 space-y-10 overflow-hidden text-[#1c1917] dark:text-white/70">
        <div>
          <h1 className="text-[32px] leading-[1.15] font-bold tracking-tight mb-3 text-[#1c1917] dark:text-white">Blog</h1>
          <p className="text-[#78716c] dark:text-white/45 text-[15px]">
            Pembaruan rilis, catatan pengembangan, dan pemikiran seputar AHA! Lang.
          </p>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-[#e7e5e4] dark:bg-white/[0.06]" />
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="block p-5 rounded-xl border border-[#e7e5e4] dark:border-white/[0.08] hover:border-[#d6d3d1] dark:hover:border-white/[0.16] transition-colors"
            >
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <h2 className="text-[16px] font-semibold text-[#1c1917] dark:text-white">{post.data.title}</h2>
                {post.data.date && (
                  <span className="shrink-0 text-[12px] text-[#a8a29e] dark:text-white/35">
                    {new Date(post.data.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
              {post.data.description && (
                <p className="text-[14px] text-[#78716c] dark:text-white/45">{post.data.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </OverviewContainer>
  );
}