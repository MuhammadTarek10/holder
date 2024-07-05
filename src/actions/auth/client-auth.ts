"use server";

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export const login = async (email: string, password: string) => {
  const supabase = createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    throw error;
  }

  redirect("/dashboard");
};
