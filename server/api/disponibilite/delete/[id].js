// /api/disponibilites/[id].delete.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async (event) => {
  const id = event.context.params.id

  const { error } = await supabase
    .from('disponibilite')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Erreur de suppression' }))
  }

  return { message: 'Disponibilité supprimée' }
})
