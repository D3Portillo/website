import Title from "@/components/Title"
import Paragraph from "@/components/Paragraph"
import Link from "@/components/Link"
export default function Bio() {
  return (
    <>
      <Title>A SHORT BIO</Title>
      <Paragraph>
        I’m 22, all stuff related to nowadays gadgets makes me go crazy.
      </Paragraph>
      <Paragraph>
        My current job is to be Chief Web Officer at the SPOT team 🤘. Some of
        my hobbies are playing around with code, reading, watch anime or playing
        videogames on spare time.
      </Paragraph>
      <Paragraph>
        I really love automation related topics, Design Systems, DataViz,
        Flutter and Rust.
      </Paragraph>
      <Paragraph>
        Blog?, Sure!, I write stuff Here ― <Link href="/notes">Notes</Link>
      </Paragraph>
    </>
  )
}
