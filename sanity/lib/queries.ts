import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`

export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  sections
}`
