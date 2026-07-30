-- Waitlist signups for the Zema Fidelat APK launch.
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  created_at timestamptz not null default now(),
  constraint waitlist_email_key unique (email),
  constraint waitlist_email_format check (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  ),
  constraint waitlist_name_length check (
    name is null
    or (
      char_length(btrim(name)) >= 2
      and char_length(name) <= 80
    )
  )
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- No anon/authenticated policies: inserts go through the Next.js API
-- with the secret key, which bypasses RLS.
comment on table public.waitlist is
  'APK waitlist signups collected from the marketing site.';
