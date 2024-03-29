import getNotes, { Note } from "@/helpers/getNotes"
import ContactForm from "@/components/ContactForm"
import Notes from "@/components/Notes"
import FullWidthContainer from "@/components/FullWidthContainer"
import SeoTags from "@/components/SeoTags"
import getDomain from "@/helpers/getDomain"
import PageSeparator from "@/components/PageSeparator"
import Link from "@/components/Link"
import { useMemo } from "react"
const IMAGE = getDomain("/seo/notes.png")
const DESCRIPTION =
  "Estas son notas que hago y comparto con ustedes y NO, no es un Blog. A veces su contenido es en inglés."

/**
 * @param {{ notes: Note[] }} props
 */
export default function NotesPage({ notes = [] }) {
  const notesURL = getDomain("/notes")
  const notesPath = useMemo(() => {
    return notes.map(({ path }) => `${notesURL}/${path}`)
  }, [notes])

  function goToRandomRead() {
    const randomIndex = notesPath.length * Math.random()
    const url = notesPath[Math.floor(randomIndex)]
    window.open(url, "_blank")
  }

  return (
    <>
      <SeoTags
        title="Denny Portillo | Notes"
        description={DESCRIPTION}
        image={IMAGE}
        url={notesURL}
      />
      <FullWidthContainer className="-mt-12">
        <Notes notes={notes} />
      </FullWidthContainer>
      <PageSeparator />
      <b style={{ fontSize: "clamp(6rem, 50vmin, 24vw)", lineHeight: "74%" }}>
        ARE YOU BORED?
      </b>
      <div className="flex mt-8 mb-24">
        <Link href="#0" target="_self" onClick={goToRandomRead}>
          Grab a <strike>Random</strike> read
        </Link>
      </div>
      <ContactForm />
    </>
  )
}

export async function getStaticProps() {
  const notes = await getNotes({
    matterOnly: true,
  })
  return {
    props: { notes },
  }
}
