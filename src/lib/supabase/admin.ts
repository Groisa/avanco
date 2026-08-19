import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Service-role client for server-only admin operations (managing auth
// users). Never import this from a Client Component — the key must stay
// server-side.
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
