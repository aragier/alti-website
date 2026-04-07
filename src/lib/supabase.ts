import { createClient as createSupabaseClient } from "@supabase/supabase-js";

type Database = {
  public: {
    Tables: {
      waitlist: {
        Row: { id: string; email: string; created_at: string };
        Insert: { email: string; id?: string; created_at?: string };
        Update: { email?: string; id?: string; created_at?: string };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

let client: ReturnType<typeof createSupabaseClient<Database>> | null = null;

/**
 * Supabase client for the landing page.
 * Uses the default 'public' schema — only has access to the waitlist table.
 * App tables live in the 'app' schema and are not accessible from here.
 */
export function createClient() {
  if (client) return client;

  client = createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return client;
}
