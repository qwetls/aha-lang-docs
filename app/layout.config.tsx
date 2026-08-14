import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          width={32}
          height={32}
          alt="AHA! Lang"
        />
        <span>AHA! Lang</span>
      </div>
    ),
  },
  links: [
    {
      text: 'Overview',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Getting Started',
      url: '/getting-started',
      active: 'nested-url',
    },
    {
      text: 'Language Tour',
      url: '/language-tour',
      active: 'nested-url',
    },
    {
      text: 'Builtins',
      url: '/builtins',
      active: 'nested-url',
    },
    {
      text: 'Changelog',
      url: '/changelog',
      active: 'nested-url',
    },
    {
      text: 'FAQ',
      url: '/faq',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/qwetls/aha-lang',
};