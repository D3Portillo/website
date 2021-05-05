import Goodies from "@/components/Goodies"
import getGoodies from "@/services/getGoodies"
import Footer from "@/components/Footer"
import PageSeparator from "@/components/PageSeparator"
import PageContainer from "@/components/PageContainer"
import SeoTags from "@/components/SeoTags"
import getDomain from "@/services/getDomain"

export default function GoodiesPage({ goodies = [] }) {
  return (
    <>
      <SeoTags
        title="Denny Portillo | Goodies"
        url={getDomain("/goodies")}
        image={getDomain("/goodies/seo/goodies.png")}
      />
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
