// ================= Theme (system-aware + manual toggle) =================
const html = document.documentElement;
const mql = window.matchMedia('(prefers-color-scheme: light)');
function applyTheme(t){ html.setAttribute('data-theme', t); }
applyTheme(mql.matches ? 'light' : 'dark');
mql.addEventListener('change', e => applyTheme(e.matches ? 'light' : 'dark'));
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// ================= Data =================

const experience = [
  { company:"Arizona State University", role:"Technology Consultant", period:"Jul 2024 – May 2026",
    summary:"Kept ASU's 20,000+ user systems online with 99.9% uptime while cutting recurring issues 30%.",
    points:[
      "Kept distributed systems serving 20,000+ users online — 99.9% uptime through proactive monitoring and Linux-based debugging.",
      "Cut recurring issues 30% by standardizing operational workflows, improving onboarding for new team members.",
      "Worked with faculty and IT stakeholders to prioritize fixes and deploy updates on an Agile cadence."
    ]},
  { company:"Boston Consulting Group X", role:"Applied AI Intern", period:"Mar 2026",
    summary:"Built an AI financial assistant that turns 10-K/10-Q filings into plain-language summaries.",
    points:[
      "Built an AI financial assistant that reads 10-K/10-Q filings and turns them into plain-language summaries.",
      "Processed structured financial data with pandas, converting raw statements into context-aware natural language.",
      "Used prompt engineering and systematic evaluation to improve output accuracy, clarity, and reliability."
    ]},
  { company:"Gurus of Web", role:"Software Development Intern", period:"May – Aug 2025",
    summary:"Built and hardened Flask/PostgreSQL backend services with JWT auth and full PyTest coverage.",
    points:[
      "Built and hardened Flask/PostgreSQL backend services for managing user data and workflows.",
      "Designed and optimized PostgreSQL schemas with SQLAlchemy and raw SQL to improve query performance.",
      "Implemented JWT-based authentication and dynamic UI components with JavaScript and Jinja2.",
      "Worked in an Agile environment with Git for version control and PyTest for reliability."
    ]},
  { company:"Krishna Steel Udyog", role:"Technical Intern — Business Support Systems", period:"Oct 2021 – Jul 2022",
    summary:"Built small Python/Excel automation tools to streamline inventory and order tracking.",
    points:[
      "Supported digitization of internal business workflows, building small-scale automation tools in Python and Excel for inventory and order tracking.",
      "Used SQL and spreadsheet techniques to clean and manage business data, improving the accuracy of insights used for decisions.",
      "Built a simple dashboard in Google Sheets to track key production and sales metrics."
    ]}
];

const education = { level:"B.S. Computer Science", details:"Arizona State University · 2022 – 2026 · New American University Scholarship · Dean's List" };
const coursework = ["Data Structures & Algorithms","Operating Systems","Distributed Software Development","Mobile App Development","Computer & Network Security","Data & Information Security","Human-Computer Interaction","Data Visualization"];
const certifications = ["Foundations of AI Engineering — CodePath","SQL Advanced — HackerRank","C Programming — Udemy"];

const languagesFrameworks = [
  { name:"Python", icon:"images/icons/python.png" },
  { name:"Java", icon:"images/icons/java.png" },
  { name:"C++", icon:"images/icons/c++.png" },
  { name:"JavaScript", icon:"images/icons/javascript.png" },
  { name:"HTML5", icon:"images/icons/html.png" },
  { name:"CSS3", icon:"images/icons/css.png" },
  { name:"Dart", icon:"https://cdn.simpleicons.org/dart" },
  { name:"SQL", icon:"images/icons/sql.png" }
];

const backendTools = [
  { name:"Flask", icon:"https://cdn.simpleicons.org/flask" },
  { name:"Django", icon:"https://cdn.simpleicons.org/django" },
  { name:"Node.js", icon:"images/icons/nodejs.png" },
  { name:"React", icon:"images/icons/react.png" },
  { name:"Bootstrap", icon:"https://cdn.simpleicons.org/bootstrap" },
  { name:"PostgreSQL", icon:"images/icons/postgresql.png" },
  { name:"MySQL", icon:"https://cdn.simpleicons.org/mysql" },
  { name:"Firebase", icon:"https://cdn.simpleicons.org/firebase" },
  { name:"Docker", icon:"images/icons/docker.png" },
  { name:"Git", icon:"images/icons/git.png" },
  { name:"Linux", icon:"https://cdn.simpleicons.org/linux" }
];

const aiSkills = ["Generative AI","LLMs","Prompt Engineering","NLP","Model Evaluation"];
const alsoSkills = ["REST APIs","Query Optimization","Data Modeling","Pandas"];

const projects = [
  { title:"PawPal AI Care Assistant", sub:"Python · Streamlit · RAG",
    summary:"A RAG-based assistant for pet care, with a 100% pass rate reliability framework and confidence scoring.",
    points:[
      "A retrieval-augmented assistant that reads pet-care schedules and generates safety recommendations.",
      "Built a reliability evaluation framework with a 100% pass rate across test scenarios, so every suggestion ships with a confidence score."
    ], tags:["Python","Streamlit","RAG"] },
  { title:"Custom Semantic Search Engine", sub:"Python · AsyncIO · NLP",
    summary:"Async, context-aware search handling 60+ concurrent queries with tuned relevance matching.",
    points:[
      "Context-aware search built on async concurrency — handles 60+ simultaneous queries without the usual slowdown.",
      "Similarity matching tuned for relevance over simple keyword-matching."
    ], tags:["Python","AsyncIO","NLP"] },
  { title:"Foxhole Lounge", sub:"Flutter · Firebase · Dart",
    summary:"Real-time Flutter/Firebase events app for 500+ users, ~60% faster after a modular rebuild.",
    points:[
      "A real-time events app for 500+ users, with live posting and interaction through Firebase Firestore.",
      "Integrated Firebase Authentication and a modular UI architecture that pushed performance up ~60%."
    ], tags:["Flutter","Firebase","Dart"] },
  { title:"AI Music Recommender Simulation", sub:"Python",
    summary:"A production-style recommendation engine scored across genre, mood, energy, and tempo.",
    points:[
      "A recommendation engine modeled on real production systems, using preference vectors and feature similarity (genre, mood, energy, tempo).",
      "Tuned a scoring algorithm for personalized rankings while evaluating and correcting for bias."
    ], tags:["Python"] },
  { title:"AI Game Glitch Investigator", sub:"Python · Streamlit",
    summary:"Diagnosed and fixed unwinnable states in an AI-generated game by tracing control flow.",
    points:[
      "Diagnosed and fixed unwinnable logic conditions in an AI-generated game by tracing control flow.",
      "A practical exercise in debugging code an LLM wrote rather than a human — validating AI-generated output."
    ], tags:["Python","Streamlit"] }
];

// ================= Render: Skills =================
function renderIconGrid(container, items){
  items.forEach(s => {
    const div = document.createElement('div'); div.className = 'icon-item';
    div.innerHTML = `<img src="${s.icon}" alt="${s.name}" loading="lazy"><span>${s.name}</span>`;
    container.appendChild(div);
  });
}
function renderChips(container, items){
  items.forEach(i => {
    const s = document.createElement('span'); s.className = 'chip'; s.textContent = i;
    container.appendChild(s);
  });
}
renderIconGrid(document.getElementById('langGrid'), languagesFrameworks);
renderIconGrid(document.getElementById('backendGrid'), backendTools);
renderChips(document.getElementById('aiChips'), aiSkills);
renderChips(document.getElementById('alsoChips'), alsoSkills);

// ================= Render: Experience =================
const expGrid = document.getElementById('expGrid');
experience.forEach((e, idx) => {
  const card = document.createElement('button');
  card.className = 'exp-card';
  card.innerHTML = `
    <div class="co">${e.company}</div>
    <div class="role">${e.role}</div>
    <div class="period">${e.period}</div>
    <div class="summary">${e.summary}</div>
    <div class="more">Read more →</div>`;
  card.addEventListener('click', () => openModal('exp', idx));
  expGrid.appendChild(card);
});

// ================= Render: Projects =================
const projList = document.getElementById('projList');
projects.forEach((p, idx) => {
  const li = document.createElement('li');
  li.innerHTML = `<button class="proj-item">
      <div class="t">${p.title}</div>
      <div class="sub">${p.sub}</div>
      <div class="summary">${p.summary}</div>
    </button>`;
  li.querySelector('.proj-item').addEventListener('click', () => openModal('proj', idx));
  projList.appendChild(li);
});

// ================= Render: Education =================
document.getElementById('eduLevel').textContent = education.level;
document.getElementById('eduDet').textContent = education.details;
renderChips(document.getElementById('courseChips'), coursework);
renderChips(document.getElementById('certChips'), certifications);

// ================= Modal =================
const backdrop = document.getElementById('modalBackdrop');
const modalEyebrow = document.getElementById('modalEyebrow');
const modalTitle = document.getElementById('modalTitle');
const modalSub = document.getElementById('modalSub');
const modalBody = document.getElementById('modalBody');

function openModal(type, idx){
  const item = type === 'exp' ? experience[idx] : projects[idx];
  modalEyebrow.textContent = type === 'exp' ? 'Experience' : 'Project';
  modalTitle.textContent = type === 'exp' ? item.role : item.title;
  modalSub.textContent = type === 'exp' ? item.company + ' · ' + item.period : item.sub;
  modalBody.innerHTML = `<ul>${item.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
  if(item.tags){
    modalBody.innerHTML += `<div class="modal-tags">${item.tags.map(t => `<span>${t}</span>`).join('')}</div>`;
    modalBody.innerHTML += `<a class="modal-link" href="https://github.com/coderG13" target="_blank" rel="noopener">View on GitHub →</a>`;
  }
  backdrop.classList.add('open');
}
document.getElementById('modalClose').addEventListener('click', () => backdrop.classList.remove('open'));
backdrop.addEventListener('click', e => { if(e.target === backdrop) backdrop.classList.remove('open'); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') backdrop.classList.remove('open'); });
