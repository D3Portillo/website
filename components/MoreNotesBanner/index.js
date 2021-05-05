import Link from "@/components/Link"
import Title from "@/components/Title"

export default function MoreNotesBAnner() {
  return (
    <div className="mx-2 my-24 flex items-center justify-center">
      <div className="border-4 border-black rounded-md px-7 py-10 lg:p-16 w-full max-w-3xl">
        <Title>READ MORE OF MY NOTES</Title>
        <Link href="/notes">See more notes</Link>
      </div>
    </div>
  )
}
