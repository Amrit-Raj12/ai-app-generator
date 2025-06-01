'use client'

import { ThemeProvider } from '@/components/contexts/ThemeContext'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  // Create QueryClient instance - using useState to ensure it's stable across re-renders
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        retry: 3,
        refetchOnWindowFocus: false, // Disable refetch on window focus
      },
      mutations: {
        retry: 1,
      },
    },
  }))

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}