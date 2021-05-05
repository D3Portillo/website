import { useMemo } from "react"
import { Note as NoteType } from "@/services/getNotes"
import { format } from "date-fns"
import Note from "./Note"
import styled from "styled-components"
import { screens } from "tailwindcss/defaultTheme"

const HeroItem = styled.div`
  .hidden {
    display: none;
  }
`

const Grid = styled.div`
  @media (min-width: ${screens.lg}) {
    column-count: 2;
    column-gap: 0;
  }
`

/**
 * @param {{ notes: NoteType[] }} props
 */
export default function Notes({ notes = [] }) {
  const $notes = useMemo(() => {
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
    return { first, rest }
  })

  return (
    <>
      <HeroItem>{$notes.first}</HeroItem>
      <Grid>{$notes.rest}</Grid>
    </>
  )
}
