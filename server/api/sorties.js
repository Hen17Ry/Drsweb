import { createClient } from '@supabase/supabase-js'

// Initialiser Supabase avec les variables d'environnement
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    const { identrer, chambre, compteur, heure, recette, sbee } = body
    
    if (!identrer || !chambre || !compteur || !heure || !recette || !sbee) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Champs manquants' }))
    }
    
    const { data, error } = await supabase.from('sorti').insert([
    {
    identrer,
    chambre,
    compteur,
    heure,
    recette,
    sbee,
    created_at: new Date().toISOString(),
    },
    ])
    
    if (error) {
    console.error(error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Erreur serveur' }))
    }
    
    return {
    message: 'Sortie enregistrée avec succès',
    data,
    }
    })