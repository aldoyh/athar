import { useEffect } from "react";
import { PASSES } from "@/components/athar/model";
import { Overlays } from "@/components/athar/overlays";
import { PhoneBody, PhoneNav } from "@/components/athar/phone";
import { BriefBody } from "@/components/athar/brief";
import { AtharProvider, useAthar, useCopy } from "@/components/athar/state";
import { cn } from "@/lib/cn";

function Studio() {
  const { stage, held, setHeld, setStage, lang, toggleLang, shown, open } = useAthar();
  const copy = useCopy();
  const pass = PASSES[stage - 1] ?? PASSES[9];
  const blurb = lang === "ar" ? pass?.blurbAr : pass?.blurbEn;
  const paper = shown < 3;

  useEffect(() => {
    const clear = () => setHeld(false);
    window.addEventListener("pointerup", clear);
    window.addEventListener("pointercancel", clear);
    return () => {
      window.removeEventListener("pointerup", clear);
      window.removeEventListener("pointercancel", clear);
    };
  }, [setHeld]);

  return (
    <div className="flex h-dvh min-w-0 flex-1 justify-center">
      <div className="flex h-dvh w-full max-w-md flex-col">
        <header className="shrink-0 border-b border-line bg-pearl pt-safe text-ink">
          <div className="flex items-center gap-2 px-3 pt-2">
            <button
              type="button"
              className="min-h-11 shrink-0 bg-panel px-3 text-sm transition-transform duration-150 ease-out active:scale-[0.96]"
              onClick={() => open({ kind: "brief" })}
            >
              {copy.brief}
            </button>
            <p className="min-w-0 flex-1 text-sm text-pretty text-mist line-clamp-2" aria-live="polite">
              {blurb}
            </p>
            <button
              type="button"
              className="min-h-11 shrink-0 bg-panel px-3 text-sm transition-transform duration-150 ease-out active:scale-[0.96]"
              onClick={toggleLang}
              aria-label={lang === "en" ? "العربية" : "English"}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
          </div>
          <ol className="flex gap-1 overflow-x-auto px-3 py-2">
            {PASSES.map((item) => {
              const selected = item.n === stage;
              const label = lang === "ar" ? item.ar : item.en;
              return (
                <li key={item.n} className="shrink-0">
                  <button
                    type="button"
                    aria-current={selected ? "step" : undefined}
                    className={cn(
                      "min-h-11 px-3 text-sm tabular-nums transition-transform duration-150 ease-out active:scale-[0.96]",
                      selected ? "bg-brass text-pearl" : "text-ink",
                    )}
                    onClick={() => setStage(item.n)}
                  >
                    {selected ? `${item.n} ${label}` : item.n}
                  </button>
                </li>
              );
            })}
          </ol>
          {stage === 10 ? (
            <div className="px-3 pb-2">
              <button
                type="button"
                className="min-h-11 w-full bg-panel text-sm text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
                aria-pressed={held}
                onPointerDown={() => setHeld(true)}
              >
                {held ? copy.holding : copy.hold}
              </button>
            </div>
          ) : null}
          <p className="sr-only">{blurb}</p>
        </header>
        <div
          id="athar-scroll"
          className={cn("min-h-0 flex-1 overflow-y-auto text-ink", paper ? "bg-pearl" : "bg-panel")}
        >
          <PhoneBody />
        </div>
        <PhoneNav />
      </div>
    </div>
  );
}

function Shell() {
  const { lang } = useAthar();
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <div dir={dir} lang={lang === "ar" ? "ar" : "en"} className="flex h-dvh overflow-hidden bg-panel text-ink">
      <aside className="hidden h-dvh w-96 shrink-0 overflow-y-auto border-e border-line lg:block">
        <BriefBody />
      </aside>
      <Studio />
      <Overlays />
    </div>
  );
}

export function AtharApp() {
  return (
    <AtharProvider>
      <Shell />
    </AtharProvider>
  );
}
