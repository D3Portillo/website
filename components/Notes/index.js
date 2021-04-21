import { useMemo } from "react"
import { Note as NoteType } from "@/services/getNotes"
import { format } from "date-fns"
import Footer from "@/components/Footer"
import Note from "./Note"
import ContactForm from "@/components/ContactForm"
import styled from "styled-components"
import PageContainer from "@/components/PageContainer"
const Grid = styled.div`
  column-count: 2;
  column-gap: 0;
`

/**
 * @param {{ notes: NoteType[] }} props
 */
export default function Notes({ notes = [] }) {
  const [firstNote, restNotes] = useMemo(() => {
    const [first, ...rest] = notes.map((note) => {
      const { created_at, description, cover, title, labels, path } = note
      const date = format(new Date(created_at), "MMMM dd.yy")
      return (
        <Note
          created={date}
          description={description}
          cover={cover}
          title={title}
          path={path}
          labels={labels}
        />
      )
    })
    return [first, rest]
  })

  return (
    <>
      <PageContainer isFull withNavigation>
        {firstNote}
        <Grid>{restNotes}</Grid>
      </PageContainer>
      <ContactForm />
      <Footer />
    </>
  )
}
