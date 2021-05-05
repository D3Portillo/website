import Head from "next/head"
import getDomain from "@/services/getDomain"
export const TITLE = "Denny Portillo | D3Portillo"
const DESCRIPTION =
  "Denny Portillo. I Love JavaScript and playing around with the Web Universe."
const IMAGE = getDomain("/seo/default.png")
const DEFAULT_URL = getDomain()

export default function SeoTags({
  url = DEFAULT_URL,
  title = TITLE,
  image = IMAGE,
  description = DESCRIPTION,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="D3Portillo" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="d3portillo" />
      <meta name="twitter:creator" content="d3portillo" />
    </Head>
  )
}
