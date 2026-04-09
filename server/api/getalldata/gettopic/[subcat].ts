// get data of  topic for a selected subcategory like ncert
// using params to get data of topic for a particular subcategory
//used in the subcategory page to get topics of a particular subcategory
import { serverSupabase } from '../../../utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = serverSupabase()

  const subcat = event.context.params?.subcat
  console.log("this is data:", subcat)

  const { data, error } = await supabase
    .from('topic')
    .select(`
      *,
      subcat (*)
    `)
    .eq("subcat", subcat)

  if (error) {
    return { error: error.message }
  }

  if (!data) return {}

  type Topic = typeof data[number]

  const grouped = data.reduce((acc: Record<string, Topic[]>, item) => {
    const key = item.subcat?.names || "uncategorized"

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(item)
    return acc
  }, {})

  

  return grouped
})