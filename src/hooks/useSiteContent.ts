import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type SiteContent = {
  id: string;
  h1_line1: string;
  h1_line2: string;
  hero_image_url: string | null;
  updated_at: string;
};

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("site_content")
      .select("*")
      .single()
      .then(({ data }) => {
        if (data) setContent(data as SiteContent);
        setLoading(false);
      });
  }, []);

  return { content, loading };
}
