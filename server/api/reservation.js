import { createClient } from '@supabase/supabase-js'

// Initialiser Supabase avec les variables d'environnement
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const {
    nom,
    email,
    telephone,
    nombrepersonne,
    jour,
    heure,
    option,
    chambre,
    message
  } = body

  // Simple validation
  if (!nom || !jour || !option) {
    return {
      statusCode: 400,
      message: 'Veuillez remplir tous les champs obligatoires.'
    }
  }

  // 🗓️ Formatage de la date en YYYY-MM-DD
  const formattedDate = new Date(jour)
  const yyyy = formattedDate.getFullYear()
  const mm = String(formattedDate.getMonth() + 1).padStart(2, '0')
  const dd = String(formattedDate.getDate()).padStart(2, '0')
  const formattedDateString = `${yyyy}-${mm}-${dd}`

  // 🕒 Formatage de l’heure si nécessaire (assumons HH:mm)
  const formattedHeure = heure?.length <= 5 ? heure : heure?.slice(0, 5)

  // Insérer dans Supabase
  const { data, error } = await supabase
    .from('reservation')
    .insert([{
      nom,
      email,
      telephone,
      nombrepersonne: parseInt(nombrepersonne),
      jour: formattedDateString,
      heure: formattedHeure,
      option,
      chambre,
      message
    }])

  if (error) {
    console.error('Erreur Supabase :', error)
    return {
      statusCode: 500,
      message: 'Erreur lors de l’enregistrement de la réservation.'
    }
  }

  return {
    statusCode: 200,
    message: 'Réservation enregistrée avec succès.',
    data
  }
})