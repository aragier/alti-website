"use client";

import { createClient } from "./supabase";

export async function joinWaitlist(email: string): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient();

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    // Unique constraint violation = already on list
    if (error.code === "23505") {
      return { success: true }; // Treat as success — they're already in
    }
    return { success: false, error: error.message };
  }

  return { success: true };
}
