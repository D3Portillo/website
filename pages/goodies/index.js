import Goodies from "@/components/Goodies"
import getGoodies from "@/services/getGoodies"
import Head from "next/head"
import Footer from "@/components/Footer"
import PageSeparator from "@/components/PageSeparator"
import PageContainer from "@/components/PageContainer"

export default function GoodiesPage({ goodies = [] }) {
  return (
    <>
      <Head>
        <title>Denny Portillo | D3Portillo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageContainer withNavigation>
        <Goodies items={goodies} />
      </PageContainer>
      <PageSeparator />
      <Footer />
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
