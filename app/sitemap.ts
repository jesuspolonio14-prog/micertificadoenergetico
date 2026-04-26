import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://micertificadoenergetico.com'
  return [
    { url: base,                                           lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/certificado-energetico-madrid`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/certificado-energetico-segovia`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/precio-certificado-energetico`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
