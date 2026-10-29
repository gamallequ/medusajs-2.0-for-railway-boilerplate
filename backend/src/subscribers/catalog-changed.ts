import { SubscriberArgs, SubscriberConfig } from '@medusajs/framework'
import { REVALIDATE_SECRET, STOREFRONT_URL } from '../lib/constants'

// Matches the shared tags the storefront puts on catalog reads in
// storefront/src/lib/data/cookies.ts. Purging all three on any catalog edit is
// deliberate: a product change also changes category and collection listings.
const CATALOG_TAGS = ['catalog-products', 'catalog-categories', 'catalog-collections']

export default async function catalogChangedHandler({ event }: SubscriberArgs<any>) {
  if (!REVALIDATE_SECRET) {
    return
  }

  // Never let a storefront outage fail an admin operation. The storefront's
  // cache TTL picks the change up on its own if this call is lost.
  try {
    const response = await fetch(`${STOREFRONT_URL}/api/revalidate`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-revalidate-secret': REVALIDATE_SECRET,
      },
      body: JSON.stringify({ tags: CATALOG_TAGS }),
    })

    if (!response.ok) {
      console.error(`Storefront revalidation after ${event.name} failed: ${response.status}`)
    }
  } catch (error) {
    console.error(error)
  }
}

export const config: SubscriberConfig = {
  event: [
    'product.created',
    'product.updated',
    'product.deleted',
    'product-variant.updated',
    'product-variant.deleted',
    'product-category.created',
    'product-category.updated',
    'product-category.deleted',
    'product-collection.created',
    'product-collection.updated',
    'product-collection.deleted',
  ],
}
