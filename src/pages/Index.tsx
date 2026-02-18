import heroForest from "@/assets/hero-forest.jpg";
import { Leaf, TreePine, Waves, Bird, ChevronDown } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const Index = () => {
  const { content, loading } = useSiteContent();

  const h1Line1 = content?.h1_line1 ?? "Ontdek de kracht";
  const h1Line2 = content?.h1_line2 ?? "van de natuur";
  const heroImageUrl = content?.hero_image_url ?? heroForest;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <Leaf className="text-forest-pale" size={24} />
          <span className="font-display text-xl font-semibold text-cream tracking-wide">
            GroenHart
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-body text-sm text-cream/80 hover:text-cream transition-colors tracking-wide uppercase">Over ons</a>
          <a href="#" className="font-body text-sm text-cream/80 hover:text-cream transition-colors tracking-wide uppercase">Activiteiten</a>
          <a href="#" className="font-body text-sm text-cream/80 hover:text-cream transition-colors tracking-wide uppercase">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cream/25 bg-cream/10 backdrop-blur-sm opacity-0 animate-fade-in delay-200">
            <TreePine size={14} className="text-gold" />
            <span className="font-body text-xs text-cream/90 uppercase tracking-widest">
              Natuur. Verbinding. Rust.
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6 opacity-0 animate-fade-up delay-400 text-balance">
            {loading ? (
              <>
                Ontdek de kracht
                <br />
                <span className="italic text-gold-light">van de natuur</span>
              </>
            ) : (
              <>
                {h1Line1}
                <br />
                <span className="italic text-gold-light">{h1Line2}</span>
              </>
            )}
          </h1>

          <p className="font-body text-lg md:text-xl text-cream/80 max-w-xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up delay-600">
            Word lid van onze groene gemeenschap en geniet van adembenemende
            bossen, rust en verbinding met de natuur.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-800">
            <button className="group relative px-10 py-4 rounded-full font-body font-semibold text-base tracking-wide transition-all duration-300 overflow-hidden bg-gold text-foreground hover:shadow-[0_8px_30px_hsla(38,75%,52%,0.5)] hover:-translate-y-0.5 active:translate-y-0">
              <span className="relative z-10 flex items-center gap-2">
                <Leaf size={16} />
                Lid worden
              </span>
            </button>

            <button className="group px-10 py-4 rounded-full font-body font-semibold text-base tracking-wide border-2 border-cream/60 text-cream hover:bg-cream/10 hover:border-cream transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                Meer info
                <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-800">
          <span className="font-body text-xs text-cream/50 uppercase tracking-widest">Ontdek meer</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 px-6" style={{ background: "var(--gradient-section)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-deep mb-4">
              Waarom GroenHart?
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
              Een gemeenschap van mensen die de natuur koesteren en voor elkaar zorgen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TreePine size={32} className="text-forest-mid" />,
                title: "Beleef het bos",
                desc: "Wandel door eeuwenoude bossen en ervaar de rust die alleen de natuur kan bieden.",
              },
              {
                icon: <Waves size={32} className="text-forest-mid" />,
                title: "Innerlijke rust",
                desc: "Ontspan volledig in een omgeving waar de natuur de maat van de dag bepaalt.",
              },
              {
                icon: <Bird size={32} className="text-forest-mid" />,
                title: "Duurzame gemeenschap",
                desc: "Maak deel uit van een groeiende gemeenschap die de natuur actief beschermt.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-forest-pale hover:shadow-[0_8px_32px_-8px_hsla(142,40%,15%,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-forest-pale flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-deep mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6" style={{ background: "var(--gradient-primary)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Leaf size={36} className="text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-5">
            Klaar om deel uit te maken <br /> van iets bijzonders?
          </h2>
          <p className="font-body text-cream/75 text-lg mb-10 max-w-lg mx-auto">
            Sluit je aan bij duizenden leden die al genieten van de voordelen van GroenHart.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 rounded-full font-body font-semibold text-base tracking-wide bg-gold text-foreground hover:shadow-[0_8px_30px_hsla(38,75%,52%,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
              <Leaf size={16} />
              Lid worden
            </button>
            <button className="px-10 py-4 rounded-full font-body font-semibold text-base tracking-wide border-2 border-cream/50 text-cream hover:bg-cream/10 hover:border-cream transition-all duration-300 hover:-translate-y-0.5">
              Meer info
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-forest-deep">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Leaf size={18} className="text-gold" />
            <span className="font-display text-lg text-cream/90">GroenHart</span>
          </div>
          <p className="font-body text-sm text-cream/40">
            © 2026 GroenHart. Samen voor een groenere toekomst.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
