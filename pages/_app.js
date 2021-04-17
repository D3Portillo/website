import "../styles/globals.css"

function Layout({ children = null }) {
  return <div className="p-10 text-4xl pb-0">{children}</div>
}

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
