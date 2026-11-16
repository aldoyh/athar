export type Lang = "en" | "ar";

export type Overlay =
  | { kind: "none" }
  | { kind: "brief" }
  | { kind: "pay"; mode: "pay" | "request" }
  | { kind: "scan" }
  | { kind: "bills" }
  | { kind: "more" }
  | { kind: "card" }
  | { kind: "you" }
  | { kind: "bell" }
  | { kind: "activity" }
  | { kind: "pot" }
  | { kind: "tx"; id: string };

export type Pass = {
  n: number;
  en: string;
  ar: string;
  blurbEn: string;
  blurbAr: string;
};

export const PASSES: Pass[] = [
  {
    n: 1,
    en: "Frame",
    ar: "إطار",
    blurbEn: "Zones only. Balance is the headline. Scan is the hero. The card is an object.",
    blurbAr: "مناطق فقط. الرصيد هو العنوان. المسح هو الفعل الأول. البطاقة شيء.",
  },
  {
    n: 2,
    en: "Type",
    ar: "حروف",
    blurbEn: "Tajawal for words, Fraunces for money. Real sentences, no boxes.",
    blurbAr: "خط الواجهة للكلام، وخط العرض للمال. جمل حقيقية بلا صناديق.",
  },
  {
    n: 3,
    en: "Day",
    ar: "نهار",
    blurbEn: "Sand, paper, and one gulf. No second color.",
    blurbAr: "رمل وورق وخليج واحد. لا لون ثانٍ.",
  },
  {
    n: 4,
    en: "Balance",
    ar: "رصيد",
    blurbEn: "Available becomes the headline. Fils stay visible. Current and hold step back.",
    blurbAr: "المتاح يصير العنوان. ثلاث خانات للفلس. الجاري والمحجوز يتراجعان.",
  },
  {
    n: 5,
    en: "Paper",
    ar: "ورقة",
    blurbEn: "The card is a paper slip: a name, the last four, a gulf edge.",
    blurbAr: "البطاقة ورقة: الاسم، وآخر أربعة، وحافة خليجية.",
  },
  {
    n: 6,
    en: "Actions",
    ar: "أفعال",
    blurbEn: "Scan is a gulf bar. The other four verbs are type. Every target is at least 44 pixels.",
    blurbAr: "المسح شريط خليجي. الأفعال الأربعة الباقية حروف. كل هدف لا يقل عن 44.",
  },
  {
    n: 7,
    en: "Month",
    ar: "شهر",
    blurbEn: "Spend is one comparison, in a single hue. Not a rainbow.",
    blurbAr: "الصرف مقارنة واحدة بلون واحد. ليست قوس قزح.",
  },
  {
    n: 8,
    en: "Ledger",
    ar: "دفتر",
    blurbEn: "Merchant, category, signed fils. Incoming is gulf, not green.",
    blurbAr: "التاجر والتصنيف والمبلغ بإشارة. الوارد خليج، ليس أخضر.",
  },
  {
    n: 9,
    en: "Story",
    ar: "حكاية",
    blurbEn: "One true sentence, and one pot. A line that does not earn its place goes.",
    blurbAr: "جملة صادقة واحدة، وحصالة واحدة. ما لا يستحق سطراً يُحذف.",
  },
  {
    n: 10,
    en: "Living",
    ar: "حي",
    blurbEn: "Living home. Nothing on this screen can move money.",
    blurbAr: "الشاشة الحيّة. هذه الشاشة لا تحرّك مالاً.",
  },
];

export type Zone = {
  n: string;
  title: string;
  note: string;
  weight: "hero" | "body" | "row";
};

type Bundle = {
  brief: string;
  hold: string;
  holding: string;
  study: string;
  wireKicker: string;
  wireTitle: string;
  greetingHello: string;
  morning: string;
  afternoon: string;
  evening: string;
  first: string;
  city: string;
  account: string;
  available: string;
  current: string;
  onHold: string;
  unit: string;
  showBalance: string;
  hideBalance: string;
  notifications: string;
  cardKind: string;
  cardName: string;
  debit: string;
  studyMark: string;
  frozen: string;
  pay: string;
  request: string;
  scan: string;
  bills: string;
  more: string;
  home: string;
  activity: string;
  you: string;
  navLabel: string;
  thisMonth: string;
  ofBudget: string;
  sentence: string;
  chartLabel: string;
  today: string;
  yesterday: string;
  earlier: string;
  pending: string;
  posted: string;
  potName: string;
  potOf: string;
  potNote: string;
  allActivity: string;
  close: string;
  backspace: string;
  promptTitle: string;
  planTitle: string;
  logTitle: string;
  copyPrompt: string;
  copyPlan: string;
  copied: string;
  copyFailed: string;
  notABank: string;
  noFilsTitle: string;
  noFilsBody: string;
  review: string;
  enterAmount: string;
  aboveAvailable: string;
  fromBalance: string;
  to: string;
  from: string;
  amount: string;
  keypadHint: string;
  scanSeeking: string;
  scanFound: string;
  scanNote: string;
  wouldCharge: string;
  stop: string;
  freeze: string;
  unfreeze: string;
  freezeHelp: string;
  receipt: string;
  reference: string;
  status: string;
  category: string;
  statements: string;
  statementsNote: string;
  profileNote: string;
  openBrief: string;
  billDue: string;
  payBill: string;
  requestDraft: string;
  lamha: string;
  potSaved: string;
  categories: Record<string, string>;
  zones: Zone[];
};

const categoriesEn: Record<string, string> = {
  groceries: "Groceries",
  dining: "Dining",
  bills: "Bills",
  move: "Move",
  lamha: "Lamha",
  salary: "Salary",
};

const categoriesAr: Record<string, string> = {
  groceries: "بقالة",
  dining: "مطعم",
  bills: "فواتير",
  move: "تنقّل",
  lamha: "لمحة",
  salary: "راتب",
};

const zonesEn: Zone[] = [
  {
    n: "01",
    title: "Status",
    note: "Clock, wordmark, alerts. Nothing commercial.",
    weight: "row",
  },
  {
    n: "02",
    title: "Greeting",
    note: "Time of day, first name, city, which account.",
    weight: "body",
  },
  {
    n: "03",
    title: "Balance",
    note: "Available is the only headline. Current and on-hold are subordinates. Three decimal places.",
    weight: "hero",
  },
  {
    n: "04",
    title: "Card",
    note: "One debit object. Name and last four. Never a marketing banner.",
    weight: "body",
  },
  {
    n: "05",
    title: "Actions",
    note: "Pay, request, scan, bills, more. Scan is primary because the counter is the main stage.",
    weight: "body",
  },
  {
    n: "06",
    title: "Month",
    note: "One comparison in a single hue, then one sentence. Not a dashboard.",
    weight: "body",
  },
  {
    n: "07",
    title: "Ledger",
    note: "Who, why, when, and the fils, with a sign. Group by day.",
    weight: "body",
  },
  {
    n: "08",
    title: "Pot",
    note: "One goal. Cut this before you crowd the balance.",
    weight: "row",
  },
  {
    n: "09",
    title: "Navigation",
    note: "Home, pay, scan, activity, you. Scan stays reachable.",
    weight: "row",
  },
];

const zonesAr: Zone[] = [
  { n: "01", title: "الحالة", note: "الساعة، والعلامة، والتنبيهات. بلا إعلان.", weight: "row" },
  { n: "02", title: "التحية", note: "وقت اليوم، والاسم، والمدينة، وأي حساب.", weight: "body" },
  { n: "03", title: "الرصيد", note: "المتاح هو العنوان الوحيد. الجاري والمحجوز أصغر. ثلاث خانات.", weight: "hero" },
  { n: "04", title: "البطاقة", note: "شيء واحد للخصم. الاسم وآخر أربعة. ليست لافتة.", weight: "body" },
  { n: "05", title: "الأفعال", note: "ادفع، اطلب، امسح، فواتير، المزيد. المسح هو الأساسي لأن الكاشير هو المسرح.", weight: "body" },
  { n: "06", title: "الشهر", note: "مقارنة واحدة بلون واحد، ثم جملة. ليست لوحة.", weight: "body" },
  { n: "07", title: "الدفتر", note: "من، ولماذا، ومتى، وكم فلس، مع الإشارة. مجمّع باليوم.", weight: "body" },
  { n: "08", title: "الحصالة", note: "هدف واحد. احذفه قبل أن تزاحم الرصيد.", weight: "row" },
  { n: "09", title: "التنقّل", note: "الرئيسية، ادفع، امسح، الحركة، أنت. المسح يبقى قريباً.", weight: "row" },
];

export const COPY: Record<Lang, Bundle> = {
  en: {
    brief: "Brief",
    hold: "Hold for the wireframe",
    holding: "Release — this is the frame",
    study: "Study · not a bank · fictional fils",
    wireKicker: "Pass 01 · same skeleton as the home",
    wireTitle: "Home, framed.",
    greetingHello: "Hello",
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    first: "Noor",
    city: "Muharraq",
    account: "Current · 4419",
    available: "Available",
    current: "Current",
    onHold: "On hold",
    unit: "BHD",
    showBalance: "Show balance",
    hideBalance: "Hide balance",
    notifications: "Notifications",
    cardKind: "Paper",
    cardName: "Noor Al-Mannai",
    debit: "Debit",
    studyMark: "Study",
    frozen: "Frozen",
    pay: "Pay",
    request: "Request",
    scan: "Scan",
    bills: "Bills",
    more: "More",
    home: "Home",
    activity: "Activity",
    you: "You",
    navLabel: "Primary",
    thisMonth: "This month",
    ofBudget: "of 900.000",
    sentence: "Dining is quieter this week — 18.400 less than your usual pace.",
    chartLabel:
      "This month: groceries 186.400, bills 96.500, dining 74.200, transport 55.200 Bahraini dinars.",
    today: "Today",
    yesterday: "Yesterday",
    earlier: "Earlier",
    pending: "Pending",
    posted: "Posted",
    potName: "Muharraq house",
    potOf: "2,400.000 of 8,000.000",
    potNote: "Round-ups would live here. Nothing moves in this study.",
    allActivity: "All activity",
    close: "Close",
    backspace: "Delete",
    promptTitle: "The prompt",
    planTitle: "Development plan",
    logTitle: "Ten passes",
    copyPrompt: "Copy prompt",
    copyPlan: "Copy plan",
    copied: "Copied",
    copyFailed: "Select the text and copy it",
    notABank: "Athar is an original design study. Not BenefitPay, not ila, not a bank.",
    noFilsTitle: "No fils moved.",
    noFilsBody:
      "This rehearsal stops on purpose. A licensed build would show a receipt from its principal here — and not before.",
    review: "Review",
    enterAmount: "Enter an amount",
    aboveAvailable: "Above available",
    fromBalance: "From available balance, not the paper card.",
    to: "To",
    from: "From",
    amount: "Amount",
    keypadHint: "The keypad enters fils. 1250 is 1.250.",
    scanSeeking: "Studio scan. The camera stays off.",
    scanFound: "A counter would be here.",
    scanNote: "Pointing at a QR is rehearsed, not captured.",
    wouldCharge: "Cafe Lilou would charge",
    stop: "Stop here",
    freeze: "Freeze card",
    unfreeze: "Unfreeze card",
    freezeHelp: "Freezing covers the paper card only. The available balance stays usable for a Lamha.",
    receipt: "Receipt",
    reference: "Reference",
    status: "Status",
    category: "Category",
    statements: "Statements",
    statementsNote: "Monthly statements are phase 6 of the plan. Not in this study.",
    profileNote: "Noor Al-Mannai · Muharraq · study profile, not an account you can sign in to.",
    openBrief: "Prompt and plan",
    billDue: "Due",
    payBill: "Rehearse payment",
    requestDraft: "Request drafted for",
    lamha: "Lamha",
    potSaved: "Saved",
    categories: categoriesEn,
    zones: zonesEn,
  },
  ar: {
    brief: "الموجز",
    hold: "اضغط مطوّلاً للإطار",
    holding: "أفلت — هذا هو الإطار",
    study: "دراسة · ليست مصرفاً · مبالغ متخيّلة",
    wireKicker: "المرور 01 · نفس هيكل الشاشة",
    wireTitle: "الرئيسية، مؤطّرة.",
    greetingHello: "أهلاً",
    morning: "صباح الخير",
    afternoon: "طاب نهارك",
    evening: "مساء الخير",
    first: "نور",
    city: "المحرق",
    account: "الجاري · 4419",
    available: "المتاح",
    current: "الجاري",
    onHold: "المحجوز",
    unit: "د.ب",
    showBalance: "إظهار الرصيد",
    hideBalance: "إخفاء الرصيد",
    notifications: "التنبيهات",
    cardKind: "ورقة",
    cardName: "نور المنعي",
    debit: "خصم",
    studyMark: "دراسة",
    frozen: "مجمّدة",
    pay: "ادفع",
    request: "اطلب",
    scan: "امسح",
    bills: "فواتير",
    more: "المزيد",
    home: "الرئيسية",
    activity: "الحركة",
    you: "أنت",
    navLabel: "التنقّل",
    thisMonth: "هذا الشهر",
    ofBudget: "من 900.000",
    sentence: "المطعم أهدأ هذا الأسبوع — أقل بـ 18.400 عن وتيرتك المعتادة.",
    chartLabel: "هذا الشهر: بقالة 186.400، فواتير 96.500، مطعم 74.200، تنقّل 55.200 دينار بحريني.",
    today: "اليوم",
    yesterday: "أمس",
    earlier: "سابقاً",
    pending: "معلّق",
    posted: "مُرحّل",
    potName: "بيت المحرق",
    potOf: "2,400.000 من 8,000.000",
    potNote: "التقريب للأعلى مكانه هنا. لا شيء يتحرك في هذه الدراسة.",
    allActivity: "كل الحركة",
    close: "إغلاق",
    backspace: "حذف",
    promptTitle: "الأمر",
    planTitle: "خطة البناء",
    logTitle: "عشرة مرورات",
    copyPrompt: "انسخ الأمر",
    copyPlan: "انسخ الخطة",
    copied: "نُسخ",
    copyFailed: "حدّد النص وانسخه",
    notABank: "أثَر دراسة تصميم أصلية. ليست بنفت باي، وليست إيلا، وليست مصرفاً.",
    noFilsTitle: "لم يتحرك أي مبلغ.",
    noFilsBody: "تتوقف التجربة هنا عمداً. النسخة المرخّصة تعرض إيصالاً من الجهة المرخِّصة، وليس قبل ذلك.",
    review: "مراجعة",
    enterAmount: "أدخل مبلغاً",
    aboveAvailable: "أعلى من المتاح",
    fromBalance: "من الرصيد المتاح، لا من البطاقة الورقية.",
    to: "إلى",
    from: "من",
    amount: "المبلغ",
    keypadHint: "لوحة الأرقام تدخل الفلوس. 1250 تعني 1.250.",
    scanSeeking: "مسح داخل الدراسة. الكاميرا مطفأة.",
    scanFound: "الكاشير يكون هنا.",
    scanNote: "توجيه الرمز مستعار، وغير ملتقط.",
    wouldCharge: "مقهى ليلو سيطلب",
    stop: "توقّف هنا",
    freeze: "تجميد البطاقة",
    unfreeze: "إلغاء التجميد",
    freezeHelp: "التجميد يغطي البطاقة فقط. المتاح يبقى قابلاً للتحويل بلمحة.",
    receipt: "إيصال",
    reference: "المرجع",
    status: "الحالة",
    category: "التصنيف",
    statements: "الكشوف",
    statementsNote: "الكشوف الشهرية في المرحلة 6 من الخطة. ليست في هذه الدراسة.",
    profileNote: "نور المنعي · المحرق · ملف دراسة، لا حساب لتسجيل الدخول.",
    openBrief: "الأمر والخطة",
    billDue: "المستحق",
    payBill: "جرّب الدفع",
    requestDraft: "طُلب المبلغ لصالح",
    lamha: "لمحة",
    potSaved: "المدّخر",
    categories: categoriesAr,
    zones: zonesAr,
  },
};

export type Copy = Bundle;

export const AVAILABLE_FILS = 1_284_650;

export const BALANCE = {
  available: 1284.65,
  current: 1410.2,
  hold: 125.55,
};

export type Person = { id: string; en: string; ar: string };

export const PEOPLE: Person[] = [
  { id: "yusuf", en: "Yusuf K.", ar: "يوسف ك." },
  { id: "maryam", en: "Maryam S.", ar: "مريم س." },
  { id: "huda", en: "Huda A.", ar: "هدى ع." },
];

export type Bill = { id: string; en: string; ar: string; fils: number };

export const BILLS: Bill[] = [
  { id: "power", en: "Grid Power", ar: "طاقة الشبكة", fils: 42_800 },
  { id: "water", en: "Pearl Water", ar: "مياه اللؤلؤ", fils: 9_150 },
  { id: "waves", en: "Waves Mobile", ar: "موجات", fils: 12_000 },
];

export type Tx = {
  id: string;
  en: string;
  ar: string;
  category: string;
  amount: number;
  day: "today" | "yesterday" | "earlier";
  time: string;
  status: "posted" | "pending";
  ref: string;
};

export const TXS: Tx[] = [
  {
    id: "t1",
    en: "Souq Al Nakhl",
    ar: "سوق النخل",
    category: "groceries",
    amount: -18.75,
    day: "today",
    time: "09:14",
    status: "posted",
    ref: "ATH-20418",
  },
  {
    id: "t2",
    en: "Yusuf K.",
    ar: "يوسف ك.",
    category: "lamha",
    amount: 60,
    day: "today",
    time: "08:02",
    status: "posted",
    ref: "ATH-20402",
  },
  {
    id: "t3",
    en: "Waves Mobile",
    ar: "موجات",
    category: "bills",
    amount: -12,
    day: "yesterday",
    time: "19:40",
    status: "pending",
    ref: "ATH-20388",
  },
  {
    id: "t4",
    en: "Cafe Lilou",
    ar: "مقهى ليلو",
    category: "dining",
    amount: -4.25,
    day: "yesterday",
    time: "16:05",
    status: "posted",
    ref: "ATH-20371",
  },
  {
    id: "t5",
    en: "Grid Power",
    ar: "طاقة الشبكة",
    category: "bills",
    amount: -42.8,
    day: "earlier",
    time: "12 Nov",
    status: "posted",
    ref: "ATH-19820",
  },
  {
    id: "t6",
    en: "Northwind Studio",
    ar: "استوديو نورثويند",
    category: "salary",
    amount: 890,
    day: "earlier",
    time: "01 Nov",
    status: "posted",
    ref: "ATH-19001",
  },
];

export const SPEND = [
  { key: "groceries", value: 186.4 },
  { key: "bills", value: 96.5 },
  { key: "dining", value: 74.2 },
  { key: "move", value: 55.2 },
];

export const MONTH_TOTAL = 412.3;

export type Notice = { id: string; en: string; ar: string; detailEn: string; detailAr: string };

export const NOTICES: Notice[] = [
  {
    id: "n1",
    en: "Lamha in",
    ar: "لمحة واردة",
    detailEn: "60.000 from Yusuf K. this morning.",
    detailAr: "60.000 من يوسف ك. هذا الصباح.",
  },
  {
    id: "n2",
    en: "Grid Power is ready",
    ar: "طاقة الشبكة جاهزة",
    detailEn: "42.800 is waiting in Bills. Nothing has left the account.",
    detailAr: "42.800 بانتظارك في الفواتير. لم يخرج شيء من الحساب.",
  },
];

export function formatAmount(amount: number, lang: Lang, withSign = false): string {
  const abs = Math.abs(amount).toLocaleString("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
  const unit = COPY[lang].unit;
  const sign = withSign ? (amount > 0 ? "+" : amount < 0 ? "−" : "") : "";
  return lang === "ar" ? `${sign}${abs} ${unit}` : `${sign}${unit} ${abs}`;
}

export function splitAmount(amount: number): { whole: string; fils: string } {
  const formatted = Math.abs(amount).toLocaleString("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
  const dot = formatted.lastIndexOf(".");
  return { whole: formatted.slice(0, dot), fils: formatted.slice(dot + 1) };
}

export function formatFils(fils: number): string {
  const abs = Math.abs(Math.trunc(fils));
  const dinar = Math.floor(abs / 1000);
  const rem = abs % 1000;
  return `${dinar.toLocaleString("en-US")}.${String(rem).padStart(3, "0")}`;
}

export function personName(person: Person, lang: Lang): string {
  return lang === "ar" ? person.ar : person.en;
}

export function txName(tx: Tx, lang: Lang): string {
  return lang === "ar" ? tx.ar : tx.en;
}

export function billName(bill: Bill, lang: Lang): string {
  return lang === "ar" ? bill.ar : bill.en;
}

export const PROMPT = `You are the principal product designer and front-end engineer for Athar (أثر), an original Bahraini money interface. Ship one home screen, and the system that makes that screen inevitable. Do not ship a clone.

Independence
Athar is not affiliated with BENEFIT, BenefitPay, ila, Bank ABC, the Central Bank of Bahrain, or any card scheme. Never use their names in the product chrome. Never trace their logos. Never reuse their colorways. Never imply that a payment succeeded. Study only the jobs people already hire those products for: pay a counter with QR, move a small amount to a person, settle household bills, see a card as an object, and read the month in one sentence.

Person
Noor, in Muharraq, switches between Arabic and English in the same day. She pays at the grocery counter, sends a little to family, and checks that the power bill actually left. Write for her in short adult sentences. No mascots, no "you're crushing it".

Money
Currency is the Bahraini dinar. Always three decimal places: 4.500, never 4.5. Group thousands. Use Western digits in both languages. Wrap every figure in a left-to-right isolate so Arabic cannot reorder the fils. Use tabular numerals wherever figures align or change. Available balance is the headline. Current and on-hold are subordinates, never the same size. Incoming is gulf plus a plus-sign. Outgoing is the body color plus a minus. Do not use traffic-light green and red. Do not show a full card number. Do not label a study reference as a real IBAN.

Home, top to bottom, and nothing else
1. Identity — wordmark, time, and the bell.
2. A gulf slab — greeting, city, available balance, current and hold. The hide control lives on the slab.
3. Scan as a full-width bar, then Pay, Request, Bills, and More in type.
4. One paper debit card with a gulf edge.
5. A ledger — merchant, category, time, status, signed amount, grouped by day.
6. One month — a total against a quiet budget, four horizontal measures, one sentence.
7. One savings pot.
8. Navigation — Home, Pay, Scan, Activity, You, set in type.
On a 390-wide phone, the balance and Scan must both be visible without scrolling.

Visual system — closed
Two families only: Tajawal for every UI string in Arabic and Latin, Fraunces for the wordmark and the balance only.
Five colors only: ink #1B1714, sand #E4D5C0, paper #FBF6EE, mist #5C554C, gulf #0E3F4C.
Gulf is the only accent: the balance slab, the scan bar, incoming amounts, the card edge, focus. Gulf buttons use paper text. Mist is secondary text on sand and on paper. Corners are square. No pills.
No gradient blobs, no glassmorphism, no emoji icons, no stock illustration, no purple, no Inter, no three-card feature grid. The only texture is a hairline grain on the card, and only once the object has earned it.
Spacing is an 8-point scale. Tap targets are at least 44 pixels. Motion is 150ms ease-out on transform and opacity, press scale 0.96, and off under prefers-reduced-motion.

Behavior
Arabic sets dir=rtl on the product, designed as Arabic, not mirrored afterwards. English specification text stays dir=ltr. Freeze affects the card, not the account. Pay, request, scan, and bills are rehearsals: the last state says, in words, that no fils moved. There is no success celebration. The keypad enters fils, not floating point — 1250 means 1.250. Icon-only controls have accessible names. Screen-reader order follows the visual order.

Voice
"Dining is quieter this week." Never "Oops", never "Your money, supercharged".

Out of scope
Sign-in theater, KYC theater, real rail messages, scheme logos, storing a PAN, analytics on amounts, and any control that looks like money moved.

Acceptance
Within five seconds a viewer can say how much is available, how they would pay at a counter, and that this is a study. The wireframe and the finished home share one architecture. Arabic is complete: overlap, truncation, and horizontal page scroll are defects. A build that cannot move money must not look as if it did.`;

export const PHASES: { title: string; body: string }[] = [
  {
    title: "Study",
    body: "Lock the architecture, the five colors, the two families, the fils formatter, and bilingual direction. This prototype is that lock. No backend, no accounts, no rails.",
  },
  {
    title: "Design system",
    body: "Tokens, type scale, icon rules, motion, focus, and a gallery: balance, paper card, action, ledger row, sheet. Snapshot both directions. Contrast is a gate, not a polish pass.",
  },
  {
    title: "Read model",
    body: "Account, holds, card, ledger, pots, and billers behind one repository interface, typed and fake. Later an adapter can sit in front of a licensed core. No secrets in the client. No personal data in an unowned database.",
  },
  {
    title: "Home instrument",
    body: "Build the living home against the repository. Required states: loading, new customer, hidden balance, frozen card, offline, error. The wireframe is the skeleton of those states, not a second design.",
  },
  {
    title: "Pay graph, still a rehearsal",
    body: "QR parsing as a pure function, Lamha (person-to-person) with alias, amount, purpose, review, and receipt, plus request and bill presentment. Every confirm names the source of funds and the fils. Idempotency keys. The UI is incapable of showing success without a server receipt.",
  },
  {
    title: "Card",
    body: "Virtual issue, step-up before any number is revealed, freeze, merchant limits, 3-D Secure handoff. A PAN never reaches analytics or logs. Freeze never blocks the account balance.",
  },
  {
    title: "Story",
    body: "The month sentence is generated from categories, not written by marketing. Pots with optional round-up. Statements as a file the customer asked for. If a sentence is not true, it does not ship.",
  },
  {
    title: "Trust",
    body: "Device binding, step-up, session timeout, notification preferences, disputes, and statements in both languages. Threat model before any real fils: phishing lookalikes, overlay attacks, IBAN swapped on the clipboard.",
  },
  {
    title: "Only with a principal",
    body: "Licensing with the Central Bank of Bahrain belongs to a bank or a payment institution, not to this interface. Athar does not launch onto real rails, national switches, or card schemes as itself. Integration is an adapter contracted with that principal. Reconciliation, safeguarding, and complaints stay with them.",
  },
];

export function planText(): string {
  return PHASES.map((phase, index) => `${index + 1}. ${phase.title}\n${phase.body}`).join("\n\n");
}

export function greetingFor(date: Date | null, copy: Bundle): string {
  if (!date) return copy.greetingHello;
  const hour = date.getHours();
  if (hour < 12) return copy.morning;
  if (hour < 17) return copy.afternoon;
  return copy.evening;
}

export function clockFor(date: Date | null): string {
  if (!date) return "––:––";
  return date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false });
}
