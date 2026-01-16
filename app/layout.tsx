import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CAS Marketing Site',
  description: 'Hello World Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
