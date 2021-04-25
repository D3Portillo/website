import Footer from "@/components/Footer"
import Link from "@/components/Link"
import PageContainer from "@/components/PageContainer"
import Title from "@/components/Title"
import Paragraph from "@/components/Paragraph"

export default function ThanksPage() {
  return (
    <>
      <PageContainer>
        <div className="min-h-screen">
          <Title>Thank You!</Title>
          <Paragraph>
            Your message is on the way to my Inbox 😊.
            <br />
            <Link.Minimal href="/" target="_self">
              Go to Homepage
            </Link.Minimal>
          </Paragraph>
        </div>
      </PageContainer>
      <Footer />
    </>
  )
}
