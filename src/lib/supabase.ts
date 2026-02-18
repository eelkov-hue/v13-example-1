import { supabase } from "@/integrations/supabase/client";

export { supabase };

export type SiteContent = {
  id: string;
  h1_line1: string;
  h1_line2: string;
  hero_image_url: string | null;
  updated_at: string;
};
