import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError("Ongeldige inloggegevens. Probeer opnieuw.");
    } else {
      navigate("/admin");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div className="w-full max-w-md bg-card rounded-2xl shadow-2xl p-10 border border-border">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-full bg-forest-pale flex items-center justify-center mb-4">
            <Leaf size={28} className="text-forest-mid" />
          </div>
          <h1 className="font-display text-2xl font-bold text-forest-deep">
            Personeelsinlog
          </h1>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Log in om de website te beheren
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="font-body text-sm font-medium text-forest-deep block mb-1.5">
              E-mailadres
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-mid transition"
              placeholder="naam@groénhart.nl"
            />
          </div>

          <div>
            <label className="font-body text-sm font-medium text-forest-deep block mb-1.5">
              Wachtwoord
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-mid transition"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="font-body text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-body font-semibold text-base tracking-wide bg-gold text-foreground hover:shadow-[0_8px_30px_hsla(38,75%,52%,0.4)] transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Inloggen…" : "Inloggen"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
