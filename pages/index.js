import Home from "@/components/Home"
import Bio from "@/components/Bio"
import PageSeparator from "@/components/PageSeparator"
import Showcase from "@/components/Showcase"
import Skills from "@/components/Skills"
import Social from "@/components/Social"
import Moar from "@/components/Moar"
import ContactForm from "@/components/ContactForm"
import getShowcaseItems from "@/helpers/getShowcaseItems"
import SeoTags from "@/components/SeoTags"
import getCV from "@/helpers/getCV"
import NullComponent from "@/components/NullComponent"

export default function HomePage({ showcaseItems = [], cvURL = "" }) {
  return (
    <>
      <SeoTags />
      <Home />
      <PageSeparator />
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
      <ContactForm />
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

HomePage.Navigation = NullComponent
