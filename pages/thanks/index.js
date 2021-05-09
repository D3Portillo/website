import Link from "@/components/Link"
import Title from "@/components/Title"
import Paragraph from "@/components/Paragraph"
import NullComponent from "@/components/NullComponent"

export default function ThanksPage() {
  return (
    <div className="min-h-screen pt-20">
      <Title>Thank You!</Title>
      <Paragraph>
        Your message is on the way to my Inbox 😊.
        <br />
        <Link.Minimal href="/" target="_self">
          Go to Homepage
        </Link.Minimal>
      </Paragraph>
    </div>
  )
}

ThanksPage.Navigation = NullComponent
