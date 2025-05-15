import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async (event) => {
  const id = event.context.params.id

  const { data, error } = await supabase
    .from('sorti') // corriger ici
    .select('*')
    .eq('identrer', id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Erreur de récupération' }))
  }

  return data
})
