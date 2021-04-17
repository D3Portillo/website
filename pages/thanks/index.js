import Footer from "@/components/Footer"
import Link from "@/components/shared/Link"
import Title from "@/components/shared/Title"
import PageSeparator from "@/components/shared/PageSeparator"

export default function ThanksPage() {
  return (
    <>
      <div className="min-h-screen">
        <Title>Thank You!</Title>
        <p>
          Your message is on the way to my Inbox 😊.
          <br />
          <Link.Minimal href="/" target="_self">
            Go back to Home
          </Link.Minimal>
        </p>
      </div>
      <Footer />
    </>
  )
}
