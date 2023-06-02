import '../styles/globals.css'
import '../styles/style.css'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/Shared/Layout'
import DashboardLayout from "../components/dashboard/layouts/DashboardLayout";
import {Provider} from "react-redux";
import { store } from '../redux/store'



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
      <Provider store={store}>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
     {/* {
        router.pathname.includes('users') ? <Component {...pageProps} /> :
          <Layout >
            <Component {...pageProps} />
          </Layout>
      }*/}
      {
        router.pathname.includes('dashboard')
            ?
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
            : router.pathname.includes('users') ? <Component {...pageProps} /> :
                <Layout>
                  <Component {...pageProps} />
                </Layout>

      }
      </Provider>
    </>
  )
}

export default MyApp
