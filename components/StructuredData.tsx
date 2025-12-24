export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Wabi Sabi',
    url: 'https://wabi-sabi.click',
    logo: 'https://wabi-sabi.click/favicon.svg',
    description: 'Embracing imperfection to find perfect growth. We help businesses discover their natural path to sustainable success through mindful analytics and patient transformation.',
    sameAs: [
      'https://www.facebook.com/wabisabi',
      'https://www.twitter.com/wabisabi',
      'https://www.linkedin.com/company/wabisabi',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressLocality: 'Cape Town',
      addressRegion: 'Western Cape',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+27-71-432-9190',
      email: 'wabisabiclick2025@gmail.com',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Wabi Sabi',
    image: 'https://wabi-sabi.click/favicon.svg',
    description: 'Business growth and analytics consulting',
    url: 'https://wabi-sabi.click',
    telephone: '+27-71-432-9190',
    email: 'wabisabiclick2025@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressLocality: 'Cape Town',
      addressRegion: 'Western Cape',
    },
    areaServed: 'ZA',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
