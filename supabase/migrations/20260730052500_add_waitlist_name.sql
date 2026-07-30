-- Add subscriber name for existing waitlist tables created without it.
alter table public.waitlist
  add column if not exists name text;

update public.waitlist
set name = 'Unknown'
where name is null or btrim(name) = '';

alter table public.waitlist
  alter column name set not null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'waitlist_name_length'
      and conrelid = 'public.waitlist'::regclass
  ) then
    alter table public.waitlist
      add constraint waitlist_name_length check (
        char_length(btrim(name)) >= 2 and char_length(name) <= 80
      );
  end if;
end $$;
