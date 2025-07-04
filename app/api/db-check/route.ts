import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function GET(request: NextRequest) {
  try {
    console.log('Checking database tables...')
    
    // Test if tables exist by trying to select from them
    const tables = ['spouse_profiles', 'custom_fields', 'reminders']
    const results: any = {}
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('count')
          .limit(1)
        
        if (error) {
          results[table] = { exists: false, error: error.message }
        } else {
          results[table] = { exists: true, data }
        }
      } catch (err) {
        results[table] = { exists: false, error: err instanceof Error ? err.message : 'Unknown error' }
      }
    }
    
    console.log('Database check results:', results)
    
    return NextResponse.json({ 
      status: 'success', 
      tables: results,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Database check error:', error)
    return NextResponse.json({ 
      status: 'error', 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
} 