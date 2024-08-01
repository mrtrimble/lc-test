import { defineField, defineType } from 'sanity';

export const documentType = defineType({
  name: 'documents',
  title: 'Documents',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
