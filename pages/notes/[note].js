import getNote from "@/services/getNote"
import getNotes, { Note } from "@/services/getNotes"
import getImageCover from "@/services/getImageCover"
import addBufferToPublic from "@/services/addBufferToPublic"
import Footer from "@/components/Footer"
import PageSeparator from "@/components/PageSeparator"
import PageContainer from "@/components/PageContainer"
import mediumZoom from "medium-zoom"
import NullComponent from "@/components/NullComponent"
import Image from "@/components/Image"
import SeoTags from "@/components/SeoTags"
import { useEffect } from "react"
import MoreNotesBAnner from "@/components/MoreNotesBanner"
const NOTE_CONTENT = "NOTE_CONTENT"
const addZoom = () => mediumZoom(`.${NOTE_CONTENT} img`)

export default function NotePage({ note = Note }) {
  const { body, cover, description, title, path, seoImage } = note
  const fullPath = `https://d3portillo.me/notes/${path}`
  const fullTitle = `Notes | ${title}`
  const CoverSeparator = cover ? PageSeparator : NullComponent
  useEffect(addZoom, [])
  return (
    <>
      <SeoTags
        title={fullTitle}
        description={description}
        image={seoImage}
        url={fullPath}
      />
      <PageContainer isFull withNavigation hidden={!cover}>
        <Image src={cover} className="w-full" />
      </PageContainer>
      <CoverSeparator />
      <PageContainer>
        <div
          className={`${NOTE_CONTENT} max-w-6xl mx-auto`}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </PageContainer>
      <PageSeparator />
      <MoreNotesBAnner />
      <PageSeparator />
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const note = await getNote(params.note)
  const { cover, path, title } = note
  let seoImage = cover
  if (!cover) {
    const coverBuffer = await getImageCover(title)
    seoImage = await addBufferToPublic({
      path: `/notes/${path}.png`,
      content: coverBuffer,
    })
  }
  return {
    props: { note: { ...note, seoImage } },
  }
}

export async function getStaticPaths() {
  const notes = await getNotes()
  const paths = notes.map(({ path }) => {
    return { params: { note: path } }
  })
  return {
    paths,
    fallback: false,
  }
}
