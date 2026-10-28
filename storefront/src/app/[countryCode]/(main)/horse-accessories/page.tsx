import { Metadata } from "next"

import HorseAccessoriesTemplate from "@modules/horse-accessories/templates"
import { getStoreName } from "@lib/util/env"

export const metadata: Metadata = {
  title: `Horse Riding Accessories | ${getStoreName()}`,
  description:
    "Helmets, boots, gloves and protective gear for riders of every level.",
}

export default function HorseAccessoriesPage() {
  return <HorseAccessoriesTemplate />
}
