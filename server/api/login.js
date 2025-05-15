import { createClient } from '@supabase/supabase-js'
import jwt from 'jsonwebtoken'

// Initialiser Supabase avec les variables d'environnement
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

// Fonction pour générer un token JWT
const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET || 'tonSecretSuperSecret'
  const expiresIn = '10m'
  const payload = { id: userId }
  return jwt.sign(payload, secret, { expiresIn })
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, role } = body
 
  if (!email || !password || !role) {
    return createError({ statusCode: 400, statusMessage: 'Champs requis manquants.' })
  }

  // Vérifier si l'utilisateur existe dans la base de données
  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('id, email, password, role')
    .eq('email', email)
    .single()

  if (userError || !userData) {
    return createError({ statusCode: 404, statusMessage: 'Utilisateur non trouvé.' })
  }

  // Comparer les mots de passe en texte clair
  if (password !== userData.password) {
    return createError({ statusCode: 401, statusMessage: 'Mot de passe incorrect.' })
  }

  // Vérifier si le rôle correspond
  if (userData.role.toLowerCase() !== role.toLowerCase()) {
    return createError({ statusCode: 403, statusMessage: 'Rôle incorrect.' })
  }

  // Génération du token JWT après la validation
  const token = generateToken(userData.id)

  // Forcer l'expiration de session à 10 minutes
  const expireAt = new Date(Date.now() + 60 * 60 * 1000) // 10 minutes

  return {
    message: 'Connexion réussie',
    token,  // Token généré par ta fonction
    expireAt: expireAt.toISOString(),
    user: {
      id: userData.id,
      email: userData.email,
      role: userData.role,
    },
  }
})