import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async () => {
  const { data, error } = await supabase
    .from('reservation')
    .select('*')
    .eq('validate', false)
    .order('id', { ascending: false })

  if (error) {
    return {
      success: false,
      message: 'Erreur lors de la récupération des réservations',
      error,
    }
  }

  return {
    success: true,
    reservations: data,
  }
})
