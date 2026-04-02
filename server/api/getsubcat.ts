import { serverSupabase } from '../utils/supabase'
export default defineEventHandler(async () => {
  const supabase = serverSupabase()

  const { data, error } = await supabase
    .from('subcat')
    .select('*')

  if (error) {
    return { error: error.message }
  }

  return { data }
  
})