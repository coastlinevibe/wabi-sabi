'use strict';

(function () {
  const app = document.getElementById('quizApp');
  const heroSection = document.getElementById('quizHero');
  if (!app) return;

  // --- Analytics shim ---
  function wsTrack(event, payload = {}) {
    try {
      // Replace with real analytics later
      console.log('[wsTrack]', event, payload);
    } catch (_) {}
  }

  // --- Copy & Questions ---
  const questions = [
    // Roots — Strategy & Visibility
    {
      id: 'q1',
      text: 'Strong roots anchor the tree. Clarity anchors your business.\nDo you track a simple profit signal each week (not just revenue) that tells you if growth is getting easier or heavier?',
      answers: [
        { label: 'No', sub: 'Growth feels unclear, no single signal', score: 0 },
        { label: 'Sometimes', sub: 'Some signals, but not consistent', score: 1 },
        { label: 'Yes, consistently', sub: 'Clarity each week, decisions feel easier', score: 2 },
      ],
    },
    {
      id: 'q2',
      text: 'Roots spread wider when you create fresh pathways for value.\nDo you create or refresh income streams at least once each quarter?',
      answers: [
        { label: 'No', sub: 'We stay with the same offers each cycle', score: 0 },
        { label: 'Sometimes', sub: 'New ideas appear, but not every quarter', score: 1 },
        { label: 'Yes, consistently', sub: 'Each quarter we add or refine an offer', score: 2 },
      ],
    },
    // Trunk — Operations & Time
    {
      id: 'q3',
      text: 'The trunk must stand strong. If it leans only on you, growth strains.\nHow often do important tasks still rely on you personally to get done?',
      answers: [
        { label: 'Always', sub: 'Most key tasks depend on me', score: 0 },
        { label: 'Sometimes', sub: 'Some tasks can flow without me', score: 1 },
        { label: 'Rarely', sub: 'The business runs smoothly without me', score: 2 },
      ],
    },
    {
      id: 'q4',
      text: 'A solid trunk means stability. Systems bring strength to every branch.\nDo repeatable processes (onboarding, proposals, handoffs) run the same way each time — without delays or confusion?',
      answers: [
        { label: 'No', sub: 'Each time feels different, not consistent', score: 0 },
        { label: 'Sometimes', sub: 'Some processes repeat, others still vary', score: 1 },
        { label: 'Yes, consistently', sub: 'Clear, repeatable, smooth processes', score: 2 },
      ],
    },
    // Branches — Nurture & Revenue Flow
    {
      id: 'q5',
      text: 'Healthy branches nurture new growth again and again.\nDo new leads or clients receive helpful touchpoints automatically (education, follow-ups, renewals)?',
      answers: [
        { label: 'No', sub: 'Follow-ups rarely happen without effort', score: 0 },
        { label: 'Sometimes', sub: 'Some touchpoints exist, but not consistent', score: 1 },
        { label: 'Yes, consistently', sub: 'Every lead or client receives touchpoints', score: 2 },
      ],
    },
    {
      id: 'q6',
      text: 'Strong branches don\'t just grow once — they keep reaching outward.\nDo you re-engage past buyers — with win-backs, upgrades, or referrals — on a schedule?',
      answers: [
        { label: 'No', sub: 'We rarely reach out to past buyers', score: 0 },
        { label: 'Sometimes', sub: 'Occasional efforts, but not systematic', score: 1 },
        { label: 'Yes, consistently', sub: 'Regular re-engagement and results', score: 2 },
      ],
    },
    // Bloom — Measurement & Compounding
    {
      id: 'q7',
      text: 'When a tree blooms, you can see clearly what\'s thriving — and what\'s not.\nCan you clearly see where time and money leak — all in one place, like a dashboard or simple report?',
      answers: [
        { label: 'No', sub: 'Leaks are invisible until too late', score: 0 },
        { label: 'Sometimes', sub: 'Some visibility, but not all in one place', score: 1 },
        { label: 'Yes, consistently', sub: 'We see leaks clearly and act on them', score: 2 },
      ],
    },
    {
      id: 'q8',
      text: 'Small shifts create visible blooms, proving growth is compounding.\nIn the last 90 days, have you removed even one friction point and measured the gain?',
      answers: [
        { label: 'No', sub: 'We haven\'t made small measurable shifts yet', score: 0 },
        { label: 'Sometimes', sub: 'We tried, but didn\'t measure clearly', score: 1 },
        { label: 'Yes, consistently', sub: 'We act on small shifts and measure gains', score: 2 },
      ],
    },
    // Readiness (The Gardener's Care)
    {
      id: 'q9',
      text: 'A bonsai flourishes with steady care. Growth takes small, steady time investments.\nAre you willing to invest 2–3 hours per week for 4–8 weeks to set up systems that free your time later?',
      answers: [
        { label: 'No', sub: 'I can\'t commit time right now', score: 0 },
        { label: 'Maybe', sub: 'I\'d consider it, but unsure', score: 1 },
        { label: 'Yes', sub: 'I\'ll commit time to set my systems free', score: 2 },
      ],
    },
  ];

  const tiers = {
    A: {
      range: [0, 6],
      label: 'Hidden Value: Largely Untapped',
      meter: 0.3,
      primary: { label: 'See Your Action Plan', href: '/book' },
      insights: [
        'Your bonsai is still mostly roots in the soil.',
        'You\'ve poured real effort into growth, but much of your profit flow remains trapped — in tasks that lean heavily on you, in processes that shift unpredictably, and in opportunities not yet shaped.',
        'This isn\'t failure — it\'s potential. With a few steady adjustments, clarity will replace uncertainty, and profit will begin to flow with less weight.',
      ],
      wins: [
        'Hold a Root Clarity session to gently map where value slips away.',
        'Shape one process to flow the same way every time.',
        'Plant a simple weekly nurture touchpoint.',
      ],
      howTo: [
        'Acknowledge your effort. Roots take time to establish — the work you\'ve done is the foundation.',
        'Pick one root shift. Choose a single clarity step (like mapping leaks or standardizing one process).',
        'Start small this week. Even one consistent change will strengthen your base.',
        'See it as potential. You\'re not behind — you\'re at the start of untapped growth.',
      ],
    },
    B: {
      range: [7, 12],
      label: 'Hidden Value: Within Reach',
      meter: 0.6,
      primary: { label: 'See Your Action Plan', href: '/book' },
      insights: [
        'Your tree stands tall, but the branches tangle at times.',
        'You\'ve built strong foundations, yet bottlenecks and missed touchpoints keep your systems from flowing at their best. Profit is already close — it\'s simply waiting for clarity and consistency to unlock it.',
        'With a few small shifts applied regularly, growth will compound. What feels heavy today can become lighter, smoother, and more profitable.',
      ],
      wins: [
        'Weave two key systems together (CRM + Finance) for smoother flow.',
        'Nurture win-back & renewal sequences that feel natural.',
        'Craft a simple ROI/Time view that shows clarity at a glance.',
      ],
      howTo: [
        'See your progress. The trunk is strong, but some branches tangle. That\'s natural.',
        'Select one branch to prune. Pick a quick win that smooths flow (like a repeatable process or client touchpoint).',
        'Apply it this week. A single adjustment will ripple through your system.',
        'Notice lighter growth. Each refinement reduces weight and adds clarity.',
      ],
    },
    C: {
      range: [13, 18],
      label: 'Hidden Value: Ready to Bloom',
      meter: 0.85,
      primary: { label: 'See Your Action Plan', href: '/book' },
      insights: [
        'Your bonsai is balanced, pruned, and ready to flower.',
        'The roots are stable, the trunk strong, and your branches are reaching outward. You\'ve already spotted and applied shifts that improve results. Now, the opportunity is in compounding them — turning clarity into flow, and flow into lasting profit.',
        'The next stage is less about fixing, and more about amplifying. Small, deliberate refinements will let your business bloom with greater ease and resilience.',
      ],
      wins: [
        'Cultivate an upgrade path or customer portal that feels effortless.',
        'Practice quarterly "friction removal" with gentle, measured improvements.',
        'Grow referral & advocacy loops that bloom naturally.',
      ],
      howTo: [
        'Recognize your balance. Roots, trunk, and branches are aligned — you\'re already blooming.',
        'Choose one refinement. Pick a small shift to amplify (like re-engaging past buyers or measuring a gain).',
        'Act this week. Even a minor tweak at this stage compounds results.',
        'Focus on compounding. You\'re not fixing — you\'re shaping growth to bloom with ease.',
      ],
    },
  };

  // --- State ---
  const state = {
    step: 0, // 0 start, 1..9 questions, 10 email, 11 result
    answers: Array(9).fill(null),
  };

  // --- Elements ---
  const startScreen = document.getElementById('startScreen');
  const startBtn = document.getElementById('startBtn');
  const progressBar = document.getElementById('progressBar');
  const progressFill = document.getElementById('progressFill');
  const progressLabel = document.getElementById('progressLabel');

  const questionScreen = document.getElementById('questionScreen');
  const questionText = document.getElementById('questionText');
  const answerList = document.getElementById('answerList');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const emailCapture = document.getElementById('emailCapture');
  const emailForm = document.getElementById('emailForm');
  const resultScreen = document.getElementById('resultScreen');

  // --- Helpers ---
  function show(el) { el.hidden = false; }
  function hide(el) { el.hidden = true; }

  function updateProgress(stepIndex) {
    const pct = Math.min(100, Math.max(0, Math.round((stepIndex / 9) * 100)));
    progressFill.style.width = pct + '%';
    progressLabel.textContent = `Step ${Math.min(stepIndex, 9)} of 9`;
  }

  function renderQuestion(idx) {
    const q = questions[idx];
    
    // Split text into metaphor intro and actual question
    const textParts = q.text.split('\n');
    const metaphorIntro = textParts[0];
    const actualQuestion = textParts[1] || textParts[0];
    
    // Create HTML with styled metaphor intro
    questionText.innerHTML = `
      <div class="ws-question-metaphor" style="font-size: 0.9em; color: #f3a316; margin-bottom: 12px; font-style: italic; opacity: 0.9;">
        ${metaphorIntro}
      </div>
      <div class="ws-question-main">
        ${actualQuestion}
      </div>
    `;

    // answers
    answerList.innerHTML = '';
    q.answers.forEach((a, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ws-answer';
      btn.dataset.score = String(a.score);
      btn.dataset.index = String(i);
      btn.innerHTML = `<span class="ws-answer-title">${a.label}</span>${a.sub ? `<span class=\"ws-answer-sub\">${a.sub}</span>` : ''}`;
      btn.addEventListener('click', () => {
        state.answers[idx] = a.score;
        wsTrack(`q_answered_${idx + 1}`, { score: a.score });
        animateBonsaiGrowth(idx + 1);
        // auto-advance
        setTimeout(() => {
          if (idx < 8) {
            goToQuestion(idx + 1);
          } else {
            goToEmail();
          }
        }, 400);
      });
      answerList.appendChild(btn);
    });

    // keyboard shortcuts 1/2/3
    document.onkeydown = (ev) => {
      if (['1', '2', '3'].includes(ev.key)) {
        const map = { '1': 0, '2': 1, '3': 2 };
        const i = map[ev.key];
        const chosen = q.answers[i];
        if (chosen) {
          state.answers[idx] = chosen.score;
          wsTrack(`q_answered_${idx + 1}`, { score: chosen.score, via: 'keyboard' });
          animateBonsaiGrowth(idx + 1);
          setTimeout(() => {
            if (idx < 8) goToQuestion(idx + 1); else goToEmail();
          }, 400);
        }
      }
    };
  }

  function goToQuestion(idx) {
    state.step = idx + 1; // 1-based for questions
    hide(startScreen);
    hide(emailCapture);
    hide(resultScreen);
    show(progressBar);
    show(questionScreen);
    updateProgress(state.step);
    renderQuestion(idx);
    prevBtn.disabled = false;
  }

  prevBtn.addEventListener('click', () => {
    const current = state.step - 1; // 0-based idx
    if (current > 0) {
      goToQuestion(current - 1);
    } else {
      // back to hero start
      hide(questionScreen);
      hide(progressBar);
      show(startScreen);
      state.step = 0;
      if (app) {
        app.style.display = 'none';
      }
      if (heroSection) {
        heroSection.style.display = 'flex';
      }
    }
  });

  nextBtn.addEventListener('click', () => {
    const current = state.step - 1;
    if (current < 8) {
      goToQuestion(current + 1);
    } else {
      goToEmail();
    }
  });

  function goToEmail() {
    wsTrack('completed_quiz', { answers: state.answers });
    hide(questionScreen);
    show(emailCapture);
    progressLabel.textContent = 'Almost done…';
  }

  // --- Scoring / Tiering ---
  function computeScore() {
    return state.answers.reduce((a, b) => a + (Number(b) || 0), 0);
  }

  function resolveTier(score) {
    if (score <= 6) return 'A';
    if (score <= 12) return 'B';
    return 'C';
  }

  function renderResult(score, tierKey) {
    const t = tiers[tierKey];
    resultScreen.dataset.tier = tierKey;

    const meterPct = Math.round(t.meter * 100);

    const insightLis = t.insights.map((s) => `<li>${s}</li>`).join('');
    const winLis = t.wins.map((s, i) => `<li data-badge="${i + 1}">${s}</li>`).join('');

    const html = `
      <header class="ws-result-header">
        <h2 id="resultTitle">Your Wabi-sabi Profit Snapshot</h2>
        <div class="ws-scoreline">
          <div class="ws-score">
            <span class="ws-score-label">Score</span>
            <span id="resultScore" class="ws-score-value">${score}</span>
            <span class="ws-score-total">/ 18</span>
          </div>
          <div class="ws-tier">
            <span class="ws-tier-label">Tier</span>
            <span id="resultTier" class="ws-tier-badge">${t.label}</span>
          </div>
        </div>
        <div id="resultMeter" class="ws-meter" role="img" aria-label="Potential unlocked">
          <div id="resultMeterFill" class="ws-meter-fill" style="width: ${meterPct}%"></div>
          <span id="resultMeterLabel" class="ws-meter-label">Potential unlocked: ${meterPct}%</span>
        </div>
      </header>

      <section class="ws-result-insight" aria-labelledby="insightTitle">
        <h3 id="insightTitle" class="ws-h3">What we see</h3>
        <ul id="insightList" class="ws-list">${insightLis}</ul>
      </section>

      <section class="ws-result-wins" aria-labelledby="winsTitle">
        <h3 id="winsTitle" class="ws-h3">Quick wins to unlock hidden value</h3>
        <ol id="quickWins" class="ws-steps">${winLis}</ol>
      </section>

      <section class="ws-result-cta" aria-labelledby="ctaTitle">
        <h3 id="ctaTitle" class="ws-h3">Your next step</h3>
        <div class="ws-cta-row">
          <a id="primaryCta" class="ws-btn ws-btn-primary" href="${t.primary.href}" data-cta="tier-primary">${t.primary.label} →</a>
          <a id="secondaryCta" class="ws-btn ws-btn-ghost" href="/book" data-cta="book">Book a Growth Session</a>
        </div>
        <p class="ws-micro">No pressure. No pitch. Just clarity.</p>
      </section>

      <section id="resultMedia" class="ws-result-media" aria-labelledby="mediaTitle">
        <h3 id="mediaTitle" class="ws-h3">How to use your result in 2 minutes</h3>
        <div class="ws-media-grid">
          <div class="ws-how-to">
            <ol class="ws-how-to-steps">
              ${t.howTo.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>
          <div id="resultTestimonials" class="ws-testimonials" aria-label="Client testimonials">
            <figure class="ws-quote"><blockquote>We reclaimed 80+ hours/month without adding headcount.</blockquote><figcaption>Sarah M., Agency Owner</figcaption></figure>
            <figure class="ws-quote"><blockquote>Profit up, hours down. The system runs calmly now.</blockquote><figcaption>Lindiwe K., Retail Founder</figcaption></figure>
            <figure class="ws-quote"><blockquote>They revealed value we'd overlooked for years.</blockquote><figcaption>James P., SaaS CEO</figcaption></figure>
          </div>
        </div>
      </section>

      <section class="ws-result-actions">
        <button id="downloadPdfBtn" class="ws-btn ws-btn-secondary">Download PDF Summary</button>
        <button id="restartQuizBtn" class="ws-btn ws-btn-ghost">Retake the Audit</button>
      </section>

      <div id="resultData" class="sr-only" data-score="${score}" data-tier="${tierKey}" data-meter="${t.meter}"></div>
    `;

    resultScreen.innerHTML = html;

    // CTA tracking
    resultScreen.querySelector('#primaryCta')?.addEventListener('click', () => wsTrack('cta_clicked_primary', { tier: tierKey }));
    resultScreen.querySelector('#secondaryCta')?.addEventListener('click', () => wsTrack('cta_clicked_secondary', { tier: tierKey }));
    resultScreen.querySelector('#restartQuizBtn')?.addEventListener('click', () => {
      window.location.reload();
    });

    // PDF download
    const pdfBtn = resultScreen.querySelector('#downloadPdfBtn');
    if (pdfBtn) pdfBtn.addEventListener('click', downloadPdfSnapshot);
  }

  async function downloadPdfSnapshot() {
    try {
      const { jsPDF } = window.jspdf || {};
      if (!jsPDF) return alert('PDF unavailable (library not loaded).');
      
      // Get current result data
      const resultData = document.getElementById('resultData');
      const score = resultData?.dataset.score || '0';
      const tierKey = resultData?.dataset.tier || 'A';
      const meter = resultData?.dataset.meter || '0.3';
      const t = tiers[tierKey];
      
      const meterPct = Math.round(parseFloat(meter) * 100);
      
      // Create PDF content
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let yPos = margin;
      
      // Header
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text('🌿 Wabi-sabi Profit Snapshot', margin, yPos);
      yPos += 15;
      
      // Business Tier Result
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Business Tier Result: ${t.label}`, margin, yPos);
      yPos += 8;
      pdf.text(`Score: ${score} / 18`, margin, yPos);
      yPos += 8;
      pdf.text(`Potential Unlocked: ${meterPct}%`, margin, yPos);
      yPos += 15;
      
      // What This Means
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('🌱 What This Means', margin, yPos);
      yPos += 10;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const meaningText = 'Like a bonsai, your business reflects the care and systems shaping it. Your result shows where profit flow is strong, and where small shifts can unlock more.';
      const meaningLines = pdf.splitTextToSize(meaningText, contentWidth);
      pdf.text(meaningLines, margin, yPos);
      yPos += meaningLines.length * 5 + 5;
      
      // Tier-specific meaning
      let tierMeaning = '';
      if (tierKey === 'A') {
        tierMeaning = 'Largely Untapped (0–6): Roots are in place, but much of the profit flow is still trapped. With clarity and consistency, growth can begin to feel lighter.';
      } else if (tierKey === 'B') {
        tierMeaning = 'Within Reach (7–12): Foundations are strong, but some branches tangle. With small refinements, growth can compound smoothly.';
      } else {
        tierMeaning = 'Ready to Bloom (13–18): Balance is clear. With steady care, your business can compound results and bloom with ease.';
      }
      
      const tierLines = pdf.splitTextToSize(tierMeaning, contentWidth);
      pdf.text(tierLines, margin, yPos);
      yPos += tierLines.length * 5 + 10;
      
      // Quick Wins
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('🌳 Quick Wins for You', margin, yPos);
      yPos += 10;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Here are your immediate actions based on your score:', margin, yPos);
      yPos += 8;
      
      t.wins.forEach((win, index) => {
        const winLines = pdf.splitTextToSize(`${index + 1}. ${win}`, contentWidth - 5);
        pdf.text(winLines, margin + 5, yPos);
        yPos += winLines.length * 5 + 3;
      });
      yPos += 5;
      
      // How to Use This
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('🌸 How to Use This in 2 Minutes', margin, yPos);
      yPos += 10;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      t.howTo.forEach((step, index) => {
        const stepLines = pdf.splitTextToSize(`${index + 1}. ${step}`, contentWidth - 5);
        pdf.text(stepLines, margin + 5, yPos);
        yPos += stepLines.length * 5 + 3;
      });
      yPos += 10;
      
      // Next Step
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('🎯 Your Next Step', margin, yPos);
      yPos += 10;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('👉 See Your Action Plan', margin, yPos);
      yPos += 6;
      pdf.text('👉 Book a Growth Session', margin, yPos);
      yPos += 8;
      pdf.text('No pressure. No pitch. Just clarity on your next best moves.', margin, yPos);
      
      pdf.save('Wabi-sabi_Profit_Snapshot.pdf');
    } catch (e) {
      console.error('PDF error', e);
      alert('Could not generate PDF.');
    }
  }

  // --- Email submit (stub) ---
  emailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(emailForm);
    const name = (form.get('name') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const company = (form.get('company') || '').toString().trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid name and email.');
      return;
    }

    wsTrack('email_submitted', { name, email, company });

    // Show results instantly; later we can POST to Supabase function to email summary
    const score = computeScore();
    const tierKey = resolveTier(score);
    showResult(score, tierKey);
  });

  function showResult(score, tierKey) {
    hide(emailCapture);
    hide(questionScreen);
    show(resultScreen);
    renderResult(score, tierKey);
    wsTrack(`result_tier_${tierKey}`);
  }

  // --- Bonsai Animation ---
  function createBonsaiSVG(stage) {
    // Stages: 0=seed, 1-3=roots, 4-6=trunk, 7-8=branches, 9=bloom
    const stages = [
      // Stage 0: Seed
      `<svg viewBox="0 0 80 80" class="bonsai-tree">
        <circle cx="40" cy="65" r="3" fill="#8B4513" opacity="0.8"/>
      </svg>`,
      // Stages 1-3: Growing roots
      `<svg viewBox="0 0 80 80" class="bonsai-tree">
        <circle cx="40" cy="65" r="3" fill="#8B4513"/>
        <path d="M40 65 Q35 70 30 75" stroke="#654321" stroke-width="1.5" fill="none"/>
        <path d="M40 65 Q45 70 50 75" stroke="#654321" stroke-width="1.5" fill="none"/>
      </svg>`,
      // Stages 4-6: Trunk growing
      `<svg viewBox="0 0 80 80" class="bonsai-tree">
        <path d="M40 65 Q35 70 30 75" stroke="#654321" stroke-width="1.5" fill="none"/>
        <path d="M40 65 Q45 70 50 75" stroke="#654321" stroke-width="1.5" fill="none"/>
        <rect x="38" y="45" width="4" height="20" fill="#8B4513" rx="2"/>
        <circle cx="40" cy="45" r="2" fill="#228B22" opacity="0.6"/>
      </svg>`,
      // Stages 7-8: Branches
      `<svg viewBox="0 0 80 80" class="bonsai-tree">
        <path d="M40 65 Q35 70 30 75" stroke="#654321" stroke-width="1.5" fill="none"/>
        <path d="M40 65 Q45 70 50 75" stroke="#654321" stroke-width="1.5" fill="none"/>
        <rect x="38" y="35" width="4" height="30" fill="#8B4513" rx="2"/>
        <path d="M40 40 Q30 35 25 30" stroke="#8B4513" stroke-width="2" fill="none"/>
        <path d="M40 45 Q50 40 55 35" stroke="#8B4513" stroke-width="2" fill="none"/>
        <circle cx="25" cy="30" r="3" fill="#228B22" opacity="0.7"/>
        <circle cx="55" cy="35" r="3" fill="#228B22" opacity="0.7"/>
      </svg>`,
      // Stage 9: Full bloom
      `<svg viewBox="0 0 80 80" class="bonsai-tree">
        <path d="M40 65 Q35 70 30 75" stroke="#654321" stroke-width="1.5" fill="none"/>
        <path d="M40 65 Q45 70 50 75" stroke="#654321" stroke-width="1.5" fill="none"/>
        <rect x="38" y="25" width="4" height="40" fill="#8B4513" rx="2"/>
        <path d="M40 30 Q30 25 25 20" stroke="#8B4513" stroke-width="2" fill="none"/>
        <path d="M40 35 Q50 30 55 25" stroke="#8B4513" stroke-width="2" fill="none"/>
        <path d="M40 40 Q35 35 30 30" stroke="#8B4513" stroke-width="1.5" fill="none"/>
        <circle cx="25" cy="20" r="4" fill="#228B22"/>
        <circle cx="55" cy="25" r="4" fill="#228B22"/>
        <circle cx="30" cy="30" r="3" fill="#228B22"/>
        <circle cx="40" cy="25" r="2" fill="#FFB6C1" opacity="0.9"/>
        <circle cx="26" cy="18" r="1.5" fill="#FFB6C1"/>
        <circle cx="53" cy="23" r="1.5" fill="#FFB6C1"/>
      </svg>`
    ];

    const stageIndex = Math.min(Math.floor(stage / 2), stages.length - 1);
    return stages[stageIndex];
  }

  function animateBonsaiGrowth(questionNum) {
    const bonsaiStage = document.getElementById('bonsaiStage');
    if (!bonsaiStage) return;

    // Update bonsai to current stage
    bonsaiStage.innerHTML = createBonsaiSVG(questionNum);
    
    // Trigger growth animation
    const tree = bonsaiStage.querySelector('.bonsai-tree');
    if (tree) {
      tree.classList.remove('bonsai-grow');
      // Force reflow
      tree.offsetHeight;
      tree.classList.add('bonsai-grow');
    }
  }

  // Initialize bonsai on start
  function initializeBonsai() {
    const bonsaiStage = document.getElementById('bonsaiStage');
    if (bonsaiStage) {
      bonsaiStage.innerHTML = createBonsaiSVG(0);
    }
  }

  // --- Start Quiz ---
  startBtn.addEventListener('click', () => {
    wsTrack('started_quiz');
    if (heroSection) {
      heroSection.style.display = 'none';
    }
    if (app) {
      app.style.display = 'block';
    }
    initializeBonsai();
    goToQuestion(0);
  });

  // Expose some debug hooks (optional)
  window.__wsQuiz = { state, computeScore, resolveTier };
})();
