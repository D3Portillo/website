import getNote from "@/services/getNote"
import getNotes, { Note } from "@/services/getNotes"
import Footer from "@/components/Footer"
import PageSeparator from "@/components/PageSeparator"
import PageContainer from "@/components/PageContainer"
import mediumZoom from "medium-zoom"
import { useEffect } from "react"

export default function NotePage({ note = Note }) {
  const { body } = note
  useEffect(() => {
    mediumZoom(`.content img`)
  }, [])
  return (
    <>
      <PageContainer withNavigation>
        <div className="content" dangerouslySetInnerHTML={{ __html: body }} />
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
