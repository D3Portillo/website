import Link from "@/components/Link"
import Title from "@/components/Title"

export default function MoreNotesBAnner() {
  return (
    <div className="-mx-6 lg:mx-0 my-24 flex items-center justify-center">
      <div className="border-4 border-black rounded-md px-7 py-10 lg:p-16 w-full max-w-3xl">
        <Title>READ MORE OF MY NOTES</Title>
        <Link href="/notes">Sure, take me there</Link>
      </div>
    </div>
  )
}
