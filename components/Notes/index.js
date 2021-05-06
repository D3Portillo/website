import { useMemo } from "react"
import { Note as NoteType } from "@/helpers/getNotes"
import { format } from "date-fns"
import Note from "./Note"
import styled from "styled-components"
import onMedia from "@/constants/onMedia"

const HeroItem = styled.div`
  ${onMedia.lg} {
    .hidden {
      display: none;
      opacity: 0;
    }
  }
`

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
    <div className="lg:-mx-px">
      <HeroItem>{$notes.first}</HeroItem>
      <Grid>{$notes.rest}</Grid>
    </div>
  )
}
