import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Support Desk | Wabi-Sabi',
  description: 'Monthly IT, website, email, AI and automation support for small businesses in Cape Town and South Africa, from R1000/month.',
  keywords: 'digital support, IT support Cape Town, website support, email support, AI tools, automation support, small business IT, South Africa',
  openGraph: {
    title: 'Digital Support Desk | Wabi-Sabi',
    description: 'Monthly IT, website, email, AI and automation support for small businesses in Cape Town and South Africa, from R1000/month.',
    url: 'https://wabi-sabi.click/support-desk',
    siteName: 'Wabi Sabi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Support Desk | Wabi-Sabi',
    description: 'Monthly IT, website, email, AI and automation support for small businesses in Cape Town and South Africa, from R1000/month.',
  },
  alternates: {
    canonical: '/support-desk',
  },
}

export default function SupportDeskLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
