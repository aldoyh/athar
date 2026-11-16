import { useEffect, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  Eye,
  EyeOff,
  Home,
  List,
  MoreHorizontal,
  QrCode,
  Receipt,
  User,
} from "lucide-react";
import { cn } from "@/lib/cn";
import {
  BALANCE,
  SPEND,
  TXS,
  clockFor,
  formatAmount,
  greetingFor,
  splitAmount,
  txName,
  type Tx,
} from "@/components/athar/model";
import { useAthar, useCopy } from "@/components/athar/state";

function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 6.5v19" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="1.7" fill="currentColor" />
    </svg>
  );
}

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

function Figure({
  amount,
  sign = false,
  className,
}: {
  amount: number;
  sign?: boolean;
  className?: string;
}) {
  const { lang } = useAthar();
  return (
    <span dir="ltr" className={cn("tabular-nums", className)}>
      {formatAmount(amount, lang, sign)}
    </span>
  );
}

function Wireframe() {
  const copy = useCopy();
  return (
    <div className="flex flex-col gap-3 px-5 py-5">
      <p className="text-xs tracking-widest text-ink/70 uppercase">{copy.wireKicker}</p>
      <h1 className="font-display text-4xl text-balance text-ink">{copy.wireTitle}</h1>
      {copy.zones.map((zone) => (
        <section key={zone.n} className="border border-ink/25 p-3">
          <h2 className="text-sm font-medium text-ink">
            <span className="tabular-nums">{zone.n}</span> {zone.title}
          </h2>
          <p className="mt-1 text-sm text-pretty text-ink/70">{zone.note}</p>
          <div className="mt-3 space-y-2" aria-hidden="true">
            <div className={cn("bg-ink/15", zone.weight === "hero" ? "h-8 w-4/5" : "h-2 w-2/3")} />
            <div className="h-2 w-1/2 bg-ink/10" />
          </div>
        </section>
      ))}
    </div>
  );
}

function BalanceBlock({
  quiet,
  kicker,
}: {
  quiet: string;
  kicker?: string;
}) {
  const { stage, hidden, toggleHidden, lang } = useAthar();
  const copy = useCopy();
  const parts = splitAmount(BALANCE.available);
  const hero = stage >= 4;

  const figure = hero ? (
    <p dir="ltr" className="mt-1 inline-flex items-baseline gap-2">
      {lang === "en" ? <span className={cn("text-sm", hero ? "text-pearl/75" : quiet)}>{copy.unit}</span> : null}
      <span className={cn("font-display text-5xl leading-none tabular-nums", stage >= 10 && "italic")}>
        {hidden ? "••••" : parts.whole}
      </span>
      {hidden ? null : (
        <span className={cn("font-display text-2xl leading-none tabular-nums", stage >= 10 && "italic")}>
          .{parts.fils}
        </span>
      )}
      {lang === "ar" ? <span className={cn("text-sm", hero ? "text-pearl/75" : quiet)}>{copy.unit}</span> : null}
    </p>
  ) : (
    <p className="mt-1 text-xl">{hidden ? "••••" : <Figure amount={BALANCE.available} />}</p>
  );

  const hide = stage >= 4 ? (
    <button
      type="button"
      className="grid size-11 place-items-center transition-transform duration-150 ease-out active:scale-[0.96]"
      aria-pressed={hidden}
      aria-label={hidden ? copy.showBalance : copy.hideBalance}
      onClick={toggleHidden}
    >
      <span className="relative size-5">
        <Eye
          className={cn(
            "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200 ease-out",
            hidden ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none",
          )}
        />
        <EyeOff
          className={cn(
            "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200 ease-out",
            hidden ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]",
          )}
        />
      </span>
    </button>
  ) : null;

  if (!hero) {
    return (
      <section className="mt-6">
        <h2 className={cn("text-sm", quiet)}>{copy.available}</h2>
        {figure}
      </section>
    );
  }

  return (
    <section className="mt-4 bg-brass px-5 py-5 text-pearl">
      {kicker ? <p className="text-sm text-pretty text-pearl/75">{kicker}</p> : null}
      <div className="mt-2 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-sm text-pearl/75">{copy.available}</h2>
          {figure}
        </div>
        {hide}
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-pearl/25 pt-3 text-sm">
        <div>
          <dt className="text-pearl/75">{copy.current}</dt>
          <dd className="mt-1 text-pearl">{hidden ? "••••" : <Figure amount={BALANCE.current} />}</dd>
        </div>
        <div>
          <dt className="text-pearl/75">{copy.onHold}</dt>
          <dd className="mt-1 text-pearl">{hidden ? "••••" : <Figure amount={BALANCE.hold} />}</dd>
        </div>
      </dl>
    </section>
  );
}

function MetalCard() {
  const { stage, frozen, open } = useAthar();
  const copy = useCopy();
  const metal = stage >= 5;
  const living = stage >= 10;

  return (
    <section className="mt-6">
      <button
        type="button"
        className={cn(
          "relative w-full overflow-hidden p-5 text-start transition-transform duration-150 ease-out active:scale-[0.96]",
          metal ? cn("metal-card", living && "is-grained") : "border border-line text-ink",
        )}
        onClick={() => {
          if (stage >= 5) open({ kind: "card" });
        }}
        aria-disabled={stage < 5}
      >
        {metal ? <span className="metal-edge" aria-hidden="true" /> : null}
        {metal && frozen && living ? (
          <span className="absolute inset-0 bg-ink/35" aria-hidden="true" />
        ) : null}
        <span className="relative flex items-start justify-between gap-3">
          <span>
            <span className="block font-display text-lg italic">{copy.cardKind}</span>
            <span className="mt-1 block text-xs tracking-widest uppercase">{copy.debit}</span>
          </span>
          <Mark className="size-8" />
        </span>
        <span className="relative mt-8 block text-sm">{copy.cardName}</span>
        <span className="relative mt-1 flex items-baseline justify-between gap-3 text-sm">
          <span dir="ltr" className="tabular-nums">
            •••• 4419
          </span>
          <span dir="ltr" className="tabular-nums">
            08/29
          </span>
        </span>
        {living ? (
          <span className="relative mt-3 flex items-center justify-between text-xs tracking-widest uppercase">
            <span>{copy.studyMark}</span>
            {frozen ? <span>{copy.frozen}</span> : null}
          </span>
        ) : null}
      </button>
    </section>
  );
}

function Actions() {
  const { stage, open } = useAthar();
  const copy = useCopy();
  const items = [
    { id: "pay" as const, label: copy.pay, icon: ArrowUpRight, overlay: { kind: "pay" as const, mode: "pay" as const } },
    {
      id: "request" as const,
      label: copy.request,
      icon: ArrowDownLeft,
      overlay: { kind: "pay" as const, mode: "request" as const },
    },
    { id: "scan" as const, label: copy.scan, icon: QrCode, overlay: { kind: "scan" as const } },
    { id: "bills" as const, label: copy.bills, icon: Receipt, overlay: { kind: "bills" as const } },
    { id: "more" as const, label: copy.more, icon: MoreHorizontal, overlay: { kind: "more" as const } },
  ];
  const ready = stage >= 6;
  const scan = items[2];
  const rest = items.filter((item) => item.id !== "scan");

  return (
    <section className="mt-4">
      {scan ? (
        <button
          type="button"
          className="flex min-h-12 w-full items-center justify-center gap-2 bg-brass text-sm text-pearl transition-transform duration-150 ease-out active:scale-[0.96]"
          onClick={() => {
            if (ready) open(scan.overlay);
          }}
          aria-disabled={!ready}
        >
          <QrCode className="size-5" aria-hidden="true" />
          {scan.label}
        </button>
      ) : null}
      <div className="mt-1 grid grid-cols-4">
        {rest.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className="flex min-h-11 flex-col items-center justify-center gap-1 text-xs transition-transform duration-150 ease-out active:scale-[0.96]"
              onClick={() => {
                if (ready) open(item.overlay);
              }}
              aria-disabled={!ready}
            >
              <Icon className="size-4" aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Month({ quiet }: { quiet: string }) {
  const { stage } = useAthar();
  const copy = useCopy();
  if (stage < 7) return null;
  const max = Math.max(...SPEND.map((item) => item.value));
  const opacity = [1, 0.75, 0.5, 0.32];

  return (
    <section className="mt-8 border-t border-line pt-4">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-sm">{copy.thisMonth}</h2>
        <p className={cn("text-sm", quiet)}>
          <Figure amount={412.3} /> {copy.ofBudget}
        </p>
      </div>
      {stage >= 9 ? <p className="mt-2 text-sm text-pretty">{copy.sentence}</p> : null}
      <div className="mt-4 flex flex-col gap-2" role="img" aria-label={copy.chartLabel}>
        {SPEND.map((item, index) => (
          <div key={item.key} className="grid grid-cols-[5.5rem_1fr] items-center gap-3">
            <span className={cn("truncate text-xs", quiet)}>{copy.categories[item.key]}</span>
            <span className="block h-1 bg-line">
              <span
                className="block h-full bg-brass"
                style={{ width: `${Math.round((item.value / max) * 100)}%`, opacity: opacity[index] ?? 1 }}
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function LedgerRow({ tx, interactive }: { tx: Tx; interactive: boolean }) {
  const { lang, open } = useAthar();
  const copy = useCopy();
  const name = txName(tx, lang);
  const incoming = tx.amount > 0;
  const body = (
    <>
      <span className="min-w-0 flex-1">
        <span className="block truncate">{name}</span>
        <span className="block text-sm text-mist">
          {copy.categories[tx.category]} · <span dir="ltr">{tx.time}</span>
          {tx.status === "pending" ? ` · ${copy.pending}` : ""}
        </span>
      </span>
      <span dir="ltr" className={cn("tabular-nums", incoming && "text-brass")}>
        {formatAmount(tx.amount, lang, true)}
      </span>
    </>
  );

  if (!interactive) {
    return <div className="flex min-h-11 items-center gap-3 py-2">{body}</div>;
  }

  return (
    <button
      type="button"
      className="flex min-h-11 w-full items-center gap-3 py-2 text-start transition-transform duration-150 ease-out active:scale-[0.96]"
      onClick={() => open({ kind: "tx", id: tx.id })}
    >
      {body}
    </button>
  );
}

function Ledger() {
  const { stage, open } = useAthar();
  const copy = useCopy();
  const groups = [
    { id: "today" as const, label: copy.today },
    { id: "yesterday" as const, label: copy.yesterday },
  ];
  const interactive = stage >= 8;

  return (
    <section id="ledger" className="mt-6 scroll-mt-4">
      {groups.map((group) => (
        <div key={group.id} className="mt-4">
          <h2 className="text-sm text-mist">{group.label}</h2>
          <ul>
            {TXS.filter((tx) => tx.day === group.id).map((tx) => (
              <li key={tx.id}>
                <LedgerRow tx={tx} interactive={interactive} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      {interactive ? (
        <button
          type="button"
          className="mt-2 min-h-11 text-sm text-brass"
          onClick={() => open({ kind: "activity" })}
        >
          {copy.allActivity}
        </button>
      ) : null}
    </section>
  );
}

function Pot() {
  const { stage, open } = useAthar();
  const copy = useCopy();
  if (stage < 9) return null;
  return (
    <section className="mt-6 border-t border-line pt-4">
      <button
        type="button"
        className="w-full text-start transition-transform duration-150 ease-out active:scale-[0.96]"
        onClick={() => open({ kind: "pot" })}
      >
        <span className="flex items-baseline justify-between gap-3">
          <span className="text-sm">{copy.potName}</span>
          <span dir="ltr" className="text-sm tabular-nums">
            {copy.potOf}
          </span>
        </span>
        <span
          className="mt-3 block h-1 bg-line"
          role="meter"
          aria-label={copy.potName}
          aria-valuemin={0}
          aria-valuemax={8000}
          aria-valuenow={2400}
        >
          <span className="block h-full bg-brass" style={{ width: "30%" }} />
        </span>
      </button>
    </section>
  );
}

function Living() {
  const { stage, lang, open } = useAthar();
  const copy = useCopy();
  const now = useNow();
  const quiet = "text-mist";
  const wordmark = lang === "ar" ? "أثَر" : "Athar";
  const hello =
    lang === "ar" ? `${greetingFor(now, copy)}، ${copy.first}` : `${greetingFor(now, copy)}, ${copy.first}`;
  const kicker = `${hello} · ${copy.city}`;

  return (
    <div className="pb-6">
      <div className="flex items-center justify-between px-5 pt-4">
        <p className={cn("text-lg", lang === "ar" ? "font-sans font-medium" : "font-display")}>{wordmark}</p>
        <div className="flex items-center gap-2">
          <p className={cn("text-sm tabular-nums", quiet)} suppressHydrationWarning>
            {clockFor(now)}
          </p>
          {stage >= 3 ? (
            <button
              type="button"
              className="relative grid size-11 place-items-center transition-transform duration-150 ease-out active:scale-[0.96]"
              aria-label={copy.notifications}
              onClick={() => open({ kind: "bell" })}
            >
              <Bell className="size-5" aria-hidden="true" />
              <span className="absolute top-2 end-2 size-1.5 bg-brass" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>
      {stage < 4 ? (
        <div className="px-5">
          <h1 className="mt-4 text-2xl text-balance">{hello}</h1>
          <p className={cn("text-sm", quiet)}>
            {copy.city} · {copy.account}
          </p>
          <BalanceBlock quiet={quiet} />
        </div>
      ) : (
        <BalanceBlock quiet={quiet} kicker={kicker} />
      )}
      <div className="px-5">
        <Actions />
        {stage >= 2 ? <MetalCard /> : null}
        <Ledger />
        <Month quiet={quiet} />
        <Pot />
      </div>
    </div>
  );
}

export function PhoneBody() {
  const { shown } = useAthar();
  if (shown === 1) return <Wireframe />;
  return <Living />;
}

export function PhoneNav() {
  const { shown, open } = useAthar();
  const copy = useCopy();
  if (shown < 2) return null;
  const items = [
    { id: "home", label: copy.home, icon: Home },
    { id: "pay", label: copy.pay, icon: ArrowUpRight },
    { id: "scan", label: copy.scan, icon: QrCode },
    { id: "activity", label: copy.activity, icon: List },
    { id: "you", label: copy.you, icon: User },
  ] as const;

  function onNav(id: (typeof items)[number]["id"]) {
    const scroller = document.getElementById("athar-scroll");
    if (id === "home") {
      scroller?.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "activity") {
      document.getElementById("ledger")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (shown < 6 && (id === "pay" || id === "scan")) return;
    if (id === "pay") open({ kind: "pay", mode: "pay" });
    if (id === "scan") open({ kind: "scan" });
    if (id === "you") open({ kind: "you" });
  }

  return (
    <nav
      aria-label={copy.navLabel}
      className="shrink-0 border-t border-line bg-pearl pb-safe text-ink"
    >
      <p className="px-5 pt-2 text-center text-xs text-mist">{copy.study}</p>
      <ul className="grid grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          const primary = item.id === "scan" && shown >= 6;
          return (
            <li key={item.id}>
              <button
                type="button"
                className="flex min-h-11 w-full flex-col items-center justify-center gap-1 py-2 text-xs transition-transform duration-150 ease-out active:scale-[0.96]"
                onClick={() => onNav(item.id)}
              >
                <span
                  className={cn(
                    "grid size-9 place-items-center",
                    primary && "bg-brass text-pearl",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
