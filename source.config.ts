import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const blog = defineDocs({
  dir: 'content/blog',
});

export const course = defineDocs({
  dir: 'content/course',
});

export default defineConfig();