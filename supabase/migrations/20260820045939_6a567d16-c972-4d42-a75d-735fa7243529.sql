ALTER TABLE public.enquiries
  ADD COLUMN IF NOT EXISTS quoted_amount numeric,
  ADD COLUMN IF NOT EXISTS quote_note text,
  ADD COLUMN IF NOT EXISTS quoted_at timestamp with time zone;