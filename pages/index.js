import Head from "next/head"
import Home from "@/components/Home"
import Bio from "@/components/Bio"
import PageSeparator from "@/components/PageSeparator"
import Showcase from "@/components/Showcase"
import Skills from "@/components/Skills"
import Social from "@/components/Social"
import Moar from "@/components/Moar"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import getShowcaseItems from "@/services/getShowcaseItems"
import PageContainer from "@/components/PageContainer"
import SeoTags from "@/components/SeoTags"

export default function HomePage({ showcaseItems = [] }) {
  return (
    <>
      <SeoTags />
      <Home />
      <PageSeparator />
      <PageContainer>
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
      </PageContainer>
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
