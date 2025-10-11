import type { CaseStudyIconName } from './caseStudies'

export type GalleryAccent =
  | 'emerald'
  | 'rose'
  | 'amber'
  | 'blue'
  | 'green'
  | 'teal'
  | 'purple'
  | 'orange'
  | 'red'
  | 'pink'
  | 'slate'

export type WebsiteShowcase = {
  id: string
  name: string
  icon: CaseStudyIconName
  accent: GalleryAccent
  tagline: string
  href: string
  image: string
  ctaLabel?: string
}

export const websiteShowcases: WebsiteShowcase[] = [
  {
    id: 'mopani-ember-catering',
    name: 'Mopani Ember Catering',
    icon: 'leaf',
    accent: 'orange',
    tagline: 'Bushveld fireside feasts with mopane wood rituals and marula-infused cuisine.',
    href: '/website-examples/catering-premium.html',
    image: '/portfolio/catering-thumb.svg',
    ctaLabel: 'View catering site',
  },
  {
    id: 'bushveld-block-boma',
    name: 'Bushveld Block & Boma',
    icon: 'beef',
    accent: 'red',
    tagline: 'Premium bushveld butchery with dry-aged beef, traceable game, and biltong atelier drops.',
    href: '/website-examples/butchery-premium.html',
    image: '/portfolio/butchery-thumb.svg',
    ctaLabel: 'View butchery site',
  },
  {
    id: 'torquecraft-workshop',
    name: 'TorqueCraft Workshop',
    icon: 'wrench',
    accent: 'blue',
    tagline: 'Automotive and fabrication workshop delivering diagnostics, rebuilds, and fleet uptime support.',
    href: '/website-examples/workshop-premium.html',
    image: '/portfolio/workshop-thumb.svg',
    ctaLabel: 'View workshop site',
  },
  {
    id: 'morning-batch-bakery',
    name: 'Morning Batch Bakery',
    icon: 'coffee',
    accent: 'orange',
    tagline: 'Fresh breads and pastries for homes, cafés, and corporate drops with daily bake schedules.',
    href: '/website-examples/bakery.html',
    image: '/portfolio/bakery-thumb.svg',
    ctaLabel: 'View bakery site',
  },
  {
    id: 'gripline-tyre-fitment',
    name: 'GripLine Tyre & Fitment',
    icon: 'carFront',
    accent: 'blue',
    tagline: 'Tyre replacement, alignments, and battery swaps with nationwide booking availability.',
    href: '/website-examples/tyre-fitment.html',
    image: '/portfolio/tyre-fitment-thumb.svg',
    ctaLabel: 'View fitment site',
  },
  {
    id: 'cellar-co-bottle-store',
    name: 'Cellar & Co Bottle Store',
    icon: 'sparkles',
    accent: 'red',
    tagline: 'Premium wines, craft spirits, and local brews with tasting sessions and same-day delivery.',
    href: '/website-examples/bottle-store.html',
    image: '/portfolio/bottle-store-thumb.svg',
    ctaLabel: 'View bottle store site',
  },
  {
    id: 'gift-funeral-services',
    name: 'Gift Funeral Services',
    icon: 'heartPulse',
    accent: 'slate',
    tagline: 'Compassionate funeral services with dignified arrangements, family support, and memorial planning.',
    href: '/website-examples/funeral-home.html',
    image: '/portfolio/funeral-home-thumb.svg',
    ctaLabel: 'View funeral home site',
  },
  {
    id: 'freshstart-cleaning',
    name: 'FreshStart Cleaning Services',
    icon: 'sparkles',
    accent: 'teal',
    tagline: 'Residential and commercial cleaning with vetted teams, eco-products, and satisfaction guarantees.',
    href: '/website-examples/cleaning-services.html',
    image: '/portfolio/cleaning-services-thumb.svg',
    ctaLabel: 'View cleaning site',
  },
  {
    id: 'meridian-medical-clinic',
    name: 'Meridian Medical Clinic',
    icon: 'stethoscope',
    accent: 'blue',
    tagline: 'Advanced healthcare with innovative side navigation, interactive components, and digital-first patient experience.',
    href: '/website-examples/doctors-clinic.html',
    image: '/portfolio/doctors-clinic-thumb.svg',
    ctaLabel: 'View medical site',
  },
  {
    id: 'velocity-transport',
    name: 'VelocityTrans Logistics',
    icon: 'zap',
    accent: 'orange',
    tagline: 'Futuristic freight solutions with 3D visualizations, animated dashboards, and real-time tracking.',
    href: '/website-examples/transport-logistics.html',
    image: '/portfolio/transport-logistics-thumb.svg',
    ctaLabel: 'View transport site',
  },
  {
    id: 'ironworks-hardware',
    name: 'IronWorks Hardware Depot',
    icon: 'wrench',
    accent: 'red',
    tagline: 'Industrial-strength hardware depot with vertical navigation, 3D product showcase, and trade solutions.',
    href: '/website-examples/hardware-depot.html',
    image: '/portfolio/hardware-depot-thumb.svg',
    ctaLabel: 'View hardware site',
  },
  {
    id: 'ember-cafe',
    name: 'Ember Café',
    icon: 'coffee',
    accent: 'amber',
    tagline: 'Cozy coffee shop with floating navigation, animated coffee cup, and warm community atmosphere.',
    href: '/website-examples/ember-cafe.html',
    image: '/portfolio/ember-cafe-thumb.svg',
    ctaLabel: 'View café site',
  },
  {
    id: 'calm-accounting',
    name: 'Calm Accounting',
    icon: 'calculator',
    accent: 'blue',
    tagline: 'Professional accounting firm with split-screen layout, interactive dashboard, and trust-focused design.',
    href: '/website-examples/calm-accounting.html',
    image: '/portfolio/calm-accounting-thumb.svg',
    ctaLabel: 'View accounting site',
  },
  {
    id: 'tamboti-ridge-guest-house',
    name: 'Tamboti Ridge Guest House',
    icon: 'home',
    accent: 'amber',
    tagline: 'Waterberg bushveld sanctuary with private suites, boma tastings, and field hosts.',
    href: '/website-examples/guest-house.html',
    image: '/portfolio/guest-house-thumb.svg',
    ctaLabel: 'View guest house site',
  },
  {
    id: 'marula-fairways-golf',
    name: 'Marula Fairways Golf Estate',
    icon: 'activity',
    accent: 'green',
    tagline: 'Championship bushveld golf estate with safari hospitality and performance studios.',
    href: '/website-examples/golf-club.html',
    image: '/portfolio/golf-club-thumb.svg',
    ctaLabel: 'View golf club site',
  },
  {
    id: 'bushveld-range-restaurant',
    name: 'Bushveld Range Restaurant',
    icon: 'utensilsCrossed',
    accent: 'emerald',
    tagline: 'Bushveld grillhouse & taproom with flame-fired classics, craft taps, and live sessions.',
    href: '/website-examples/restaurant.html',
    image: '/portfolio/restaurant-thumb.svg',
    ctaLabel: 'View restaurant site',
  },
]
