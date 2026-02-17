import DOMPurify from 'isomorphic-dompurify';
import type { BrandingConfig, OpeningHours, ProfileTheme } from './types';

// ============================================
// PRICE FORMATTING
// ============================================

export function formatPrice(priceCents: string, currency: string): string {
  const amount = Number(priceCents) / 100;
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
  }).format(amount);
}

// ============================================
// OPEN / CLOSED STATUS
// ============================================

type DayKey =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

export function isBusinessOpen(
  hours: OpeningHours,
  timezone: string
): { open: boolean; label: string } {
  const now = new Date();

  // Get current time in business timezone
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    weekday: 'short',
  }).formatToParts(now);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? '';

  const year = get('year');
  const month = get('month');
  const day = get('day');
  const hour = get('hour');
  const minute = get('minute');

  const todayStr = `${year}-${month}-${day}`;
  const currentTime = `${hour}:${minute}`;

  // Check special hours first
  const specialHours = hours.specialHours ?? [];
  const specialToday = specialHours.find((s) => s.date === todayStr);

  if (specialToday) {
    if (!specialToday.isOpen) {
      return { open: false, label: `Closed - ${specialToday.label}` };
    }
    const inSlot = specialToday.slots.some(
      (slot) => currentTime >= slot.open && currentTime < slot.close
    );
    return inSlot
      ? { open: true, label: 'Open Now' }
      : { open: false, label: 'Closed' };
  }

  // Regular schedule
  const dayOfWeek = now.toLocaleDateString('en-US', {
    timeZone: timezone,
    weekday: 'long',
  }).toLowerCase() as DayKey;

  const daySchedule = hours[dayOfWeek];
  if (!daySchedule || !daySchedule.isOpen) {
    return { open: false, label: 'Closed Today' };
  }

  const inSlot = daySchedule.slots.some(
    (slot) => currentTime >= slot.open && currentTime < slot.close
  );

  return inSlot
    ? { open: true, label: 'Open Now' }
    : { open: false, label: 'Closed' };
}

// ============================================
// THEME CSS VARIABLES
// ============================================

export function buildThemeStyle(bc: BrandingConfig): Record<string, string> {
  return {
    '--profile-primary': bc.primaryColor ?? '#000000',
    '--profile-secondary': bc.secondaryColor ?? '#666666',
    '--profile-accent': bc.accentColor ?? '#0066ff',
    '--profile-font': bc.fontFamily ?? 'Inter',
    '--profile-heading-font': bc.headerFontFamily ?? bc.fontFamily ?? 'Inter',
    '--profile-radius': `${bc.borderRadius ?? 8}px`,
  };
}

// ============================================
// GOOGLE FONTS URL
// ============================================

export function buildGoogleFontsUrl(bc: BrandingConfig): string | null {
  const bodyFont = bc.fontFamily ?? 'Inter';
  const headingFont = bc.headerFontFamily ?? bodyFont;

  // Don't load a special link if both are Inter (already loaded by root layout)
  if (bodyFont === 'Inter' && headingFont === 'Inter') {
    return null;
  }

  const fonts = new Set<string>();
  if (bodyFont !== 'Inter') {fonts.add(bodyFont);}
  if (headingFont !== 'Inter') {fonts.add(headingFont);}

  const families = [...fonts]
    .map(
      (f) =>
        `family=${encodeURIComponent(f)}:wght@300;400;500;600;700;800;900`
    )
    .join('&');

  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

// ============================================
// HTML SANITIZATION
// ============================================

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'br', 'hr',
      'ul', 'ol', 'li',
      'strong', 'em', 'b', 'i', 'u', 's',
      'a', 'img',
      'blockquote', 'pre', 'code',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div', 'span',
    ],
    ALLOWED_ATTR: [
      'href', 'target', 'rel', 'src', 'alt', 'width', 'height',
      'class', 'id',
    ],
    ALLOW_DATA_ATTR: false,
  });
}

// ============================================
// THEME CLASS MAPS
// ============================================

export type ThemeClasses = {
  sectionSpacing: string;
  sectionDivider: string;
  cardStyle: string;
  headingStyle: string;
  heroMinHeight: string;
  heroOverlay: string;
  pageBackground: string;
};

const THEME_MAP: Record<ProfileTheme, ThemeClasses> = {
  modern: {
    sectionSpacing: 'py-16 md:py-24',
    sectionDivider: '',
    cardStyle:
      'bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition-shadow',
    headingStyle: 'font-semibold tracking-tight',
    heroMinHeight: 'min-h-[60vh]',
    heroOverlay: 'bg-gradient-to-r from-black/60 to-black/20',
    pageBackground: 'bg-white text-neutral-900',
  },
  classic: {
    sectionSpacing: 'py-12 md:py-20',
    sectionDivider: 'border-b border-neutral-200',
    cardStyle: 'bg-white border border-neutral-200 rounded-lg shadow-sm',
    headingStyle: 'font-bold',
    heroMinHeight: 'min-h-[50vh]',
    heroOverlay: 'bg-black/50',
    pageBackground: 'bg-neutral-50 text-neutral-900',
  },
  minimal: {
    sectionSpacing: 'py-12 md:py-16',
    sectionDivider: 'border-b border-neutral-100',
    cardStyle: 'border-b border-neutral-200 pb-6',
    headingStyle: 'font-normal tracking-normal',
    heroMinHeight: 'min-h-[40vh]',
    heroOverlay: 'bg-gradient-to-t from-black/40 to-transparent',
    pageBackground: 'bg-white text-neutral-900',
  },
  bold: {
    sectionSpacing: 'py-20 md:py-32',
    sectionDivider: '',
    cardStyle:
      'bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg text-white',
    headingStyle: 'font-extrabold tracking-tight uppercase',
    heroMinHeight: 'min-h-[70vh]',
    heroOverlay: 'bg-gradient-to-b from-transparent via-black/30 to-black/70',
    pageBackground: 'bg-neutral-900 text-white',
  },
};

export function getThemeClasses(theme: ProfileTheme): ThemeClasses {
  return THEME_MAP[theme];
}

// ============================================
// DURATION FORMATTING
// ============================================

export function formatDuration(minutes: number): string {
  if (minutes < 60) {return `${minutes} min`;}
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  if (remaining === 0) {return `${hours} hr`;}
  return `${hours} hr ${remaining} min`;
}
