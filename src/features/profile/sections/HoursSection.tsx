'use client';

import { AnimatedSection } from '@/components/ui';
import { isBusinessOpen } from '@/lib/profiles/utils';
import { cn } from '@/lib/utils';
import type {
  HoursSection as HoursData,
  BusinessInfo,
} from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: HoursData;
  themeClasses: ThemeClasses;
  business: BusinessInfo;
};

const DAY_ORDER = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;

function formatSlots(slots: Array<{ open: string; close: string }>): string {
  if (slots.length === 0) {return 'Closed';}
  return slots.map((s) => `${s.open} - ${s.close}`).join(', ');
}

function getCurrentDayKey(timezone: string): string {
  return new Date()
    .toLocaleDateString('en-US', { timeZone: timezone, weekday: 'long' })
    .toLowerCase();
}

export function HoursSection({ data, themeClasses, business }: Props) {
  const {schedule} = data;

  if (!schedule) {return null;}

  const status =
    data.showCurrentStatus
      ? isBusinessOpen(schedule, business.timezone)
      : null;

  const currentDay = getCurrentDayKey(business.timezone);

  return (
    <section
      id="hours"
      className={cn(themeClasses.sectionSpacing, themeClasses.sectionDivider)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            {data.heading && (
              <h2
                className={cn(
                  'text-3xl md:text-4xl',
                  themeClasses.headingStyle
                )}
                style={{
                  fontFamily: 'var(--profile-heading-font), sans-serif',
                }}
              >
                {data.heading}
              </h2>
            )}
            {status && (
              <span
                className={cn(
                  'px-3 py-1 text-sm font-medium rounded-full',
                  status.open
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                )}
              >
                {status.label}
              </span>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className={cn(themeClasses.cardStyle, 'p-6 max-w-lg')}>
            {DAY_ORDER.map((day) => {
              const daySchedule = schedule[day];
              const isToday = day === currentDay;

              return (
                <div
                  key={day}
                  className={cn(
                    'flex justify-between py-3 border-b border-black/5 last:border-0',
                    isToday && 'font-semibold'
                  )}
                >
                  <span className="capitalize">
                    {day}
                    {isToday && (
                      <span className="text-xs opacity-50 ml-2">(Today)</span>
                    )}
                  </span>
                  <span className={!daySchedule.isOpen ? 'opacity-50' : ''}>
                    {daySchedule.isOpen
                      ? formatSlots(daySchedule.slots)
                      : 'Closed'}
                  </span>
                </div>
              );
            })}

            {/* Special hours */}
            {(schedule.specialHours ?? []).length > 0 && (
              <div className="mt-4 pt-4 border-t border-black/10">
                <p className="text-sm font-medium opacity-60 mb-2">
                  Special Hours
                </p>
                {(schedule.specialHours ?? []).map((special, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 text-sm"
                  >
                    <span>
                      {special.label}{' '}
                      <span className="opacity-50">({special.date})</span>
                    </span>
                    <span className={!special.isOpen ? 'opacity-50' : ''}>
                      {special.isOpen
                        ? formatSlots(special.slots)
                        : 'Closed'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
