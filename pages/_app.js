import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import React from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, []);
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
