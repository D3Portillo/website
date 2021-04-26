import Head from "next/head"
export const TITLE = "Denny Portillo | D3Portillo"
const DESCRIPTION =
  "Denny Portillo. I Love JavaScript and playing around with the Web Universe."
const IMAGE = "https://d3portillo.me/seo/default.png"

export default function SeoTags({
  url = "https://d3portillo.me",
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
