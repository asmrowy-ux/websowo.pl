import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricingSection',
  title: 'Sekcja Cennik',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Nadtytuł (np. Cennik)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Tytuł (np. Indywidualna Wycena)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis (np. Dlaczego nie ma stałego cennika)',
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      title: 'Tekst przycisku',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Link przycisku (np. #kontakt)',
      type: 'string',
    }),
  ],
})
