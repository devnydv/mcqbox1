// get data of  content for a selected topic like chapter 1 class 6
// using params to get data of content for a particular topic
//used in the quiz page to get content of a particular topic
import { serverSupabase } from '../../../../../utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = serverSupabase()
  const cat = event.context.params?.cate
  const subcat = event.context.params?.subcate  
  const topic = event.context.params?.topic
  console.log("this is data:", topic)

  // const { data, error } = await supabase
  //   .from('content')
  //   .select('*')
  //   .eq("category", cat)
  //   .eq("subcat", subcat)
  //   .eq("topic", topic)
const { data, error } = await supabase
     .from('questions')
     .select('*')
  // if (error) {
  //   return { error: error.message }
  // }

  // if (!data) return {}

  // type Topic = typeof data[number]

  // const grouped = data.reduce((acc: Record<string, Topic[]>, item) => {
  //   const key = item.topic?.names || "uncategorized"

  //   if (!acc[key]) {
  //     acc[key] = []
  //   }

  //   acc[key].push(item)
  //   return acc
  // }, {})

  console.log("this is data:", data)

  return data
})