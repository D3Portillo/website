import DefaultPageLayout from "@/layouts/DefaultPageLayout"
import "../styles/globals.css"

function App({ Component, pageProps }) {
  return (
    <DefaultPageLayout>
      <Component {...pageProps} />
    </DefaultPageLayout>
  )
}

export default App
