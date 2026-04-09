// get topics and subcat for home page

import { serverSupabase } from '../utils/supabase'
export default defineEventHandler(async () => {
  const supabase = serverSupabase()

  const { data, error } = await supabase
    .from('topic')
    .select(`
    *,
    subcat (*)
  `)

  if (error) {
    return { error: error.message }
  }

  return { data }
  
})