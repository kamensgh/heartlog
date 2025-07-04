-- Create a function to insert spouse profile with proper user context
CREATE OR REPLACE FUNCTION insert_spouse_profile(
  p_user_id UUID,
  p_name TEXT,
  p_photo_url TEXT DEFAULT NULL,
  p_birthday DATE DEFAULT NULL,
  p_anniversary DATE DEFAULT NULL,
  p_notes TEXT DEFAULT NULL
)
RETURNS TABLE(
  id UUID,
  user_id UUID,
  name TEXT,
  photo_url TEXT,
  birthday DATE,
  anniversary DATE,
  notes TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Insert the profile with the provided user_id
  INSERT INTO spouse_profiles (
    user_id,
    name,
    photo_url,
    birthday,
    anniversary,
    notes
  ) VALUES (
    p_user_id,
    p_name,
    p_photo_url,
    p_birthday,
    p_anniversary,
    p_notes
  )
  RETURNING 
    id,
    user_id,
    name,
    photo_url,
    birthday,
    anniversary,
    notes,
    created_at,
    updated_at
  INTO 
    id,
    user_id,
    name,
    photo_url,
    birthday,
    anniversary,
    notes,
    created_at,
    updated_at;
    
  RETURN NEXT;
END;
$$; 