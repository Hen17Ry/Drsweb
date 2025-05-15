import { createClient } from '@supabase/supabase-js'

// Initialiser Supabase avec les variables d'environnement
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    const {chambre, date, heured, heuref } = body
    
    if (!chambre || !date || !heured || !heuref) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Champs manquants' }))
    }
    
    const { data, error } = await supabase.from('disponibilite').insert([
    {
    chambre,
    date,
    heured,
    heuref,
    created_at: new Date().toISOString(),
    },
    ])
    
    if (error) {
    console.error(error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Erreur serveur' }))
    }
    
    return {
    message: 'Disponibilité ajouter',
    data,
    }
    })