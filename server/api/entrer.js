import { createClient } from '@supabase/supabase-js'

// Initialiser Supabase avec les variables d'environnement
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async () => {
    const { data, error } = await supabase
      .from('entrer')
      .select('*')
      .order('id', { ascending: false }) // optionnel
  
    if (error) {
      return {
        statusCode: 500,
        body: { error: error.message }
      }
    }
  
    return data
  })