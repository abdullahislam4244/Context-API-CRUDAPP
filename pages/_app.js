import '../styles/globals.css'
import Layout from '../components/layout/Layout';
import Provider from '../store/Provider';
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Provider>
  <Component {...pageProps} />
  </Provider>
  </Layout>)
}

export default MyApp
