import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ChatFloat } from '@/components/WhatsAppFloat'
import { PrelaunchGallery } from '@/components/PrelaunchGallery'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wabi Sabi - Growth Begins Here',
  description: 'Embracing imperfection to find perfect growth. We help businesses discover their natural path to sustainable success through mindful analytics and patient transformation.',
  keywords: 'business growth, analytics, wabi-sabi, mindful business, sustainable growth, Cape Town, South Africa, business transformation',
  authors: [{ name: 'Wabi Sabi' }],
  creator: 'Wabi Sabi',
  publisher: 'Wabi Sabi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wabi-sabi.click'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wabi-sabi Analytics - Growth Begins Here',
    description: 'Embracing imperfection to find perfect growth. Mindful analytics and patient transformation for sustainable business success.',
    url: 'https://wabi-sabi.click',
    siteName: 'Wabi Sabi',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Wabi Sabi - Growth Begins Here',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wabi-sabi Analytics - Growth Begins Here',
    description: 'Embracing imperfection to find perfect growth through mindful analytics.',
    images: ['/images/thumbnail.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wabi-Sabis.dev" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#00d4ff" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <PrelaunchGallery />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <ChatFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
