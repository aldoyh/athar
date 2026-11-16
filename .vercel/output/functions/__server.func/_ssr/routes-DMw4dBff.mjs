import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as QrCode, c as Eye, d as Delete, f as Bell, i as Receipt, l as EyeOff, m as ArrowDownLeft, n as User, o as List, p as ArrowUpRight, s as House, t as X, u as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as SwitchThumb, t as Switch } from "../_libs/@radix-ui/react-switch+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DMw4dBff.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PASSES = [
	{
		n: 1,
		en: "Frame",
		ar: "إطار",
		blurbEn: "Zones only. Balance is the headline. Scan is the hero. The card is an object.",
		blurbAr: "مناطق فقط. الرصيد هو العنوان. المسح هو الفعل الأول. البطاقة شيء."
	},
	{
		n: 2,
		en: "Type",
		ar: "حروف",
		blurbEn: "Tajawal for words, Fraunces for money. Real sentences, no boxes.",
		blurbAr: "خط الواجهة للكلام، وخط العرض للمال. جمل حقيقية بلا صناديق."
	},
	{
		n: 3,
		en: "Night",
		ar: "ليل",
		blurbEn: "Ink, pearl, and one brass. No second color.",
		blurbAr: "حبر ولؤلؤ ونحاس واحد. لا لون ثانٍ."
	},
	{
		n: 4,
		en: "Balance",
		ar: "رصيد",
		blurbEn: "Available becomes the headline. Fils stay visible. Current and hold step back.",
		blurbAr: "المتاح يصير العنوان. ثلاث خانات للفلس. الجاري والمحجوز يتراجعان."
	},
	{
		n: 5,
		en: "Metal",
		ar: "معدن",
		blurbEn: "The card becomes pearl metal: a name, the last four, a brass edge.",
		blurbAr: "البطاقة تصير معدناً لؤلؤياً: الاسم، وآخر أربعة، وحافة نحاس."
	},
	{
		n: 6,
		en: "Actions",
		ar: "أفعال",
		blurbEn: "Five verbs. Scan is brass. Every target is at least 44 pixels.",
		blurbAr: "خمسة أفعال. المسح نحاسي. كل هدف لا يقل عن 44."
	},
	{
		n: 7,
		en: "Month",
		ar: "شهر",
		blurbEn: "Spend is one comparison, in a single hue. Not a rainbow.",
		blurbAr: "الصرف مقارنة واحدة بلون واحد. ليست قوس قزح."
	},
	{
		n: 8,
		en: "Ledger",
		ar: "دفتر",
		blurbEn: "Merchant, category, signed fils. Incoming is brass, not green.",
		blurbAr: "التاجر والتصنيف والمبلغ بإشارة. الوارد نحاس، ليس أخضر."
	},
	{
		n: 9,
		en: "Story",
		ar: "حكاية",
		blurbEn: "One true sentence, and one pot. A line that does not earn its place goes.",
		blurbAr: "جملة صادقة واحدة، وحصالة واحدة. ما لا يستحق سطراً يُحذف."
	},
	{
		n: 10,
		en: "Living",
		ar: "حي",
		blurbEn: "Living home. Nothing on this screen can move money.",
		blurbAr: "الشاشة الحيّة. هذه الشاشة لا تحرّك مالاً."
	}
];
var COPY = {
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
		cardKind: "Metal",
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
		chartLabel: "This month: groceries 186.400, bills 96.500, dining 74.200, transport 55.200 Bahraini dinars.",
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
		noFilsBody: "This rehearsal stops on purpose. A licensed build would show a receipt from its principal here — and not before.",
		review: "Review",
		enterAmount: "Enter an amount",
		aboveAvailable: "Above available",
		fromBalance: "From available balance, not the metal card.",
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
		freezeHelp: "Freezing covers the metal card only. The available balance stays usable for a Lamha.",
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
		categories: {
			groceries: "Groceries",
			dining: "Dining",
			bills: "Bills",
			move: "Move",
			lamha: "Lamha",
			salary: "Salary"
		},
		zones: [
			{
				n: "01",
				title: "Status",
				note: "Clock, wordmark, alerts. Nothing commercial.",
				weight: "row"
			},
			{
				n: "02",
				title: "Greeting",
				note: "Time of day, first name, city, which account.",
				weight: "body"
			},
			{
				n: "03",
				title: "Balance",
				note: "Available is the only headline. Current and on-hold are subordinates. Three decimal places.",
				weight: "hero"
			},
			{
				n: "04",
				title: "Card",
				note: "One debit object. Name and last four. Never a marketing banner.",
				weight: "body"
			},
			{
				n: "05",
				title: "Actions",
				note: "Pay, request, scan, bills, more. Scan is primary because the counter is the main stage.",
				weight: "body"
			},
			{
				n: "06",
				title: "Month",
				note: "One comparison in a single hue, then one sentence. Not a dashboard.",
				weight: "body"
			},
			{
				n: "07",
				title: "Ledger",
				note: "Who, why, when, and the fils, with a sign. Group by day.",
				weight: "body"
			},
			{
				n: "08",
				title: "Pot",
				note: "One goal. Cut this before you crowd the balance.",
				weight: "row"
			},
			{
				n: "09",
				title: "Navigation",
				note: "Home, pay, scan, activity, you. Scan stays reachable.",
				weight: "row"
			}
		]
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
		cardKind: "معدنية",
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
		fromBalance: "من الرصيد المتاح، لا من البطاقة المعدنية.",
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
		categories: {
			groceries: "بقالة",
			dining: "مطعم",
			bills: "فواتير",
			move: "تنقّل",
			lamha: "لمحة",
			salary: "راتب"
		},
		zones: [
			{
				n: "01",
				title: "الحالة",
				note: "الساعة، والعلامة، والتنبيهات. بلا إعلان.",
				weight: "row"
			},
			{
				n: "02",
				title: "التحية",
				note: "وقت اليوم، والاسم، والمدينة، وأي حساب.",
				weight: "body"
			},
			{
				n: "03",
				title: "الرصيد",
				note: "المتاح هو العنوان الوحيد. الجاري والمحجوز أصغر. ثلاث خانات.",
				weight: "hero"
			},
			{
				n: "04",
				title: "البطاقة",
				note: "شيء واحد للخصم. الاسم وآخر أربعة. ليست لافتة.",
				weight: "body"
			},
			{
				n: "05",
				title: "الأفعال",
				note: "ادفع، اطلب، امسح، فواتير، المزيد. المسح هو الأساسي لأن الكاشير هو المسرح.",
				weight: "body"
			},
			{
				n: "06",
				title: "الشهر",
				note: "مقارنة واحدة بلون واحد، ثم جملة. ليست لوحة.",
				weight: "body"
			},
			{
				n: "07",
				title: "الدفتر",
				note: "من، ولماذا، ومتى، وكم فلس، مع الإشارة. مجمّع باليوم.",
				weight: "body"
			},
			{
				n: "08",
				title: "الحصالة",
				note: "هدف واحد. احذفه قبل أن تزاحم الرصيد.",
				weight: "row"
			},
			{
				n: "09",
				title: "التنقّل",
				note: "الرئيسية، ادفع، امسح، الحركة، أنت. المسح يبقى قريباً.",
				weight: "row"
			}
		]
	}
};
var BALANCE = {
	available: 1284.65,
	current: 1410.2,
	hold: 125.55
};
var PEOPLE = [
	{
		id: "yusuf",
		en: "Yusuf K.",
		ar: "يوسف ك."
	},
	{
		id: "maryam",
		en: "Maryam S.",
		ar: "مريم س."
	},
	{
		id: "huda",
		en: "Huda A.",
		ar: "هدى ع."
	}
];
var BILLS = [
	{
		id: "power",
		en: "Grid Power",
		ar: "طاقة الشبكة",
		fils: 42800
	},
	{
		id: "water",
		en: "Pearl Water",
		ar: "مياه اللؤلؤ",
		fils: 9150
	},
	{
		id: "waves",
		en: "Waves Mobile",
		ar: "موجات",
		fils: 12e3
	}
];
var TXS = [
	{
		id: "t1",
		en: "Souq Al Nakhl",
		ar: "سوق النخل",
		category: "groceries",
		amount: -18.75,
		day: "today",
		time: "09:14",
		status: "posted",
		ref: "ATH-20418"
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
		ref: "ATH-20402"
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
		ref: "ATH-20388"
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
		ref: "ATH-20371"
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
		ref: "ATH-19820"
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
		ref: "ATH-19001"
	}
];
var SPEND = [
	{
		key: "groceries",
		value: 186.4
	},
	{
		key: "bills",
		value: 96.5
	},
	{
		key: "dining",
		value: 74.2
	},
	{
		key: "move",
		value: 55.2
	}
];
var NOTICES = [{
	id: "n1",
	en: "Lamha in",
	ar: "لمحة واردة",
	detailEn: "60.000 from Yusuf K. this morning.",
	detailAr: "60.000 من يوسف ك. هذا الصباح."
}, {
	id: "n2",
	en: "Grid Power is ready",
	ar: "طاقة الشبكة جاهزة",
	detailEn: "42.800 is waiting in Bills. Nothing has left the account.",
	detailAr: "42.800 بانتظارك في الفواتير. لم يخرج شيء من الحساب."
}];
function formatAmount(amount, lang, withSign = false) {
	const abs = Math.abs(amount).toLocaleString("en-US", {
		minimumFractionDigits: 3,
		maximumFractionDigits: 3
	});
	const unit = COPY[lang].unit;
	const sign = withSign ? amount > 0 ? "+" : amount < 0 ? "−" : "" : "";
	return lang === "ar" ? `${sign}${abs} ${unit}` : `${sign}${unit} ${abs}`;
}
function splitAmount(amount) {
	const formatted = Math.abs(amount).toLocaleString("en-US", {
		minimumFractionDigits: 3,
		maximumFractionDigits: 3
	});
	const dot = formatted.lastIndexOf(".");
	return {
		whole: formatted.slice(0, dot),
		fils: formatted.slice(dot + 1)
	};
}
function formatFils(fils) {
	const abs = Math.abs(Math.trunc(fils));
	const dinar = Math.floor(abs / 1e3);
	const rem = abs % 1e3;
	return `${dinar.toLocaleString("en-US")}.${String(rem).padStart(3, "0")}`;
}
function personName(person, lang) {
	return lang === "ar" ? person.ar : person.en;
}
function txName(tx, lang) {
	return lang === "ar" ? tx.ar : tx.en;
}
function billName(bill, lang) {
	return lang === "ar" ? bill.ar : bill.en;
}
var PROMPT = `You are the principal product designer and front-end engineer for Athar (أثر), an original Bahraini money interface. Ship one home screen, and the system that makes that screen inevitable. Do not ship a clone.

Independence
Athar is not affiliated with BENEFIT, BenefitPay, ila, Bank ABC, the Central Bank of Bahrain, or any card scheme. Never use their names in the product chrome. Never trace their logos. Never reuse their colorways. Never imply that a payment succeeded. Study only the jobs people already hire those products for: pay a counter with QR, move a small amount to a person, settle household bills, see a card as an object, and read the month in one sentence.

Person
Noor, in Muharraq, switches between Arabic and English in the same day. She pays at the grocery counter, sends a little to family, and checks that the power bill actually left. Write for her in short adult sentences. No mascots, no "you're crushing it".

Money
Currency is the Bahraini dinar. Always three decimal places: 4.500, never 4.5. Group thousands. Use Western digits in both languages. Wrap every figure in a left-to-right isolate so Arabic cannot reorder the fils. Use tabular numerals wherever figures align or change. Available balance is the headline. Current and on-hold are subordinates, never the same size. Incoming is brass plus a plus-sign. Outgoing is the body color plus a minus. Do not use traffic-light green and red. Do not show a full card number. Do not label a study reference as a real IBAN.

Home, top to bottom, and nothing else
1. Identity — time-aware greeting, first name, city, account.
2. Available balance, with a hide control.
3. One metal debit card.
4. Five verbs — Pay, Request, Scan, Bills, More. Scan is primary, because the counter is the main stage.
5. One month — a total against a quiet budget, four categories, one sentence.
6. A ledger — merchant, category, time, status, signed amount, grouped by day.
7. One savings pot.
8. Navigation — Home, Pay, Scan, Activity, You.
On a 390-wide phone, the balance and Scan must both be visible without scrolling.

Visual system — closed
Two families only: Tajawal for every UI string in Arabic and Latin, Fraunces for the wordmark and the balance only.
Five colors only: ink #101614, panel #1A2420, pearl #F3EEE6, mist #9C9488, brass #C6A15B.
Brass is the only accent: the primary button, incoming amounts, the card edge, focus. Brass text on pearl fails contrast — do not do it. Brass buttons use ink text. Mist is secondary text on ink only. On pearl, secondary text is ink at about 70% opacity.
No gradient blobs, no glassmorphism, no emoji icons, no stock illustration, no purple, no Inter, no three-card feature grid. The only texture is a hairline grain on the metal card, and only once the object has earned it.
Spacing is an 8-point scale. Tap targets are at least 44 pixels. Motion is 150ms ease-out on transform and opacity, press scale 0.96, and off under prefers-reduced-motion.

Behavior
Arabic sets dir=rtl on the product, designed as Arabic, not mirrored afterwards. English specification text stays dir=ltr. Freeze affects the card, not the account. Pay, request, scan, and bills are rehearsals: the last state says, in words, that no fils moved. There is no success celebration. The keypad enters fils, not floating point — 1250 means 1.250. Icon-only controls have accessible names. Screen-reader order follows the visual order.

Voice
"Dining is quieter this week." Never "Oops", never "Your money, supercharged".

Out of scope
Sign-in theater, KYC theater, real rail messages, scheme logos, storing a PAN, analytics on amounts, and any control that looks like money moved.

Acceptance
Within five seconds a viewer can say how much is available, how they would pay at a counter, and that this is a study. The wireframe and the finished home share one architecture. Arabic is complete: overlap, truncation, and horizontal page scroll are defects. A build that cannot move money must not look as if it did.`;
var PHASES = [
	{
		title: "Study",
		body: "Lock the architecture, the five colors, the two families, the fils formatter, and bilingual direction. This prototype is that lock. No backend, no accounts, no rails."
	},
	{
		title: "Design system",
		body: "Tokens, type scale, icon rules, motion, focus, and a gallery: balance, metal card, action, ledger row, sheet. Snapshot both directions. Contrast is a gate, not a polish pass."
	},
	{
		title: "Read model",
		body: "Account, holds, card, ledger, pots, and billers behind one repository interface, typed and fake. Later an adapter can sit in front of a licensed core. No secrets in the client. No personal data in an unowned database."
	},
	{
		title: "Home instrument",
		body: "Build the living home against the repository. Required states: loading, new customer, hidden balance, frozen card, offline, error. The wireframe is the skeleton of those states, not a second design."
	},
	{
		title: "Pay graph, still a rehearsal",
		body: "QR parsing as a pure function, Lamha (person-to-person) with alias, amount, purpose, review, and receipt, plus request and bill presentment. Every confirm names the source of funds and the fils. Idempotency keys. The UI is incapable of showing success without a server receipt."
	},
	{
		title: "Card",
		body: "Virtual issue, step-up before any number is revealed, freeze, merchant limits, 3-D Secure handoff. A PAN never reaches analytics or logs. Freeze never blocks the account balance."
	},
	{
		title: "Story",
		body: "The month sentence is generated from categories, not written by marketing. Pots with optional round-up. Statements as a file the customer asked for. If a sentence is not true, it does not ship."
	},
	{
		title: "Trust",
		body: "Device binding, step-up, session timeout, notification preferences, disputes, and statements in both languages. Threat model before any real fils: phishing lookalikes, overlay attacks, IBAN swapped on the clipboard."
	},
	{
		title: "Only with a principal",
		body: "Licensing with the Central Bank of Bahrain belongs to a bank or a payment institution, not to this interface. Athar does not launch onto real rails, national switches, or card schemes as itself. Integration is an adapter contracted with that principal. Reconciliation, safeguarding, and complaints stay with them."
	}
];
function planText() {
	return PHASES.map((phase, index) => `${index + 1}. ${phase.title}\n${phase.body}`).join("\n\n");
}
function greetingFor(date, copy) {
	if (!date) return copy.greetingHello;
	const hour = date.getHours();
	if (hour < 12) return copy.morning;
	if (hour < 17) return copy.afternoon;
	return copy.evening;
}
function clockFor(date) {
	if (!date) return "––:––";
	return date.toLocaleTimeString("en-GB", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var STORAGE_KEY = "athar-study";
var AtharContext = (0, import_react.createContext)(null);
function clampStage(n) {
	if (!Number.isFinite(n)) return 10;
	return Math.min(10, Math.max(1, Math.round(n)));
}
function AtharProvider({ children }) {
	const [stage, setStageState] = (0, import_react.useState)(10);
	const [held, setHeld] = (0, import_react.useState)(false);
	const [lang, setLang] = (0, import_react.useState)("en");
	const [hidden, setHidden] = (0, import_react.useState)(false);
	const [frozen, setFrozen] = (0, import_react.useState)(false);
	const [overlay, setOverlay] = (0, import_react.useState)({ kind: "none" });
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			if (!parsed || typeof parsed !== "object") return;
			const data = parsed;
			if (data.lang === "ar" || data.lang === "en") setLang(data.lang);
			if (typeof data.hidden === "boolean") setHidden(data.hidden);
			if (typeof data.frozen === "boolean") setFrozen(data.frozen);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify({
			lang,
			hidden,
			frozen
		}));
	}, [
		lang,
		hidden,
		frozen
	]);
	const store = (0, import_react.useMemo)(() => ({
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
		toggleLang: () => setLang((current) => current === "en" ? "ar" : "en"),
		toggleHidden: () => setHidden((current) => !current),
		toggleFrozen: () => setFrozen((current) => !current),
		open: setOverlay,
		close: () => setOverlay({ kind: "none" })
	}), [
		stage,
		held,
		lang,
		hidden,
		frozen,
		overlay
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtharContext.Provider, {
		value: store,
		children
	});
}
function useAthar() {
	const store = (0, import_react.useContext)(AtharContext);
	if (!store) throw new Error("Athar store is missing");
	return store;
}
function useCopy() {
	const { lang } = useAthar();
	return COPY[lang];
}
async function copyText(value) {
	try {
		await navigator.clipboard.writeText(value);
		return true;
	} catch {
		return false;
	}
}
function BriefBody({ onJump, inset = true }) {
	const { lang, setStage } = useAthar();
	const copy = useCopy();
	const [note, setNote] = (0, import_react.useState)("");
	async function onCopy(value) {
		const ok = await copyText(value);
		setNote(ok ? copy.copied : copy.copyFailed);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-8 py-6", inset && "px-5"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-mist uppercase",
					children: "Athar · أثر"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl text-balance",
					children: copy.promptTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-pretty text-mist",
					children: copy.notABank
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full bg-brass px-4 text-sm text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
						onClick: () => onCopy(PROMPT),
						children: copy.copyPrompt
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full bg-panel px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
						onClick: () => onCopy(planText()),
						children: copy.copyPlan
					})]
				}),
				note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-brass",
					role: "status",
					children: note
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				dir: "ltr",
				lang: "en",
				className: "flex flex-col gap-4 text-sm text-pretty",
				children: PROMPT.split("\n\n").map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 48)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				dir: "ltr",
				lang: "en",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-balance",
					children: copy.planTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 flex flex-col gap-4",
					children: PHASES.map((phase, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-base",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-brass",
									children: index + 1
								}),
								" ",
								phase.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-pretty text-mist",
							children: phase.body
						})]
					}, phase.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-balance",
				children: copy.logTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 flex flex-col gap-2",
				children: PASSES.map((pass) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "w-full min-h-11 rounded-2xl bg-panel px-4 py-3 text-start transition-transform duration-150 ease-out active:scale-[0.96]",
					onClick: () => {
						setStage(pass.n);
						onJump?.();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-brass",
								children: pass.n
							}),
							" ",
							lang === "ar" ? pass.ar : pass.en
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-pretty text-mist",
						children: lang === "ar" ? pass.blurbAr : pass.blurbEn
					})]
				}) }, pass.n))
			})] })
		]
	});
}
function Sheet({ title, description, children }) {
	const { overlay, close, lang } = useAthar();
	const copy = useCopy();
	const open = overlay.kind !== "none";
	const dir = lang === "ar" ? "rtl" : "ltr";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => !next && close(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-40 bg-ink/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			dir,
			lang,
			className: "athar-sheet fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md overflow-y-auto rounded-t-3xl bg-panel text-pearl lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:rounded-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 px-5 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-2xl text-balance",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-1 text-sm text-pretty text-mist",
					children: description
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					className: "grid size-11 shrink-0 place-items-center rounded-full bg-ink text-pearl transition-transform duration-150 ease-out active:scale-[0.96]",
					"aria-label": copy.close,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-5",
						"aria-hidden": "true"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 pt-4 pb-safe",
				children
			})]
		}, overlay.kind)] })
	});
}
function Stopped() {
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 border-t border-line pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl text-balance",
			children: copy.noFilsTitle
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-pretty text-mist",
			children: copy.noFilsBody
		})]
	});
}
function Keypad({ fils, onFils }) {
	const copy = useCopy();
	function push(digit) {
		const next = fils * 10 + digit;
		if (next > 99999999) return;
		onFils(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: "ltr",
		className: "mt-4 grid grid-cols-3 gap-2",
		children: [
			[
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9
			].map((digit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-14 rounded-2xl bg-ink font-display text-2xl tabular-nums transition-transform duration-150 ease-out active:scale-[0.96]",
				onClick: () => push(digit),
				children: digit
			}, digit)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-14 rounded-2xl bg-ink font-display text-2xl tabular-nums transition-transform duration-150 ease-out active:scale-[0.96]",
				onClick: () => push(0),
				children: "0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid min-h-14 place-items-center rounded-2xl bg-ink transition-transform duration-150 ease-out active:scale-[0.96]",
				onClick: () => onFils(Math.floor(fils / 10)),
				"aria-label": copy.backspace,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete, {
					className: "size-5",
					"aria-hidden": "true"
				})
			})
		]
	});
}
function PayFlow({ mode }) {
	const { lang } = useAthar();
	const copy = useCopy();
	const [fils, setFils] = (0, import_react.useState)(0);
	const [who, setWho] = (0, import_react.useState)(PEOPLE[0]?.id ?? "");
	const [done, setDone] = (0, import_react.useState)(false);
	const person = PEOPLE.find((item) => item.id === who) ?? PEOPLE[0];
	const over = mode === "pay" && fils > 1284650;
	const ready = fils > 0 && !over && person;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			dir: "ltr",
			className: "font-display text-4xl tabular-nums",
			children: [
				formatFils(fils),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-base text-mist",
					children: copy.unit
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-mist",
			children: copy.keypadHint
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-mist",
			children: mode === "pay" ? copy.to : copy.from
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex flex-wrap gap-2",
			children: PEOPLE.map((item) => {
				const selected = item.id === who;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": selected,
					className: cn("min-h-11 rounded-full px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96]", selected ? "bg-brass text-ink" : "bg-ink text-pearl"),
					onClick: () => setWho(item.id),
					children: personName(item, lang)
				}, item.id);
			})
		}),
		mode === "pay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-mist",
			children: copy.fromBalance
		}) : null,
		done && person ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm",
			children: [
				mode === "request" ? copy.requestDraft : copy.lamha,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					dir: "ltr",
					className: "tabular-nums",
					children: [
						formatFils(fils),
						" ",
						copy.unit
					]
				}),
				" ",
				"· ",
				personName(person, lang)
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stopped, {})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keypad, {
			fils,
			onFils: setFils
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-4 min-h-11 w-full rounded-full bg-brass text-sm text-ink transition-transform duration-150 ease-out active:scale-[0.96] disabled:bg-ink disabled:text-mist",
			disabled: !ready,
			onClick: () => setDone(true),
			children: fils === 0 ? copy.enterAmount : over ? copy.aboveAvailable : copy.review
		})] })
	] });
}
function ScanFlow() {
	const copy = useCopy();
	const [found, setFound] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const id = window.setTimeout(() => setFound(true), 900);
		return () => window.clearTimeout(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto grid h-48 w-48 place-items-center border border-brass",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-24 w-24 border border-line" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-pretty",
			children: found ? copy.scanFound : copy.scanSeeking
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-mist",
			children: copy.scanNote
		}),
		found && !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm",
			children: [
				copy.wouldCharge,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					dir: "ltr",
					className: "tabular-nums",
					children: ["4.250 ", copy.unit]
				})
			]
		}) : null,
		done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stopped, {}) : null,
		found && !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-4 min-h-11 w-full rounded-full bg-brass text-sm text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
			onClick: () => setDone(true),
			children: copy.stop
		}) : null
	] });
}
function BillsFlow() {
	const { lang } = useAthar();
	const copy = useCopy();
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	const bill = BILLS.find((item) => item.id === picked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: BILLS.map((item) => {
				const selected = item.id === picked;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": selected,
					className: cn("flex min-h-11 w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-start transition-transform duration-150 ease-out active:scale-[0.96]", selected ? "bg-brass text-ink" : "bg-ink text-pearl"),
					onClick: () => {
						setPicked(item.id);
						setDone(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: billName(item, lang) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						className: "tabular-nums",
						children: formatFils(item.fils)
					})]
				}) }, item.id);
			})
		}),
		bill && !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-4 min-h-11 w-full rounded-full bg-brass text-sm text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
			onClick: () => setDone(true),
			children: copy.payBill
		}) : null,
		done && bill ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm",
			children: [
				billName(bill, lang),
				" ·",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					dir: "ltr",
					className: "tabular-nums",
					children: [
						formatFils(bill.fils),
						" ",
						copy.unit
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stopped, {})] }) : null
	] });
}
function CardFlow() {
	const { frozen, toggleFrozen } = useAthar();
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-mist",
			children: [
				copy.cardName,
				" · ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					dir: "ltr",
					children: "•••• 4419"
				}),
				" · ",
				copy.debit
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "freeze",
				className: "text-base",
				children: frozen ? copy.unfreeze : copy.freeze
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				id: "freeze",
				checked: frozen,
				onCheckedChange: () => toggleFrozen(),
				className: "athar-switch",
				"aria-label": frozen ? copy.unfreeze : copy.freeze,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "athar-switch-thumb" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-pretty text-mist",
			children: copy.freezeHelp
		})
	] });
}
function TxFlow({ tx }) {
	const { lang } = useAthar();
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
		className: "grid grid-cols-2 gap-4 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-mist",
				children: copy.category
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1",
				children: copy.categories[tx.category]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-mist",
				children: copy.status
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1",
				children: tx.status === "pending" ? copy.pending : copy.posted
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-mist",
				children: copy.amount
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1",
				dir: "ltr",
				children: formatAmount(tx.amount, lang, true)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-mist",
				children: copy.reference
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1",
				dir: "ltr",
				children: tx.ref
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-mist",
					children: copy.receipt
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-pretty",
					children: copy.noFilsBody
				})]
			})
		]
	});
}
function MoreFlow() {
	const { hidden, toggleHidden, frozen, toggleFrozen, open } = useAthar();
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 rounded-2xl bg-ink px-4 text-start text-sm",
				"aria-pressed": hidden,
				onClick: toggleHidden,
				children: hidden ? copy.showBalance : copy.hideBalance
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 rounded-2xl bg-ink px-4 text-start text-sm",
				"aria-pressed": frozen,
				onClick: toggleFrozen,
				children: frozen ? copy.unfreeze : copy.freeze
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 rounded-2xl bg-ink px-4 text-start text-sm",
				onClick: () => open({ kind: "brief" }),
				children: copy.openBrief
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "px-1 pt-2 text-sm text-pretty text-mist",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-pearl",
					children: [copy.statements, ". "]
				}), copy.statementsNote]
			})
		]
	});
}
function YouFlow() {
	const { toggleLang, lang, open } = useAthar();
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-pretty text-mist",
			children: copy.profileNote
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm",
			children: copy.account
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-4 min-h-11 rounded-full bg-brass px-4 text-sm text-ink",
			onClick: toggleLang,
			children: lang === "en" ? "عربي" : "English"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-3 block min-h-11 text-sm text-brass",
			onClick: () => open({ kind: "brief" }),
			children: copy.openBrief
		})
	] });
}
function BellFlow() {
	const { lang } = useAthar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-3",
		children: NOTICES.map((notice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "border-t border-line pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: lang === "ar" ? notice.ar : notice.en }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-pretty text-mist",
				children: lang === "ar" ? notice.detailAr : notice.detailEn
			})]
		}, notice.id))
	});
}
function ActivityFlow() {
	const { lang, open } = useAthar();
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: TXS.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex min-h-11 w-full items-center justify-between gap-3 py-3 text-start",
			onClick: () => open({
				kind: "tx",
				id: tx.id
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block",
				children: txName(tx, lang)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-mist",
				children: [
					copy.categories[tx.category],
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						children: tx.time
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				dir: "ltr",
				className: cn("tabular-nums", tx.amount > 0 && "text-brass"),
				children: formatAmount(tx.amount, lang, true)
			})]
		})
	}, tx.id)) });
}
function PotFlow() {
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		dir: "ltr",
		className: "font-display text-3xl tabular-nums",
		children: copy.potOf
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-sm text-pretty text-mist",
		children: copy.potNote
	})] });
}
function Overlays() {
	const { overlay, close, lang } = useAthar();
	const copy = useCopy();
	if (overlay.kind === "none") return null;
	if (overlay.kind === "brief") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.brief,
		description: copy.study,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefBody, {
			inset: false,
			onJump: close
		})
	});
	if (overlay.kind === "pay") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: overlay.mode === "pay" ? copy.pay : copy.request,
		description: overlay.mode === "pay" ? copy.fromBalance : copy.keypadHint,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayFlow, { mode: overlay.mode })
	});
	if (overlay.kind === "scan") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.scan,
		description: copy.scanNote,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanFlow, {})
	});
	if (overlay.kind === "bills") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.bills,
		description: copy.billDue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillsFlow, {})
	});
	if (overlay.kind === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.cardKind,
		description: copy.studyMark,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFlow, {})
	});
	if (overlay.kind === "more") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.more,
		description: copy.study,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreFlow, {})
	});
	if (overlay.kind === "you") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.first,
		description: copy.study,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YouFlow, {})
	});
	if (overlay.kind === "bell") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.notifications,
		description: copy.study,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellFlow, {})
	});
	if (overlay.kind === "activity") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.activity,
		description: copy.study,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityFlow, {})
	});
	if (overlay.kind === "pot") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: copy.potName,
		description: copy.potSaved,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PotFlow, {})
	});
	const tx = TXS.find((item) => item.id === overlay.id);
	if (!tx) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: txName(tx, lang),
		description: copy.receipt,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxFlow, { tx })
	});
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "10",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 6.5v19",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "1.7",
				fill: "currentColor"
			})
		]
	});
}
function useNow() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
		return () => window.clearInterval(id);
	}, []);
	return now;
}
function Figure({ amount, sign = false, className }) {
	const { lang } = useAthar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		dir: "ltr",
		className: cn("tabular-nums", className),
		children: formatAmount(amount, lang, sign)
	});
}
function Wireframe() {
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 px-5 py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-ink/70 uppercase",
				children: copy.wireKicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl text-balance text-ink",
				children: copy.wireTitle
			}),
			copy.zones.map((zone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border border-ink/25 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-sm font-medium text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: zone.n
							}),
							" ",
							zone.title
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-pretty text-ink/70",
						children: zone.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-2",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("bg-ink/15", zone.weight === "hero" ? "h-8 w-4/5" : "h-2 w-2/3") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-1/2 bg-ink/10" })]
					})
				]
			}, zone.n))
		]
	});
}
function BalanceBlock({ night, quiet }) {
	const { stage, hidden, toggleHidden } = useAthar();
	const copy = useCopy();
	const { lang } = useAthar();
	const parts = splitAmount(BALANCE.available);
	const hero = stage >= 4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("text-sm", quiet),
				children: copy.available
			}), hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				dir: "ltr",
				className: "mt-1 inline-flex items-baseline gap-2",
				children: [
					lang === "en" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-sm", quiet),
						children: copy.unit
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-display text-5xl leading-none tabular-nums", stage >= 10 && "italic"),
						children: hidden ? "••••" : parts.whole
					}),
					hidden ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("font-display text-2xl leading-none tabular-nums", stage >= 10 && "italic"),
						children: [".", parts.fils]
					}),
					lang === "ar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-sm", quiet),
						children: copy.unit
					}) : null
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xl",
				children: hidden ? "••••" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, { amount: BALANCE.available })
			})] }), stage >= 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 place-items-center rounded-full transition-transform duration-150 ease-out active:scale-[0.96]",
				"aria-pressed": hidden,
				"aria-label": hidden ? copy.showBalance : copy.hideBalance,
				onClick: toggleHidden,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative size-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: cn("absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200 ease-out", hidden ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: cn("absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200 ease-out", hidden ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]") })]
				})
			}) : null]
		}), hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: cn("mt-4 grid grid-cols-2 gap-3 border-t pt-3 text-sm", night ? "border-line" : "border-ink/15"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: quiet,
				children: copy.current
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1",
				children: hidden ? "••••" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, { amount: BALANCE.current })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: quiet,
				children: copy.onHold
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1",
				children: hidden ? "••••" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, { amount: BALANCE.hold })
			})] })]
		}) : null]
	});
}
function MetalCard({ night }) {
	const { stage, frozen, open } = useAthar();
	const copy = useCopy();
	const metal = stage >= 5;
	const living = stage >= 10;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: cn("relative w-full overflow-hidden rounded-2xl p-5 text-start transition-transform duration-150 ease-out active:scale-[0.96]", metal ? cn("metal-card", living && "is-grained") : night ? "border border-line bg-panel text-pearl" : "border border-ink/20 text-ink"),
			onClick: () => {
				if (stage >= 5) open({ kind: "card" });
			},
			"aria-disabled": stage < 5,
			children: [
				metal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "metal-edge",
					"aria-hidden": "true"
				}) : null,
				metal && frozen && living ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-0 bg-ink/35",
					"aria-hidden": "true"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-lg italic",
						children: copy.cardKind
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs tracking-widest uppercase",
						children: copy.debit
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative mt-8 block text-sm",
					children: copy.cardName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative mt-1 flex items-baseline justify-between gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						className: "tabular-nums",
						children: "•••• 4419"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						className: "tabular-nums",
						children: "08/29"
					})]
				}),
				living ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative mt-3 flex items-center justify-between text-xs tracking-widest uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.studyMark }), frozen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.frozen }) : null]
				}) : null
			]
		})
	});
}
function Actions({ night }) {
	const { stage, open } = useAthar();
	const copy = useCopy();
	const items = [
		{
			id: "pay",
			label: copy.pay,
			icon: ArrowUpRight,
			overlay: {
				kind: "pay",
				mode: "pay"
			}
		},
		{
			id: "request",
			label: copy.request,
			icon: ArrowDownLeft,
			overlay: {
				kind: "pay",
				mode: "request"
			}
		},
		{
			id: "scan",
			label: copy.scan,
			icon: QrCode,
			overlay: { kind: "scan" }
		},
		{
			id: "bills",
			label: copy.bills,
			icon: Receipt,
			overlay: { kind: "bills" }
		},
		{
			id: "more",
			label: copy.more,
			icon: Ellipsis,
			overlay: { kind: "more" }
		}
	];
	const ready = stage >= 6;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-6 grid grid-cols-5 gap-2",
		children: items.map((item) => {
			const Icon = item.icon;
			const primary = item.id === "scan" && ready;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex min-h-11 flex-col items-center gap-1 text-xs transition-transform duration-150 ease-out active:scale-[0.96]",
				onClick: () => {
					if (ready) open(item.overlay);
				},
				"aria-disabled": !ready,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid size-11 place-items-center rounded-2xl", primary ? "bg-brass text-ink" : night ? "bg-panel text-pearl" : "border border-ink/20 text-ink"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-5",
						"aria-hidden": "true"
					})
				}), item.label]
			}, item.id);
		})
	});
}
function Month({ night, quiet }) {
	const { stage } = useAthar();
	const copy = useCopy();
	if (stage < 7) return null;
	const max = Math.max(...SPEND.map((item) => item.value));
	const opacity = [
		1,
		.75,
		.5,
		.32
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("mt-8 border-t pt-4", night ? "border-line" : "border-ink/15"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm",
					children: copy.thisMonth
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("text-sm", quiet),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, { amount: 412.3 }),
						" ",
						copy.ofBudget
					]
				})]
			}),
			stage >= 9 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-pretty",
				children: copy.sentence
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				dir: "ltr",
				className: "mt-4 grid grid-cols-4 gap-3",
				role: "img",
				"aria-label": copy.chartLabel,
				children: SPEND.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-16 items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full bg-brass",
							style: {
								height: `${Math.round(item.value / max * 100)}%`,
								opacity: opacity[index] ?? 1
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("truncate text-xs", quiet),
						children: copy.categories[item.key]
					})]
				}, item.key))
			})
		]
	});
}
function LedgerRow({ tx, night, interactive }) {
	const { lang, open } = useAthar();
	const copy = useCopy();
	const name = txName(tx, lang);
	const mark = name.slice(0, 1);
	const incoming = tx.amount > 0;
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-10 shrink-0 place-items-center rounded-md text-sm", night ? "bg-panel text-pearl" : "border border-ink/20"),
			"aria-hidden": "true",
			children: mark
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("block text-sm", night ? "text-mist" : "text-ink/70"),
				children: [
					copy.categories[tx.category],
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						children: tx.time
					}),
					tx.status === "pending" ? ` · ${copy.pending}` : ""
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			dir: "ltr",
			className: cn("tabular-nums", incoming && night && "text-brass"),
			children: formatAmount(tx.amount, lang, true)
		})
	] });
	if (!interactive) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-11 items-center gap-3 py-2",
		children: body
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "flex min-h-11 w-full items-center gap-3 py-2 text-start transition-transform duration-150 ease-out active:scale-[0.96]",
		onClick: () => open({
			kind: "tx",
			id: tx.id
		}),
		children: body
	});
}
function Ledger({ night }) {
	const { stage, open } = useAthar();
	const copy = useCopy();
	const groups = [{
		id: "today",
		label: copy.today
	}, {
		id: "yesterday",
		label: copy.yesterday
	}];
	const interactive = stage >= 8;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "ledger",
		className: "mt-6 scroll-mt-4",
		children: [groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("text-sm", night ? "text-mist" : "text-ink/70"),
				children: group.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: TXS.filter((tx) => tx.day === group.id).map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerRow, {
				tx,
				night,
				interactive
			}) }, tx.id)) })]
		}, group.id)), interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-2 min-h-11 text-sm text-brass",
			onClick: () => open({ kind: "activity" }),
			children: copy.allActivity
		}) : null]
	});
}
function Pot({ night }) {
	const { stage, open } = useAthar();
	const copy = useCopy();
	if (stage < 9) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("mt-6 border-t pt-4", night ? "border-line" : "border-ink/15"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "w-full text-start transition-transform duration-150 ease-out active:scale-[0.96]",
			onClick: () => open({ kind: "pot" }),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: copy.potName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					dir: "ltr",
					className: "text-sm tabular-nums",
					children: copy.potOf
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-3 block h-1 bg-line",
				role: "meter",
				"aria-label": copy.potName,
				"aria-valuemin": 0,
				"aria-valuemax": 8e3,
				"aria-valuenow": 2400,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-full bg-brass",
					style: { width: "30%" }
				})
			})]
		})
	});
}
function Living() {
	const { stage, lang, open } = useAthar();
	const copy = useCopy();
	const now = useNow();
	const night = stage >= 3;
	const quiet = night ? "text-mist" : "text-ink/70";
	const wordmark = lang === "ar" ? "أثَر" : "Athar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-lg", lang === "ar" ? "font-sans font-medium" : "font-display"),
					children: wordmark
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-sm tabular-nums", quiet),
						suppressHydrationWarning: true,
						children: clockFor(now)
					}), stage >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "relative grid size-11 place-items-center rounded-full transition-transform duration-150 ease-out active:scale-[0.96]",
						"aria-label": copy.notifications,
						onClick: () => open({ kind: "bell" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							className: "size-5",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-2 end-2 size-1.5 rounded-full bg-brass",
							"aria-hidden": "true"
						})]
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-2xl text-balance",
				children: lang === "ar" ? `${greetingFor(now, copy)}، ${copy.first}` : `${greetingFor(now, copy)}, ${copy.first}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("text-sm", quiet),
				children: [
					copy.city,
					" · ",
					copy.account
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceBlock, {
				night,
				quiet
			}),
			stage >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetalCard, { night }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, { night }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Month, {
				night,
				quiet
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, { night }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pot, { night })
		]
	});
}
function PhoneBody() {
	const { shown } = useAthar();
	if (shown === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wireframe, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Living, {});
}
function PhoneNav() {
	const { shown, open } = useAthar();
	const copy = useCopy();
	if (shown < 2) return null;
	const night = shown >= 3;
	const items = [
		{
			id: "home",
			label: copy.home,
			icon: House
		},
		{
			id: "pay",
			label: copy.pay,
			icon: ArrowUpRight
		},
		{
			id: "scan",
			label: copy.scan,
			icon: QrCode
		},
		{
			id: "activity",
			label: copy.activity,
			icon: List
		},
		{
			id: "you",
			label: copy.you,
			icon: User
		}
	];
	function onNav(id) {
		const scroller = document.getElementById("athar-scroll");
		if (id === "home") {
			scroller?.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		if (id === "activity") {
			document.getElementById("ledger")?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			return;
		}
		if (shown < 6 && (id === "pay" || id === "scan")) return;
		if (id === "pay") open({
			kind: "pay",
			mode: "pay"
		});
		if (id === "scan") open({ kind: "scan" });
		if (id === "you") open({ kind: "you" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": copy.navLabel,
		className: cn("shrink-0 border-t pb-safe", night ? "border-line bg-ink text-pearl" : "border-ink/15 bg-pearl text-ink"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("px-5 pt-2 text-center text-xs", night ? "text-mist" : "text-ink/70"),
			children: copy.study
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-5",
			children: items.map((item) => {
				const Icon = item.icon;
				const primary = item.id === "scan" && shown >= 6;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex min-h-11 w-full flex-col items-center justify-center gap-1 py-2 text-xs transition-transform duration-150 ease-out active:scale-[0.96]",
					onClick: () => onNav(item.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid size-9 place-items-center rounded-xl", primary && "bg-brass text-ink"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}), item.label]
				}) }, item.id);
			})
		})]
	});
}
function Studio() {
	const { stage, held, setHeld, setStage, lang, toggleLang, shown, open } = useAthar();
	const copy = useCopy();
	const pass = PASSES[stage - 1] ?? PASSES[9];
	const blurb = lang === "ar" ? pass?.blurbAr : pass?.blurbEn;
	const paper = shown < 3;
	(0, import_react.useEffect)(() => {
		const clear = () => setHeld(false);
		window.addEventListener("pointerup", clear);
		window.addEventListener("pointercancel", clear);
		return () => {
			window.removeEventListener("pointerup", clear);
			window.removeEventListener("pointercancel", clear);
		};
	}, [setHeld]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-dvh min-w-0 flex-1 justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-dvh w-full max-w-md flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "shrink-0 border-b border-line bg-ink pt-safe text-pearl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 px-3 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 shrink-0 rounded-full bg-panel px-3 text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
									onClick: () => open({ kind: "brief" }),
									children: copy.brief
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "min-w-0 flex-1 text-sm text-pretty text-mist line-clamp-2",
									"aria-live": "polite",
									children: blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 shrink-0 rounded-full bg-panel px-3 text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
									onClick: toggleLang,
									"aria-label": lang === "en" ? "العربية" : "English",
									children: lang === "en" ? "عربي" : "EN"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "flex gap-1 overflow-x-auto px-3 py-2",
							children: PASSES.map((item) => {
								const selected = item.n === stage;
								const label = lang === "ar" ? item.ar : item.en;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-current": selected ? "step" : void 0,
										className: cn("min-h-11 rounded-full px-3 text-sm tabular-nums transition-transform duration-150 ease-out active:scale-[0.96]", selected ? "bg-brass text-ink" : "bg-panel text-pearl"),
										onClick: () => setStage(item.n),
										children: selected ? `${item.n} ${label}` : item.n
									})
								}, item.n);
							})
						}),
						stage === 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 w-full rounded-full bg-panel text-sm text-pearl transition-transform duration-150 ease-out active:scale-[0.96]",
								"aria-pressed": held,
								onPointerDown: () => setHeld(true),
								children: held ? copy.holding : copy.hold
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sr-only",
							children: blurb
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "athar-scroll",
					className: cn("min-h-0 flex-1 overflow-y-auto", paper ? "bg-pearl text-ink" : "bg-ink text-pearl"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneBody, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneNav, {})
			]
		})
	});
}
function Shell() {
	const { lang } = useAthar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: lang === "ar" ? "rtl" : "ltr",
		lang: lang === "ar" ? "ar" : "en",
		className: "flex h-dvh overflow-hidden bg-ink text-pearl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden h-dvh w-96 shrink-0 overflow-y-auto border-e border-line lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefBody, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlays, {})
		]
	});
}
function AtharApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtharProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {}) });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtharApp, {});
}
//#endregion
export { Home as component };
