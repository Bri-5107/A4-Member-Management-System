import {createClient} from '@supabase/supabase-js'
import { error } from 'console'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error("supabase url or key is not defined")
}

const supabase = createClient(supabaseUrl, supabaseKey) 

export default supabase