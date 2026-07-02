import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './schemaTypes/siteSettings'
import page from './schemaTypes/page'
import heroSection from './schemaTypes/heroSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, page, heroSection],
}
