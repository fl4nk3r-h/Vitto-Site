import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vitto - AI-First Infrastructure for Banking',
  description: 'Build, deploy, and scale banking AI with domain-trained models. Infrastructure designed for compliance, security, and speed.',
  keywords: 'AI banking, fintech AI, infrastructure, domain-trained models, BFSI, financial technology',
  generator: 'v0.app',
  openGraph: {
    title: 'Vitto - AI-First Infrastructure for Banking',
    description: 'Build, deploy, and scale banking AI with domain-trained models.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/partner-logos/vitto-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/partner-logos/vitto-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0D0D1A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
