import { ThemeProvider } from '@/components/contexts/ThemeContext'
import Header from '@/components/Header' // Adjust the path if different
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
