import Head from "next/head"
import PresentationCards from "@/components/PresentationCards"
import TopNavigation from "@/components/TopNavigation"

export default function CardsPage() {
  return (
    <>
      <Head>
        <title>Denny Portillo | D3Portillo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopNavigation />
      <div className="px-10">
        <PresentationCards />
      </div>
    </>
  )
}
