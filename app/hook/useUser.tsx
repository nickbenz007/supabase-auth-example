import { createSupabaseBrowserClient } from "@/lib/subabase/client";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const supabase = createSupabaseBrowserClient();
      const { data } = await supabase.auth.getSession();

      if (data.session?.user) {
        // fetch user info
        const { data: user } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", data.session.user.id)
          .single(); // Single is passed that we need only single person info

        return user;
      }
      return null;
    },
  });
};
