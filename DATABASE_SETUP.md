# Database Setup Guide

## Setting up Supabase Database

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and anon key

### 2. Update Environment Variables
Add your Supabase credentials to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Run Database Schema
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy the contents of `supabase-schema.sql`
4. Paste and execute the SQL

### 4. Verify Setup
1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000/api/test` to verify connection
3. Try signing up/signing in at `/auth`

## Database Schema

The schema includes:

- **spouse_profiles**: Store partner's basic information
- **custom_fields**: Store various details organized by category
- **reminders**: Store birthday, anniversary, and custom reminders

All tables have Row Level Security (RLS) enabled to ensure users can only access their own data.

## API Endpoints

- `GET /api/spouse-profiles` - Fetch user's spouse profile
- `POST /api/spouse-profiles` - Create/update spouse profile
- `GET /api/custom-fields` - Fetch user's custom fields
- `POST /api/custom-fields` - Create new custom field
- `PUT /api/custom-fields` - Update custom field
- `DELETE /api/custom-fields` - Delete custom field
- `GET /api/reminders` - Fetch user's reminders
- `POST /api/reminders` - Create new reminder
- `PUT /api/reminders` - Update reminder
- `DELETE /api/reminders` - Delete reminder

All endpoints require authentication via Bearer token. 