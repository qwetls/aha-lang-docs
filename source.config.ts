import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

const blogSchema = {
  schema: pageSchema.extend({
    date: z.string().optional(),
  }),
};

export const docsEn = defineDocs({
  dir: 'content/docs/en',
});

export const docsId = defineDocs({
  dir: 'content/docs/id',
});

export const blogEn = defineDocs({
  dir: 'content/blog/en',
  docs: blogSchema,
});

export const blogId = defineDocs({
  dir: 'content/blog/id',
  docs: blogSchema,
});

export const courseEn = defineDocs({
  dir: 'content/course/en',
});

export const courseId = defineDocs({
  dir: 'content/course/id',
});

export default defineConfig();
