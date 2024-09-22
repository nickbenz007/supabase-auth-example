import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions
import { createClient } from "@/lib/subabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) {
        // In development, use localhost
        return NextResponse.redirect(`http://localhost:3000${next}`);
      } else if (forwardedHost) {
        // Use the forwarded host in production
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        // Fallback to hardcoded production domain if forwardedHost is not set
        return NextResponse.redirect(
          `https://supabase-auth-example-two.vercel.app${next}`
        );
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
