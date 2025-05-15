import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const {
      idReservation,
      chambre,
      compteur,
      heure_entree,
      option,
      idCarte,
      infoClient,
      nomClient
    } = body

    // 1. Vérification si la réservation existe
    const { data: reservationData, error: reservationError } = await supabase
      .from('reservation')
      .select()
      .eq('id', idReservation)
      .single() // On attend une seule entrée

    if (reservationError || !reservationData) {
      throw new Error('La réservation n\'existe pas.')
    }

    // 2. Insertion dans la table "entrer"
    const { data: newEntry, error: insertError } = await supabase
      .from('entrer')
      .insert([{
        idreservation: idReservation,
        chambre,
        compteur,
        heure_entree,
        option,
        idCarte,
        infoClient,
        nomClient
      }])
      .select()

    if (insertError) {
      throw insertError
    }

    // 3. Mise à jour de "validate" dans la table "reservation"
    const { error: updateError } = await supabase
      .from('reservation')
      .update({ validate: true })
      .eq('id', idReservation)

    if (updateError) {
      throw updateError
    }

    return {
      success: true,
      message: 'Enregistrement réussi',
      data: newEntry
    }

  } catch (err) {
    console.error(err)
    return {
      success: false,
      message: 'Une erreur est survenue',
      error: err.message
    }
  }
})