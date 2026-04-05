// get all subcategories for a selected category


import { serverSupabase } from '../../utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = serverSupabase()

  const getallsubcat = event.context.params?.getallsubcat
console.log("this is data:" + getallsubcat)
  const { data, error } = await supabase
    .from('subcat')
    .select('*')
    .eq("category", getallsubcat) // adjust column

  if (error) {
    return { error: error.message }
  }

  return { data }
})