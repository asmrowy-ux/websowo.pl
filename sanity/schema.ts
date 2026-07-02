import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './schemaTypes/siteSettings'
import page from './schemaTypes/page'
import heroSection from './schemaTypes/heroSection'
import servicesSection from './schemaTypes/servicesSection'
import portfolioItem from './schemaTypes/portfolioItem'
import pricingSection from './schemaTypes/pricingSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, page, heroSection, servicesSection, portfolioItem, pricingSection],
}
