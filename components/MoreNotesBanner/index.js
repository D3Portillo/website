import Link from "@/components/Link"
import Title from "@/components/Title"

export default function MoreNotesBAnner() {
  return (
    <div className="-mx-4 lg:mx-0 mt-24 mb-8 lg:mb-24 flex items-center justify-center">
      <div className="border-4 border-black rounded-md px-7 py-10 lg:p-16 w-full max-w-3xl">
        <Title>
          <span className="mr-4" role="image" aria-label="wave hand emoji">
            👋
          </span>
          HEY{" — "}
          <br />
          WANT TO READ MORE NOTES?
        </Title>
        <Link href="/notes">Sure, take me there</Link>
      </div>
    </div>
  )
}
