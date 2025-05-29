import { ThemeProvider } from '@/components/contexts/ThemeContext'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'


export const metadata = {
  title: 'My App',
  description: 'App description',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
