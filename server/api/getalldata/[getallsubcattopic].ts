// get data of  topic for a selected category like ncert
// using params to get data of topic for a particular category
//used in the category page to get topics of a particular category
import { serverSupabase } from '../../utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = serverSupabase()

  const getallsubcattopic = event.context.params?.getallsubcattopic
  console.log("this is data:", getallsubcattopic)

  const { data, error } = await supabase
    .from('topic')
    .select(`
      *,
      subcat (*)
    `)
    .eq("category", getallsubcattopic)

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

  console.log('Grouped data:', grouped)

  return grouped
})