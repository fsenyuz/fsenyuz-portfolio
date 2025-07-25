// Blog metadata including categories and an initial sample post.  New
// posts can be added by creating MDX files in the appropriate
// language folder and adding entries here to set their metadata.

export const categories = [
  { id: 'fidic-contract', tr: 'FIDIC & Sözleşme/Hak Talepleri', en: 'FIDIC & Contract/Claims' },
  { id: 'planning-cost', tr: 'Planlama & Maliyet Kontrol', en: 'Planning & Cost Control' },
  { id: 'data-automation', tr: 'Veri & Otomasyon', en: 'Data & Automation' },
  { id: 'geotechnical', tr: 'Geoteknik / Plaxis', en: 'Geotechnical / Plaxis' }
];

export const posts = [
  {
    slug: 'fidic-claim-basics',
    language: 'tr',
    title: 'FIDIC Hak Talebi Yönetiminin Temelleri',
    description: 'FIDIC sözleşmelerinde hak talebi hazırlama sürecine dair temel kavramlar ve ipuçları.',
    date: '2025-01-15',
    category: 'fidic-contract',
    draft: false
  },
  {
    slug: 'fidic-claim-basics',
    language: 'en',
    title: 'Fundamentals of FIDIC Claim Management',
    description: 'Key concepts and tips for preparing claims under FIDIC contracts.',
    date: '2025-01-15',
    category: 'fidic-contract',
    draft: false
  }
];