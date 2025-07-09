# 💕 Spouse Details App

A comprehensive web application for storing and managing personal details about your spouse/partner, including profile information, custom fields, reminders, and secure authentication.

## ✨ Features

### 🔐 Authentication & Security
- **Supabase Authentication**: Secure sign-up, sign-in, and password reset
- **Row Level Security (RLS)**: Database-level security ensuring users can only access their own data
- **JWT Token Management**: Secure API access with Bearer token authentication
- **Password Reset Flow**: Complete forgot password functionality with email verification

### 👤 Profile Management
- **Partner Profile**: Store basic information including name, birthday, anniversary, and notes
- **Profile Picture Upload**: Upload and manage partner photos with Supabase Storage
- **Real-time Updates**: Instant UI updates when profile information changes
- **Responsive Design**: Beautiful, mobile-friendly interface

### 📝 Custom Fields
- **Flexible Data Storage**: Add custom categories and fields for any information
- **Category Organization**: Organize custom fields by categories (e.g., clothing, health, preferences)
- **Dynamic Forms**: Add, edit, and delete custom fields on the fly
- **Data Persistence**: All custom fields are saved to the database

### 🔔 Reminders & Notifications
- **Event Reminders**: Create reminders for birthdays, anniversaries, and custom events
- **Advance Notifications**: Set how many days in advance to be reminded (1 day to 1 month)
- **Enable/Disable**: Toggle reminders on and off as needed
- **Notes Support**: Add additional notes to each reminder
- **Quick Setup**: One-click buttons for common events (Valentine's Day, Christmas, New Year)

### 📅 Calendar Integration
- **Export to Calendar**: Save any reminder to your phone or computer calendar
- **ICS File Format**: Standard calendar format compatible with all major calendar apps
- **Cross-Platform**: Works with Google Calendar, Apple Calendar, Outlook, and more
- **One-Click Export**: Simple button to download and add to calendar

### 🖼️ Image Management
- **Profile Picture Upload**: Upload partner photos directly from the app
- **Image Validation**: File type and size validation (max 5MB)
- **Secure Storage**: Images stored in Supabase Storage with proper access controls
- **Real-time Preview**: See image preview before uploading
- **Automatic Cleanup**: Proper file management and cleanup

### 🎨 User Interface
- **Modern Design**: Clean, beautiful interface with gradient backgrounds
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme Support**: Built-in theme switching capability
- **Loading States**: Smooth loading indicators and error handling
- **Toast Notifications**: User-friendly success and error messages

## 🚀 Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Beautiful, accessible UI components
- **Lucide React**: Modern icon library

### Backend
- **Supabase**: Backend-as-a-Service
  - PostgreSQL Database
  - Authentication
  - Storage (for images)
  - Row Level Security (RLS)
- **Next.js API Routes**: Server-side API endpoints

### Database Schema
```sql
-- Spouse Profiles
spouse_profiles (
  id, user_id, name, photo_url, birthday, 
  anniversary, notes, created_at, updated_at
)

-- Custom Fields
custom_fields (
  id, user_id, profile_id, category, label, 
  value, created_at, updated_at
)

-- Reminders
reminders (
  id, user_id, profile_id, type, title, date, 
  enabled, advance_notice_days, notes, created_at, updated_at
)
```

## 📱 How to Use

### Getting Started
1. **Sign Up**: Create a new account with email and password
2. **Create Profile**: Add your partner's basic information
3. **Upload Photo**: Add a profile picture for your partner
4. **Add Custom Fields**: Create custom categories and fields for specific information
5. **Set Reminders**: Create reminders for important dates and events

### Managing Reminders
1. **Create Reminder**: Click "Add Reminder" and fill in the details
2. **Quick Setup**: Use the quick setup buttons for common events
3. **Save to Calendar**: Click "Save to Calendar" to export to your calendar app
4. **Enable/Disable**: Toggle reminders on and off as needed
5. **Delete**: Remove reminders you no longer need

### Custom Fields
1. **Add Category**: Create a new category (e.g., "Clothing", "Health")
2. **Add Field**: Add specific fields within each category
3. **Edit Values**: Update field values anytime
4. **Organize**: Keep all partner information organized and easily accessible

## 🔧 Development Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account

### Installation
```bash
# Clone the repository
git clone https://github.com/benjamint/heartlog.git
cd heartlog

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables
Create a `.env.local` file with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Database Setup
1. Create a new Supabase project
2. Run the SQL schema in the Supabase SQL Editor
3. Set up Row Level Security policies
4. Configure authentication settings

### Storage Setup
Run the storage setup SQL to create the profile-images bucket:
```sql
-- Create storage bucket for profile images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'profile-images',
  'profile-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp']
) ON CONFLICT (id) DO NOTHING;

-- Create RLS policies for storage
CREATE POLICY "profile_images_policy" ON storage.objects
FOR ALL USING (bucket_id = 'profile-images');
```

### Running the App
```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security Features

- **Row Level Security**: Database-level security policies
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **File Upload Security**: Image type and size validation
- **CORS Protection**: Proper CORS configuration
- **Environment Variables**: Secure credential management

## 📊 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/reset-password` - Password reset

### Profiles
- `GET /api/spouse-profiles` - Get user's profile
- `POST /api/spouse-profiles` - Create/update profile

### Custom Fields
- `GET /api/custom-fields` - Get user's custom fields
- `POST /api/custom-fields` - Create custom field
- `PUT /api/custom-fields` - Update custom field
- `DELETE /api/custom-fields` - Delete custom field

### Reminders
- `GET /api/reminders` - Get user's reminders
- `POST /api/reminders` - Create reminder
- `PUT /api/reminders` - Update reminder
- `DELETE /api/reminders` - Delete reminder

### File Upload
- `POST /api/upload-image` - Upload profile image

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Supabase](https://supabase.com) for the amazing backend platform
- [Next.js](https://nextjs.org) for the React framework
- [Shadcn/ui](https://ui.shadcn.com) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com) for the styling framework

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ for couples who want to remember the little things that matter most.** 