import NullComponent from "@/components/NullComponent"
import NoFooterLayout from "@/layouts/NoFooterLayout"
import { useRouter } from "next/router"

export default function PreviewPDFPage() {
  const { query } = useRouter()
  const { url } = query
  return (
    <div className="fixed inset-0 z-10">
      <embed
        className="w-screen h-screen"
        src={`${url}#toolbar=0&navpanes=0&scrollbar=0`}
        type="application/pdf"
        width="100%"
        height="480px"
      />
    </div>
  )
}

PreviewPDFPage.Layout = NoFooterLayout
PreviewPDFPage.Navigation = NullComponent
