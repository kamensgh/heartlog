-- Fix RLS policies for spouse_profiles table
-- Drop existing policies first
DROP POLICY IF EXISTS "Users can view their own spouse profiles" ON spouse_profiles;
DROP POLICY IF EXISTS "Users can insert their own spouse profiles" ON spouse_profiles;
DROP POLICY IF EXISTS "Users can update their own spouse profiles" ON spouse_profiles;
DROP POLICY IF EXISTS "Users can delete their own spouse profiles" ON spouse_profiles;

-- Create new policies with proper user context
CREATE POLICY "Users can view their own spouse profiles" ON spouse_profiles
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own spouse profiles" ON spouse_profiles
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own spouse profiles" ON spouse_profiles
  FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can delete their own spouse profiles" ON spouse_profiles
  FOR DELETE USING (auth.uid()::text = user_id::text);

-- Fix RLS policies for custom_fields table
DROP POLICY IF EXISTS "Users can view their own custom fields" ON custom_fields;
DROP POLICY IF EXISTS "Users can insert their own custom fields" ON custom_fields;
DROP POLICY IF EXISTS "Users can update their own custom fields" ON custom_fields;
DROP POLICY IF EXISTS "Users can delete their own custom fields" ON custom_fields;

CREATE POLICY "Users can view their own custom fields" ON custom_fields
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own custom fields" ON custom_fields
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own custom fields" ON custom_fields
  FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can delete their own custom fields" ON custom_fields
  FOR DELETE USING (auth.uid()::text = user_id::text);

-- Fix RLS policies for reminders table
DROP POLICY IF EXISTS "Users can view their own reminders" ON reminders;
DROP POLICY IF EXISTS "Users can insert their own reminders" ON reminders;
DROP POLICY IF EXISTS "Users can update their own reminders" ON reminders;
DROP POLICY IF EXISTS "Users can delete their own reminders" ON reminders;

CREATE POLICY "Users can view their own reminders" ON reminders
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own reminders" ON reminders
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own reminders" ON reminders
  FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can delete their own reminders" ON reminders
  FOR DELETE USING (auth.uid()::text = user_id::text); 