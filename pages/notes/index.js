import getNotes, { Note } from "@/helpers/getNotes"
import ContactForm from "@/components/ContactForm"
import Notes from "@/components/Notes"
import FullWidthContainer from "@/components/FullWidthContainer"
import SeoTags from "@/components/SeoTags"
import getDomain from "@/helpers/getDomain"
const IMAGE = getDomain("/seo/notes.png")
const DESCRIPTION =
  "Estas son notas que hago y comparto con ustedes y NO, no es un Blog. A veces su contenido es en inglés."

/**
 * @param {{ notes: Note[] }} props
 */
export default function NotesPage({ notes = [] }) {
  return (
    <>
      <SeoTags
        title="Denny Portillo | Notes"
        description={DESCRIPTION}
        image={IMAGE}
        url={getDomain("/notes")}
      />
      <FullWidthContainer className="-mt-12">
        <Notes notes={notes} />
      </FullWidthContainer>
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
