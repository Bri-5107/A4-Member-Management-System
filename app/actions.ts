"use server";
import supabase from "@/lib/supabase";

export async function createPerson(formData: FormData) {
    const full_name = formData.get("full_name") as string;
    const mobile_number = formData.get("mobile_number") as string;

    const {data, error} = await supabase
        .from('people')
        .insert({full_name, mobile_number})
        .select();

    if (error) {
        return {
            error: error.message,
        };
    }   

    return { data };
}