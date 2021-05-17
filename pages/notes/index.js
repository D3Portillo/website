import getNotes, { Note } from "@/helpers/getNotes"
import ContactForm from "@/components/ContactForm"
import Notes from "@/components/Notes"
import FullWidthContainer from "@/components/FullWidthContainer"
import SeoTags from "@/components/SeoTags"
import getDomain from "@/helpers/getDomain"
import PageSeparator from "@/components/PageSeparator"
import Link from "@/components/Link"
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
      <PageSeparator />
      <b style={{ fontSize: "clamp(8rem, 50vmin, 24vw)", lineHeight: "74%" }}>ARE YOU BORED?</b>
      <div className="flex mt-8">
        <Link>
          Grab a <strike>Random</strike> read
        </Link>
      </div>
      <PageSeparator />
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
