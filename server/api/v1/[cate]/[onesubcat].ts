// get data of  content for a selected topic like chapter 1 class 6
// using params to get data of content for a particular topic
//used in the quiz page to get content of a particular topic
import { serverSupabase } from '../../../utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = serverSupabase()
  const cat = event.context.params?.cate
  const subcat = event.context.params?.onesubcat
 

console.log(`Received request for category: ${cat}, subcategory: ${subcat}`)

  const { data, error } = await supabase
    .from('subcat')
    .select('*')
    .eq("category", cat)
    .eq("slug", subcat)
    
  return data

})  