import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'portfolioItem',
  title: 'Realizacje (Portfolio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł projektu',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Klient',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Krótki opis',
      type: 'text',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Pełny opis (w modalu)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Główny obrazek',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tags',
      title: 'Tagi technologii',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'link',
      title: 'Link do projektu (opcjonalny)',
      type: 'url',
    }),
  ],
})
