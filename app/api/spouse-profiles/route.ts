import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

// GET - Fetch spouse profile for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data, error } = await supabase
      .from('spouse_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create or update spouse profile
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { name, birthday, anniversary, notes, photo_url } = body

    console.log('Creating/updating profile for user:', user.id, 'with data:', { name, birthday, anniversary, notes, photo_url })

    // Clean the data
    const cleanData = {
      user_id: user.id,
      name: name || null,
      photo_url: photo_url || null,
      birthday: birthday || null,
      anniversary: anniversary || null,
      notes: notes || null
    }

    // Remove empty strings and convert to null
    Object.keys(cleanData).forEach(key => {
      if (cleanData[key as keyof typeof cleanData] === '') {
        cleanData[key as keyof typeof cleanData] = null
      }
    })

    console.log('Clean data for insert:', cleanData)

    // Check if profile exists
    const { data: existingProfile } = await supabase
      .from('spouse_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()

    let result
    if (existingProfile) {
      // Update existing profile
      console.log('Updating existing profile for user:', user.id)
      result = await supabase
        .from('spouse_profiles')
        .update(cleanData)
        .eq('user_id', user.id)
        .select()
        .single()
    } else {
      // Create new profile
      console.log('Creating new profile for user:', user.id)
      result = await supabase
        .from('spouse_profiles')
        .insert(cleanData)
        .select()
        .single()
    }

    if (result.error) {
      console.error('Error creating profile:', result.error)
      return NextResponse.json({ error: result.error.message }, { status: 500 })
    }

    console.log('Profile operation successful:', result.data)
    return NextResponse.json(result.data)

  } catch (error) {
    console.error('Error in profile operation:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 