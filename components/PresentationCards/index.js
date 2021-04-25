import Link from "@/components/Link"
import PageSeparator from "@/components/PageSeparator"
import Title from "@/components/Title"
import Image from "@/components/Image"
import mediumZoom from "medium-zoom"
import { useEffect } from "react"
const withZoom = "withZoom"
const imageClass = `w-full border ${withZoom} hover:opacity-90 hover:shadow`

export default function Home() {
  useEffect(() => {
    mediumZoom(`.${withZoom}`)
  }, [])
  return (
    <>
      <Title>PRESENTATION CARDS</Title>
      <div className="flex flex-col space-y-8 items-start max-w-2xl">
        <Image className={imageClass} src="/cards/back.svg" />
        <Image className={imageClass} src="/cards/front.svg" />
        <Link
          title="Download cards as zip"
          href="/cards/presentation_cards.zip"
          download
        >
          Download as zip
        </Link>
      </div>
      <PageSeparator />
    </>
  )
}
