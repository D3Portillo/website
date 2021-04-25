import Footer from "@/components/Footer"
import getNotes, { Note } from "@/services/getNotes"
import ContactForm from "@/components/ContactForm"
import Notes from "@/components/Notes"
import PageContainer from "@/components/PageContainer"

/**
 * @param {{ notes: Note[] }} props
 */
export default function NotesPage({ notes = [] }) {
  return (
    <>
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
