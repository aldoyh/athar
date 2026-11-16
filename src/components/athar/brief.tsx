import { useState } from "react";
import { cn } from "@/lib/cn";
import { PASSES, PHASES, PROMPT, planText } from "@/components/athar/model";
import { useAthar, useCopy } from "@/components/athar/state";

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

export function BriefBody({ onJump, inset = true }: { onJump?: () => void; inset?: boolean }) {
  const { lang, setStage } = useAthar();
  const copy = useCopy();
  const [note, setNote] = useState("");

  async function onCopy(value: string) {
    const ok = await copyText(value);
    setNote(ok ? copy.copied : copy.copyFailed);
  }

  return (
    <div className={cn("flex flex-col gap-8 py-6", inset && "px-5")}>
      <header>
        <p className="text-xs tracking-widest text-mist uppercase">Athar · أثر</p>
        <h2 className="mt-2 font-display text-3xl text-balance">{copy.promptTitle}</h2>
        <p className="mt-3 text-sm text-pretty text-mist">{copy.notABank}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            className="min-h-11 bg-brass px-4 text-sm text-pearl transition-transform duration-150 ease-out active:scale-[0.96]"
            onClick={() => onCopy(PROMPT)}
          >
            {copy.copyPrompt}
          </button>
          <button
            type="button"
            className="min-h-11 border border-line bg-pearl px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96]"
            onClick={() => onCopy(planText())}
          >
            {copy.copyPlan}
          </button>
        </div>
        {note ? (
          <p className="mt-2 text-sm text-brass" role="status">
            {note}
          </p>
        ) : null}
      </header>

      <article dir="ltr" lang="en" className="flex flex-col gap-4 text-sm text-pretty">
        {PROMPT.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </article>

      <section dir="ltr" lang="en">
        <h2 className="font-display text-3xl text-balance">{copy.planTitle}</h2>
        <ol className="mt-4 flex flex-col gap-4">
          {PHASES.map((phase, index) => (
            <li key={phase.title} className="border-t border-line pt-4">
              <h3 className="text-base">
                <span className="tabular-nums text-brass">{index + 1}</span> {phase.title}
              </h3>
              <p className="mt-1 text-sm text-pretty text-mist">{phase.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-display text-3xl text-balance">{copy.logTitle}</h2>
        <ol className="mt-4 flex flex-col gap-2">
          {PASSES.map((pass) => (
            <li key={pass.n}>
              <button
                type="button"
                className="w-full min-h-11 bg-pearl px-4 py-3 text-start transition-transform duration-150 ease-out active:scale-[0.96]"
                onClick={() => {
                  setStage(pass.n);
                  onJump?.();
                }}
              >
                <span className="text-sm">
                  <span className="tabular-nums text-brass">{pass.n}</span>{" "}
                  {lang === "ar" ? pass.ar : pass.en}
                </span>
                <span className="mt-1 block text-sm text-pretty text-mist">
                  {lang === "ar" ? pass.blurbAr : pass.blurbEn}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
