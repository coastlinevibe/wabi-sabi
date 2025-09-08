// Simple event logger (replace with your analytics)
function logEvent(name, data={}) {
  try { console.log('[FunnelEvent]', name, data); } catch(e){}
}

// Query helpers
function getQuery() {
  return Object.fromEntries(new URLSearchParams(location.search).entries());
}
function pushQuery(obj) {
  const q = new URLSearchParams(obj).toString();
  location.href = location.pathname.replace(/[^\/]+$/, '') + 'reveal.html?' + q;
}

// Quiz scoring (weights are simple, adjust later)
const QUIZ_SPEC = [
  { key:'focus',     weight: 20 },
  { key:'systems',   weight: 20 },
  { key:'offers',    weight: 20 },
  { key:'traffic',   weight: 20 },
  { key:'retention', weight: 20 },
];

function scoreFromQuery(q) {
  let total = 0;
  for (const {key, weight} of QUIZ_SPEC) {
    const v = Number(q[key] || 0);     // 0..4
    total += (v/4) * weight;           // normalize to weight
  }
  return Math.round(total);            // 0..100
}

function bucketFromScore(s) {
  if (s >= 80) return {label:'High Clarity', color:'#22c55e', pitch:'You\'re operating near optimal—now compound with systems.'};
  if (s >= 55) return {label:'Hidden Value Ready', color:'#f59e0b', pitch:'You\'ve got profit trapped in processes—let\'s surface it.'};
  return {label:'Clarity Needed', color:'#ef4444', pitch:'Too much grind, not enough leverage—start with quick wins.'};
}
