import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (!data?.user || error) {
    return redirect("/login");
  }

  return data.user;
};
