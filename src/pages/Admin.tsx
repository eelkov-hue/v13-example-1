import { useState, useRef, useCallback, useEffect } from "react";
import ReactCrop, { Crop, PixelCrop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useSiteContent } from "@/hooks/useSiteContent";
import { Leaf, LogOut, Upload, Save, ImageIcon, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  return centerCrop(
    makeAspectCrop({ unit: "%", width: 90 }, aspect, mediaWidth, mediaHeight),
    mediaWidth,
    mediaHeight
  );
}

async function getCroppedImgBlob(image: HTMLImageElement, crop: PixelCrop): Promise<Blob> {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );
  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.9));
}

const Admin = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const { content } = useSiteContent();
  const navigate = useNavigate();

  const [h1Line1, setH1Line1] = useState("");
  const [h1Line2, setH1Line2] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  // Image crop state
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [uploadingImg, setUploadingImg] = useState(false);
  const [currentHeroUrl, setCurrentHeroUrl] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/login");
    }
  }, [authLoading, user, isAdmin, navigate]);

  useEffect(() => {
    if (content) {
      setH1Line1(content.h1_line1);
      setH1Line2(content.h1_line2);
      setCurrentHeroUrl(content.hero_image_url);
    }
  }, [content]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.onload = () => setImgSrc(reader.result?.toString() || "");
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 16 / 9));
  }, []);

  const handleSaveText = async () => {
    setSaving(true);
    setSaveMsg("");
    const { data: existing } = await supabase.from("site_content").select("id").single();
    if (existing) {
      await supabase
        .from("site_content")
        .update({ h1_line1: h1Line1, h1_line2: h1Line2, updated_at: new Date().toISOString() })
        .eq("id", existing.id);
    }
    setSaveMsg("✓ Tekst opgeslagen!");
    setSaving(false);
    setTimeout(() => setSaveMsg(""), 3000);
  };

  const handleUploadCroppedImage = async () => {
    if (!completedCrop || !imgRef.current) return;
    setUploadingImg(true);
    setSaveMsg("");
    try {
      const blob = await getCroppedImgBlob(imgRef.current, completedCrop);
      const fileName = `hero-${Date.now()}.jpg`;
      const { error: uploadError } = await supabase.storage
        .from("hero-images")
        .upload(fileName, blob, { contentType: "image/jpeg", upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage.from("hero-images").getPublicUrl(fileName);
      const publicUrl = urlData.publicUrl;

      const { data: existing } = await supabase.from("site_content").select("id").single();
      if (existing) {
        await supabase
          .from("site_content")
          .update({ hero_image_url: publicUrl, updated_at: new Date().toISOString() })
          .eq("id", existing.id);
      }

      setCurrentHeroUrl(publicUrl);
      setImgSrc("");
      setSaveMsg("✓ Foto opgeslagen en bijgesneden!");
    } catch (err) {
      setSaveMsg("❌ Er ging iets mis bij het uploaden.");
    }
    setUploadingImg(false);
    setTimeout(() => setSaveMsg(""), 4000);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-4 border-forest-mid border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-forest-pale flex items-center justify-center">
            <Leaf size={18} className="text-forest-mid" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-forest-deep">GroenHart CMS</h1>
            <p className="font-body text-xs text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="font-body text-sm text-forest-mid hover:underline"
            target="_blank"
          >
            Bekijk website ↗
          </a>
          <button
            onClick={signOut}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border font-body text-sm text-muted-foreground hover:bg-muted transition"
          >
            <LogOut size={15} />
            Uitloggen
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-10">

        {/* Success/Error message */}
        {saveMsg && (
          <div className={`px-5 py-3 rounded-xl font-body text-sm font-medium ${saveMsg.startsWith("✓") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
            {saveMsg}
          </div>
        )}

        {/* H1 Tekst bewerken */}
        <section className="bg-card border border-border rounded-2xl p-7">
          <h2 className="font-display text-xl font-bold text-forest-deep mb-1">
            Hoofdtekst (H1)
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            De grote titel op de hero-sectie van de homepage.
          </p>

          <div className="space-y-4">
            <div>
              <label className="font-body text-sm font-medium text-forest-deep block mb-1.5">
                Regel 1
              </label>
              <input
                type="text"
                value={h1Line1}
                onChange={(e) => setH1Line1(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-base focus:outline-none focus:ring-2 focus:ring-forest-mid transition"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-forest-deep block mb-1.5">
                Regel 2 <span className="text-muted-foreground">(cursief goud)</span>
              </label>
              <input
                type="text"
                value={h1Line2}
                onChange={(e) => setH1Line2(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-base focus:outline-none focus:ring-2 focus:ring-forest-mid transition"
              />
            </div>

            {/* Preview */}
            <div className="mt-4 p-5 rounded-xl bg-forest-deep/5 border border-forest-pale/50">
              <p className="font-body text-xs text-muted-foreground mb-2 uppercase tracking-widest">Voorbeeld</p>
              <p className="font-display text-2xl font-bold text-forest-deep leading-tight">
                {h1Line1}
                <br />
                <span className="italic text-gold">{h1Line2}</span>
              </p>
            </div>

            <button
              onClick={handleSaveText}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gold font-body font-semibold text-sm text-foreground hover:shadow-[0_4px_20px_hsla(38,75%,52%,0.4)] transition-all disabled:opacity-60"
            >
              <Save size={15} />
              {saving ? "Opslaan…" : "Tekst opslaan"}
            </button>
          </div>
        </section>

        {/* Hero Foto bewerken */}
        <section className="bg-card border border-border rounded-2xl p-7">
          <h2 className="font-display text-xl font-bold text-forest-deep mb-1">
            Hero Foto
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Upload een nieuwe achtergrondafbeelding en snijd deze bij.
          </p>

          {/* Huidige foto */}
          {currentHeroUrl && !imgSrc && (
            <div className="mb-5">
              <p className="font-body text-xs text-muted-foreground mb-2 uppercase tracking-widest">Huidige foto</p>
              <img
                src={currentHeroUrl}
                alt="Huidige hero"
                className="w-full h-48 object-cover rounded-xl border border-border"
              />
            </div>
          )}

          {/* Upload knop */}
          {!imgSrc && (
            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-forest-pale rounded-xl cursor-pointer hover:bg-forest-pale/10 transition">
              <Upload size={24} className="text-forest-mid mb-2" />
              <span className="font-body text-sm text-forest-mid font-medium">Klik om foto te uploaden</span>
              <span className="font-body text-xs text-muted-foreground mt-1">JPG, PNG — max 10 MB</span>
              <input type="file" accept="image/*" className="sr-only" onChange={onSelectFile} />
            </label>
          )}

          {/* Crop interface */}
          {imgSrc && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="font-body text-sm font-medium text-forest-deep">Snijd de foto bij (16:9)</p>
                <button
                  onClick={() => { setImgSrc(""); setCrop(undefined); setCompletedCrop(undefined); }}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <X size={18} />
                </button>
              </div>

              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={16 / 9}
                className="rounded-xl overflow-hidden max-h-[420px]"
              >
                <img
                  ref={imgRef}
                  src={imgSrc}
                  alt="Bijsnijden"
                  onLoad={onImageLoad}
                  className="max-w-full"
                />
              </ReactCrop>

              <button
                onClick={handleUploadCroppedImage}
                disabled={uploadingImg || !completedCrop}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gold font-body font-semibold text-sm text-foreground hover:shadow-[0_4px_20px_hsla(38,75%,52%,0.4)] transition-all disabled:opacity-60"
              >
                <ImageIcon size={15} />
                {uploadingImg ? "Uploaden…" : "Bijsnijden & opslaan"}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Admin;
