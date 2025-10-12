import React from 'react';

// Knowledge Base - Comprehensive information about Wabi-Sabi services
export const WABI_SABI_KNOWLEDGE_BASE = {
  company: {
    name: "**Wabi-Sabi**",
    tagline: "*Revealing hidden income flows*",
    description: "We help **South African businesses** discover and optimize hidden profit streams through systematic, sustainable approaches. Like a bonsai, we shape growth with patience and clarity.",
    location: "**Cape Town, South Africa**",
    contact: {
      phone: "**+27 71 432 9190**",
      email: "**admin@giftai.co.za**",
      whatsapp: "**+27 714 329 190**"
    },
    stats: {
      companiesHelped: "**75+** companies",
      profitLift: "**98%** profit lift",
      leadsNurtured: "**3M+** leads nurtured",
      systems24_7: "**24/7** systems running"
    }
  },

  services: {
    philosophy: {
      name: "Wabi-Sabi Business Philosophy",
      description: "Finding beauty in imperfection - revealing hidden value in existing business systems rather than chasing perfection or quick fixes.",
      approach: "Small, deliberate shifts that compound into sustainable growth",
      methodology: "Reveal hidden value → Shape growth wisely → Profit with clarity"
    },

    investmentLevels: {
      foundation: {
        name: "**Foundation Level**",
        price: "**R50k+**",
        duration: "**~30 days**",
        target: "Small businesses ready to automate basics",
        capabilities: [
          "Reliable client database and simple booking/order capture",
          "Online payments & auto-invoicing that reduce admin",
          "Delivery/logistics tracker (simple) or order follow-ups",
          "One-page 'clarity' view (daily ops + revenue touchpoints)"
        ]
      },

      growth: {
        name: "**Growth Level**",
        price: "**R100k+**",
        duration: "**~60 days**",
        target: "Scaling teams wanting compounding systems across sales + ops",
        capabilities: [
          "CRM automations (lead nurture, reactivation, referral tracking)",
          "Customer portal / order status / self-serve updates",
          "Upsell/cross-sell flows + smart follow-ups",
          "Team dashboards (sales, ops, fulfilment) with shared signals"
        ]
      },

      scale: {
        name: "**Scale Level**",
        price: "**R250k+**",
        duration: "**~90 days**",
        target: "Established businesses needing cross-department flow & analytics",
        capabilities: [
          "Multi-department workflows (sales ↔ ops ↔ finance)",
          "Inventory/delivery systems with exception alerts",
          "Predictive/forward-looking analytics",
          "Executive clarity board (profit drivers + risks)"
        ]
      }
    },

    toolkit: {
      strategy: "Simple dashboards showing profit flows and friction points",
      platforms: "Websites, apps, and funnels revealing hidden value",
      flows: "Reliable processes easing friction and freeing time",
      campaigns: "Targeted offers growing quietly in background",
      training: "Clear steps for teams maintaining growth",
      ai: "Support lightening load and keeping growth consistent"
    }
  },

  components: {
    ui: {
      "animated-counter": "Animated number counter for statistics display",
      "card-spotlight": "Interactive card with spotlight effect",
      "feature-with-advantages": "Feature showcase with advantages list",
      "magnetic-button": "Button with magnetic hover effect",
      "shine-border": "Animated border with shine effect",
      "testimonial-cards": "Interactive testimonial card shuffle"
    },

    core: {
      "CTASection": "Call-to-action section with compelling messaging",
      "CaseStudyPage": "Detailed case study presentation",
      "ClientLogos": "Client logo showcase carousel",
      "Footer": "Site footer with contact and links",
      "Hero3DCarousel": "3D carousel hero section",
      "HeroSection": "Main hero section component",
      "InlineCaseStudyGallery": "Inline case study display",
      "Navbar": "Responsive navigation bar",
      "PortfolioPreview": "Portfolio item preview",
      "PricingAndOffer": "Pricing section with offers",
      "PricingTable": "Interactive pricing comparison",
      "ServicesPreview": "Services overview section",
      "StatsSection": "Statistics display section",
      "TechStack": "Technology stack showcase",
      "TestimonialsCarousel": "Testimonial carousel",
      "ThemeProvider": "Theme context provider",
      "WhatsAppFloat": "WhatsApp floating contact button"
    },

    blocks: {
      "pricing-table": "Advanced pricing table component"
    },

    chat: {
      "ChatWindow": "Main chat interface component",
      "MessageBubble": "Individual message display",
      "MessageInput": "Chat input component"
    },

    training: {
      trainingComponents: "Training-related components"
    }
  },

  apps: {
    businessChat: {
      name: "Wabi-Sabi Business Chat",
      description: "AI-powered chat system for business inquiries",
      features: [
        "Real-time AI responses",
        "Business-specific knowledge base",
        "Seamless dashboard integration",
        "Privacy-focused conversations"
      ],
      url: "/chat/wabi-sabi-business"
    },

    portfolioApps: {
      description: "Custom business applications built for clients",
      examples: [
        "CRM systems with automation",
        "Customer portals",
        "Inventory management",
        "Analytics dashboards",
        "Payment integrations"
      ]
    }
  },

  targetAudience: {
    criteria: {
      fit: [
        "R500k+ annual revenue",
        "Business owner as key decision maker",
        "2-3 hours/week commitment",
        "Seeking long-term systems over quick fixes",
        "Willing to invest in clarity and transformation"
      ],
      notFit: [
        "Seeking overnight fixes",
        "Wanting DIY-only approach",
        "Unwilling to adapt workflows",
        "Expecting immediate results",
        "Chasing cheapest options only",
        "Preferring complex over simple solutions"
      ]
    },

    idealClient: "South African business owners ready for systematic growth, valuing patience and clarity over shortcuts."
  },

  caseStudies: [
    {
      testimonial: "*We reclaimed 80+ hours a month without adding headcount.* Wabi-Sabi shifted how we work.",
      author: "**Sarah M., Agency Owner**"
    },
    {
      testimonial: "*Our system runs smoothly now. Hours down, profit up.* The calm clarity we needed.",
      author: "**Lindiwe K., Retail Founder**"
    },
    {
      testimonial: "*They revealed value we'd overlooked for years.* Small shifts, big results.",
      author: "**James P., SaaS CEO**"
    }
  ],

  process: {
    discovery: "Free discovery session to assess current systems",
    consultation: "**30-minute consultation** - Book a quick call to discuss your needs at https://cal.com/riegal-du-toit/30min",
    assessment: "Deep dive into profit flows and friction points",
    design: "Custom system design based on business needs",
    implementation: "30-90 day implementation with team training",
    optimization: "Ongoing optimization and support"
  },

  faqs: [
    {
      question: "What makes Wabi-Sabi different?",
      answer: "**Finding beauty in imperfection** - We focus on revealing hidden value in existing systems rather than adding complexity. Small, deliberate shifts create compounding growth."
    },
    {
      question: "How long does implementation take?",
      answer: "- **Foundation**: ~30 days\n- **Growth**: ~60 days\n- **Scale**: ~90 days\n\nResults typically start within 30 days."
    },
    {
      question: "What's your success rate?",
      answer: "98% **profit lift** across our clients, with most seeing **20-40% revenue increases** through optimized flows."
    },
    {
      question: "Do you work with international clients?",
      answer: "We focus on **South African businesses** but can discuss international projects. Our systems are location-agnostic."
    }
  ]
};

// Function to generate AI responses using OpenAI API directly
export async function generateOpenAIResponse(message: string, conversationHistory: any[] = []): Promise<{response: string, prompts: string[]}> {
  try {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const systemPrompt = `
You are Wabi-Sabi's AI business assistant. You help South African business owners discover hidden income flows and optimize their operations.

CRITICAL: Always acknowledge and directly respond to the user's specific message. If they say "Hi! I'm interested in discovering the hidden value in my business" - acknowledge their interest and respond to that exact statement.

Your personality:
- Calm, patient, and methodical (like bonsai cultivation)
- Focus on revealing hidden value rather than quick fixes
- Emphasize sustainable, compounding growth
- Use simple, clear language
- Reference the Wabi-Sabi philosophy when relevant
- ALWAYS start by acknowledging what the user just said

RESPONSE FORMATTING:
- Use **bold text** for important terms, prices, and key phrases
- Use bullet points (- item) for lists and features
- Use *italics* for emphasis and quotes
- Use \`code\` for technical terms or specific features
- Structure responses clearly with paragraphs and line breaks
- Format service levels, pricing, and contact info prominently

Key knowledge areas:
- Company: Wabi-Sabi, revealing hidden income flows, Cape Town-based
- Services: Foundation (R50k+, 30 days), Growth (R100k+, 60 days), Scale (R250k+, 90 days)
- Philosophy: Find beauty in imperfection, small deliberate shifts for compounding growth
- Target: South African businesses with R500k+ revenue, seeking systematic growth
- Stats: 75+ companies, 98% profit lift, 3M+ nurtured leads
- Components: 15+ React components including CTASection, HeroSection, ChatWindow, etc.
- Apps: Business chat system, custom CRM, customer portals, analytics dashboards

Guidelines:
- Always be helpful and professional
- Focus on our services, components, and business philosophy
- Direct to appropriate team members for complex inquiries
- Mention contact details when relevant: +27 71 432 9190, admin@giftai.co.za
- Use our terminology (hidden income flows, clarity views, etc.)
- Keep responses concise but informative
- End with a call-to-action when appropriate
- For component questions, provide specific details about capabilities
- For service questions, explain the investment levels clearly
- **Use markdown formatting**: Bold key terms, use bullet points for lists, format important information clearly
- **Offer 30-minute consultations** for quick discussions about business needs - always include the calendar link: https://cal.com/riegal-du-toit/30min

Available services summary:
- **Foundation**: Basic automation, client database, payments, clarity dashboard
- **Growth**: CRM automation, customer portals, team dashboards, smart campaigns
- **Scale**: Multi-department workflows, predictive analytics, executive clarity boards

Component categories:
- **UI**: animated-counter, card-spotlight, feature-with-advantages, magnetic-button, shine-border, testimonial-cards
- **Core**: CTASection, CaseStudyPage, ClientLogos, Footer, Hero3DCarousel, HeroSection, InlineCaseStudyGallery, Navbar, PortfolioPreview, PricingAndOffer, PricingTable, ServicesPreview, StatsSection, TechStack, TestimonialsCarousel, ThemeProvider, WhatsAppFloat
- **Chat**: ChatWindow, MessageBubble, MessageInput

IMPORTANT: 
- Provide a natural, conversational response
- Do NOT return JSON or structured data
- Just respond with the text answer directly
- Keep responses concise: maximum 5 lines total
`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-6).map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: messages,
        max_tokens: 250,
        temperature: 0.3,
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again or contact our team directly.";

    return {
      response: aiResponse,
      prompts: ["Foundation level?", "Growth services?", "Book consultation?", "Get started?"]
    };

  } catch (error) {
    console.error('OpenAI API error:', error);
    return {
      response: "Thanks for your message! 🌿 I'm experiencing a technical issue right now. Please call us at +27 71 432 9190 or email admin@giftai.co.za - we'd love to help you discover hidden income flows in your business.",
      prompts: ["How can I help you today?", "What services interest you?"]
    };
  }
}
