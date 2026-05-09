import { supabase } from "@/integrations/supabase/client";

const BACKEND_URL = "https://brain-mapping-backend.vercel.app/api/sales";

export interface ContactData {
  name: string;
  email: string;
  mobile: string;
  company?: string;
  message?: string;
  selected_modules?: string[];
  scope?: "individual" | "institution";
  source?: string;
}

/**
 * Sends a contact message either to a custom backend (Nodemailer) or Supabase fallback.
 */
export async function sendContactMessage(data: ContactData) {
  // If a real backend URL is provided (not the placeholder), use it
  if (BACKEND_URL && BACKEND_URL !== "https://your-backend-url.com/api/contact") {
    // Send to custom backend
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Backend Error: ${response.statusText}`);
    }

    return await response.json();
  } else {
    // Fallback to Supabase Edge Function
    const { data: resData, error } = await supabase.functions.invoke("send-sales-lead", {
      body: data,
    });

    if (error) throw error;
    return resData;
  }
}
