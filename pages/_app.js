import DefaultLayout from "@/layouts/DefaultLayout"
import dynamic from "next/dynamic"
import "../styles/globals.css"
import "../styles/prism.css"
const DefaultNavigation = dynamic(() => import("@/components/TopNavigation"), {
  ssr: false,
  loading: () => {
    return <div style={{ minHeight: "7rem" }} />
  },
})

function App({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  const Navigation = Component.Navigation || DefaultNavigation
  return (
    <Layout>
      <Navigation />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
