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

export type CaseStudyMetric = {
  label: string
  value: string
  detail: string
}

export type CaseStudyTimelineStep = {
  title: string
  summary: string
  detail: string
}

export type CaseStudyArchitectureNode = {
  title: string
  caption?: string
  detail: string
}

export type CaseStudy = {
  id: string
  name: string
  icon: CaseStudyIconName
  accent: string
  hero: {
    image?: string
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
  architecture?: {
    headline: string
    subheadline: string
    nodes: CaseStudyArchitectureNode[]
  }
  testimonial?: {
    quote: string
    name: string
    role: string
    avatarInitials?: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    id: "dentists",
    name: "1. Dentists",
    icon: "stethoscope",
    accent: "emerald",
    carouselImage: "/images/dentists.jpg",
    hero: {
      image: undefined,
      badge: "Dentist Case Study",
      tagline: "Patients slipping through the cracks cost the practice every week.",
      summary:
        "A three-branch dental group asked Wabi-Sabi to calm things down. Their team was phoning the same patients over and over, yet open slots stayed empty. We helped them tidy the system so every booking sticks and staff breathe easier."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Missed appointments per week",
          value: "8",
          detail:
            "Bookings sat in a single Excel file. If the admin on duty was off sick, no one followed up and chairs stayed open."
        },
        {
          label: "Manual follow-ups",
          value: "45",
          detail:
            "Staff phoned and WhatsApped patients one by one, leaving notes on paper. When the phones got busy, the reminder list simply stopped."
        },
        {
          label: "Empty chair hours",
          value: "12",
          detail:
            "Treatment plans stalled after a missed booking. There was no quick way to get a patient back in, so dentists watched revenue walk out the door."
        }
      ],
      automationShifts: [
        {
          label: "Smart reminders",
          value: "Always-on",
          detail:
            "Automated SMS and email nudges go out at the right time and pause once a patient confirms. No more repeat phone calls."
        },
        {
          label: "Quick comeback plans",
          value: "Triggered",
          detail:
            "If someone misses a slot, the system sends a friendly follow-up within 24 hours and offers new times with one tap."
        },
        {
          label: "Two-way WhatsApp",
          value: "Live",
          detail:
            "Patients reply as they would on WhatsApp; the conversation sits in one dashboard so any staff member can pick it up."
        }
      ],
      measuredResults: [
        {
          label: "Patients kept on track",
          value: "90%",
          detail:
            "Regular cleanings and follow-up visits now stay on the books, so the diary fills up weeks in advance."
        },
        {
          label: "Admin hours freed",
          value: "400",
          detail:
            "The team swapped daily chasing for patient care and upsell chats that bring in extra income."
        },
        {
          label: "Profit back in the practice",
          value: "R180k",
          detail:
            "Three small shifts did the trick: the always-on reminders kept bookings, the 24-hour comeback offer filled gaps, and the daily briefing pushed every open slot to someone on standby. Together they nearly doubled monthly profit across the branches."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Find the leaks",
        summary: "Sat with the front desk and tracked where patients slip away.",
        detail:
          "We listened to calls, opened the spreadsheets, and marked every point where a patient was left hanging."
      },
      {
        title: "Week 3 — Switch on smart reminders",
        summary: "Rolled out automated SMS, email, and WhatsApp sequences.",
        detail:
          "Reminders now change tone on their own, stop after a yes, and alert the team only when someone ignores three nudges."
      },
      {
        title: "Week 5 — Give staff a clear list",
        summary: "Introduced a morning briefing that shows who needs help.",
        detail:
          "Everyone sees the same dashboard: who confirmed, who needs a quick call, and which slots opened overnight."
      },
      {
        title: "Week 8 — Count the gains",
        summary: "Showed the partners the new revenue and calmer workload.",
        detail:
          "Reports now track chair use, patient follow-through, and staff time. Decisions on hiring and specials are made with clear numbers."
      }
    ],
    architecture: {
      headline: "Recall orchestration that closes every gap",
      subheadline: "Data, cadences, and human intervention sync in one loop so no patient slips through the system.",
      nodes: [
        {
          title: "Data sync mesh",
          caption: "Signals",
          detail: "Practice management, booking engine, and SMS replies stream into Wabi-Sabi every 15 minutes. Missed confirmations trigger risk flags instantly."
        },
        {
          title: "Adaptive recall engine",
          caption: "Automation",
          detail: "Smart journeys branch on patient response, rescheduling automatically or routing to human follow-up when high-risk indicators appear."
        },
        {
          title: "Ops cockpit",
          caption: "Humans",
          detail: "Front desk dashboards surface escalations, chair utilisation, and recovery actions so the team intervenes with context, not guesswork."
        }
      ]
    },
    testimonial: {
      quote: "Wabi-Sabi helped us spot and close patient gaps the same week. Our team finally works from one playbook instead of 12 inboxes.",
      name: "Dr. Naledi Khumalo",
      role: "Clinical Director, Bloom Dental Group",
      avatarInitials: "NK"
    }
  },
  {
    id: "butcheries",
    name: "2. Butcheries",
    icon: "beef",
    accent: "rose",
    carouselImage: "/images/butcheries.jpg",
    hero: {
      image: undefined,
      badge: "Butchery Case Study",
      tagline: "Spoiled meat and guesswork shifts drained weekly takings.",
      summary:
        "A family group of butcheries asked Wabi-Sabi to help them stop throwing profit into the bin. Orders were placed on gut feel, staff rosters were scribbled on paper, and cold rooms had no early warning system. We put simple guardrails in place so every cut is sold fresh and each shift knows exactly what to prep."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Spoiled stock per week",
          value: "45kg",
          detail: "Temperatures were checked once a day on a clipboard. If a fridge spiked overnight, staff only spotted it when the meat had already turned."
        },
        {
          label: "Overtime hours",
          value: "18",
          detail: "Weekend prep was planned by guesswork, so teams either idled or worked double shifts to catch up."
        },
        {
          label: "Missed restocks",
          value: "12%",
          detail: "Suppliers only heard about low stock when someone noticed an empty tray on the shop floor."
        }
      ],
      automationShifts: [
        {
          label: "Sensor alerts",
          value: "Real-time",
          detail: "Cold rooms now ping the manager the moment the temperature creeps up, so stock moves to backup storage immediately."
        },
        {
          label: "Roster dispatch",
          value: "Daily",
          detail: "Sales data sets the prep plan each night and SMS rosters go out automatically to the right butchers."
        },
        {
          label: "Auto reorders",
          value: "1-click",
          detail: "Fast-moving cuts trigger supplier emails before shelves run dry."
        }
      ],
      measuredResults: [
        {
          label: "Waste reduction",
          value: "-32%",
          detail: "Early alerts and planned markdowns move stock before it spoils."
        },
        {
          label: "Labour savings",
          value: "-14%",
          detail: "Teams arrive only when production is needed, cutting out overtime while keeping counters full."
        },
        {
          label: "Rand uplift",
          value: "+11%",
          detail: "The three shifts above keep shelves stocked, waste low, and daily profit climbing."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Walk the cold rooms",
        summary: "Counted every loss from delivery to display fridge.",
        detail: "We shadowed the team, noted every manual check, and pulled sales data to see where waste piled up."
      },
      {
        title: "Week 3 — Wire up alerts",
        summary: "Linked sensors, POS, and supplier emails.",
        detail: "Any temperature spike or stock-out now sends the right person a heads-up within minutes."
      },
      {
        title: "Week 6 — Steady the roster",
        summary: "Nightly SMS rosters went live.",
        detail: "Prep lists adjust to demand so butchers know exactly what to portion when they clock in."
      },
      {
        title: "Week 8 — Count the win",
        summary: "Owners saw the waste curve fall and profit rise.",
        detail: "Dashboards track kilos saved, labour hours, and cash uplift across all branches."
      }
    ]
  },
  {
    id: "veterinarians",
    name: "3. Veterinarians",
    icon: "pawPrint",
    accent: "amber",
    carouselImage: "/images/Veterinarians.JPG",
    hero: {
      image: undefined,
      badge: "Veterinary Case Study",
      tagline: "Missed boosters left pets at risk and revenue on the table.",
      summary:
        "A busy veterinary clinic called Wabi-Sabi after losing track of hundreds of pet health plans. Nurses phoned owners manually, reminders lived on sticky notes, and add-on care slipped through the cracks. We stitched everything together so every furry patient stays on schedule and the team works calmly from one dashboard."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Overdue vaccines",
          value: "29%",
          detail: "Owners only got a reminder if a nurse remembered to call between consults."
        },
        {
          label: "Phone chases per week",
          value: "35",
          detail: "The team dialled each reminder by hand, often repeating the same conversation twice."
        },
        {
          label: "Lost add-on revenue",
          value: "R60k/qtr",
          detail: "Wellness bundles were sold piecemeal, so clients forgot tick, dental, and nutrition follow-ups."
        }
      ],
      automationShifts: [
        {
          label: "Pet profiles",
          value: "Unified",
          detail: "Each pet now has a digital card with boosters, meds, and next steps lined up automatically."
        },
        {
          label: "Care plans",
          value: "Auto-renew",
          detail: "Owners receive an easy yes/no prompt to renew packages—no more silent lapses."
        },
        {
          label: "Two-way chat",
          value: "Live",
          detail: "WhatsApp-style replies let owners reschedule or ask questions without a phone call."
        }
      ],
      measuredResults: [
        {
          label: "Pets on track",
          value: "+33%",
          detail: "Automated nudges keep boosters, deworming, and check-ups up to date."
        },
        {
          label: "Add-on revenue",
          value: "+19%",
          detail: "Bundles renew smoothly, so owners keep buying the full wellness package."
        },
        {
          label: "Nurse time back",
          value: "8 hrs/week",
          detail: "Calls dropped sharply, freeing the team to focus on in-clinic care."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Listen to the chaos",
        summary: "Mapped every call, sticky note, and spreadsheet.",
        detail: "We tagged where owners slipped off the radar and which staff members were stuck chasing."
      },
      {
        title: "Week 3 — Switch on reminders",
        summary: "SMS and email journeys tailored to each pet went live.",
        detail: "The system escalates to WhatsApp if an owner ignores the first two nudges."
      },
      {
        title: "Week 5 — Bundle the care",
        summary: "Auto-renewal prompts went out for wellness plans.",
        detail: "Owners approve with one tap and a receipt lands in their inbox instantly."
      },
      {
        title: "Week 8 — Show the lift",
        summary: "Partners saw the numbers improve in real time.",
        detail: "Dashboards now display plan adherence, add-on revenue, and time saved weekly."
      }
    ]
  },
  {
    id: "lawyers",
    name: "4. Lawyers",
    icon: "scale",
    accent: "blue",
    carouselImage: "/images/lawyers.jpg",
    hero: {
      image: undefined,
      badge: "Legal Practice Case Study",
      tagline: "Prospects waited while partners typed admin emails.",
      summary:
        "A corporate law firm asked Wabi-Sabi to sort out a painful intake mess. Leads sat in inboxes for days, clients phoned for updates, and partners spent late nights forwarding emails. We rebuilt the flow so every new matter moves the same day and clients always know what’s happening."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Leads left hanging",
          value: "18",
          detail: "Potential clients waited up to a week for a simple consultation slot and walked away."
        },
        {
          label: "Partner admin hours",
          value: "22",
          detail: "Senior lawyers typed updates and chased documents instead of billing."
        },
        {
          label: "Status emails per week",
          value: "60",
          detail: "Clients spammed the team for progress because there was no shared view of the matter."
        }
      ],
      automationShifts: [
        {
          label: "Client portal",
          value: "Self-serve",
          detail: "New matters unlock a secure page with documents, fees, and next steps laid out clearly."
        },
        {
          label: "Smart task routing",
          value: "Automated",
          detail: "Intake responses push work to the right attorney or paralegal without partner intervention."
        },
        {
          label: "Plain-language updates",
          value: "Scheduled",
          detail: "Clients receive templated milestones automatically, so they never wonder where things stand."
        }
      ],
      measuredResults: [
        {
          label: "Prospects signed",
          value: "+19%",
          detail: "Every lead gets a response within 24 hours, so fewer escape to competitors."
        },
        {
          label: "Billable focus",
          value: "+11%",
          detail: "Partners now spend their billable time on argument and advice, not inbox triage."
        },
        {
          label: "Client trust",
          value: "+24 NPS",
          detail: "Regular updates calm anxious clients and spark more referrals."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Sit with intake",
        summary: "Shadowed reception and partners to watch matters stall.",
        detail: "We traced every email chain and spreadsheet to see exactly where leads died."
      },
      {
        title: "Week 3 — Open the portal",
        summary: "Self-service onboarding went live for new matters.",
        detail: "Clients now upload files, sign mandates, and pay deposits in one flow."
      },
      {
        title: "Week 5 — Route the work",
        summary: "Automated assignments replaced manual juggling.",
        detail: "Tasks now land with the correct attorney and paralegal instantly."
      },
      {
        title: "Week 8 — Track the uplift",
        summary: "Partners saw live dashboards showing conversion and billable time.",
        detail: "It’s now easy to plan staffing and pricing with clear numbers."
      }
    ]
  },
  {
    id: "accountants",
    name: "5. Accountants",
    icon: "calculator",
    accent: "green",
    carouselImage: "/images/accountants.jpg",
    hero: {
      image: undefined, // "https://via.placeholder.com/1400x800/22c55e/ffffff?text=Accountants",
      badge: "Accounting Firm Case Study",
      tagline: "Missing paperwork stole hours and wrote off revenue.",
      summary:
        "A mid-sized accounting firm asked Wabi-Sabi to calm the admin storm. Staff spent nights chasing bank statements, partners wrote off time, and onboarding dragged for weeks. We put tidy digital flows in place so clients send documents on time and the team bills the hours that matter."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Chase emails per week",
          value: "70",
          detail: "Teams sent endless follow-ups for SARS files and bank feeds; clients replied days later."
        },
        {
          label: "Onboarding hours",
          value: "3.5",
          detail: "Each new client meant copying data from PDFs into spreadsheets before work could start."
        },
        {
          label: "Annual write-offs",
          value: "R300k",
          detail: "Partners discounted invoices to cover the admin slog."
        }
      ],
      automationShifts: [
        {
          label: "Client portal",
          value: "Always open",
          detail: "Clients receive a checklist with due dates; uploads and signatures land straight in the file."
        },
        {
          label: "Workflow templates",
          value: "Standardised",
          detail: "Tax, payroll, and audit jobs trigger step-by-step tasks with reminders for the right team member."
        },
        {
          label: "Billing sync",
          value: "Real-time",
          detail: "Time entries now sync to invoices automatically, so nothing gets lost."
        }
      ],
      measuredResults: [
        {
          label: "Write-offs slashed",
          value: "-80%",
          detail: "With documents in on time, partners finally bill the hours they work."
        },
        {
          label: "Utilisation up",
          value: "+14%",
          detail: "Accountants now spend the bulk of their day on advisory and review, not data entry."
        },
        {
          label: "Clients delighted",
          value: "+18 NPS",
          detail: "Clear instructions and fewer emails keep business owners coming back."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Count the admin",
        summary: "Shadowed the team through every chase mail and spreadsheet.",
        detail: "We mapped where files got stuck and which steps chewed unbillable time."
      },
      {
        title: "Week 3 — Launch the portal",
        summary: "Clients received branded checklists with upload links.",
        detail: "Automated reminders now nudge them until every document is in."
      },
      {
        title: "Week 5 — Lock in the workflow",
        summary: "Templates triggered tasks for tax, payroll, and audit jobs.",
        detail: "Junior staff follow the same playbook, so nothing gets missed."
      },
      {
        title: "Week 8 — Show the pay-off",
        summary: "Partners review dashboards tracking utilisation and write-offs.",
        detail: "Decisions on hiring and pricing now rest on clean numbers."
      }
    ]
  },
  {
    id: "funeral-services",
    name: "6. Funeral Services",
    icon: "heartPulse",
    accent: "slate",
    carouselImage: "/images/funeral-services.jpg",
    hero: {
      image: undefined,
      badge: "Funeral Service Case Study",
      tagline: "Families needed calm guidance during difficult moments.",
      summary:
        "Gift Funeral Services asked Wabi-Sabi to bring dignity to their admin chaos. Families called repeatedly for updates, paperwork sat in inboxes, and staff juggled arrangements manually. We built a compassionate system that keeps families informed and lets the team focus on care."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Family update calls",
          value: "45/week",
          detail: "Families phoned repeatedly asking where arrangements stood, pulling staff away from care."
        },
        {
          label: "Paperwork delays",
          value: "3 days",
          detail: "Documents sat in email chains while families waited anxiously for next steps."
        },
        {
          label: "Staff overtime",
          value: "12 hrs/week",
          detail: "Coordinators worked late manually tracking arrangements across multiple systems."
        }
      ],
      automationShifts: [
        {
          label: "Family portal",
          value: "24/7 access",
          detail: "Families see arrangement progress, documents, and next steps in one secure place."
        },
        {
          label: "Gentle reminders",
          value: "Automated",
          detail: "Compassionate SMS and email updates keep families informed without overwhelming them."
        },
        {
          label: "Document flow",
          value: "Streamlined",
          detail: "Paperwork routes automatically to the right person with clear deadlines."
        }
      ],
      measuredResults: [
        {
          label: "Family calls reduced",
          value: "-68%",
          detail: "Proactive updates mean families feel informed and supported throughout."
        },
        {
          label: "Arrangement time",
          value: "-40%",
          detail: "Automated workflows let staff complete arrangements faster with fewer errors."
        },
        {
          label: "Staff wellbeing",
          value: "+35%",
          detail: "Team spends time providing compassionate care instead of chasing paperwork."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Walk with families",
        summary: "Shadowed staff through every arrangement and family interaction.",
        detail: "We mapped where families felt lost and where paperwork stalled."
      },
      {
        title: "Week 3 — Launch family portal",
        summary: "Families received secure access to arrangement progress.",
        detail: "Updates, documents, and next steps now visible 24/7 with gentle notifications."
      },
      {
        title: "Week 5 — Streamline workflows",
        summary: "Automated document routing and task assignments went live.",
        detail: "Staff see exactly what needs attention each morning with clear priorities."
      },
      {
        title: "Week 8 — Measure the care",
        summary: "Directors review family satisfaction and staff wellbeing metrics.",
        detail: "Decisions on staffing and services now guided by compassionate data."
      }
    ]
  },
  {
    id: "chiropractors",
    name: "7. Chiropractors",
    icon: "heartPulse",
    accent: "purple",
    carouselImage: "/images/Chiropractors.jpg",
    hero: {
      image: undefined, // "https://via.placeholder.com/1400x800/8b5cf6/ffffff?text=Chiropractors",
      badge: "Chiro Case Study",
      tagline: "Membership care plans lapse without prompts.",
      summary: "A wellness-focused chiropractic clinic needed automated care journeys."
    },
    metrics: {
      baselineLosses: [
        { label: "Lapsed members", value: "36%", detail: "Care plans expired without renewal prompts." },
        { label: "Manual calls per week", value: "28", detail: "Front desk chased package balances by phone." },
        { label: "Unreconciled packages", value: "R90k", detail: "Credits sat in spreadsheets instead of billing system." }
      ],
      automationShifts: [
        { label: "Care journeys", value: "Always-on", detail: "Members receive tailored wellness content based on visit history." },
        { label: "Package sync", value: "Nightly", detail: "Credits and balances reconcile automatically between POS and CRM." },
        { label: "Review nudges", value: "Triggered", detail: "Satisfied patients get prompted to leave reviews at optimal moments." }
      ],
      measuredResults: [
        { label: "Retention lift", value: "+24%", detail: "Members stay engaged with personalised wellness journeys." },
        { label: "Admin time saved", value: "12 hrs", detail: "Front desk focuses on patient care instead of chasing balances." },
        { label: "Referral increase", value: "+18%", detail: "Happy patients share reviews and refer friends automatically." }
      ]
    },
    timeline: [
      { title: "Week 1 — Audit member journeys", summary: "Mapped care plan lifecycles and renewal patterns.", detail: "Identified where members lapsed and which touchpoints drove retention." },
      { title: "Week 3 — Automate care flows", summary: "Members entered personalised wellness journeys.", detail: "Tailored content and appointment reminders keep members engaged." },
      { title: "Week 5 — Sync billing", summary: "Automated package reconciliation inside the CRM.", detail: "Credits, redemptions, and invoices update nightly with zero manual work." },
      { title: "Week 8 — Amplify referrals", summary: "Review prompts and incentives trigger from sentiment cues.", detail: "Satisfied members share feedback instantly, fuelling new patient growth." }
    ]
  },
  {
    id: "restaurants",
    name: "8. Restaurants",
    icon: "utensilsCrossed",
    accent: "orange",
    carouselImage: "/images/restaurants.jpg",
    hero: {
      image: undefined, // "https://via.placeholder.com/1400x800/ea580c/ffffff?text=Restaurants",
      badge: "Restaurant Case Study",
      tagline: "No-shows kill table turnover.",
      summary: "A fine dining restaurant needed reservation management and waitlist automation."
    },
    metrics: {
      baselineLosses: [
        { label: "No-show rate", value: "18%", detail: "Empty tables during peak hours hurt revenue." },
        { label: "Manual calls per day", value: "25", detail: "Staff confirmed reservations individually by phone." },
        { label: "Lost covers per week", value: "45", detail: "Waitlist management was chaotic and manual." }
      ],
      automationShifts: [
        { label: "Smart confirmations", value: "Automated", detail: "SMS and email reminders with one-click confirmation." },
        { label: "Dynamic waitlist", value: "Real-time", detail: "Cancellations instantly notify next guests in queue." },
        { label: "Guest preferences", value: "Tracked", detail: "Dietary needs and seating preferences stored automatically." }
      ],
      measuredResults: [
        { label: "No-show reduction", value: "-65%", detail: "Automated confirmations dramatically improve show rates." },
        { label: "Table utilisation", value: "+22%", detail: "Waitlist fills cancellations within minutes." },
        { label: "Staff time saved", value: "15 hrs", detail: "Less time on phone, more focus on service." }
      ]
    },
    timeline: [
      { title: "Week 1 — Map reservation flow", summary: "Tracked booking to seating journey.", detail: "Identified friction in confirmation and waitlist processes." },
      { title: "Week 3 — Automate confirmations", summary: "Guests receive smart reminder sequences.", detail: "SMS and email confirmations reduce no-shows immediately." },
      { title: "Week 5 — Dynamic waitlist", summary: "Cancellations trigger instant guest notifications.", detail: "Tables fill faster with automated waitlist management." },
      { title: "Week 8 — Personalise experience", summary: "Guest preferences drive seating and service.", detail: "Repeat diners enjoy tailored experiences automatically." }
    ]
  },
  {
    id: "gyms",
    name: "9. Gyms",
    icon: "dumbbell",
    accent: "red",
    carouselImage: "/images/gyms.jpg",
    hero: {
      image: undefined, // "https://via.placeholder.com/1400x800/dc2626/ffffff?text=Gyms",
      badge: "Gym Case Study",
      tagline: "Members ghost after the first month.",
      summary: "A boutique fitness studio needed member retention and class booking automation."
    },
    metrics: {
      baselineLosses: [
        { label: "Member churn", value: "35%", detail: "New members disappeared without engagement tracking." },
        { label: "Class no-shows", value: "28%", detail: "Bookings without confirmations left empty spots." },
        { label: "PT conversion", value: "12%", detail: "Personal training upsells happened randomly." }
      ],
      automationShifts: [
        { label: "Onboarding journey", value: "Guided", detail: "New members receive progressive workout plans and check-ins." },
        { label: "Class reminders", value: "Smart", detail: "Booking confirmations and waitlist management automated." },
        { label: "PT triggers", value: "Behavioural", detail: "Struggling members get personal training offers automatically." }
      ],
      measuredResults: [
        { label: "Retention increase", value: "+41%", detail: "Guided onboarding keeps members engaged longer." },
        { label: "Class utilisation", value: "+19%", detail: "Automated reminders and waitlists fill classes." },
        { label: "PT revenue", value: "+67%", detail: "Behavioural triggers convert more members to personal training." }
      ]
    },
    timeline: [
      { title: "Week 1 — Map member journey", summary: "Tracked engagement from signup to churn.", detail: "Identified critical drop-off points in first 90 days." },
      { title: "Week 3 — Launch onboarding", summary: "New members enter guided fitness journeys.", detail: "Progressive workouts and check-ins improve early engagement." },
      { title: "Week 5 — Automate bookings", summary: "Class confirmations and waitlists go live.", detail: "Members get reminders and cancellations fill instantly." },
      { title: "Week 8 — Trigger upsells", summary: "Behavioural cues drive personal training offers.", detail: "Struggling members receive timely intervention and support." }
    ]
  },
  {
    id: "salons",
    name: "10. Salons",
    icon: "sparkles",
    accent: "pink",
    carouselImage: "/images/salons.jpg",
    hero: {
      image: undefined, // "https://via.placeholder.com/1400x800/ec4899/ffffff?text=Salons",
      badge: "Salon Case Study",
      tagline: "Rebooking rates drop without follow-up.",
      summary: "A high-end salon needed automated rebooking and product recommendation systems."
    },
    metrics: {
      baselineLosses: [
        { label: "Rebooking rate", value: "42%", detail: "Clients didn't schedule next appointments consistently." },
        { label: "Product sales", value: "R45k/mo", detail: "Stylists forgot to recommend products during service." },
        { label: "Reminder calls", value: "40/day", detail: "Reception spent hours confirming appointments." }
      ],
      automationShifts: [
        { label: "Auto rebooking", value: "Service-end", detail: "Clients receive booking links immediately after appointments." },
        { label: "Product triggers", value: "Service-based", detail: "Stylists get prompted for relevant product recommendations." },
        { label: "Smart reminders", value: "Personalised", detail: "Confirmation sequences adapt to client preferences." }
      ],
      measuredResults: [
        { label: "Rebooking increase", value: "+58%", detail: "Immediate booking prompts capture intent while fresh." },
        { label: "Product revenue", value: "+73%", detail: "Triggered recommendations boost retail sales significantly." },
        { label: "Reception efficiency", value: "+12 hrs", detail: "Automated confirmations free staff for client service." }
      ]
    },
    timeline: [
      { title: "Week 1 — Map client lifecycle", summary: "Tracked booking patterns and product purchases.", detail: "Identified optimal moments for rebooking and retail prompts." },
      { title: "Week 3 — Automate rebooking", summary: "Clients get booking links post-service.", detail: "Immediate prompts capture rebooking intent effectively." },
      { title: "Week 5 — Trigger product sales", summary: "Stylists receive service-based product prompts.", detail: "Relevant recommendations increase retail conversion rates." },
      { title: "Week 8 — Personalise communications", summary: "Client preferences drive reminder sequences.", detail: "Tailored messaging improves engagement and satisfaction." }
    ]
  },
  {
    id: "insurance-brokers",
    name: "11. Insurance Brokers",
    icon: "shieldCheck",
    accent: "blue",
    carouselImage: "/images/Insurance-Brokers.jpg",
    hero: {
      image: undefined,
      badge: "Insurance Broker Case Study",
      tagline: "Policy renewals slip through manual tracking.",
      summary: "An insurance brokerage needed automated client renewal management and claims follow-up."
    },
    metrics: {
      baselineLosses: [
        { label: "Missed renewals", value: "23%", detail: "Policies lapsed without timely renewal reminders." },
        { label: "Claims follow-up calls", value: "40/day", detail: "Staff manually tracked claim status for anxious clients." },
        { label: "Quote abandonment", value: "31%", detail: "Prospects didn't complete applications without follow-up." }
      ],
      automationShifts: [
        { label: "Renewal alerts", value: "90-day cascade", detail: "Clients receive progressive renewal reminders with one-click options." },
        { label: "Claims tracking", value: "Real-time", detail: "Automated updates keep clients informed of claim progress." },
        { label: "Quote nurturing", value: "Triggered", detail: "Abandoned quotes enter follow-up sequences with incentives." }
      ],
      measuredResults: [
        { label: "Renewal retention", value: "+34%", detail: "Automated reminders prevent policy lapses significantly." },
        { label: "Client satisfaction", value: "+28 NPS", detail: "Proactive communication improves client relationships." },
        { label: "Quote conversion", value: "+19%", detail: "Follow-up sequences convert more prospects to policies." }
      ]
    },
    timeline: [
      { title: "Week 1 — Map renewal cycles", summary: "Tracked policy lifecycles and lapse patterns.", detail: "Identified optimal timing for renewal communications." },
      { title: "Week 3 — Automate renewals", summary: "Clients receive progressive renewal reminders.", detail: "90-60-30 day sequences with easy renewal options." },
      { title: "Week 5 — Claims automation", summary: "Real-time claim updates go live.", detail: "Clients get automatic progress notifications." },
      { title: "Week 8 — Measure retention", summary: "Dashboard tracks renewals and satisfaction.", detail: "Brokers see improved retention and client happiness." }
    ]
  },
  {
    id: "real-estate-agents",
    name: "12. Real Estate Agents",
    icon: "home",
    accent: "green",
    carouselImage: "/images/Real-Estate-Agents.jpg",
    hero: {
      image: undefined,
      badge: "Real Estate Case Study",
      tagline: "Leads cooled while agents juggled endless spreadsheets.",
      summary:
        "A coastal property group asked Wabi-Sabi to fix their pipeline. New enquiries sat in Google Sheets, buyers went quiet after viewings, and happy sellers were never asked for referrals. We created one steady rhythm so every buyer hears back fast and every seller knows exactly what’s next."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Cold leads per month",
          value: "67",
          detail: "Buyers enquired once and then heard nothing because agents were out on the road."
        },
        {
          label: "Manual check-ins",
          value: "85/week",
          detail: "Agents phoned clients one by one for offer status and contract milestones."
        },
        {
          label: "Referral requests",
          value: "12%",
          detail: "Thrilled sellers were never reminded to refer friends because the team was already behind."
        }
      ],
      automationShifts: [
        {
          label: "Lead nurturing",
          value: "Automated",
          detail: "Fresh buyers now get market news, listings, and viewing invites without the agent clicking send."
        },
        {
          label: "Progress updates",
          value: "Milestone-based",
          detail: "Each deal stage triggers a plain-language update email and WhatsApp to buyer and seller."
        },
        {
          label: "Referral prompts",
          value: "Post-closing",
          detail: "Happy clients receive a gentle nudge to refer friends the moment the champagne pops."
        }
      ],
      measuredResults: [
        {
          label: "Hot leads secured",
          value: "+41%",
          detail: "Speedy follow-up keeps serious buyers with the agency."
        },
        {
          label: "Clients in the loop",
          value: "+22 NPS",
          detail: "Clear milestone messages remove the anxious phone calls."
        },
        {
          label: "Referrals landed",
          value: "+156%",
          detail: "Timely prompts turn delighted sellers into repeat deal sources."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Walk the pipeline",
        summary: "Shadowed agents from fresh lead to handover.",
        detail: "We captured every spreadsheet, WhatsApp group, and handoff where momentum died."
      },
      {
        title: "Week 3 — Switch on nurturing",
        summary: "Automated buyer journeys went live.",
        detail: "New enquiries now enjoy property tips, suburb data, and viewing invites automatically."
      },
      {
        title: "Week 5 — Automate milestones",
        summary: "Deal stages trigger updates for everyone involved.",
        detail: "No more guesswork—each step sends clear next actions to attorneys, buyers, and sellers."
      },
      {
        title: "Week 8 — Celebrate and refer",
        summary: "Post-sale prompts drive reviews and referrals.",
        detail: "Agents now track which past clients feed the pipeline every month."
      }
    ]
  },
  {
    id: "architects",
    name: "13. Architects",
    icon: "draftingCompass",
    accent: "purple",
    carouselImage: "/images/Architects.jpg",
    hero: {
      image: undefined,
      badge: "Architecture Firm Case Study",
      tagline: "Project updates scatter across email threads.",
      summary: "An architecture firm needed centralized project communication and milestone tracking."
    },
    metrics: {
      baselineLosses: [
        { label: "Client confusion calls", value: "28/week", detail: "Clients called for project status updates constantly." },
        { label: "Revision delays", value: "4.2 days avg", detail: "Feedback loops took too long without structured processes." },
        { label: "Scope creep", value: "18%", detail: "Changes weren't documented properly, causing budget overruns." }
      ],
      automationShifts: [
        { label: "Project portals", value: "Client access", detail: "Clients view progress, drawings, and timelines in real-time." },
        { label: "Milestone updates", value: "Automated", detail: "Progress notifications sent at key project phases." },
        { label: "Change tracking", value: "Documented", detail: "All scope changes logged with automatic approval workflows." }
      ],
      measuredResults: [
        { label: "Client calls reduced", value: "-71%", detail: "Self-service portals eliminate most status inquiries." },
        { label: "Revision speed", value: "+38%", detail: "Structured feedback loops accelerate decision-making." },
        { label: "Scope control", value: "+29%", detail: "Better documentation prevents unauthorized changes." }
      ]
    },
    timeline: [
      { title: "Week 1 — Map project flow", summary: "Documented design process and client touchpoints.", detail: "Identified communication bottlenecks and revision delays." },
      { title: "Week 3 — Launch portals", summary: "Clients gain access to project dashboards.", detail: "Real-time progress visibility reduces status calls." },
      { title: "Week 5 — Automate milestones", summary: "Progress notifications activate.", detail: "Clients receive updates at key design phases." },
      { title: "Week 8 — Change management", summary: "Scope tracking system goes live.", detail: "All changes documented with approval workflows." }
    ]
  },
  {
    id: "cafes",
    name: "14. Cafés",
    icon: "coffee",
    accent: "amber",
    carouselImage: "/images/Cafés.jpg",
    hero: {
      image: undefined,
      badge: "Café Case Study",
      tagline: "Paper stamp cards and fridge miscounts cost daily sales.",
      summary:
        "An inner-city café group brought in Wabi-Sabi after too many regulars lost their free-coffee cards and morning rush lines crawled. Ordering happened on gut feel, so milk spoiled and croissants ran out. We layered small automations that keep regulars loyal and the counter stocked without waste."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Lost loyalty customers",
          value: "43%",
          detail: "Paper cards vanished in handbags, so customers forgot their rewards and drifted away."
        },
        {
          label: "Spoiled stock",
          value: "R12k/month",
          detail: "Managers guessed milk and pastry orders, leading to bins full of expired stock."
        },
        {
          label: "Peak wait times",
          value: "8.5 min avg",
          detail: "Queue chaos during the 7am rush cost quick commuters their morning fix."
        }
      ],
      automationShifts: [
        {
          label: "Digital loyalty",
          value: "App-based",
          detail: "Regulars now earn points automatically and see rewards on their phones."
        },
        {
          label: "Predictive ordering",
          value: "Daily",
          detail: "Sales data suggests the milk and pastry order before close each night."
        },
        {
          label: "Skip-the-line orders",
          value: "Live",
          detail: "Customers tap to pre-pay and collect from a dedicated counter."
        }
      ],
      measuredResults: [
        {
          label: "Loyalty comeback",
          value: "+67%",
          detail: "Digital stamps keep regulars returning for their free drink."
        },
        {
          label: "Waste cut down",
          value: "-34%",
          detail: "Automated orders mean milk and pastry stock match real demand."
        },
        {
          label: "Rush-hour speed",
          value: "+28%",
          detail: "Pre-orders clear the queue so the baristas keep pouring."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Taste the operations",
        summary: "Sat in-store from open to close and tracked orders, queues, and waste bins.",
        detail: "We documented where stock spoiled and where regulars slipped away."
      },
      {
        title: "Week 3 — Launch loyalty app",
        summary: "Digital rewards rolled out with QR signage.",
        detail: "Customers now scan once and their points follow them to any branch."
      },
      {
        title: "Week 5 — Automate orders",
        summary: "Predictive ordering prompts go to managers nightly.",
        detail: "No more guesswork; the system suggests exact quantities."
      },
      {
        title: "Week 8 — Speed the queue",
        summary: "Mobile pre-ordering launched for the morning rush.",
        detail: "Counter staff now prep drinks before commuters arrive."
      }
    ]
  },
  {
    id: "auto-repair-shops",
    name: "15. Auto Repair Shops",
    icon: "wrench",
    accent: "orange",
    carouselImage: "/images/Auto-Repair-Shops.jpg",
    hero: {
      image: undefined,
      badge: "Auto Repair Case Study",
      tagline: "Service reminders get lost in paper files.",
      summary: "An auto repair shop needed automated service reminders and parts inventory management."
    },
    metrics: {
      baselineLosses: [
        { label: "Missed service appointments", value: "34%", detail: "Customers forgot scheduled maintenance without reminders." },
        { label: "Parts delays", value: "2.3 days avg", detail: "Manual inventory tracking caused frequent stockouts." },
        { label: "Estimate follow-ups", value: "19%", detail: "Customers didn't return for approved repairs without follow-up." }
      ],
      automationShifts: [
        { label: "Service reminders", value: "Mileage-based", detail: "Customers receive maintenance alerts based on service history." },
        { label: "Parts automation", value: "Auto-reorder", detail: "Inventory levels trigger automatic supplier orders." },
        { label: "Estimate nurturing", value: "Follow-up sequences", detail: "Approved estimates enter reminder campaigns." }
      ],
      measuredResults: [
        { label: "Service retention", value: "+52%", detail: "Automated reminders bring customers back for maintenance." },
        { label: "Parts availability", value: "+89%", detail: "Auto-reordering eliminates most stockout delays." },
        { label: "Estimate conversion", value: "+31%", detail: "Follow-up sequences convert more estimates to jobs." }
      ]
    },
    timeline: [
      { title: "Week 1 — Map service cycles", summary: "Tracked customer maintenance patterns and parts usage.", detail: "Identified optimal reminder timing and inventory needs." },
      { title: "Week 3 — Launch reminders", summary: "Mileage-based service alerts activate.", detail: "Customers receive maintenance reminders automatically." },
      { title: "Week 5 — Automate inventory", summary: "Parts reordering system goes live.", detail: "Stock levels trigger automatic supplier orders." },
      { title: "Week 8 — Estimate follow-up", summary: "Approved estimate nurturing begins.", detail: "Customers receive reminders about pending repairs." }
    ]
  },
  {
    id: "plumbers",
    name: "16. Plumbers",
    icon: "wrench",
    accent: "blue",
    carouselImage: "/images/Plumbers.jpg",
    hero: {
      image: undefined,
      badge: "Plumbing Service Case Study",
      tagline: "After-hours bursts went unanswered and jobs repeated.",
      summary:
        "A Gauteng plumbing crew asked Wabi-Sabi to help them keep up. Emergencies rang off the hook after 6pm, planned maintenance never happened, and the same geysers burst twice. We lined up smart routing and gentle reminders so the team catches every call and clients prevent the next leak."
    },
    metrics: {
      baselineLosses: [
        {
          label: "After-hours missed calls",
          value: "67",
          detail: "Phones diverted to voicemail while techs were on-site, so desperate homeowners called competitors."
        },
        {
          label: "Preventive maintenance uptake",
          value: "8%",
          detail: "Clients never booked annual checks because no one reminded them."
        },
        {
          label: "Repeat emergencies",
          value: "23%",
          detail: "Without follow-up, the same burst pipes reappeared weeks later."
        }
      ],
      automationShifts: [
        {
          label: "Smart call routing",
          value: "24/7",
          detail: "After-hours calls now ring the on-duty plumber and log the job automatically."
        },
        {
          label: "Seasonal reminders",
          value: "Automated",
          detail: "Customers receive friendly nudges before winter and summer to service geysers and gutters."
        },
        {
          label: "Aftercare journeys",
          value: "Post-service",
          detail: "Every job triggers care tips and a check-in to catch issues early."
        }
      ],
      measuredResults: [
        {
          label: "Emergency jobs saved",
          value: "+78%",
          detail: "Round-the-clock routing means neighbours call back because Wabi-Sabi answered first."
        },
        {
          label: "Maintenance bookings",
          value: "+145%",
          detail: "Seasonal reminders keep the calendar topped up between crises."
        },
        {
          label: "Repeat fixes down",
          value: "-41%",
          detail: "Aftercare catches drips before they become floods again."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Ride-along nights",
        summary: "Listened in on after-hours calls and shadowed crews on jobs.",
        detail: "We logged where enquiries were lost and which repairs resurfaced."
      },
      {
        title: "Week 3 — Go 24/7",
        summary: "Smart routing launched with on-call schedules.",
        detail: "Emergency calls now page the right plumber instantly."
      },
      {
        title: "Week 5 — Warm the calendar",
        summary: "Seasonal maintenance campaigns switched on.",
        detail: "Clients book geyser flushes and drain checks ahead of time."
      },
      {
        title: "Week 8 — Keep checking in",
        summary: "Aftercare journeys went live for every job.",
        detail: "Follow-up tips and reminders stop repeat bursts."
      }
    ]
  },
  {
    id: "electricians",
    name: "17. Electricians",
    icon: "zap",
    accent: "yellow",
    carouselImage: "/images/electricians.jpg",
    hero: {
      image: undefined,
      badge: "Electrical Service Case Study",
      tagline: "Safety inspections get postponed indefinitely.",
      summary: "An electrical contractor needed safety inspection reminders and code compliance tracking."
    },
    metrics: {
      baselineLosses: [
        { label: "Overdue inspections", value: "156", detail: "Commercial clients postponed required safety inspections." },
        { label: "Code violation callbacks", value: "18%", detail: "Work failed inspection due to missed code updates." },
        { label: "Estimate delays", value: "5.2 days avg", detail: "Complex jobs required multiple site visits for accurate quotes." }
      ],
      automationShifts: [
        { label: "Inspection alerts", value: "Compliance-based", detail: "Clients receive safety inspection reminders based on regulations." },
        { label: "Code updates", value: "Automated", detail: "Team gets notified of electrical code changes automatically." },
        { label: "Digital estimates", value: "Photo-based", detail: "Customers submit photos for preliminary quotes remotely." }
      ],
      measuredResults: [
        { label: "Inspection compliance", value: "+89%", detail: "Automated reminders dramatically improve safety compliance." },
        { label: "First-pass rate", value: "+34%", detail: "Code update alerts reduce inspection failures." },
        { label: "Estimate speed", value: "+67%", detail: "Photo-based quotes accelerate the estimation process." }
      ]
    },
    timeline: [
      { title: "Week 1 — Audit compliance", summary: "Tracked inspection schedules and code violations.", detail: "Identified compliance gaps and estimation bottlenecks." },
      { title: "Week 3 — Inspection reminders", summary: "Safety compliance alerts activate.", detail: "Clients receive inspection reminders based on regulations." },
      { title: "Week 5 — Code notifications", summary: "Automated code update system launches.", detail: "Team gets notified of electrical code changes." },
      { title: "Week 8 — Digital estimates", summary: "Photo-based quoting goes live.", detail: "Customers can submit photos for preliminary quotes." }
    ]
  },
  {
    id: "landscapers",
    name: "18. Landscapers",
    icon: "leaf",
    accent: "green",
    carouselImage: "/images/Landscapers.jpg",
    hero: {
      image: undefined,
      badge: "Landscaping Case Study",
      tagline: "Wind, rain, and guesswork routes burned petrol and patience.",
      summary:
        "A landscaping crew asked Wabi-Sabi to steady their season. Storms forced daily reschedules, seasonal clean-ups were forgotten, and crews zig-zagged across town wasting diesel. We lined up smart scheduling so the team stays profitable even when the weather swings."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Weather cancellations",
          value: "89/month",
          detail: "Storm alerts came late, so crews drove to sites only to turn around."
        },
        {
          label: "Seasonal service gaps",
          value: "31%",
          detail: "Clients forgot about winter pruning and spring clean-ups without a reminder."
        },
        {
          label: "Route inefficiency",
          value: "23%",
          detail: "Jobs were booked in the order calls came in, so vans criss-crossed the city."
        }
      ],
      automationShifts: [
        {
          label: "Weather watch",
          value: "Auto",
          detail: "Forecast feeds move bookings out of storm slots and notify clients instantly."
        },
        {
          label: "Seasonal prompts",
          value: "Triggered",
          detail: "Email and WhatsApp reminders nudge clients to book seasonal packages."
        },
        {
          label: "Smart routing",
          value: "AI-powered",
          detail: "Daily schedules now bundle nearby jobs to cut travel time."
        }
      ],
      measuredResults: [
        {
          label: "Scheduling efficiency",
          value: "+56%",
          detail: "Weather smarts reschedule crews before they even load the trailer."
        },
        {
          label: "Seasonal bookings",
          value: "+73%",
          detail: "Clients now secure pruning, clean-ups, and fertilising well in advance."
        },
        {
          label: "Fuel saved",
          value: "+28%",
          detail: "Optimised routes keep vans in the same suburb each day."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Ride with the crews",
        summary: "Tracked delays, cancellations, and fuel slips for two weeks.",
        detail: "We saw exactly how weather and routing chaos drained profit."
      },
      {
        title: "Week 3 — Automate the weather plan",
        summary: "Forecast-driven reschedules went live.",
        detail: "Clients get SMS updates when jobs move and crews get new routes overnight."
      },
      {
        title: "Week 5 — Fill seasonal gaps",
        summary: "Campaigns rolled out for winter pruning and summer lawn care.",
        detail: "Every client receives a tailored offer based on property history."
      },
      {
        title: "Week 8 — Optimise the routes",
        summary: "AI scheduling keeps jobs tight and travel low.",
        detail: "Dispatch now checks one dashboard to confirm crews stay local each day."
      }
    ]
  },
  {
    id: "cleaning-companies",
    name: "19. Cleaning Companies",
    icon: "sparkles",
    accent: "teal",
    carouselImage: "/images/Cleaning-Companies.jpg",
    hero: {
      image: undefined,
      badge: "Cleaning Service Case Study",
      tagline: "Clients only complained days later, once contracts were at risk.",
      summary:
        "A national cleaning company asked Wabi-Sabi to steady quality across malls and offices. Supervisors found issues after the client did, staff performance was a guess, and cancellation emails arrived out the blue. We built a feedback loop that catches problems the same day and celebrates great teams."
    },
    metrics: {
      baselineLosses: [
        {
          label: "Quality complaints",
          value: "43/month",
          detail: "Clients emailed days later with photos of missed bins and dusty escalators."
        },
        {
          label: "No visibility",
          value: "Low",
          detail: "Supervisors relied on gut feel to judge cleaners because there were no scorecards."
        },
        {
          label: "Contract churn",
          value: "67%",
          detail: "Renewals slipped because issues weren’t resolved fast enough."
        }
      ],
      automationShifts: [
        {
          label: "Same-day check-ins",
          value: "Post-service",
          detail: "Clients receive a quick SMS link to rate the clean before close of business."
        },
        {
          label: "Cleaner scorecards",
          value: "Individual",
          detail: "Feedback tags each staff member so supervisors coach with facts."
        },
        {
          label: "Rapid response",
          value: "Automated",
          detail: "Any rating under four triggers a supervisor visit and photo proof of the fix."
        }
      ],
      measuredResults: [
        {
          label: "Quality scores",
          value: "+41%",
          detail: "Issues now surface same-day, not weeks later."
        },
        {
          label: "Staff pride",
          value: "+38%",
          detail: "Cleaners see their feedback and get recognised for great work."
        },
        {
          label: "Renewals secured",
          value: "+29%",
          detail: "Clients stay because fixes happen before head office notices."
        }
      ]
    },
    timeline: [
      {
        title: "Week 1 — Walk every site",
        summary: "Visited malls, offices, and hospitals with supervisors.",
        detail: "We logged recurring complaints and how long fixes took."
      },
      {
        title: "Week 3 — Launch feedback loop",
        summary: "SMS check-ins rolled out for every shift.",
        detail: "Clients rate the clean before our teams leave the parking lot."
      },
      {
        title: "Week 5 — Roll out scorecards",
        summary: "Cleaner dashboards went live with trend tracking.",
        detail: "Supervisors coach based on real data, not guesses."
      },
      {
        title: "Week 8 — Close the loop",
        summary: "Automated escalation ensures every low score is resolved.",
        detail: "Before-and-after photos now reassure clients the same day."
      }
    ]
  },
  {
    id: "general-medical-practices",
    name: "20. General Medical Practices",
    icon: "clipboardList",
    accent: "sky",
    carouselImage: "/images/General-Medical-Practices.jpg",
    hero: {
      image: undefined,
      badge: "Medical Practice Case Study",
      tagline: "Paper intake stalls patient flow.",
      summary: "A suburban clinic needed digital intake and claims automation for better patient care focus."
    },
    metrics: {
      baselineLosses: [
        { label: "Claims sitting in backlog", value: "420", detail: "Paper submissions waited days before reaching payers, delaying cash flow." },
        { label: "Nurse admin per day", value: "3 hrs", detail: "Vitals capture and form entry consumed prime consult hours." },
        { label: "Referral leakage", value: "18%", detail: "Specialist handoffs relied on manual phone reminders with inconsistent follow-through." }
      ],
      automationShifts: [
        { label: "Digital intake", value: "95% adoption", detail: "Patients complete compliant forms pre-visit and signatures sync to charts instantly." },
        { label: "Vitals kiosk", value: "Self-serve", detail: "Lobby kiosks push vitals and history straight into the EMR without nurse re-entry." },
        { label: "Referral nudges", value: "Automated", detail: "Specialist bookings and follow-ups trigger automatically from risk scoring." }
      ],
      measuredResults: [
        { label: "Consult throughput", value: "+17%", detail: "Physicians start on time with charts already populated." },
        { label: "Claims paid in 10 days", value: "92%", detail: "Electronic submissions clear backlogs and slash rejections." },
        { label: "Referral completion", value: "+24%", detail: "Patients stay inside the clinic network thanks to persistent reminders." }
      ]
    },
    timeline: [
      { title: "Week 1 — Map intake", summary: "Tracked every form and vitals touchpoint.", detail: "Identified friction from reception to billing to target for automation." },
      { title: "Week 3 — Digitise paperwork", summary: "Rolled out pre-visit forms and waiting-room kiosks.", detail: "Insurance verification, signatures, and vitals now sync to charts instantly." },
      { title: "Week 5 — Automate follow-ups", summary: "Referral cadences route tasks to the right coordinator.", detail: "High-risk patients receive escalating reminders with embedded scheduling links." },
      { title: "Week 8 — Gain visibility", summary: "Dashboards monitor wait times, referral status, and claims velocity.", detail: "Leadership sees throughput and revenue impact in real time." }
    ]
  }
]
