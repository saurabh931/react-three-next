import { Layout } from '@/components/dom/Layout'
import '@/global.css'

export const metadata = {
  title: 'Sovereign-T3',
  description: 'Sovereign-T3',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
     
      <head />
      <body>
       <Layout>{children}</Layout>
      </body>
    </html>
  )
}
