'use client';

import { motion } from 'framer-motion';
import { Container, Section, Icon, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import type {
  StatusPageData,
  StatusLevel,
  Service,
  DailyStatus,
  Incident,
} from '@/lib/status/types';

type StatusPageProps = {
  data: StatusPageData;
};

const statusColors: Record<
  StatusLevel,
  { color: string; bgColor: string; dotColor: string; iconName: 'check-circle' | 'alert-circle' | 'x' }
> = {
  pass: {
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    dotColor: 'bg-emerald-500',
    iconName: 'check-circle',
  },
  warn: {
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    dotColor: 'bg-amber-500',
    iconName: 'alert-circle',
  },
  fail: {
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    dotColor: 'bg-red-500',
    iconName: 'x',
  },
};

const severityStyles: Record<string, string> = {
  minor: 'bg-amber-100 text-amber-800',
  major: 'bg-orange-100 text-orange-800',
  critical: 'bg-red-100 text-red-800',
};

const heroBorderColors: Record<StatusLevel, string> = {
  pass: 'border-emerald-200',
  warn: 'border-amber-200',
  fail: 'border-red-200',
};

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatShortDate(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function StatusHero({
  overallStatus,
  statusMessage,
  uptimePercentage,
  lastChecked,
}: {
  overallStatus: StatusLevel;
  statusMessage: string;
  uptimePercentage: number;
  lastChecked: string;
}) {
  const colors = statusColors[overallStatus];

  return (
    <Section className="bg-gradient-to-b from-neutral-50/80 to-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="primary" className="mb-6">
              System Status
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight"
          >
            Status & Uptime
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-neutral-600"
          >
            Real-time system health and uptime monitoring
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <div
              className={cn(
                'inline-flex items-center gap-3 rounded-full border px-6 py-3',
                colors.bgColor,
                heroBorderColors[overallStatus]
              )}
            >
              <span className="relative flex h-3 w-3">
                {overallStatus === 'pass' && (
                  <span
                    className={cn(
                      'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                      colors.dotColor
                    )}
                  />
                )}
                <span
                  className={cn(
                    'relative inline-flex h-3 w-3 rounded-full',
                    colors.dotColor
                  )}
                />
              </span>
              <span className={cn('text-lg font-semibold', colors.color)}>
                {statusMessage}
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex items-center justify-center gap-6 text-sm text-neutral-500"
          >
            <span>
              <span className="font-medium text-neutral-900">
                {uptimePercentage.toFixed(2)}%
              </span>{' '}
              uptime (90 days)
            </span>
            <span className="text-neutral-300">|</span>
            <span>
              Last checked{' '}
              <span className="font-medium text-neutral-700">
                {formatTime(lastChecked)}
              </span>
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function ServiceRow({ service }: { service: Service }) {
  const colors = statusColors[service.status];

  return (
    <div className="flex items-center justify-between py-3.5 border-b border-neutral-100 last:border-0">
      <div className="flex items-center gap-3 min-w-0">
        <span className={cn('h-2 w-2 rounded-full flex-shrink-0', colors.dotColor)} />
        <span className="text-sm font-medium text-neutral-900">
          {service.displayName}
        </span>
        {service.message && (
          <span className="text-xs text-neutral-500 hidden sm:inline truncate">
            — {service.message}
          </span>
        )}
      </div>
      <span
        className={cn(
          'text-xs font-medium px-2.5 py-0.5 rounded-full flex-shrink-0 ml-3',
          colors.bgColor,
          colors.color
        )}
      >
        {service.statusLabel}
      </span>
    </div>
  );
}

function ServicesList({ services }: { services: Service[] }) {
  return (
    <Section compact>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-lg font-semibold text-neutral-900 mb-6"
          >
            Services
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden px-6">
              {services.map((service) => (
                <ServiceRow key={service.name} service={service} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function getBarColor(status: StatusLevel): string {
  if (status === 'pass') {
    return 'bg-emerald-400 hover:bg-emerald-500';
  }
  if (status === 'warn') {
    return 'bg-amber-400 hover:bg-amber-500';
  }
  return 'bg-red-400 hover:bg-red-500';
}

function UptimeTimeline({ dailyStatus }: { dailyStatus: DailyStatus[] }) {
  const sorted = [...dailyStatus].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const overallUptime =
    sorted.length > 0
      ? sorted.reduce((sum, d) => sum + d.uptimePercentage, 0) / sorted.length
      : 100;

  return (
    <Section compact>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-between mb-6"
          >
            <h2 className="text-lg font-semibold text-neutral-900">
              Uptime — Last {sorted.length} days
            </h2>
            <span className="text-sm text-neutral-500">
              <span className="font-semibold text-neutral-900">
                {overallUptime.toFixed(2)}%
              </span>{' '}
              average
            </span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="flex items-end gap-px h-16">
                {sorted.map((day) => (
                  <div
                    key={day.date}
                    className="group relative flex-1 flex flex-col justify-end h-full"
                  >
                    <div
                      className={cn(
                        'w-full rounded-sm transition-colors cursor-default',
                        getBarColor(day.status)
                      )}
                      style={{
                        height: `${Math.max(day.uptimePercentage * 0.95, 5)}%`,
                      }}
                    />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                      <div className="bg-neutral-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
                        <div className="font-medium">
                          {formatShortDate(day.date)}
                        </div>
                        <div className="text-neutral-300">
                          {day.uptimePercentage.toFixed(1)}% uptime
                        </div>
                        {day.incidentCount > 0 && (
                          <div className="text-amber-300">
                            {day.incidentCount} incident
                            {day.incidentCount > 1 ? 's' : ''}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-xs text-neutral-400">
                <span>{formatShortDate(sorted[0].date)}</span>
                <span>{formatShortDate(sorted[sorted.length - 1].date)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mt-4 text-xs text-neutral-500"
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-emerald-400" />
              <span>Operational</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-amber-400" />
              <span>Degraded</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-red-400" />
              <span>Outage</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function IncidentCard({ incident }: { incident: Incident }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-neutral-900">{incident.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={cn(
                'text-xs font-medium px-2 py-0.5 rounded-full capitalize',
                severityStyles[incident.severity]
              )}
            >
              {incident.severity}
            </span>
            <span className="text-xs text-neutral-500 capitalize">
              {incident.status.replace(/_/g, ' ')}
            </span>
          </div>
        </div>
        <span className="text-xs text-neutral-400 whitespace-nowrap">
          {formatDateTime(incident.startedAt)}
        </span>
      </div>

      {incident.updates.length > 0 && (
        <div className="mt-4 border-t border-neutral-100 pt-4 space-y-3">
          {incident.updates.map((update) => (
            <div key={update.timestamp} className="flex gap-3 text-sm">
              <span className="text-xs text-neutral-400 whitespace-nowrap mt-0.5">
                {formatTime(update.timestamp)}
              </span>
              <div>
                <span className="font-medium text-neutral-700 capitalize">
                  {update.status}
                </span>
                <span className="text-neutral-600"> — {update.message}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {incident.resolvedAt && (
        <div className="mt-3 text-xs text-emerald-600 font-medium">
          Resolved {formatDate(incident.resolvedAt)}
        </div>
      )}
    </div>
  );
}

function IncidentsSection({
  activeIncidents,
  recentIncidents,
}: {
  activeIncidents: Incident[];
  recentIncidents: Incident[];
}) {
  if (activeIncidents.length === 0 && recentIncidents.length === 0) {
    return (
      <Section compact>
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg font-semibold text-neutral-900 mb-6"
            >
              Incidents
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center">
                <Icon
                  name="check-circle"
                  size={32}
                  className="text-emerald-500 mx-auto mb-3"
                />
                <p className="text-neutral-600 font-medium">
                  No incidents reported
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  All systems have been running smoothly
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    );
  }

  return (
    <Section compact>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          {activeIncidents.length > 0 && (
            <>
              <motion.h2
                variants={fadeInUp}
                className="text-lg font-semibold text-neutral-900 mb-4"
              >
                Active Incidents
              </motion.h2>
              <div className="space-y-3 mb-8">
                {activeIncidents.map((incident) => (
                  <motion.div key={incident.id} variants={fadeInUp}>
                    <IncidentCard incident={incident} />
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {recentIncidents.length > 0 && (
            <>
              <motion.h2
                variants={fadeInUp}
                className="text-lg font-semibold text-neutral-900 mb-4"
              >
                Recent Incidents
              </motion.h2>
              <div className="space-y-3">
                {recentIncidents.map((incident) => (
                  <motion.div key={incident.id} variants={fadeInUp}>
                    <IncidentCard incident={incident} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}

export function StatusPage({ data }: StatusPageProps) {
  return (
    <>
      <StatusHero
        overallStatus={data.overallStatus}
        statusMessage={data.statusMessage}
        uptimePercentage={data.uptimePercentage}
        lastChecked={data.lastChecked}
      />
      <ServicesList services={data.services} />
      <UptimeTimeline dailyStatus={data.dailyStatus} />
      <IncidentsSection
        activeIncidents={data.activeIncidents}
        recentIncidents={data.recentIncidents}
      />
    </>
  );
}
