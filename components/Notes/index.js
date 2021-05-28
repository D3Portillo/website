import { useMemo } from "react"
import { Note as NoteType } from "@/helpers/getNotes"
import { format } from "date-fns"
import Note from "./Note"
import styled from "styled-components"
import onMedia from "@/constants/onMedia"

const Grid = styled.div`
  ${onMedia.lg} {
    column-count: 2;
    column-gap: 0;
  }
`

/**
 * @param {{ notes: NoteType[] }} props
 */
export default function Notes({ notes = [] }) {
  const notesRender = useMemo(() => {
    const [first, ...rest] = notes.map((note) => {
      const { created_at, description, title, labels, path } = note
      const date = format(new Date(created_at), "MMMM dd")
      return (
        <Note
          key={created_at + title}
          created={date}
          description={description}
          title={title}
          path={path}
          labels={labels}
        />
      )
    })
    return {
      first,
      rest,
    }
  })

  return (
    <>
      {notesRender.first}
      <Grid>{notesRender.rest}</Grid>
    </>
  )
}
