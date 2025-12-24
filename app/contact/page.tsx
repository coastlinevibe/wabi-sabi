import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import { ContactPageClient } from './client'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - Reveal Hidden Income Flows',
  description: 'Small shifts reveal hidden income streams. Contact Wabi-Sabi to discover profit flows hiding in plain sight. Free consultation available.',
  path: '/contact',
  keywords: ['contact', 'business consultation', 'hidden income', 'profit optimization', 'business growth'],
  ogType: 'website',
})

export default function ContactPage() {
  return <ContactPageClient />
}
