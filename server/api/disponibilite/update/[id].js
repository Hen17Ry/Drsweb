import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const body = await readBody(event)
  const { chambre, date, heured, heuref } = body

  const { data, error } = await supabase
    .from('disponibilite')
    .update({
      chambre,
      date,
      heured,
      heuref,
    })
    .eq('id', id)

  if (error) {
    console.error(error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Erreur de mise à jour' }))
  }

  return {
    message: 'Disponibilité mise à jour',
    data,
  }
})
