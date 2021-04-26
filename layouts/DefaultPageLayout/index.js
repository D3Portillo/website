import Head from "next/head"
import { TITLE } from "@/components/SeoTags"

export default function DefaultPageLayout({ children = null }) {
  return (
    <div className="text-xl pt-10 lg:px-10 lg:text-4xl pb-0">
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}
