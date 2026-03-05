export type StatusLevel = 'pass' | 'warn' | 'fail';

export type IncidentStatus =
  | 'investigating'
  | 'identified'
  | 'monitoring'
  | 'resolved';

export type IncidentSeverity = 'minor' | 'major' | 'critical';

export type Service = {
  name: string;
  displayName: string;
  status: StatusLevel;
  statusLabel: string;
  lastChecked: string;
  message?: string;
};

export type DailyStatus = {
  date: string;
  status: StatusLevel;
  uptimePercentage: number;
  incidentCount: number;
};

export type IncidentUpdate = {
  status: IncidentStatus;
  message: string;
  timestamp: string;
};

export type Incident = {
  id: string;
  title: string;
  status: IncidentStatus;
  severity: IncidentSeverity;
  affectedComponents: string[];
  startedAt: string;
  resolvedAt: string | null;
  updates: IncidentUpdate[];
};

export type StatusPageData = {
  overallStatus: StatusLevel;
  overallStatusLabel: string;
  statusMessage: string;
  uptimePercentage: number;
  lastChecked: string;
  services: Service[];
  dailyStatus: DailyStatus[];
  activeIncidents: Incident[];
  recentIncidents: Incident[];
};

export type StatusIndicatorData = {
  status: StatusLevel;
  statusLabel: string;
  statusMessage: string;
  uptimePercentage: number;
  activeIncidentCount: number;
  lastChecked: string;
};

export type UptimeHistoryData = {
  uptimePercentage: number;
  days: number;
  dailyStatus: DailyStatus[];
};

export type ApiMeta = {
  requestId: string;
  request_id: string;
  timestamp: string;
};

export type StatusPageResponse = {
  data: StatusPageData;
  meta: ApiMeta;
};

export type StatusIndicatorResponse = {
  data: StatusIndicatorData;
  meta: ApiMeta;
};

export type UptimeHistoryResponse = {
  data: UptimeHistoryData;
  meta: ApiMeta;
};
