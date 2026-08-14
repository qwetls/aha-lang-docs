// @note generateStructuredData creates JSON-LD structured data for search engines
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qwetls.github.io/aha-lang-docs/";

// @note generateStructuredData creates JSON-LD structured data for search engines
export function WebsiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AHA! Lang',
    description:
      'A modern programming language with an LLVM backend, written in Rust',
    url: siteUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// @note generateOrganizationData creates organization structured data
export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AHA! Lang',
    url: siteUrl,
    logo: `${siteUrl}logo.png`,
    sameAs: [
      'https://github.com/qwetls/aha-lang',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// @note generateBreadcrumbData creates breadcrumb structured data for docs pages
export function BreadcrumbStructuredData({ items }: { items: { name: string; url: string }[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// @note generateSoftwareApplicationData creates software application structured data
export function SoftwareApplicationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AHA! Lang',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Linux, Windows, macOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'A modern programming language with an LLVM backend, written in Rust',
    url: siteUrl,
    downloadUrl: 'https://github.com/qwetls/aha-lang',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}