import Head from "next/head"
import PresentationCards from "@/components/PresentationCards"
import PageContainer from "@/components/PageContainer"
import Footer from "@/components/Footer"

export default function CardsPage() {
  return (
    <>
      <PageContainer withNavigation>
        <PresentationCards />
      </PageContainer>
      <Footer />
    </>
  )
}
