import Goodies from "@/components/Goodies"
import getGoodies from "@/helpers/getGoodies"
import PageSeparator from "@/components/PageSeparator"
import FullWidthContainer from "@/components/FullWidthContainer"
import SeoTags from "@/components/SeoTags"
import getDomain from "@/helpers/getDomain"

export default function GoodiesPage({ goodies = [] }) {
  return (
    <>
      <SeoTags
        title="Denny Portillo | Goodies"
        url={getDomain("/goodies")}
        image={getDomain("/goodies/seo/goodies.png")}
      />
      <FullWidthContainer>
        <Goodies items={goodies} />
      </FullWidthContainer>
      <PageSeparator />
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
