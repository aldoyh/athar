import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COPY, type Lang, type Overlay } from "@/components/athar/model";

const STORAGE_KEY = "athar-study";

type Store = {
  stage: number;
  shown: number;
  held: boolean;
  lang: Lang;
  hidden: boolean;
  frozen: boolean;
  overlay: Overlay;
  setStage: (n: number) => void;
  setHeld: (held: boolean) => void;
  toggleLang: () => void;
  toggleHidden: () => void;
  toggleFrozen: () => void;
  open: (overlay: Overlay) => void;
  close: () => void;
};

const AtharContext = createContext<Store | null>(null);

function clampStage(n: number): number {
  if (!Number.isFinite(n)) return 10;
  return Math.min(10, Math.max(1, Math.round(n)));
}

export function AtharProvider({ children }: { children: ReactNode }) {
  const [stage, setStageState] = useState(10);
  const [held, setHeld] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [hidden, setHidden] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [overlay, setOverlay] = useState<Overlay>({ kind: "none" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed: unknown = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return;
      const data = parsed as { lang?: unknown; hidden?: unknown; frozen?: unknown };
      if (data.lang === "ar" || data.lang === "en") setLang(data.lang);
      if (typeof data.hidden === "boolean") setHidden(data.hidden);
      if (typeof data.frozen === "boolean") setFrozen(data.frozen);
    } catch {
      /* ignore a damaged local preference */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ lang, hidden, frozen }));
  }, [lang, hidden, frozen]);

  const store = useMemo<Store>(
    () => ({
      stage,
      shown: held ? 1 : stage,
      held,
      lang,
      hidden,
      frozen,
      overlay,
      setStage: (n) => {
        setHeld(false);
        setStageState(clampStage(n));
      },
      setHeld,
      toggleLang: () => setLang((current) => (current === "en" ? "ar" : "en")),
      toggleHidden: () => setHidden((current) => !current),
      toggleFrozen: () => setFrozen((current) => !current),
      open: setOverlay,
      close: () => setOverlay({ kind: "none" }),
    }),
    [stage, held, lang, hidden, frozen, overlay],
  );

  return <AtharContext.Provider value={store}>{children}</AtharContext.Provider>;
}

export function useAthar(): Store {
  const store = useContext(AtharContext);
  if (!store) throw new Error("Athar store is missing");
  return store;
}

export function useCopy() {
  const { lang } = useAthar();
  return COPY[lang];
}
