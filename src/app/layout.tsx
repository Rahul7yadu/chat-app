
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/context/Provider'
import Header from '@/components/containers/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat app',
  description: 'chat app created by Rahul yadu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
       <Provider>
        <Header/>
        {children}
        </Provider> 
        </body>
    </html>
  )
}
