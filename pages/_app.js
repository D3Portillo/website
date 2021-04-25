import DefaultPageLayout from "@/layouts/DefaultPageLayout"
import "../styles/globals.css"
import "../styles/prism.css"

function App({ Component, pageProps }) {
  return (
    <DefaultPageLayout>
      <Component {...pageProps} />
    </DefaultPageLayout>
  )
}

export default App
