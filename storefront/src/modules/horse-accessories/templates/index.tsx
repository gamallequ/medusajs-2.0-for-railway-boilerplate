import { ArrowRightMini, CheckCircleSolid } from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import InteractiveLink from "@modules/common/components/interactive-link"
import {
  BENEFITS,
  CATEGORIES,
  FEATURED,
  HERO_IMAGES,
  HorseAccessory,
  HorseCategory,
} from "../data"

/**
 * Landing page for horse riding accessories.
 *
 * Styled with the storefront's existing Medusa UI tokens (ui-bg-*, ui-fg-*,
 * card elevations, rounded-large) so it matches the rest of the store. Every
 * link points at /store until equestrian categories exist in Medusa.
 */

const PrimaryLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <LocalizedClientLink
    href={href}
    className="inline-flex min-h-[44px] items-center gap-x-2 rounded-full bg-black px-6 py-3 txt-compact-medium-plus text-white transition-opacity duration-150 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    {children}
    <ArrowRightMini aria-hidden />
  </LocalizedClientLink>
)

const PhotoCard = ({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string
  alt: string
  className?: string
  sizes: string
  priority?: boolean
}) => (
  <div
    className={`relative overflow-hidden rounded-large bg-ui-bg-subtle shadow-elevation-card-rest ${className ?? ""}`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover object-center"
      draggable={false}
    />
  </div>
)

const Hero = () => (
  <section className="w-full bg-ui-bg-subtle border-b border-ui-border-base">
    <div className="content-container grid grid-cols-1 items-center gap-12 py-16 small:grid-cols-2 small:py-24">
      <div className="flex flex-col gap-y-6">
        <Text className="txt-compact-small-plus uppercase tracking-wider text-ui-fg-muted">
          Equestrian collection
        </Text>
        <Heading
          level="h1"
          className="text-4xl leading-[1.15] font-normal text-ui-fg-base small:text-5xl"
        >
          Everything you need,
          <br />
          from stable to saddle.
        </Heading>
        <Text className="max-w-md txt-medium text-ui-fg-subtle">
          Helmets, boots, gloves and protective gear for riders of every level.
          Dependable kit for schooling, hacking and the show ring.
        </Text>
        <div className="flex flex-wrap items-center gap-4">
          <PrimaryLink href="/store">Shop horse riding</PrimaryLink>
          <a
            href="#categories"
            className="contrast-btn inline-flex min-h-[44px] items-center txt-compact-medium-plus"
          >
            Browse categories
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[420px] small:h-[520px]">
        <PhotoCard
          src={HERO_IMAGES.primary}
          alt="Black velvet horse riding helmet"
          className="row-span-2"
          sizes="(max-width: 1024px) 50vw, 25vw"
          priority
        />
        <PhotoCard
          src={HERO_IMAGES.secondary}
          alt="Black leather jodhpur riding boots"
          sizes="(max-width: 1024px) 50vw, 25vw"
          priority
        />
        <PhotoCard
          src={HERO_IMAGES.tertiary}
          alt="White leather horse riding gloves"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>
    </div>
  </section>
)

const CategoryTile = ({ category }: { category: HorseCategory }) => (
  <LocalizedClientLink href="/store" className="group flex flex-col gap-y-3">
    <PhotoCard
      src={category.image}
      alt={category.name}
      className="aspect-square transition-shadow duration-150 ease-in-out group-hover:shadow-elevation-card-hover"
      sizes="(max-width: 1024px) 50vw, 25vw"
    />
    <div className="flex items-start justify-between gap-x-2">
      <div>
        <Text className="txt-compact-medium-plus text-ui-fg-base">
          {category.name}
        </Text>
        <Text className="txt-compact-small text-ui-fg-subtle">
          {category.description}
        </Text>
      </div>
      <ArrowRightMini
        aria-hidden
        className="mt-0.5 shrink-0 text-ui-fg-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-ui-fg-base motion-reduce:transition-none"
      />
    </div>
  </LocalizedClientLink>
)

const Categories = () => (
  <section id="categories" className="content-container scroll-mt-20 py-16 small:py-24">
    <div className="mb-8 flex items-end justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge text-ui-fg-base">
          Shop by category
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle">
          Kit for the rider, sorted by what you need.
        </Text>
      </div>
      <InteractiveLink href="/store">View all</InteractiveLink>
    </div>
    <ul className="grid grid-cols-2 gap-6 small:grid-cols-4">
      {CATEGORIES.map((category) => (
        <li key={category.name}>
          <CategoryTile category={category} />
        </li>
      ))}
    </ul>
  </section>
)

const FeaturedCard = ({ item }: { item: HorseAccessory }) => (
  <LocalizedClientLink href="/store" className="group">
    <PhotoCard
      src={item.image}
      alt={item.title}
      className="aspect-[11/14] transition-shadow duration-150 ease-in-out group-hover:shadow-elevation-card-hover"
      sizes="(max-width: 1024px) 50vw, 33vw"
    />
    <div className="mt-4 flex flex-col">
      <Text className="txt-compact-small uppercase tracking-wider text-ui-fg-muted">
        {item.category}
      </Text>
      <Text className="txt-compact-medium text-ui-fg-subtle group-hover:text-ui-fg-base">
        {item.title}
      </Text>
    </div>
  </LocalizedClientLink>
)

const Featured = () => (
  <section className="border-t border-ui-border-base">
    <div className="content-container py-16 small:py-24">
      <div className="mb-8 flex items-end justify-between">
        <Heading level="h2" className="txt-xlarge text-ui-fg-base">
          Rider favourites
        </Heading>
        <InteractiveLink href="/store">Shop all</InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-12 small:grid-cols-3 small:gap-y-16">
        {FEATURED.map((item) => (
          <li key={item.title}>
            <FeaturedCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

const Benefits = () => (
  <section className="bg-ui-bg-subtle border-y border-ui-border-base">
    <ul className="content-container grid grid-cols-1 gap-8 py-16 small:grid-cols-3">
      {BENEFITS.map((benefit) => (
        <li key={benefit.title} className="flex gap-x-3">
          <CheckCircleSolid aria-hidden className="mt-0.5 shrink-0 text-ui-fg-base" />
          <div className="flex flex-col gap-y-1">
            <Text className="txt-compact-medium-plus text-ui-fg-base">
              {benefit.title}
            </Text>
            <Text className="txt-small text-ui-fg-subtle">
              {benefit.description}
            </Text>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

const ClosingCta = () => (
  <section className="content-container py-16 small:py-24">
    <div className="flex flex-col items-center gap-y-6 rounded-large border border-ui-border-base px-6 py-16 text-center">
      <Heading level="h2" className="text-3xl leading-10 font-normal text-ui-fg-base">
        Ready for your next ride?
      </Heading>
      <Text className="max-w-md txt-medium text-ui-fg-subtle">
        Find the right fit in helmets, boots and gloves, delivered to your door.
      </Text>
      <PrimaryLink href="/store">Shop the collection</PrimaryLink>
    </div>
  </section>
)

export default function HorseAccessoriesTemplate() {
  return (
    <div data-testid="horse-accessories-page">
      <Hero />
      <Categories />
      <Featured />
      <Benefits />
      <ClosingCta />
    </div>
  )
}
