import { supabase } from "@/lib/subabase/client";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data: user } = await supabase.auth.getSession();
      if (user.session?.user) {
        // fetch user info
        await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.session.user.id)
          .single();
        return user;
      }
    },
  });
};
