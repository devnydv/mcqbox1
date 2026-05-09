// get data of  content for a selected topic like chapter 1 class 6
// using params to get data of content for a particular topic
//used in the quiz page to get content of a particular topic
import { serverSupabase } from '../../utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = serverSupabase()
  const id = event.context.params?.id
  


  const { data, error } = await supabase
    .from('quizlist')
    .select('*')
    .eq("id", id)
    

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
  if (!data || data.length === 0) {
    return null
  }
  return data[0]
  
})