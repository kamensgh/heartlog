import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function GET(request: NextRequest) {
  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('spouse_profiles')
      .select('count')
      .limit(1)

    if (error) {
      return NextResponse.json({ 
        status: 'error', 
        message: 'Supabase connection failed', 
        error: error.message 
      }, { status: 500 })
    }

    return NextResponse.json({ 
      status: 'success', 
      message: 'Supabase connection working',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({ 
      status: 'error', 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 