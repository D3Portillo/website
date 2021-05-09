import Footer from "@/components/Footer"
import LayoutContainer from "@/layouts/LayoutContainer"

export default function NoFooterLayout({ children = null }) {
  return (
    <LayoutContainer>
      {children}
      <Footer />
    </LayoutContainer>
  )
}
