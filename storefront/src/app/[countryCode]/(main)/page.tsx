import { Metadata } from "next"

import HorseAccessoriesTemplate from "@modules/horse-accessories/templates"
import { getStoreName } from "@lib/util/env"

export const metadata: Metadata = {
  title: `Horse Riding Gear & Accessories | ${getStoreName()}`,
  description:
    "Helmets, boots, gloves and protective wear for riders of every level.",
}

export default function Home() {
  return <HorseAccessoriesTemplate />
}
