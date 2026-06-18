// Shared NUX data: use cases + integrations consumed by the landing page
// (`IronClawNuxApp.tsx`). Onboarding now lives in the product app
// (agent.near.ai / nearai/private-assistant), which keeps its own copy of this
// catalog. Names mirror the real extension registry
// (`/api/extensions/registry` in nearai/ironclaw).

import {
  Inbox,
  Sunrise,
  CalendarClock,
  MessagesSquare,
  Radar,
  Activity,
  GitBranch,
  CheckSquare,
  Receipt,
  BarChart3,
  Mail,
  Calendar,
  FileSpreadsheet,
  FileText,
  HardDrive,
  Presentation,
  Slack,
  Send,
  MessageCircle,
  Layers,
  StickyNote,
  ListTodo,
  Headphones,
  Globe,
  Github,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export type IntegrationEntry = {
  id: string;
  icon: React.ComponentType<LucideProps>;
  name: string;
  kind: 'Channel' | 'Tool' | 'MCP server';
  blurb: string;
  recipes: string[];
};

export const INTEGRATIONS: IntegrationEntry[] = [
  { id: 'gmail', icon: Mail, name: 'Gmail', kind: 'Tool', blurb: 'Read, send, and manage email — without the model ever seeing your credentials.', recipes: [
    'Triage my inbox: label new emails as "Action", "FYI", or "Ignore", and summarize the Action ones.',
    'Draft replies to every unanswered email from the last 3 days and queue them for my review.',
    'When an invoice PDF arrives, extract the amount, date, and vendor into a Google Sheet.',
  ]},
  { id: 'google_calendar', icon: Calendar, name: 'Google Calendar', kind: 'Tool', blurb: 'Schedules, conflicts, and prep — handled before you ask.', recipes: [
    '10 minutes before each meeting, send me a brief on the company and attendees.',
    'Find a 30-minute slot with Sam next week and draft the invite.',
    'Every Sunday evening, send me a summary of my week ahead.',
  ]},
  { id: 'google_sheets', icon: FileSpreadsheet, name: 'Google Sheets', kind: 'Tool', blurb: 'Your agent reads and writes spreadsheets like a teammate.', recipes: [
    'Log every "bug:" message from Telegram into our shared bug-tracker sheet.',
    'Every weekday at 5pm, pull our KPI numbers into the dashboard tab.',
    'Add every near.ai inbound email to a sheet called "CRM".',
  ]},
  { id: 'slack', icon: Slack, name: 'Slack', kind: 'Channel', blurb: 'Talk to your agent where your team already works.', recipes: [
    'Connect to Slack so I can message you from there.',
    'If "IronClaw" or "NEAR AI" appears on Hacker News, post a summary to #mentions.',
    'When I DM you "create task: ..." open a ticket and confirm back with the link.',
  ]},
  { id: 'telegram', icon: Send, name: 'Telegram', kind: 'Channel', blurb: 'Your agent in your pocket — on your phone, on the go.', recipes: [
    'Connect to Telegram so I can message you from my phone.',
    'Every morning at 9am, send me a briefing with my calendar and inbox.',
    'Ping my health endpoint every 5 minutes and alert me here if it fails.',
  ]},
  { id: 'github', icon: Github, name: 'GitHub', kind: 'Tool', blurb: 'Repos, issues, PRs, and releases — watched and summarized.', recipes: [
    'Watch the nearai/ironclaw repo and summarize new releases when they ship.',
    'Every morning, list PRs waiting on my review across my repos.',
    'When CI fails on main, send me the failing job and the suspect commit.',
  ]},
  { id: 'linear', icon: ListTodo, name: 'Linear', kind: 'MCP server', blurb: 'Issues filed, triaged, and tracked from chat.', recipes: [
    'When I say "create task: ..." open a Linear issue with that description.',
    'Every Friday, summarize what my team shipped this week from Linear.',
    'Label and route new bug reports from Telegram into the right Linear project.',
  ]},
  { id: 'notion', icon: StickyNote, name: 'Notion', kind: 'MCP server', blurb: 'Docs and databases your agent can read and update.', recipes: [
    'Append my meeting notes summary to the team journal in Notion after each call.',
    'Keep a Notion database of every customer-feedback message from Slack.',
    'Draft a weekly status page in Notion from my tasks and calendar.',
  ]},
  { id: 'discord', icon: MessagesSquare, name: 'Discord', kind: 'Channel', blurb: 'Run your agent inside your community server.', recipes: [
    'Connect to Discord so the community can ask you common questions.',
    'Auto-answer FAQs in #support and escalate real bugs to the team.',
    'Post a daily digest of community activity to #team.',
  ]},
  { id: 'whatsapp', icon: MessageCircle, name: 'WhatsApp', kind: 'Channel', blurb: 'Message your agent like any other contact.', recipes: [
    'Connect to WhatsApp so I can reach you like any contact.',
    'Forward me urgent emails as WhatsApp messages when I am away from my desk.',
    'Let me dictate tasks to you over WhatsApp voice notes.',
  ]},
  { id: 'google_drive', icon: HardDrive, name: 'Google Drive', kind: 'Tool', blurb: 'Files found, organized, and summarized on demand.', recipes: [
    'Find the latest pitch deck in Drive and summarize what changed.',
    'When I upload a contract, extract the key dates and obligations.',
    'Keep a folder of weekly reports organized by month.',
  ]},
  { id: 'google_docs', icon: FileText, name: 'Google Docs', kind: 'Tool', blurb: 'Drafts, edits, and summaries straight into Docs.', recipes: [
    'Draft a one-page brief in Docs from this thread.',
    'Summarize every doc shared with me this week.',
    'Turn my meeting notes into a polished memo.',
  ]},
  { id: 'google_slides', icon: Presentation, name: 'Google Slides', kind: 'Tool', blurb: 'Decks assembled from your notes and data.', recipes: [
    'Build a 5-slide status deck from this week\u2019s KPI sheet.',
    'Turn this doc into a presentation outline.',
    'Refresh the numbers in my monthly review deck.',
  ]},
  { id: 'asana', icon: Layers, name: 'Asana', kind: 'MCP server', blurb: 'Projects and tasks coordinated by your agent.', recipes: [
    'Create Asana tasks from action items in my meeting notes.',
    'Every Monday, summarize overdue tasks across my projects.',
    'Move tasks to Done when the linked PR merges.',
  ]},
  { id: 'intercom', icon: Headphones, name: 'Intercom', kind: 'MCP server', blurb: 'Customer conversations triaged and summarized.', recipes: [
    'Summarize new Intercom conversations every morning.',
    'Tag and route urgent customer issues to the on-call channel.',
    'Draft replies for common questions and queue them for review.',
  ]},
  { id: 'cloudflare', icon: Globe, name: 'Cloudflare', kind: 'MCP server', blurb: 'DNS, Workers, and infrastructure on a leash.', recipes: [
    'Alert me when any of my zones see a traffic spike.',
    'Purge the cache for ironclaw.com after each deploy.',
    'List DNS records that changed this month.',
  ]},
];

export const integrationById = (id: string): IntegrationEntry | undefined =>
  INTEGRATIONS.find(i => i.id === id);

// ─────────────────────────────────────────────────────────────────────────────

export type UseCaseEntry = {
  id: string;
  icon: React.ComponentType<LucideProps>;
  title: string;
  desc: string;
  category: string;
  integrations: string[];
  /** Starter prompt carried into onboarding via ?usecase=/&prompt= (must stay
   *  in sync with the gateway's NUX_DATA.useCases ids/prompts). */
  prompt: string;
};

export const USE_CASE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'communication', label: 'Communication' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'monitoring', label: 'Monitoring' },
  { id: 'developer', label: 'Developer' },
  { id: 'automation', label: 'Automation' },
];

export const USE_CASES: UseCaseEntry[] = [
  { id: 'inbox-triage', icon: Inbox, title: 'Inbox triage', desc: 'Reads, prioritizes, and summarizes email. Labels inbound as Action, FYI, or Ignore and drafts replies for the ones that matter.', category: 'communication', integrations: ['Gmail'], prompt: 'Triage my inbox: label new emails as "Action", "FYI", or "Ignore", and summarize the Action ones for me.' },
  { id: 'daily-briefing', icon: Sunrise, title: 'Daily morning briefing', desc: 'A concise daily summary of your calendar, email, tasks, and key signals — delivered wherever you are.', category: 'productivity', integrations: ['Calendar', 'Telegram'], prompt: 'Every morning at 9am, send me a briefing with my calendar, important emails, and open tasks.' },
  { id: 'meeting-prep', icon: CalendarClock, title: 'Meeting prep assistant', desc: '10 minutes before each meeting, get a brief on the company, attendees, and recent news.', category: 'productivity', integrations: ['Calendar'], prompt: '10 minutes before each meeting on my calendar, send me a summary of the company and recent news about the attendees.' },
  { id: 'team-chat-ops', icon: MessagesSquare, title: 'Team chat operations', desc: 'Slack or Telegram as your control layer — send updates, triage messages, and coordinate work from chat.', category: 'communication', integrations: ['Slack', 'Telegram'], prompt: 'Connect to Slack so I can message you from there, and post a summary of what you can do to my DMs.' },
  { id: 'keyword-monitor', icon: Radar, title: 'Keyword monitor', desc: 'Watches Hacker News, Twitter, or the web for mentions of your product and sends a summary the moment they appear.', category: 'monitoring', integrations: ['Slack'], prompt: 'If "IronClaw" or "NEAR AI" appears on Hacker News, send a summary to me here.' },
  { id: 'deploy-watcher', icon: Activity, title: 'Deployment health watcher', desc: 'Pings your endpoint every 5 minutes and alerts you in chat if it returns anything but a 200.', category: 'monitoring', integrations: ['Telegram'], prompt: 'Ping https://example.com/health every 5 minutes and alert me if it returns a non-200 status.' },
  { id: 'release-tracker', icon: GitBranch, title: 'Release tracker', desc: 'Watches a GitHub repo and summarizes new releases into your channel of choice.', category: 'developer', integrations: ['GitHub', 'Telegram'], prompt: 'Watch the nearai/ironclaw GitHub repo and summarize new releases for me when they ship.' },
  { id: 'task-delegation', icon: CheckSquare, title: 'Task capture & delegation', desc: 'Turns messages and emails into structured tasks with assignments and tracking — "create task: …" from anywhere.', category: 'productivity', integrations: ['Slack', 'Linear'], prompt: 'When I DM you "create task: ..." open a ticket with that description and confirm back with the link.' },
  { id: 'invoice-parser', icon: Receipt, title: 'Invoice parser', desc: 'Forward a PDF invoice and the amount, date, and vendor land in a spreadsheet automatically.', category: 'automation', integrations: ['Gmail', 'Sheets'], prompt: 'When I forward you a PDF invoice, extract the amount, date, and vendor into a Google Sheet called "Invoices".' },
  { id: 'kpi-reporter', icon: BarChart3, title: 'Daily KPI reporter', desc: 'Pulls simple metrics from a CSV or API and posts a formatted dashboard to your team channel daily.', category: 'automation', integrations: ['Slack'], prompt: 'Every weekday at 5pm, pull our KPI numbers and post a formatted summary to Slack.' },
];

export const useCaseById = (id: string): UseCaseEntry | undefined =>
  USE_CASES.find(u => u.id === id);

// Use-case cards carry display tags ("Gmail", "Sheets"); onboarding needs the
// canonical integration ids behind them.
const TAG_TO_INTEGRATION_ID: Record<string, string> = {
  Gmail: 'gmail',
  Calendar: 'google_calendar',
  Sheets: 'google_sheets',
  Slack: 'slack',
  Telegram: 'telegram',
  GitHub: 'github',
  Linear: 'linear',
};

export const useCaseIntegrationIds = (uc: UseCaseEntry): string[] =>
  uc.integrations.map(t => TAG_TO_INTEGRATION_ID[t]).filter(Boolean);

/** Immediately-runnable variants of each use case, surfaced on the
 *  "agent ready" screen as first tasks. */
export const USE_CASE_FIRST_TASKS: Record<string, string> = {
  'inbox-triage': 'Triage my unread inbox now',
  'daily-briefing': 'Send me a test daily briefing right now',
  'meeting-prep': 'Brief me on my next meeting',
  'team-chat-ops': 'Post an intro message to my Slack DMs',
  'keyword-monitor': 'Scan Hacker News for "IronClaw" mentions now',
  'deploy-watcher': 'Run a health check on my endpoint now',
  'release-tracker': 'Summarize the latest nearai/ironclaw release',
  'task-delegation': 'Create a test task: "Try out IronClaw"',
  'invoice-parser': 'Parse this sample invoice into a sheet',
  'kpi-reporter': 'Post a sample KPI summary to Slack',
};

/** Naive keyword inference: free-text prompt → suggested integration ids. */
export const inferIntegrationsFromPrompt = (prompt: string): string[] => {
  const p = prompt.toLowerCase();
  const hits: string[] = [];
  const add = (id: string) => { if (!hits.includes(id)) hits.push(id); };
  if (/(email|inbox|gmail|invoice)/.test(p)) add('gmail');
  if (/(calendar|meeting|schedule|invite)/.test(p)) add('google_calendar');
  if (/(sheet|spreadsheet|csv|kpi|dashboard)/.test(p)) add('google_sheets');
  if (/slack/.test(p)) add('slack');
  if (/(telegram|phone|briefing|alert|ping|monitor|watch)/.test(p)) add('telegram');
  if (/(github|repo|pull request|\bpr\b|release|commit|ci\b)/.test(p)) add('github');
  if (/(linear|ticket|task)/.test(p)) add('linear');
  if (/notion/.test(p)) add('notion');
  if (/discord/.test(p)) add('discord');
  if (/whatsapp/.test(p)) add('whatsapp');
  if (/(drive|file|folder)/.test(p)) add('google_drive');
  if (/(doc\b|docs\b|memo|draft)/.test(p)) add('google_docs');
  return hits;
};
