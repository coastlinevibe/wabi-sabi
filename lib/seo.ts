import { Metadata } from 'next'

const baseUrl = 'https://wabi-sabi.click'
const favicon = '/favicon.svg'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: favicon,
    shortcut: favicon,
    apple: favicon,
  },
}

interface SEOProps {
  title: string
  description: string
  path?: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article'
}

export function generateSEOMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  ogImage = favicon,
  ogType = 'website',
}: SEOProps): Metadata {
  const fullTitle = `${title} | Wabi Sabi`
  const url = `${baseUrl}${path}`

  const defaultKeywords = [
    'wabi sabi',
    'business growth',
    'analytics',
    'mindful business',
    'sustainable growth',
    'Cape Town',
    'South Africa',
    'business transformation',
    'profit optimization',
    'business systems',
  ]

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]))

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: ogType as 'website' | 'article',
      siteName: 'Wabi Sabi',
      locale: 'en_ZA',
      images: [
        {
          url: ogImage,
          width: ogImage === favicon ? 1200 : 1200,
          height: ogImage === favicon ? 1200 : 630,
          alt: title,
          type: ogImage === favicon ? 'image/svg+xml' : 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@wabisabi',
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
  }
}

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Wabi Sabi',
    url: baseUrl,
    logo: `${baseUrl}${favicon}`,
    description: 'Embracing imperfection to find perfect growth through mindful analytics and patient transformation.',
    sameAs: [
      'https://www.facebook.com/wabisabi',
      'https://www.twitter.com/wabisabi',
      'https://www.linkedin.com/company/wabisabi',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressLocality: 'Cape Town',
    },
  },
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Wabi Sabi',
    image: `${baseUrl}${favicon}`,
    description: 'Business growth and analytics consulting',
    url: baseUrl,
    telephone: '+27-XXX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressLocality: 'Cape Town',
    },
    areaServed: 'ZA',
    priceRange: '$$',
  },
}
