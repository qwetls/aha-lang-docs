'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// @note simple 404 page with glitch effect
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative mb-8">
          <h1 className="font-mono text-[12rem] font-bold leading-none tracking-tighter text-foreground/5 sm:text-[16rem]">
            404
          </h1>
          <motion.span
            animate={{
              opacity: [1, 0.5, 1],
              x: [0, -2, 2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-6xl font-bold tracking-tight text-foreground sm:text-8xl"
          >
            404
          </motion.span>
        </div>

        <p className="mb-2 text-xl font-medium text-foreground sm:text-2xl">
          Page not found
        </p>
        <p className="mb-8 max-w-md text-sm text-muted-foreground sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg border-2 border-foreground bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-foreground/90"
          >
            Back to home
          </Link>
          <Link
            href="/introduction"
            className="rounded-lg border-2 border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            View docs
          </Link>
        </div>
      </motion.div>

      {/* @note decorative grid pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </div>
  );
}
