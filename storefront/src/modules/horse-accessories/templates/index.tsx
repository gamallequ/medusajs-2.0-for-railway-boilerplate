import { ArrowRightMini, CheckCircleSolid } from "@medusajs/icons"
import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import {
  BENEFITS,
  CATEGORIES,
  FEATURED,
  HERO_HIGHLIGHTS,
  HERO_PRODUCTS,
  HorseAccessory,
  HorseCategory,
} from "../data"

/**
 * Equidentum horse riding landing page, rendered as the store homepage.
 *
 * Colours, type and shapes follow equidentum-front: deep purple surfaces with
 * a gold accent, Almarai, 28px card radii and 36px pill buttons. Every link
 * points at /store until equestrian categories exist in Medusa.
 */

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

const PILL =
  "inline-flex min-h-[48px] items-center justify-center gap-x-2 rounded-[36px] px-7 text-base font-bold transition-colors duration-200"

// Staggered entrance for hero content, see .eq-rise in globals.css.
const rise = (step: number) => ({ animationDelay: `${120 + step * 110}ms` })

const ProductShot = ({
  item,
  sizes,
  priority,
  className,
}: {
  item: HorseAccessory
  sizes: string
  priority?: boolean
  className?: string
}) => (
  <div
    className={`relative overflow-hidden rounded-[28px] bg-white shadow-[0_24px_48px_-28px_rgba(20,4,24,0.65)] ${className ?? ""}`}
  >
    <Image
      src={item.image}
      alt={item.title}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover object-center"
      draggable={false}
    />
  </div>
)

const Hero = () => (
  <section
    aria-labelledby="hero-title"
    data-testid="hero"
    className="relative isolate overflow-hidden rounded-b-[32px] bg-gradient-to-br from-equidentum-deep via-[#5c2266] to-equidentum-brand text-white"
  >
    {/* Soft brand shapes, purely decorative. */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -end-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-white/[0.06]"
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-48 -start-32 -z-10 h-[420px] w-[420px] rounded-full bg-white/[0.04]"
    />

    <div className="content-container grid grid-cols-1 items-center gap-12 py-14 small:grid-cols-12 small:gap-10 small:py-16 medium:py-20">
      <div className="flex flex-col items-start small:col-span-6">
        <p
          className="eq-rise inline-flex items-center gap-x-3 rounded-full border border-white/15 bg-white/10 py-1.5 pe-4 ps-1.5 text-sm font-bold text-white backdrop-blur-sm"
          style={rise(0)}
        >
          <span className="rounded-full bg-equidentum-gold px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider text-equidentum-deep">
            New
          </span>
          Equidentum riding collection
        </p>

        <h1
          id="hero-title"
          className="eq-rise mt-6 text-balance text-[40px] font-extrabold leading-[1.1] tracking-tight xsmall:text-5xl small:text-[56px] medium:text-[64px]"
          style={rise(1)}
        >
          Gear that keeps up with{" "}
          <span className="text-equidentum-gold">every ride.</span>
        </h1>

        <p
          className="eq-rise mt-6 max-w-[34rem] text-lg font-light leading-8 text-white/85 small:text-xl small:leading-9"
          style={rise(2)}
        >
          Helmets, boots, gloves and protective wear for riders of every level,
          picked by the team that looks after your horses.
        </p>

        <div
          className="eq-rise mt-10 flex w-full flex-col gap-3 xsmall:w-auto xsmall:flex-row"
          style={rise(3)}
        >
          <LocalizedClientLink
            href="/store"
            className={`${PILL} ${FOCUS_RING} bg-white text-equidentum-deep hover:bg-equidentum-mist focus-visible:outline-white`}
            data-testid="hero-shop-button"
          >
            Shop the collection
            <ArrowRightMini aria-hidden className="rtl:rotate-180" />
          </LocalizedClientLink>
          <a
            href="#categories"
            className={`${PILL} ${FOCUS_RING} border border-white/60 font-normal text-white hover:bg-white/10 focus-visible:outline-white`}
          >
            Browse categories
          </a>
        </div>

        <ul
          className="eq-rise mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85"
          style={rise(4)}
        >
          {HERO_HIGHLIGHTS.map((highlight) => (
            <li key={highlight} className="flex items-center gap-x-2">
              <CheckCircleSolid aria-hidden className="shrink-0 text-equidentum-gold" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="eq-rise small:col-span-6" style={rise(2)}>
        <div className="relative mx-auto w-full max-w-[400px] small:me-8 medium:me-14">
          <ProductShot
            item={HERO_PRODUCTS.primary}
            sizes="(max-width: 1024px) 90vw, 400px"
            priority
            // The source photo is a 2:3 portrait padded to a square; a 2:3 card
            // with object-cover crops exactly the padding away.
            className="aspect-[2/3]"
          />

          {/* Product label, glass over the white card. */}
          <LocalizedClientLink
            href="/store"
            className={`${FOCUS_RING} absolute bottom-5 end-5 flex items-center gap-x-3 rounded-2xl bg-equidentum-deep/90 py-3 pe-4 ps-3 text-white shadow-lg backdrop-blur-md transition-colors duration-200 hover:bg-equidentum-deep focus-visible:outline-white`}
          >
            <span aria-hidden="true" className="h-9 w-1 rounded-full bg-equidentum-gold" />
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-equidentum-gold">
                {HERO_PRODUCTS.primary.category}
              </span>
              <span className="text-sm font-bold">{HERO_PRODUCTS.primary.title}</span>
            </span>
            <ArrowRightMini aria-hidden className="ms-1 rtl:rotate-180" />
          </LocalizedClientLink>

          {/* Supporting shots float around the main card on wide screens. */}
          <div className="absolute -end-8 top-10 hidden w-36 rotate-3 small:block medium:-end-14">
            <ProductShot
              item={HERO_PRODUCTS.secondary}
              sizes="144px"
              className="aspect-square ring-4 ring-white/15"
            />
          </div>
          <div className="absolute -start-16 top-1/2 hidden w-36 -rotate-3 small:block medium:-start-20">
            <ProductShot
              item={HERO_PRODUCTS.tertiary}
              sizes="144px"
              className="aspect-square ring-4 ring-white/15"
            />
          </div>
        </div>

        {/* Narrow screens: supporting shots sit in a row below instead. */}
        <div className="mt-4 grid grid-cols-2 gap-4 small:hidden">
          <ProductShot
            item={HERO_PRODUCTS.secondary}
            sizes="45vw"
            className="aspect-square"
          />
          <ProductShot
            item={HERO_PRODUCTS.tertiary}
            sizes="45vw"
            className="aspect-square"
          />
        </div>
      </div>
    </div>
  </section>
)

const SectionHeader = ({
  id,
  title,
  subtitle,
}: {
  id: string
  title: string
  subtitle?: string
}) => (
  <div className="mb-10 flex flex-col gap-4 xsmall:flex-row xsmall:items-end xsmall:justify-between">
    <div>
      <span
        aria-hidden="true"
        className="mb-4 block h-[3px] w-14 rounded-full bg-equidentum-gold"
      />
      <h2 id={id} className="text-2xl font-bold text-equidentum-ink small:text-[32px] small:leading-[40px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-equidentum-slate">{subtitle}</p>
      )}
    </div>
    <LocalizedClientLink
      href="/store"
      className={`${FOCUS_RING} group inline-flex min-h-[44px] items-center gap-x-1 self-start text-base font-bold text-equidentum hover:text-equidentum-brand focus-visible:outline-equidentum xsmall:self-auto`}
    >
      View all
      <ArrowRightMini
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none rtl:rotate-180"
      />
    </LocalizedClientLink>
  </div>
)

const CategoryTile = ({ category }: { category: HorseCategory }) => (
  <LocalizedClientLink
    href="/store"
    className={`${FOCUS_RING} group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#efe8f0] bg-white transition-shadow duration-200 hover:shadow-[0_22px_40px_-28px_rgba(74,19,84,0.35)] focus-visible:outline-equidentum`}
  >
    <div className="relative aspect-square bg-equidentum-mist">
      <Image
        src={category.image}
        alt=""
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
    </div>
    <div className="flex flex-1 items-start justify-between gap-x-2 p-4 small:p-5">
      <div>
        <p className="text-lg font-bold text-equidentum-ink group-hover:text-equidentum-deep">
          {category.name}
        </p>
        <p className="mt-1 text-sm text-equidentum-slate">{category.description}</p>
      </div>
      <ArrowRightMini
        aria-hidden
        className="mt-1 shrink-0 text-equidentum-brand transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none rtl:rotate-180"
      />
    </div>
  </LocalizedClientLink>
)

const Categories = () => (
  <section
    id="categories"
    aria-labelledby="categories-title"
    className="content-container scroll-mt-20 py-16 small:py-24"
  >
    <SectionHeader
      id="categories-title"
      title="Shop by category"
      subtitle="Kit for the rider, sorted by what you need."
    />
    <ul className="grid grid-cols-2 gap-4 small:grid-cols-4 small:gap-6">
      {CATEGORIES.map((category) => (
        <li key={category.name}>
          <CategoryTile category={category} />
        </li>
      ))}
    </ul>
  </section>
)

const FeaturedCard = ({ item }: { item: HorseAccessory }) => (
  <LocalizedClientLink
    href="/store"
    className={`${FOCUS_RING} group block rounded-[28px] focus-visible:outline-equidentum`}
  >
    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white shadow-elevation-card-rest transition-shadow duration-200 group-hover:shadow-[0_22px_40px_-28px_rgba(74,19,84,0.35)]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
    </div>
    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-equidentum-brand">
      {item.category}
    </p>
    <p className="mt-1 text-base text-equidentum-ink group-hover:text-equidentum-deep">
      {item.title}
    </p>
  </LocalizedClientLink>
)

const Featured = () => (
  <section aria-labelledby="featured-title" className="bg-equidentum-mist">
    <div className="content-container py-16 small:py-24">
      <SectionHeader id="featured-title" title="Rider favourites" />
      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 small:grid-cols-3 small:gap-x-6 small:gap-y-14">
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
  <section aria-label="Why shop with Equidentum" className="content-container py-16 small:py-24">
    <ul className="grid grid-cols-1 gap-4 small:grid-cols-3 small:gap-6">
      {BENEFITS.map((benefit) => (
        <li
          key={benefit.title}
          className="flex flex-col gap-3 rounded-[28px] border border-[#efe8f0] bg-white p-7"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-equidentum-mist">
            <CheckCircleSolid aria-hidden className="text-equidentum-deep" />
          </span>
          <p className="text-lg font-bold text-equidentum-ink">{benefit.title}</p>
          <p className="text-sm leading-6 text-equidentum-slate">{benefit.description}</p>
        </li>
      ))}
    </ul>
  </section>
)

const ClosingCta = () => (
  <section className="content-container pb-16 small:pb-24">
    <div className="relative isolate flex flex-col items-center gap-y-6 overflow-hidden rounded-[32px] bg-gradient-to-br from-equidentum-deep via-[#5c2266] to-equidentum-brand px-6 py-16 text-center text-white small:py-20">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -end-16 -z-10 h-72 w-72 rounded-full bg-white/[0.06]"
      />
      <span aria-hidden="true" className="h-[3px] w-14 rounded-full bg-equidentum-gold" />
      <h2 className="max-w-xl text-balance text-3xl font-extrabold leading-tight small:text-4xl">
        Ready for your next ride?
      </h2>
      <p className="max-w-md text-lg font-light text-white/85">
        Find the right fit in helmets, boots and gloves, delivered to your door.
      </p>
      <LocalizedClientLink
        href="/store"
        className={`${PILL} ${FOCUS_RING} bg-white text-equidentum-deep hover:bg-equidentum-mist focus-visible:outline-white`}
      >
        Shop the collection
        <ArrowRightMini aria-hidden className="rtl:rotate-180" />
      </LocalizedClientLink>
    </div>
  </section>
)

export default function HorseAccessoriesTemplate() {
  return (
    <div data-testid="horse-accessories-page" className="font-sans">
      <Hero />
      <Categories />
      <Featured />
      <Benefits />
      <ClosingCta />
    </div>
  )
}
