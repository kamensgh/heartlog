import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader) {
      return NextResponse.json({ 
        status: 'error', 
        message: 'No authorization header',
        timestamp: new Date().toISOString()
      }, { status: 401 })
    }

    const token = authHeader.replace('Bearer ', '')
    console.log('Testing auth with token:', token.substring(0, 20) + '...')
    
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError) {
      console.error('Auth error:', authError)
      return NextResponse.json({ 
        status: 'error', 
        message: 'Authentication failed',
        error: authError.message,
        timestamp: new Date().toISOString()
      }, { status: 401 })
    }
    
    if (!user) {
      return NextResponse.json({ 
        status: 'error', 
        message: 'No user found',
        timestamp: new Date().toISOString()
      }, { status: 401 })
    }

    console.log('Auth successful for user:', user.id)
    
    return NextResponse.json({ 
      status: 'success', 
      user: {
        id: user.id,
        email: user.email,
        created_at: user.created_at
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Auth test error:', error)
    return NextResponse.json({ 
      status: 'error', 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
} 