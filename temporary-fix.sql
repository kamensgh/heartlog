-- Temporary fix: Disable RLS for testing
-- WARNING: This is for testing only, not for production

-- Disable RLS on all tables temporarily
ALTER TABLE spouse_profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE custom_fields DISABLE ROW LEVEL SECURITY;
ALTER TABLE reminders DISABLE ROW LEVEL SECURITY;

-- This will allow the API to work while we fix the RLS policies
-- Remember to re-enable RLS after testing with:
-- ALTER TABLE spouse_profiles ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE custom_fields ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE reminders ENABLE ROW LEVEL SECURITY; 