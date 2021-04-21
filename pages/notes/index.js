import Footer from "@/components/Footer"
import getNotes, { Note } from "@/services/getNotes"
import ContactForm from "@/components/ContactForm"
import Notes from "@/components/Notes"

/**
 * @param {{ notes: Note[] }} props
 */
export default function NotesPage({ notes = [] }) {
  return (
    <>
      <Notes notes={notes} />
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
