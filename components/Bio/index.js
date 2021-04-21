import Title from "@/components/Title"
import Text from "@/components/Text"
import Link from "@/components/Link"
export default function Bio() {
  return (
    <>
      <Title>A SHORT BIO</Title>
      <Text>
        I’m 22, all stuff related to nowadays gadgets makes me go crazy.
      </Text>
      <Text>
        My current job is to be Chief Web Officer at the SPOT team 🤘. Some of
        my hobbies are playing around with code, reading, watch anime or playing
        videogames on spare time.
      </Text>
      <Text>
        I really love automation related topics, Design Systems, DataViz,
        Flutter and Rust.
      </Text>
      <Text>
        Blog?, Sure!, I write stuff Here ― <Link href="/notes">Notes</Link>
      </Text>
    </>
  )
}
