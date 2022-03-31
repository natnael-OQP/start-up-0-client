import Router from 'next/router'
import axios from 'axios'
import ProgressBar from '@badrap/bar-of-progress'
import Layout from '../components/Layout'
import '../styles/globals.css'

axios.defaults.baseURL = 'https://'

function MyApp({ Component, pageProps }) {
    const progress = new ProgressBar({
        size: 1,
        color: '#29e',
        className: 'bar-of-progress',
        delay: 80,
    })
    // route Change Start
    Router.events.on('routeChangeStart', () => progress.start())
    // route Change end
    Router.events.on('routeChangeComplete', () => progress.finish())
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
