import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Leaf, ShieldCheck } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const SetupAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const { data, error } = await supabase.functions.invoke("create-first-admin", {
      body: { email, password },
    });

    if (error || data?.error) {
      setStatus("error");
      setMessage(data?.error ?? "Er ging iets mis.");
    } else {
      setStatus("success");
      setMessage("✓ Admin account aangemaakt! Je kunt nu inloggen.");
      setTimeout(() => navigate("/login"), 2500);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--gradient-section)" }}
    >
      <div className="w-full max-w-md bg-card rounded-2xl shadow-2xl p-10 border border-border">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-full bg-forest-pale flex items-center justify-center mb-4">
            <ShieldCheck size={28} className="text-forest-mid" />
          </div>
          <h1 className="font-display text-2xl font-bold text-forest-deep">
            Admin instellen
          </h1>
          <p className="font-body text-sm text-muted-foreground mt-1 text-center">
            Maak het eerste beheerdersaccount aan. Dit kan maar één keer.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-4">
            <p className="font-body text-green-700 bg-green-50 border border-green-200 rounded-xl px-5 py-3">
              {message}
            </p>
            <p className="font-body text-sm text-muted-foreground mt-3">Je wordt doorgestuurd…</p>
          </div>
        ) : (
          <form onSubmit={handleSetup} className="space-y-5">
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
                placeholder="admin@groénhart.nl"
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
                minLength={8}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-mid transition"
                placeholder="Minimaal 8 tekens"
              />
            </div>

            {status === "error" && (
              <p className="font-body text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-2">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-xl font-body font-semibold text-base tracking-wide bg-gold text-foreground hover:shadow-[0_8px_30px_hsla(38,75%,52%,0.4)] transition-all duration-300 disabled:opacity-60"
            >
              {status === "loading" ? "Aanmaken…" : "Admin account aanmaken"}
            </button>

            <p className="font-body text-center text-sm text-muted-foreground">
              Al een account?{" "}
              <Link to="/login" className="text-forest-mid hover:underline">
                Inloggen
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SetupAdmin;
