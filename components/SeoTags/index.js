import Head from "next/head"
const DEFAULT_TITLE = "D3Portillo | Denny Portillo"
const DEFAULT_DESCRIPTION = ""

export default function SeoTags({
  url = "https://d3portillo.me",
  title = DEFAULT_TITLE,
  image,
  description = DEFAULT_DESCRIPTION,
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

      <link rel="canonical" href="https://d3portillo.me" />
    </Head>
  )
}
