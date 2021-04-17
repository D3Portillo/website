import Head from "next/head"
import Home from "@/components/Home"
import Bio from "@/components/Bio"
import PageSeparator from "@/components/shared/PageSeparator"
import Showcase from "@/components/Showcase"
import Skills from "@/components/Skills"
import Social from "@/components/Social"
import Moar from "@/components/Moar"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import getShowcaseItems from "@/services/getShowcaseItems"

export default function HomePage({ showcaseItems = [] }) {
  return (
    <>
      <Head>
        <title>Denny Portillo | D3Portillo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home />
      <PageSeparator />
      <div className="px-10">
        <Bio />
        <PageSeparator />
        <Showcase items={showcaseItems} />
        <PageSeparator />
        <Skills />
        <PageSeparator />
        <Social />
        <PageSeparator />
        <Moar />
        <PageSeparator />
      </div>
      <ContactForm />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const showcaseItems = await getShowcaseItems()
  return {
    props: {
      showcaseItems,
      revalidate: 5,
    },
  }
}
