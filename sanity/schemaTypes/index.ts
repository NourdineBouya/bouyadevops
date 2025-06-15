import { type SchemaTypeDefinition } from 'sanity'

import post from './post'
import affiliateWidget from './affiliateWidget'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post , affiliateWidget],
}
