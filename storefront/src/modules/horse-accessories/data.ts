/**
 * Content for the horse accessories landing page.
 *
 * Product photos are Decathlon (Fouganza) catalogue images served from
 * Decathlon UAE's Shopify CDN. They are placeholders until the matching
 * products exist in Medusa: confirm you have the right to use them, or swap
 * each `image` for your own product media before going live.
 */

const DECATHLON_CDN = "https://cdn.shopify.com/s/files/1/0468/8540/4839/files"

const decathlonImage = (id: string) => `${DECATHLON_CDN}/pic_${id}.jpg?width=900`

export type HorseAccessory = {
  title: string
  category: string
  image: string
}

export type HorseCategory = {
  name: string
  description: string
  image: string
}

export const HERO_IMAGES = {
  primary: decathlonImage("d86713d5-460f-4e8b-81e2-c18affbd6098"),
  secondary: decathlonImage("c43a30b1-73d2-4a41-b8ad-877c515eafcb"),
  tertiary: decathlonImage("accab1a4-9acd-435f-a1c9-ec138cc73e08"),
}

export const CATEGORIES: HorseCategory[] = [
  {
    name: "Helmets",
    description: "Certified protection for every ride",
    image: decathlonImage("17457ff0-08b2-4207-bc9f-c46b764017ec"),
  },
  {
    name: "Boots & chaps",
    description: "Grip and support in the stirrup",
    image: decathlonImage("3e8f5f7c-346e-413d-8e83-9e1a4d39f3a2"),
  },
  {
    name: "Gloves",
    description: "A sure feel on the reins",
    image: decathlonImage("2be525df-35be-4f1e-97a1-0c808455d3f7"),
  },
  {
    name: "Jodhpurs",
    description: "Stretch and grip where it counts",
    image: decathlonImage("5c452a95-2b1a-4026-8018-082e5d2eb476"),
  },
]

export const FEATURED: HorseAccessory[] = [
  {
    title: "Horse Riding Helmet 140 - Black Velvet",
    category: "Helmets",
    image: decathlonImage("d86713d5-460f-4e8b-81e2-c18affbd6098"),
  },
  {
    title: "Leather Jodhpur Boots 560 - Black",
    category: "Boots",
    image: decathlonImage("c43a30b1-73d2-4a41-b8ad-877c515eafcb"),
  },
  {
    title: "Flexible Back Protector 500 D3O®",
    category: "Safety",
    image: decathlonImage("980e9f37-a5c2-47b5-a0f4-7fcf3f8ec38b"),
  },
  {
    title: "Leather Riding Gloves - White",
    category: "Gloves",
    image: decathlonImage("accab1a4-9acd-435f-a1c9-ec138cc73e08"),
  },
  {
    title: "Half Chaps 500 - Black",
    category: "Chaps",
    image: decathlonImage("3e8f5f7c-346e-413d-8e83-9e1a4d39f3a2"),
  },
  {
    title: "Riding Crop 140 - 58 cm",
    category: "Training",
    image: decathlonImage("41031e3e-059b-4017-b70a-4fc5f3e7ee8c"),
  },
]

export const BENEFITS = [
  {
    title: "Safety first",
    description:
      "Helmets and back protectors chosen to meet current equestrian safety standards.",
  },
  {
    title: "Built for the yard",
    description:
      "Hard-wearing materials that handle daily mucking out, schooling and hacking.",
  },
  {
    title: "Rider to pony sizes",
    description:
      "Kit for adults and children, so the whole family rides in the right fit.",
  },
]
