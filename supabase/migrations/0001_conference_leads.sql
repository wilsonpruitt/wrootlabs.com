create table if not exists conference_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  church text not null,
  conference text not null,
  interests text[] not null default '{}',
  note text,
  source text,
  event text not null default 'ac2026'
);

create index if not exists conference_leads_event_idx
  on conference_leads (event, created_at desc);

create index if not exists conference_leads_email_idx
  on conference_leads (email);

-- RLS on, no policies. Service role bypasses RLS; anon/authenticated get nothing.
alter table conference_leads enable row level security;
