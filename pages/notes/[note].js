import getNote from "@/helpers/getNote"
import getNotes, { Note } from "@/helpers/getNotes"
import getImageCover from "@/helpers/getImageCover"
import addBufferToPublic from "@/helpers/addBufferToPublic"
import PageSeparator from "@/components/PageSeparator"
import FullWidthContainer from "@/components/FullWidthContainer"
import mediumZoom from "medium-zoom"
import NullComponent from "@/components/NullComponent"
import SeoTags from "@/components/SeoTags"
import { useEffect } from "react"
import MoreNotesBanner from "@/components/MoreNotesBanner"
import getDomain from "@/helpers/getDomain"
import Image from "@/components/Image"
const NOTE_CONTENT = "NOTE_CONTENT"
const addZoom = () => mediumZoom(`.${NOTE_CONTENT} img`)
const DefaultCoverSeparator = () => <div className="mt-12 lg:mt-20" />

export default function NotePage({ note = Note }) {
  const { body, cover, coverPlaceholder, description, title, path, seoImage } =
    note
  const fullPath = getDomain(`/notes/${path}`)
  const fullTitle = `Notes | ${title}`
  const CoverSeparator = cover ? DefaultCoverSeparator : NullComponent
  useEffect(addZoom, [])
  return (
    <>
      <SeoTags
        title={fullTitle}
        description={description}
        image={seoImage}
        url={fullPath}
      />
      <FullWidthContainer className={coverPlaceholder && "-mt-12"}>
        {coverPlaceholder ? (
          <Image
            width={1200}
            height={630}
            placeholder={coverPlaceholder}
            src={cover}
            layout="responsive"
            className="w-full"
          />
        ) : null}
      </FullWidthContainer>
      <CoverSeparator />
      <div
        className={`${NOTE_CONTENT} max-w-6xl mx-auto`}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <PageSeparator className="hidden lg:block" />
      <MoreNotesBanner />
      <PageSeparator />
    </>
  )
}

export async function getStaticProps({ params }) {
  const note = await getNote(params.note)
  const { cover, path, title } = note
  let seoImage = cover
  if (!cover) {
    const coverBuffer = await getImageCover(title)
    seoImage = getDomain(
      await addBufferToPublic({
        path: `/notes/${path}.png`,
        content: coverBuffer,
      })
    )
  }
  return {
    props: { note: { ...note, seoImage } },
  }
}

export async function getStaticPaths() {
  const notes = await getNotes({
    matterOnly: true,
  })
  const paths = notes.map(({ path }) => {
    return { params: { note: path } }
  })
  return {
    paths,
    fallback: false,
  }
}
