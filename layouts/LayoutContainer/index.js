import { TITLE } from "@/components/SeoTags"
import Head from "next/head"

export default function LayoutContainer({ children = null }) {
  return (
    <div className="text-xl px-10 lg:px-20 lg:text-4xl">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}
