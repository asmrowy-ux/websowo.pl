import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesSection',
  title: 'Sekcja Usług',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Nadtytuł (np. Co robimy?)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Tytuł Sekcji',
      type: 'string',
    }),
    defineField({
      name: 'highlightedWord',
      title: 'Wyróżnione słowo w tytule (np. Twojej firmy)',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Usługi',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Tytuł usługi', type: 'string' },
            { name: 'description', title: 'Opis', type: 'text' },
            { name: 'iconName', title: 'Nazwa ikony (globe, chart, ads, social)', type: 'string', options: { list: ['globe', 'chart', 'ads', 'social'] } },
          ],
        },
      ],
    }),
  ],
})
