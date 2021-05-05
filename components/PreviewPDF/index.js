import Link from "next/link"

/**
 * Component to show a new page and open an url
 * from an airtable url
 */
export default function PreviewPDF({ children = null, url = "" }) {
  return (
    <Link
      passHref
      href={{
        pathname: "/preview-pdf",
        query: {
          url,
        },
      }}
    >
      {children}
    </Link>
  )
}
