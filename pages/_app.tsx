import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ConnectionContextProvider } from '../context/connectionContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConnectionContextProvider>
      <Component {...pageProps} />
    </ConnectionContextProvider>
  )
}
export default MyApp
