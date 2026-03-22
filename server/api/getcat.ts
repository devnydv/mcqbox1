import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    config.supabaseUrl,
    config.supabaseKey
  )

  const { data, error } = await supabase
    .from('category')
    .select('*')

  if (error) {
    return { error: error.message }
  }

  return { data }
})