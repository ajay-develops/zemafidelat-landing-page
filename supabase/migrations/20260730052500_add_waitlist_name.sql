-- Add optional subscriber name for existing waitlist tables created without it.
alter table public.waitlist
  add column if not exists name text;

alter table public.waitlist
  alter column name drop not null;

alter table public.waitlist
  drop constraint if exists waitlist_name_length;

alter table public.waitlist
  add constraint waitlist_name_length check (
    name is null
    or (
      char_length(btrim(name)) >= 2
      and char_length(name) <= 80
    )
  );
