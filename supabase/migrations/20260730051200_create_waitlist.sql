-- Waitlist emails for the Zema Fidelat APK launch.
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  constraint waitlist_email_key unique (email),
  constraint waitlist_email_format check (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  )
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- No anon/authenticated policies: inserts go through the Next.js API
-- with the service role key, which bypasses RLS.
comment on table public.waitlist is
  'APK waitlist signups collected from the marketing site.';
