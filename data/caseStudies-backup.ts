export type CaseStudyMetric = { label: string; value: string; detail: string }
export type CaseStudyTimelineStep = { title: string; summary: string; detail: string }
export type CaseStudyIconName =
  | "stethoscope"
  | "beef"
  | "clipboardList"
  | "activity"
  | "heartPulse"
  | "pawPrint"
  | "scale"
  | "calculator"
  | "shieldCheck"
  | "home"
  | "draftingCompass"
  | "utensilsCrossed"
  | "coffee"
  | "dumbbell"
  | "sparkles"
  | "carFront"
  | "wrench"
  | "zap"
  | "leaf"

export type CaseStudyAccent =
  | "emerald"
  | "rose"
  | "sky"
  | "teal"
  | "amber"
  | "lime"
  | "purple"
  | "indigo"
  | "cyan"
  | "blue"
  | "slate"
  | "orange"
  | "pink"
  | "red"
  | "green"
  | "yellow"

export type CaseStudy = {
  id: string
  name: string
  icon: CaseStudyIconName
  accent: CaseStudyAccent
  hero: {
    image: string
    badge: string
    tagline: string
    summary: string
  }
  carouselImage?: string
  metrics: {
    baselineLosses: CaseStudyMetric[]
    automationShifts: CaseStudyMetric[]
    measuredResults: CaseStudyMetric[]
  }
  timeline: CaseStudyTimelineStep[]
}
export const caseStudies: CaseStudy[] = [
  // 1. Dentists
  {
    id: "dentists",
    name: "Dentists",
    icon: "stethoscope",
    accent: "emerald",
    carouselImage: "https://via.placeholder.com/900x600/10b981/ffffff?text=Dentists",
    hero: {
      image: "https://via.placeholder.com/1400x800/10b981/ffffff?text=Dentists",
      badge: "Dentist Case Study",
      tagline: "Missed recalls leak profit every week.",
      summary: "A three-location dental group partnered with Wabi-Sabi to stabilise recall cadence."
    },
    metrics: {
      baselineLosses: [
        { label: "Missed appointments per week", value: "8", detail: "Patients slip through manual reminder systems." },
        { label: "Manual follow-ups", value: "45", detail: "Front desk chases confirmations individually." },
        { label: "Idle chair hours", value: "12", detail: "Treatment plans stall without recovery journeys." }
      ],
      automationShifts: [
        { label: "Smart recall", value: "Always-on", detail: "Cadences adapt to booking behavior." },
        { label: "Recovery journeys", value: "Triggered", detail: "Missed appointments enter reactivation sequences." },
        { label: "Two-way messaging", value: "Live", detail: "Patient replies sync to CRM." }
      ],
      measuredResults: [
        { label: "Retention", value: "90%", detail: "Patients stay on cadence." },
        { label: "Hours saved per year", value: "400", detail: "Admin time reinvested in upsells." },
        { label: "Profit reclaimed", value: "R180k", detail: "Predictable recalls keep treatments scheduled." }
      ]
    },
    timeline: [
      { title: "Week 1 — Surface the leaks", summary: "Mapped patient touchpoints.", detail: "Audit covered reminders and treatment follow-through." },
      { title: "Week 3 — Automate the cadence", summary: "Behaviour-based reminders launched.", detail: "Multi-channel flows adapt to confirmation status." },
      { title: "Week 5 — Stabilise operations", summary: "Hygienists received contextual task cards.", detail: "Recovery journeys auto-populate with visit history." },
      { title: "Week 8 — Measure the lift", summary: "Dashboard tracks utilisation and profit.", detail: "Leadership forecasts chair time with confidence." }
    ]
  },
  // 2. Butcheries
  {
    id: "butcheries",
    name: "Butcheries",
    icon: "beef",
    accent: "rose",
    carouselImage: "https://via.placeholder.com/900x600/f43f5e/ffffff?text=Butcheries",
    hero: {
      image: "https://via.placeholder.com/1400x800/f43f5e/ffffff?text=Butcheries",
      badge: "Butchery Case Study",
      tagline: "Spoilage and staffing guesswork erode margins.",
      summary: "Regional butcheries needed predictable prep schedules and waste tracking."
    },
    metrics: {
      baselineLosses: [
        { label: "Spoiled stock per week", value: "45kg", detail: "Manual logs delayed markdown decisions." },
        { label: "Overtime hours", value: "18", detail: "Rosters set from gut feel, not forecasts." },
        { label: "Missed restocks", value: "12%", detail: "Late supplier alerts caused stockouts." }
      ],
      automationShifts: [
        { label: "Sensor alerts", value: "Real-time", detail: "Temperature spikes trigger SMS escalations." },
        { label: "Roster dispatch", value: "Daily", detail: "Teams get shift SMS aligned to demand." },
        { label: "Auto reorders", value: "1-click", detail: "POS velocity emails suppliers automatically." }
      ],
      measuredResults: [
        { label: "Waste reduction", value: "-32%", detail: "Markdowns kick in before expiry." },
        { label: "Labour savings", value: "-14%", detail: "Teams align to production windows." },
        { label: "Margin lift", value: "+11%", detail: "Fast movers stay stocked reliably." }
      ]
    },
    timeline: [
      { title: "Week 1 — Benchmark waste", summary: "Audited production from delivery to counter.", detail: "Documented shrink and restock cadence across sites." },
      { title: "Week 3 — Connect the data", summary: "Linked POS, sensors, and supplier portals.", detail: "Automated alerts notify right team members." },
      { title: "Week 6 — Orchestrate rostering", summary: "Shifts adapt to demand patterns.", detail: "SMS schedules and markdown triggers prevent waste." },
      { title: "Week 8 — Prove the margin", summary: "Dashboards show efficiency and growth.", detail: "Owners see which locations drive profit recovery." }
    ]
  },
  {
    id: "dentists",
    name: "Dentists",
    icon: "stethoscope",
    accent: "emerald",
    carouselImage:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
    hero: {
      image:
        "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1400&q=80",
      badge: "Dentist Case Study",
      tagline: "Missed recalls leak profit every week.",
      summary:
        "A three-location dental group partnered with Wabi-Sabi to stabilise recall cadence, reduce no-shows, and reclaim idle chair time.",
    },
    metrics: {
      baselineLosses: [
        {
          label: "Missed appointments per week",
          value: "8",
          detail: "Reminder spreadsheets let patients slip through, leaving hygienists with open chairs.",
        },
        {
          label: "Manual follow-ups",
          value: "45",
          detail: "Front desk teams chased confirmations and post-ops in individual SMS threads.",
        },
        {
          label: "Idle chair hours",
          value: "12",
          detail: "Treatment plans stalled without structured recovery journeys after cancellations.",
        },
      ],
      automationShifts: [
        {
          label: "Smart recall",
          value: "Always-on",
          detail: "Cadences adapt instantly to confirmed, rescheduled, or missed bookings across SMS and email.",
        },
        {
          label: "Recovery journeys",
          value: "Triggered",
          detail: "Missed appointments automatically enter a multi-touch reactivation sequence with context.",
        },
        {
          label: "Two-way messaging",
          value: "Live",
          detail: "Patient replies sync to the CRM so the front desk never loses the thread.",
        },
      ],
      measuredResults: [
        {
          label: "Retention",
          value: "90%",
          detail: "Active patients stay on cadence with far fewer hygiene lapses.",
        },
        {
          label: "Hours saved per year",
          value: "400",
          detail: "Ops teams reinvest admin time into whitening and perio upsells.",
        },
        {
          label: "Profit reclaimed",
          value: "R180k",
          detail: "Predictable recalls keep high-value treatments on the schedule.",
        },
      ],
    },
    timeline: [
      {
        title: "Week 1 — Surface the leaks",
        summary: "Mapped every patient touchpoint to expose eight drop-off moments.",
        detail:
          "Audit covered reminders, recalls, and treatment follow-through to document exactly where patients ghosted.",
      },
      {
        title: "Week 3 — Automate the cadence",
        summary: "Behaviour-based reminders replaced ad-hoc texting and phone calls.",
        detail: "Launched multi-channel flows that shift tone and timing based on confirmation status and chair value.",
      },
      {
        title: "Week 5 — Stabilise operations",
        summary: "Hygienists received contextual task cards for every high-risk patient.",
        detail:
          "Recovery journeys, balance reminders, and whitening prompts now auto-populate with visit history.",
      },
      {
        title: "Week 8 — Measure the lift",
        summary: "Executive dashboard tracks show rate, utilisation, and reclaimed profit.",
        detail:
          "Leadership can forecast chair time confidently with real-time metrics and cohort comparisons.",
      },
    ],
  },
  {
    id: "butcheries",
    name: "Butcheries",
    icon: "beef",
    accent: "rose",
    carouselImage:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
    hero: {
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=80",
      badge: "Butchery Case Study",
      tagline: "Spoilage and staffing guesswork erode margins.",
      summary:
        "Regional butcheries needed predictable prep schedules and real-time waste tracking to protect margin during seasonal swings.",
    },
    metrics: {
      baselineLosses: [
        {
          label: "Spoiled stock per week",
          value: "45kg",
          detail: "Manual logs delayed markdown decisions and cold-chain interventions.",
        },
        {
          label: "Overtime hours",
          value: "18",
          detail: "Prep rosters were set from gut feel instead of demand forecasts.",
        },
        {
          label: "Missed restocks",
          value: "12%",
          detail: "Suppliers received late alerts so marquee cuts sold out.",
        },
      ],
      automationShifts: [
        {
          label: "Sensor alerts",
          value: "Real-time",
          detail: "Cooler temperature spikes now trigger SMS escalations within minutes.",
        },
        {
          label: "Roster dispatch",
          value: "Daily",
          detail: "Prep teams receive automated shift SMS aligned to projected demand.",
        },
        {
          label: "Auto reorders",
          value: "1-click",
          detail: "POS velocity thresholds email suppliers with consolidated replenishment lists.",
        },
      ],
      measuredResults: [
        {
          label: "Waste reduction",
          value: "-32%",
          detail: "Markdowns and trim strategies kick in before product expires.",
        },
        {
          label: "Labour savings",
          value: "-14%",
          detail: "Overtime drops as teams align to refrigerated production windows.",
        },
        {
          label: "Margin lift",
          value: "+11%",
          detail: "Fast movers stay stocked and wholesale accounts reorder reliably.",
        },
      ],
    },
    timeline: [
      {
        title: "Week 1 — Benchmark waste",
        summary: "Audited production steps from delivery to counter.",
        detail:
          "Documented shrink, prep labour, and restock cadence to prioritise interventions across multi-site operations.",
      },
      {
        title: "Week 3 — Connect the data",
        summary: "Linked POS, cold-room sensors, and supplier portals.",
        detail: "Automated alerts ensure the right team member jumps on temperature or stock issues.",
      },
      {
        title: "Week 6 — Orchestrate rostering",
        summary: "Shifts and markdowns adapt to demand patterns.",
        detail: "Daily SMS schedules and markdown triggers keep counter displays full with minimal waste.",
      },
      {
        title: "Week 8 — Prove the margin",
        summary: "Dashboards show shrink, labour efficiency, and wholesale growth.",
        detail: "Owners know exactly which locations and products contribute most to profit recovery.",
      },
    ],
  },
  {
    id: "physiotherapists",
    name: "Physiotherapists",
    icon: "activity",
    accent: "teal",
    carouselImage:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
    hero: {
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
      badge: "Physio Case Study",
      tagline: "Patients ghost rehab when check-ins are manual.",
      summary:
        "A multi-therapist practice wanted accountability loops for home programs so patients actually completed rehab plans.",
    },
    metrics: {
      baselineLosses: [
        {
          label: "Program drop-off",
          value: "27%",
          detail: "Clients skipped home exercises without structured check-ins.",
        },
        {
          label: "Therapist admin per week",
          value: "9 hrs",
          detail: "Practitioners wrote manual reminder texts after each session.",
        },
        {
          label: "Class no-shows",
          value: "22%",
          detail: "Group rehab lacked waitlists and timely nudges.",
        },
      ],
      automationShifts: [
        {
          label: "Homework app",
          value: "Guided",
          detail: "Patients receive adaptive exercise plans with streak tracking and form videos.",
        },
        {
          label: "Progress reviews",
          value: "Scheduled",
          detail: "Follow-up consults auto-book based on risk scoring and adherence.",
        },
        {
          label: "Smart waitlists",
          value: "Instant",
          detail: "Late cancellations trigger SMS offers to the next patient in queue.",
        },
      ],
      measuredResults: [
        {
          label: "Completion rate",
          value: "+31%",
          detail: "Clients stay engaged through digital accountability loops.",
        },
        {
          label: "Maintenance upsell",
          value: "+18%",
          detail: "Recovered patients transition into performance check-ins.",
        },
        {
          label: "Admin reclaimed",
          value: "7 hrs/wk",
          detail: "Therapists focus on treatment instead of message chasing.",
        },
      ],
    },
    timeline: [
      {
        title: "Week 1 — Trace the journey",
        summary: "Captured every touchpoint from intake to discharge.",
        detail: "Highlighted where momentum dipped between in-person sessions.",
      },
      {
        title: "Week 3 — Launch digital coaching",
        summary: "Introduced adaptive exercise journeys with built-in streaks.",
        detail: "Patients submit quick check-ins that alert therapists when form slips.",
      },
      {
        title: "Week 5 — Orchestrate classes",
        summary: "Waitlists and class rosters update in real time.",
        detail: "Cancellations trigger reassignments and booking nudges automatically.",
      },
      {
        title: "Week 8 — Monitor outcomes",
        summary: "Dashboards show adherence, completion, and revenue per patient.",
        detail: "Clinic leaders adjust staffing and product bundles with confidence.",
      },
    ],
  },
  {
    id: "chiropractors",
    name: "Chiropractors",
    icon: "heartPulse",
    accent: "amber",
    carouselImage:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=900&q=80",
    hero: {
      image:
        "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1400&q=80",
      badge: "Chiropractic Case Study",
      tagline: "Membership care plans lapse without prompts.",
      summary:
        "A wellness-focused chiropractic group needed proactive recall loops and membership upsells to stabilise recurring revenue.",
    },
    metrics: {
      baselineLosses: [
        {
          label: "Lapsed members",
          value: "36%",
          detail: "Clients exited care once acute pain faded because no nurture cadence existed.",
        },
        {
          label: "Manual calls per week",
          value: "28",
          detail: "CSRs phoned each member to rebook maintenance adjustments.",
        },
        {
          label: "Unreconciled packages",
          value: "R90k",
          detail: "Package usage was tracked in spreadsheets separate from billing.",
        },
      ],
      automationShifts: [
        {
          label: "Care journeys",
          value: "Always-on",
          detail: "Members receive cadence-specific reminders based on plan phase.",
        },
        {
          label: "Package reconciliation",
          value: "Nightly",
          detail: "Usage syncs across the CRM so credits and billing stay aligned automatically.",
        },
        {
          label: "Review prompts",
          value: "Triggered",
          detail: "High-satisfaction visits generate review and referral nudges instantly.",
        },
      ],
      measuredResults: [
        {
          label: "Membership retention",
          value: "+24%",
          detail: "Routine care stays on schedule across key cohorts.",
        },
        {
          label: "Admin saved",
          value: "12 hrs/wk",
          detail: "Front desk staff focus on experience instead of rebooking calls.",
        },
        {
          label: "Referrals",
          value: "+18%",
          detail: "Automated review asks feed a growing referral pipeline.",
        },
      ],
    },
    timeline: [
      {
        title: "Week 1 — Audit care plans",
        summary: "Mapped member journeys and package usage to reveal gaps.",
        detail: "Identified where patients lapsed after pain resolved and where billing drifted.",
      },
      {
        title: "Week 3 — Build journeys",
        summary: "Launched wellness cadences tied to care plan stage.",
        detail: "Every stage now has matching reminders, education, and offers.",
      },
      {
        title: "Week 5 — Sync billing",
        summary: "Automated package reconciliation inside the CRM.",
        detail: "Credits, redemptions, and invoices update nightly with zero manual work.",
      },
      {
        title: "Week 8 — Amplify referrals",
        summary: "Review prompts and incentives trigger from sentiment cues.",
        detail: "Satisfied members share feedback instantly, fuelling new patient growth.",
      },
    ],
  },
];