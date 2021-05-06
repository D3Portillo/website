import Home from "@/components/Home"
import Bio from "@/components/Bio"
import PageSeparator from "@/components/PageSeparator"
import Showcase from "@/components/Showcase"
import Skills from "@/components/Skills"
import Social from "@/components/Social"
import Moar from "@/components/Moar"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import getShowcaseItems from "@/helpers/getShowcaseItems"
import PageContainer from "@/components/PageContainer"
import SeoTags from "@/components/SeoTags"
import getCV from "@/helpers/getCV"

export default function HomePage({ showcaseItems = [], cvURL = "" }) {
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
        <Moar cvURL={cvURL} />
        <PageSeparator />
      </PageContainer>
      <ContactForm />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const showcaseItems = await getShowcaseItems()
  const cvURL = await getCV()
  return {
    props: {
      showcaseItems,
      cvURL,
      revalidate: 5,
    },
  }
}
