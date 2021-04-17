import Title from "@/components/shared/Title"
import P from "@/components/shared/P"
import Link from "../shared/Link"
export default function Bio() {
  return (
    <>
      <Title>A SHORT BIO</Title>
      <P>I’m 22, all stuff related to nowadays gadgets makes me go crazy.</P>
      <P>
        My current job is to be Chief Web Officer at the SPOT team 🤘. Some of
        my hobbies are playing around with code, reading, watch anime or playing
        videogames on spare time.
      </P>
      <P>
        I really love automation related topics, Design Systems, DataViz,
        Flutter and Rust.
      </P>
      <P>
        Blog?, Sure!, I write stuff Here ― <Link href="/notes">Notes</Link>
      </P>
    </>
  )
}
