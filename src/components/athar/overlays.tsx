import { useEffect, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { Delete, X } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  AVAILABLE_FILS,
  BILLS,
  NOTICES,
  PEOPLE,
  TXS,
  billName,
  formatAmount,
  formatFils,
  personName,
  txName,
  type Tx,
} from "@/components/athar/model";
import { BriefBody } from "@/components/athar/brief";
import { useAthar, useCopy } from "@/components/athar/state";

function Sheet({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  const { overlay, close, lang } = useAthar();
  const copy = useCopy();
  const open = overlay.kind !== "none";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && close()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/70" />
        <Dialog.Content
          key={overlay.kind}
          dir={dir}
          lang={lang}
          className="athar-sheet fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md overflow-y-auto bg-pearl text-ink lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2"
        >
          <div className="flex items-start justify-between gap-3 px-5 pt-5">
            <div>
              <Dialog.Title className="font-display text-2xl text-balance">{title}</Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-pretty text-mist">{description}</Dialog.Description>
            </div>
            <Dialog.Close
              className="grid size-11 shrink-0 place-items-center bg-panel text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
              aria-label={copy.close}
            >
              <X className="size-5" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <div className="px-5 pt-4 pb-safe">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Stopped() {
  const copy = useCopy();
  return (
    <div className="mt-6 border-t border-line pt-4">
      <h3 className="font-display text-2xl text-balance">{copy.noFilsTitle}</h3>
      <p className="mt-2 text-sm text-pretty text-mist">{copy.noFilsBody}</p>
    </div>
  );
}

function Keypad({ fils, onFils }: { fils: number; onFils: (next: number) => void }) {
  const copy = useCopy();
  function push(digit: number) {
    const next = fils * 10 + digit;
    if (next > 99_999_999) return;
    onFils(next);
  }
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div dir="ltr" className="mt-4 grid grid-cols-3 gap-2">
      {keys.map((digit) => (
        <button
          key={digit}
          type="button"
          className="min-h-14 bg-panel font-display text-2xl tabular-nums text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
          onClick={() => push(digit)}
        >
          {digit}
        </button>
      ))}
      <span />
      <button
        type="button"
        className="min-h-14 bg-panel font-display text-2xl tabular-nums text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
        onClick={() => push(0)}
      >
        0
      </button>
      <button
        type="button"
        className="grid min-h-14 place-items-center bg-panel text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
        onClick={() => onFils(Math.floor(fils / 10))}
        aria-label={copy.backspace}
      >
        <Delete className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}

function PayFlow({ mode }: { mode: "pay" | "request" }) {
  const { lang } = useAthar();
  const copy = useCopy();
  const [fils, setFils] = useState(0);
  const [who, setWho] = useState(PEOPLE[0]?.id ?? "");
  const [done, setDone] = useState(false);
  const person = PEOPLE.find((item) => item.id === who) ?? PEOPLE[0];
  const over = mode === "pay" && fils > AVAILABLE_FILS;
  const ready = fils > 0 && !over && person;

  return (
    <div>
      <p dir="ltr" className="font-display text-4xl tabular-nums">
        {formatFils(fils)} <span className="font-sans text-base text-mist">{copy.unit}</span>
      </p>
      <p className="mt-1 text-sm text-mist">{copy.keypadHint}</p>
      <p className="mt-4 text-sm text-mist">{mode === "pay" ? copy.to : copy.from}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {PEOPLE.map((item) => {
          const selected = item.id === who;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              className={cn(
                "min-h-11 rounded-none px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
                selected ? "bg-brass text-pearl" : "bg-panel text-ink",
              )}
              onClick={() => setWho(item.id)}
            >
              {personName(item, lang)}
            </button>
          );
        })}
      </div>
      {mode === "pay" ? <p className="mt-3 text-sm text-mist">{copy.fromBalance}</p> : null}
      {done && person ? (
        <>
          <p className="mt-4 text-sm">
            {mode === "request" ? copy.requestDraft : copy.lamha}{" "}
            <span dir="ltr" className="tabular-nums">
              {formatFils(fils)} {copy.unit}
            </span>{" "}
            · {personName(person, lang)}
          </p>
          <Stopped />
        </>
      ) : (
        <>
          <Keypad fils={fils} onFils={setFils} />
          <button
            type="button"
            className="mt-4 min-h-11 w-full rounded-none bg-brass text-sm text-pearl transition-transform duration-150 ease-out active:scale-[0.96] disabled:bg-panel disabled:text-mist"
            disabled={!ready}
            onClick={() => setDone(true)}
          >
            {fils === 0 ? copy.enterAmount : over ? copy.aboveAvailable : copy.review}
          </button>
        </>
      )}
    </div>
  );
}

function ScanFlow() {
  const copy = useCopy();
  const [found, setFound] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setFound(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div>
      <div className="relative mx-auto grid h-48 w-48 place-items-center border border-brass" aria-hidden="true">
        <span className="h-24 w-24 border border-line" />
      </div>
      <p className="mt-4 text-sm text-pretty">
        {found ? copy.scanFound : copy.scanSeeking}
      </p>
      <p className="mt-1 text-sm text-mist">{copy.scanNote}</p>
      {found && !done ? (
        <p className="mt-4 text-sm">
          {copy.wouldCharge}{" "}
          <span dir="ltr" className="tabular-nums">
            4.250 {copy.unit}
          </span>
        </p>
      ) : null}
      {done ? <Stopped /> : null}
      {found && !done ? (
        <button
          type="button"
          className="mt-4 min-h-11 w-full rounded-none bg-brass text-sm text-pearl transition-transform duration-150 ease-out active:scale-[0.96]"
          onClick={() => setDone(true)}
        >
          {copy.stop}
        </button>
      ) : null}
    </div>
  );
}

function BillsFlow() {
  const { lang } = useAthar();
  const copy = useCopy();
  const [picked, setPicked] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const bill = BILLS.find((item) => item.id === picked);

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {BILLS.map((item) => {
          const selected = item.id === picked;
          return (
            <li key={item.id}>
              <button
                type="button"
                aria-pressed={selected}
                className={cn(
                  "flex min-h-11 w-full items-center justify-between gap-3 rounded-none px-4 py-3 text-start transition-transform duration-150 ease-out active:scale-[0.96]",
                  selected ? "bg-brass text-pearl" : "bg-panel text-ink",
                )}
                onClick={() => {
                  setPicked(item.id);
                  setDone(false);
                }}
              >
                <span>{billName(item, lang)}</span>
                <span dir="ltr" className="tabular-nums">
                  {formatFils(item.fils)}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {bill && !done ? (
        <button
          type="button"
          className="mt-4 min-h-11 w-full rounded-none bg-brass text-sm text-pearl transition-transform duration-150 ease-out active:scale-[0.96]"
          onClick={() => setDone(true)}
        >
          {copy.payBill}
        </button>
      ) : null}
      {done && bill ? (
        <>
          <p className="mt-4 text-sm">
            {billName(bill, lang)} ·{" "}
            <span dir="ltr" className="tabular-nums">
              {formatFils(bill.fils)} {copy.unit}
            </span>
          </p>
          <Stopped />
        </>
      ) : null}
    </div>
  );
}

function CardFlow() {
  const { frozen, toggleFrozen } = useAthar();
  const copy = useCopy();
  return (
    <div>
      <p className="text-sm text-mist">
        {copy.cardName} · <span dir="ltr">•••• 4419</span> · {copy.debit}
      </p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <label htmlFor="freeze" className="text-base">
          {frozen ? copy.unfreeze : copy.freeze}
        </label>
        <Switch.Root
          id="freeze"
          checked={frozen}
          onCheckedChange={() => toggleFrozen()}
          className="athar-switch"
          aria-label={frozen ? copy.unfreeze : copy.freeze}
        >
          <Switch.Thumb className="athar-switch-thumb" />
        </Switch.Root>
      </div>
      <p className="mt-3 text-sm text-pretty text-mist">{copy.freezeHelp}</p>
    </div>
  );
}

function TxFlow({ tx }: { tx: Tx }) {
  const { lang } = useAthar();
  const copy = useCopy();
  return (
    <dl className="grid grid-cols-2 gap-4 text-sm">
      <div>
        <dt className="text-mist">{copy.category}</dt>
        <dd className="mt-1">{copy.categories[tx.category]}</dd>
      </div>
      <div>
        <dt className="text-mist">{copy.status}</dt>
        <dd className="mt-1">{tx.status === "pending" ? copy.pending : copy.posted}</dd>
      </div>
      <div>
        <dt className="text-mist">{copy.amount}</dt>
        <dd className="mt-1" dir="ltr">
          {formatAmount(tx.amount, lang, true)}
        </dd>
      </div>
      <div>
        <dt className="text-mist">{copy.reference}</dt>
        <dd className="mt-1" dir="ltr">
          {tx.ref}
        </dd>
      </div>
      <div className="col-span-2">
        <dt className="text-mist">{copy.receipt}</dt>
        <dd className="mt-1 text-pretty">{copy.noFilsBody}</dd>
      </div>
    </dl>
  );
}

function MoreFlow() {
  const { hidden, toggleHidden, frozen, toggleFrozen, open } = useAthar();
  const copy = useCopy();
  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="min-h-11 bg-panel px-4 text-start text-sm"
        aria-pressed={hidden}
        onClick={toggleHidden}
      >
        {hidden ? copy.showBalance : copy.hideBalance}
      </button>
      <button
        type="button"
        className="min-h-11 bg-panel px-4 text-start text-sm"
        aria-pressed={frozen}
        onClick={toggleFrozen}
      >
        {frozen ? copy.unfreeze : copy.freeze}
      </button>
      <button
        type="button"
        className="min-h-11 bg-panel px-4 text-start text-sm"
        onClick={() => open({ kind: "brief" })}
      >
        {copy.openBrief}
      </button>
      <p className="px-1 pt-2 text-sm text-pretty text-mist">
        <span className="font-medium text-ink">{copy.statements}. </span>
        {copy.statementsNote}
      </p>
    </div>
  );
}

function YouFlow() {
  const { toggleLang, lang, open } = useAthar();
  const copy = useCopy();
  return (
    <div>
      <p className="text-sm text-pretty text-mist">{copy.profileNote}</p>
      <p className="mt-4 text-sm">
        {copy.account}
      </p>
      <button
        type="button"
        className="mt-4 min-h-11 rounded-none bg-brass px-4 text-sm text-pearl"
        onClick={toggleLang}
      >
        {lang === "en" ? "عربي" : "English"}
      </button>
      <button
        type="button"
        className="mt-3 block min-h-11 text-sm text-brass"
        onClick={() => open({ kind: "brief" })}
      >
        {copy.openBrief}
      </button>
    </div>
  );
}

function BellFlow() {
  const { lang } = useAthar();
  return (
    <ul className="flex flex-col gap-3">
      {NOTICES.map((notice) => (
        <li key={notice.id} className="border-t border-line pt-3">
          <p>{lang === "ar" ? notice.ar : notice.en}</p>
          <p className="mt-1 text-sm text-pretty text-mist">{lang === "ar" ? notice.detailAr : notice.detailEn}</p>
        </li>
      ))}
    </ul>
  );
}

function ActivityFlow() {
  const { lang, open } = useAthar();
  const copy = useCopy();
  return (
    <ul>
      {TXS.map((tx) => (
        <li key={tx.id} className="border-t border-line">
          <button
            type="button"
            className="flex min-h-11 w-full items-center justify-between gap-3 py-3 text-start"
            onClick={() => open({ kind: "tx", id: tx.id })}
          >
            <span>
              <span className="block">{txName(tx, lang)}</span>
              <span className="text-sm text-mist">
                {copy.categories[tx.category]} · <span dir="ltr">{tx.time}</span>
              </span>
            </span>
            <span dir="ltr" className={cn("tabular-nums", tx.amount > 0 && "text-brass")}>
              {formatAmount(tx.amount, lang, true)}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function PotFlow() {
  const copy = useCopy();
  return (
    <div>
      <p dir="ltr" className="font-display text-3xl tabular-nums">
        {copy.potOf}
      </p>
      <p className="mt-2 text-sm text-pretty text-mist">{copy.potNote}</p>
    </div>
  );
}

export function Overlays() {
  const { overlay, close, lang } = useAthar();
  const copy = useCopy();
  if (overlay.kind === "none") return null;

  if (overlay.kind === "brief") {
    return (
      <Sheet title={copy.brief} description={copy.study}>
        <BriefBody inset={false} onJump={close} />
      </Sheet>
    );
  }
  if (overlay.kind === "pay") {
    return (
      <Sheet
        title={overlay.mode === "pay" ? copy.pay : copy.request}
        description={overlay.mode === "pay" ? copy.fromBalance : copy.keypadHint}
      >
        <PayFlow mode={overlay.mode} />
      </Sheet>
    );
  }
  if (overlay.kind === "scan") {
    return (
      <Sheet title={copy.scan} description={copy.scanNote}>
        <ScanFlow />
      </Sheet>
    );
  }
  if (overlay.kind === "bills") {
    return (
      <Sheet title={copy.bills} description={copy.billDue}>
        <BillsFlow />
      </Sheet>
    );
  }
  if (overlay.kind === "card") {
    return (
      <Sheet title={copy.cardKind} description={copy.studyMark}>
        <CardFlow />
      </Sheet>
    );
  }
  if (overlay.kind === "more") {
    return (
      <Sheet title={copy.more} description={copy.study}>
        <MoreFlow />
      </Sheet>
    );
  }
  if (overlay.kind === "you") {
    return (
      <Sheet title={copy.first} description={copy.study}>
        <YouFlow />
      </Sheet>
    );
  }
  if (overlay.kind === "bell") {
    return (
      <Sheet title={copy.notifications} description={copy.study}>
        <BellFlow />
      </Sheet>
    );
  }
  if (overlay.kind === "activity") {
    return (
      <Sheet title={copy.activity} description={copy.study}>
        <ActivityFlow />
      </Sheet>
    );
  }
  if (overlay.kind === "pot") {
    return (
      <Sheet title={copy.potName} description={copy.potSaved}>
        <PotFlow />
      </Sheet>
    );
  }

  const tx = TXS.find((item) => item.id === overlay.id);
  if (!tx) return null;
  return (
    <Sheet title={txName(tx, lang)} description={copy.receipt}>
      <TxFlow tx={tx} />
    </Sheet>
  );
}
