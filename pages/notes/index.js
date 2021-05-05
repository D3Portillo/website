import Footer from "@/components/Footer"
import getNotes, { Note } from "@/services/getNotes"
import ContactForm from "@/components/ContactForm"
import Notes from "@/components/Notes"
import PageContainer from "@/components/PageContainer"
import SeoTags from "@/components/SeoTags"
import getDomain from "@/services/getDomain"
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
      <PageContainer isFull withNavigation>
        <Notes notes={notes} />
      </PageContainer>
      <ContactForm />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const notes = await getNotes()
  return {
    props: { notes },
  }
}
