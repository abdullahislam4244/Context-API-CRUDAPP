import '../styles/globals.css'
import Layout from '../components/layout/Layout';
import Provider from '../store/Provider';
import PostProvider from '../store/PostProvider';
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Provider>
      <PostProvider >
  <Component {...pageProps} />
  </PostProvider>
  </Provider>
  </Layout>)
}

export default MyApp
