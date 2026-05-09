import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PartnerCard, type Partner } from "./PartnerCard";
import { RevealOnScroll } from "./RevealOnScroll";

export const PartnersSection = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    supabase
      .from("partners")
      .select("id,name,designation,company,bio,photo_url,linkedin_url,twitter_url,website_url")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          console.error("[PartnersSection] failed to load partners", error);
          return;
        }

        console.info("[PartnersSection] loaded partners", (data as Partner[] | null)?.map((partner) => ({
          id: partner.id,
          name: partner.name,
          hasPhoto: Boolean(partner.photo_url),
        })) || []);

        setPartners((data as Partner[]) || []);
      });
  }, []);

  const loop = partners.length ? [...partners, ...partners] : [];

  return (
    <section id="partners" className="py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] text-[hsl(var(--perfy-cyan))]">LEADERSHIP & PARTNERS</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              The minds <span className="text-electric">behind PERFY</span>
            </h2>
            <p className="mt-4 text-[hsl(var(--perfy-muted))] max-w-2xl mx-auto">
              A curated ecosystem of operators, strategists, and specialists working in coordination to engineer business performance.
            </p>
          </div>
        </RevealOnScroll>

        {partners.length === 0 ? (
          <div className="text-center text-[hsl(var(--perfy-muted))] py-12">
            Partners will appear here once added in the admin panel.
          </div>
        ) : (
          <div className="ticker-mask overflow-hidden -mx-6 px-6">
            <div className="flex gap-6 w-max animate-perfy-marquee hover:[animation-play-state:paused]">
              {loop.map((p, i) => <PartnerCard key={`${p.id}-${i}`} p={p} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
