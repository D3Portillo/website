import { TITLE } from "@/components/SeoTags"
import Head from "next/head"

export default function LayoutContainer({ children = null }) {
  return (
    <div className="text-xl px-8 lg:px-20 lg:text-4xl">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>{TITLE}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}
