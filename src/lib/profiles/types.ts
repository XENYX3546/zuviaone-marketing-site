// ============================================
// SHARED SUB-TYPES
// ============================================

export type Image = {
  url: string;
  alt: string | null;
  width: number | null;
  height: number | null;
  blurHash: string | null;
};

export type DaySchedule = {
  isOpen: boolean;
  slots: Array<{ open: string; close: string }>; // "HH:mm" format
};

export type SpecialHoursEntry = {
  date: string; // "YYYY-MM-DD"
  label: string;
  isOpen: boolean;
  slots: Array<{ open: string; close: string }>;
};

export type OpeningHours = {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
  specialHours?: SpecialHoursEntry[];
};

// ============================================
// BUSINESS
// ============================================

export type BusinessAddress = {
  line1: string | null;
  line2: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
  country: string;
};

export type BusinessCoordinates = {
  latitude: number;
  longitude: number;
};

export type BusinessInfo = {
  name: string;
  slug: string;
  logoUrl: string | null;
  contactPhone: string | null;
  contactEmail: string | null;
  contactWebsite: string | null;
  address: BusinessAddress;
  coordinates: BusinessCoordinates | null;
  openingHours: OpeningHours | null;
  brandColors: string[];
  currency: string;
  timezone: string;
};

// ============================================
// PROFILE
// ============================================

export type ProfileTheme = 'modern' | 'classic' | 'minimal' | 'bold';

export type BrandingConfig = {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  fontFamily?: string;
  headerFontFamily?: string;
  borderRadius?: number;
  buttonStyle?: 'filled' | 'outlined' | 'ghost';
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type CTAConfig = {
  enabled: boolean;
  style: 'primary' | 'secondary' | 'outline';
  position: 'top' | 'bottom' | 'both';
  text?: string;
  url?: string;
  widgetId?: string;
};

export type ProfileConfig = {
  id: string;
  theme: ProfileTheme;
  slug: string;
  brandingConfig: BrandingConfig;
  socialLinks: SocialLink[];
  ctaConfig: CTAConfig;
  sectionsOrder: string[];
};

// ============================================
// SECTIONS
// ============================================

export type HeroSection = {
  layout: 'single' | 'carousel' | 'mosaic';
  overlayText: string | null;
  overlayOpacity: number | null;
  images: Image[];
};

export type AboutHighlight = {
  icon?: string;
  label: string;
  value: string;
};

export type AboutSection = {
  heading: string | null;
  content: string | null;
  highlights: AboutHighlight[];
};

export type ServiceItem = {
  id: string;
  name: string;
  description: string | null;
  priceCents: string | null;
  pricingModel: string;
  durationMinutes: number | null;
};

export type ServiceGroup = {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  items: ServiceItem[];
};

export type ServicesSection = {
  heading: string | null;
  layout: 'grid' | 'list';
  showPricing: boolean;
  showDuration: boolean;
  groups: ServiceGroup[];
};

export type GallerySection = {
  heading: string | null;
  layout: 'grid' | 'masonry' | 'carousel';
  images: Image[];
};

export type HoursSection = {
  heading: string | null;
  showCurrentStatus: boolean;
  schedule: OpeningHours | null;
};

export type ContactSection = {
  heading: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  address: BusinessAddress | null;
  contactFormWidgetId: string | null;
};

export type MapSection = {
  heading: string | null;
  latitude: number | null;
  longitude: number | null;
  zoom: number;
  showDirections: boolean;
};

export type PlatformLink = {
  name: string;
  url: string;
  platform: string | null;
};

export type Testimonial = {
  id: string;
  name: string;
  text: string;
  rating?: number;
  date?: string;
};

export type ReviewsSection = {
  heading: string | null;
  platformLinks: PlatformLink[];
  testimonials: Testimonial[];
};

export type TeamMember = {
  name: string | null;
  jobTitle: string | null;
  bio: string | null;
  photoUrl: string | null;
};

export type TeamSection = {
  heading: string | null;
  members: TeamMember[];
};

export type WidgetItem = {
  embedId: string;
  type: string;
  heading: string | null;
};

export type WidgetsSection = {
  heading: string | null;
  widgets: WidgetItem[];
};

export type ProfileSections = {
  hero: HeroSection | null;
  about: AboutSection | null;
  services: ServicesSection | null;
  gallery: GallerySection | null;
  hours: HoursSection | null;
  contact: ContactSection | null;
  map: MapSection | null;
  reviews: ReviewsSection | null;
  team: TeamSection | null;
  widgets: WidgetsSection | null;
};

// ============================================
// SEO
// ============================================

export type ProfileSeo = {
  metaTitle: string | null;
  metaDescription: string | null;
  ogImageUrl: string | null;
  keywords: string[];
  noIndex: boolean;
};

// ============================================
// RESPONSE ENVELOPE
// ============================================

export type ProfileData = {
  business: BusinessInfo;
  profile: ProfileConfig;
  sections: ProfileSections;
  seo: ProfileSeo;
};

export type GetProfileResponse = {
  data: ProfileData;
  meta: {
    requestId: string;
    request_id: string;
    timestamp: string;
  };
};

export type ProfileErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};
