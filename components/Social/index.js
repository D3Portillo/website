import Title from "@/components/shared/Title"
import Link from "@/components/shared/Link"
import Mood from "./Mood"

export default function Social() {
  return (
    <>
      <Title>SOCIAL</Title>
      <Mood />
      <div className="flex items-start flex-col space-y-1 mt-12">
        <Link href="https://twitter.com/d3portillo">Find me on Twitter</Link>
        <Link href="https://github.com/d3portillo">Follow my Github</Link>
        <Link href="https://linkedin.com/in/d3portillo">My LinkedIn</Link>
      </div>
    </>
  )
}
