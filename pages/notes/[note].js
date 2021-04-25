import getNote from "@/services/getNote"
import getNotes, { Note } from "@/services/getNotes"
import Footer from "@/components/Footer"
import PageSeparator from "@/components/PageSeparator"
import PageContainer from "@/components/PageContainer"
import mediumZoom from "medium-zoom"
import NullComponent from "@/components/NullComponent"
import Image from "@/components/Image"
import { useEffect } from "react"
const NOTE_CONTENT = "NOTE_CONTENT"
const addZoom = () => mediumZoom(`.${NOTE_CONTENT} img`)

export default function NotePage({ note = Note }) {
  const { body, cover } = note
  const CoverSeparator = cover ? PageSeparator : NullComponent
  useEffect(addZoom, [])
  return (
    <>
      <PageContainer withNavigation isFull={cover}>
        <Image hidden={!cover} src={cover} className="w-full" />
      </PageContainer>
      <CoverSeparator />
      <PageContainer>
        <div
          className={NOTE_CONTENT}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </PageContainer>
      <PageSeparator />
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const note = await getNote(params.note)
  return {
    props: { note },
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
