import Goodies from "@/components/Goodies"
import getGoodies from "@/services/getGoodies"
import Head from "next/head"
import Footer from "@/components/Footer"
import PageSeparator from "@/components/shared/PageSeparator"
import TopNavigation from "@/components/TopNavigation"

export default function GoodiesPage({ goodies = [] }) {
  return (
    <>
      <Head>
        <title>Denny Portillo | D3Portillo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopNavigation />
      <div className="px-10">
        <Goodies items={goodies} />
      </div>
      <PageSeparator />
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  const goodies = await getGoodies()
  return {
    props: {
      goodies,
      revalidate: 5,
    },
  }
}
