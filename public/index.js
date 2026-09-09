


document.getElementById('fyear').textContent = new Date().getFullYear();

/* ================================================================
   NAVIGATION nnne
================================================================ */
const navWrap   = document.getElementById('navWrap');
const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

window.addEventListener('scroll', () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 60);

  // active link highlight
  const sections = document.querySelectorAll('section[id], div[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

navBurger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

// close mobile nav on link click
document.querySelectorAll('.nav-mobile a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'));
});

/* ================================================================
   SCROLL REVEAL
================================================================ */
const ro = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal, .stagger').forEach(el => ro.observe(el));

/* ================================================================
   TABS
================================================================ */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const pane = document.getElementById(btn.dataset.tab);
    pane.classList.add('active');
    // re-trigger stagger
    pane.querySelectorAll('.stagger').forEach(s => {
      s.classList.remove('visible');
      setTimeout(() => ro.observe(s), 10);
    });
  });
});

/* ================================================================
   PROJECTS
================================================================ */
const projects = [
  {
    tag:'AI Agent', title:'AI Agent for Sales & Appointment Booking', year:'', live:'https://github.com/Nteinpraises/Sales-and-Support-AI-Agent', repo:'https://github.com/Nteinpraises/Sales-and-Support-AI-Agent',
    desc:'An AI agent that engages incoming leads, answers business questions, qualifies prospects, handles follow-ups and assists with appointment booking with minimal human intervention. Problem: businesses lose leads because responses are slow and follow-up is inconsistent. Solution: an always-on agent connected to the CRM and calendar that replaces manual first-response, qualification and reminder work. Flow: Lead → AI Agent → Qualification → CRM → Follow-up → Appointment.',
    pills:['OpenAI','Make','n8n','CRM Integration','Webhooks','Databases'],
    main:'img/ai/ai-sales-agent.png',
    shots:['img/ai/ai-sales-agent.png']
  },
  {
    tag:'AI Agent', title:'AI Resume Analysis Agent', year:'', live:'https://github.com/Nteinpraises/Resume-Analysis-Agent', repo:'https://github.com/Nteinpraises/Resume-Analysis-Agent',
    desc:'An agent that analyses resumes against job requirements, extracts relevant information, evaluates candidate fit and returns structured insights. Problem: manual screening of large applicant volumes is slow and inconsistent. Solution: automated parsing and scoring that gives recruiters structured, comparable output in seconds. Flow: Resume → AI Analysis → Skills Extraction → Match Score → Candidate Insights.',
    pills:['OpenAI','Claude','JSON','Prompt Engineering','Supabase','Automation'],
    main:'img/ai/ai-resume-agent.png',
    shots:['img/ai/ai-resume-agent.png']
  },
  {
    tag:'Workflow Automation', title:'AI Content Intelligence & Research System', year:'', live:'https://github.com/Nteinpraises/Content-Intelligence-Personal-Brand-Automation', repo:'https://github.com/Nteinpraises/Content-Intelligence-Personal-Brand-Automation',
    desc:'An automated research workflow that gathers trends and information from multiple sources, structures it and stores it in a database for content planning. Problem: research is repetitive, scattered and time-consuming. Solution: a scheduled workflow that collects, normalises and organises source data automatically. Flow: Sources → Research → Data Collection → Database → Content Intelligence.',
    pills:['n8n','REST APIs','Databases','JSON','OpenAI','Scheduling'],
    main:'img/ai/ai-content-intelligence.png',
    shots:['img/ai/ai-content-intelligence.png']
  },
  {
    tag:'Content Automation', title:'AI Content Generator & Auto Publisher', year:'', live:'https://github.com/Nteinpraises/AI-SOCIAL-MEDIA-CONTENT-GENERATOR-AND-AUTO-PUBLISHER_2', repo:'https://github.com/Nteinpraises/AI-SOCIAL-MEDIA-CONTENT-GENERATOR-AND-AUTO-PUBLISHER_2',
    desc:'Uses researched information to generate content and streamline the publishing process. Problem: consistent publishing requires constant manual writing, formatting and scheduling. Solution: a generation and publishing pipeline with a human review step before anything goes live. Flow: Research Data → AI Generation → Review → Scheduling → Publishing.',
    pills:['OpenAI','Make','Zapier','Webhooks','APIs','Scheduling'],
    main:'img/ai/ai-content-publisher.png',
    shots:['img/ai/ai-content-publisher.png']
  },
  {
    tag:'Website', title:'ETERNA NL', year:'', live:'https://eternanl.com/',
    desc:'Developed and maintained a full-featured business website for ETERNA NL, delivering a polished online presence with fast load times, responsive layouts, and a design that reflects the brand\'s identity. Increased client reach and productivity by 10%.',
    pills:['React','Node.js','Vercel','Javascript','SEO','SaaS'],
    main:'img/Eterna/Eterna4.png',
    shots:['img/Eterna/Eterna1.png','img/Eterna/Eterna2.png','img/Eterna/Eterna3.png','img/Eterna/Eterna5.png','img/Eterna/Eterna6.png']
  },
  {
    tag:'Automation', title:'Standard Healthcare', year:'', live:'https://standardhealthcareplus.com/',
    desc:'Designed and implemented an AI-powered chatbot automation on the Standard Healthcare platform, reducing patient wait times and enhancing support efficiency. The chatbot intelligently provides instant responses, resulting in quicker consultations.',
    pills:['TypeScript','SaaS','Conversational AI','CRM','React'],
    main:'img/SHC/shc1.png',
    shots:['img/SHC/shc2.png','img/SHC/shc3.png','img/SHC/shc4.png','img/SHC/shc5.png']
  },
  {
    tag:'Automation', title:'Bistro 64', year:'', live:'https://bistro64.aboova.com/',
    desc:'Collaborated with a team to automate key operational processes on their platform. Implemented feedback automation tool by integrated third-party APIs, and reduced repetitive manual tasks, converting more leads into clients.',
    pills:['Node.js','Aws','CRM','REST API','Automation','CI/CD','SaaS'],
    main:'img/Bistro/bistro1.png',
    shots:['img/Bistro/bistro2.png','img/Bistro/bistro3.png','img/Bistro/bistro4.png',]
  },
  {
    tag:'AI / SaaS', title:'Yman Auto', year:'', live:'https://ymanautosalesllc.com/',
    desc:'Built an end-to-end automated lead nurturing and sales pipeline for Aboova Digital Solutions, integrating AI/LLM tools for personalized outreach. The system boosted lead generation by 10% and improved overall business performance by 30%.',
    pills:['GoHighlevel','TypeScript','AWS','AI','CRM Integration'],
    main:'img/Yman Auto/yman1.png',
    shots:['img/Yman Auto/yman2.png','img/Yman Auto/yman3.png','img/Yman Auto/yman4.png','img/Yman Auto/yman5.png']
  },
  {
    tag:'Website', title:'BOBA-DC', year:'', live:'https://bobadc.org/home',
    desc:'Architected a production-ready, cloud-native backend infrastructure for a high-traffic SaaS product. Designed for horizontal scalability with containerized microservices, load balancing, automated deployments, and zero-downtime rollouts.',
    pills:['AWS','SaaS','Node.js','MongoDB','GoHighlevel'],
    main:'img/Boba-DC/boba1.png',
    shots:['img/Boba-DC/boba2.png','img/Boba-DC/boba3.png','img/Boba-DC/boba4.png','img/Boba-DC/boba5.png']
  },
  {
    tag:'Website', title:'Jania', year:'', live:'https://jania.vercel.app/',
    desc:'Built an end-to-end digital portfolio platform for EcoHub & Girl Charge founder, integrating custom blog CMS for self-managed event updates; the system established her online presence and has boosted her audience engagement by 25%.',
    pills:['Javascript','Firebase','Node.js','AWS','GoHighlevel'],
    main:'img/Jania/jan1.png',
    shots:['img/Jania/jan2.png','img/Jania/jan3.png','img/Jania/jan4.png','img/Jania/jan5.png']
  },
  {
    tag:'Website', title:'Cleanso Therapy', year:'', live:'https://ctpoglobal.com/',
    desc:'Delivered a sleek, minimalistic, and fast full-stack web platform for Cleanso Therapy. Its creative design direction, clean codebase, and the seamless developer-client collaboration was greatly appreciated throughout the entire build.',
    pills:['React','Node.js','TypeScript','REST API','Javascript'],
    main:'img/CTPO/ctpo1.png',
    shots:['img/CTPO/ctpo2.png','img/CTPO/ctpo3.png','img/CTPO/ctpo4.png','img/CTPO/ctpo5.png','img/CTPO/ctpo6.png']
  }
];

var activeGrid = null;

function openProject(i) {
  const p = projects[i];
  document.getElementById('d-tag').textContent   = p.tag;
  document.getElementById('d-title').textContent  = p.title;
  document.getElementById('d-desc').textContent   = p.desc;
  document.getElementById('d-img').src            = p.main;
  document.getElementById('d-img').alt            = p.title;
  const liveEl = document.getElementById('d-live');
  liveEl.href = p.live;
  liveEl.lastChild.textContent = p.repo ? ' View Repository ' : ' Live Site ';
  const codeEl = document.getElementById('d-code');
  codeEl.href = p.repo || 'https://github.com/Nteinpraises';
  codeEl.style.display = p.repo ? 'none' : '';
  document.getElementById('d-pills').innerHTML    = p.pills.map(t=>`<span class="d-pill">${t}</span>`).join('');
  document.getElementById('d-shots').innerHTML    = p.shots.map(s=>`<div class="shot-item" onclick="openLb('${s}')"><img src="${s}" alt="Screenshot" loading="lazy"></div>`).join('');

  /* which grid does this project belong to? */
  const aiGrid = document.getElementById('ai-projects-grid');
  const swGrid = document.getElementById('projects-grid');
  const isAI   = i < 4;
  const grid   = isAI ? aiGrid : swGrid;

  /* restore any previously hidden grid */
  if (activeGrid && activeGrid !== grid) {
    activeGrid.style.display = activeGrid === aiGrid ? 'grid' : 'grid';
  }

  const det = document.getElementById('project-detail');
  /* move the detail panel directly under the grid it belongs to */
  grid.parentNode.insertBefore(det, grid.nextSibling);

  grid.style.display = 'none';
  activeGrid = grid;
  det.classList.add('open');

  const top = grid.parentNode.querySelector('.section-intro') ? det.getBoundingClientRect().top + window.scrollY - 100 : 0;
  window.scrollTo({ top: top, behavior:'smooth' });
}

function closeProject() {
  const det = document.getElementById('project-detail');
  det.classList.remove('open');
  if (activeGrid) {
    activeGrid.style.display = 'grid';
    const y = activeGrid.getBoundingClientRect().top + window.scrollY - 120;
    activeGrid = null;
    window.scrollTo({ top: y, behavior:'smooth' });
  }
}

/* ================================================================
   LIGHTBOX
================================================================ */
function openLb(src) {
  document.getElementById('lbImg').src = src;
  document.getElementById('lbOverlay').classList.add('open');
}
function closeLb() {
  document.getElementById('lbOverlay').classList.remove('open');
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeLb(); });

/* ================================================================
   BACK TO TOP
================================================================ */
const btt = document.getElementById('back-to-top');
window.addEventListener('scroll', () => { btt.style.display = window.scrollY>500?'block':'none'; });
btt.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* ================================================================
   CONTACT FORM (EmailJS)
================================================================ */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  emailjs.sendForm('service_aj3l70b', 'template_8e99o5c', this)
    .then(() => {
      btn.textContent = '✓ Sent!';
      btn.style.background = '#16a34a';
      this.reset();
      setTimeout(() => {
        btn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    })
    .catch(() => {
      btn.textContent = 'Error – try again';
      btn.style.background = '#dc2626';
      btn.disabled = false;
    });
});

(function () {

  var VIDEO_SRC = 'img/vid_1.mp4'; /* your cloudinary URL here */

  var reviews = [
    {
      type: 'video',
      src: VIDEO_SRC,
      label: 'Client Video Testimonial'
    },
    {
      type: 'text',
      stars: 5,
      text: '"The Website Architect have provided exactly what I was looking for; a far better user experience and design refresh for my website visitors. The service has been of a very high standard, quick, easy to communicate with and went the extra mile in providing experienced suggestions for speed optimisation."',
      initials: 'SH',
      name: 'Standard Healthcare',
      company: 'Healthcare',
      color: '#1D9E75'
    },
    {
      type: 'text',
      stars: 5,
      text: '"Professional, responsive, and incredibly fair with his pricing. I\'ve worked with many web developers over the years and Praises is one of the better, if not the best, I\'ve worked with. Always open to trying new things and will let you know what he thinks every step of the way."',
      initials: 'SC',
      name: 'Maxwell',
      company: 'Business',
      color: '#185FA5'
    },
    {
      type: 'text',
      stars: 5,
      text: '"Our website was designed just as we had imagined it. From start to finish, he has been patient, detail-oriented, professional, and responsive. We were impressed with his ability to take our vision to the next level. Our website is sleek, minimalistic, quick, concise, and creative, all the things we wanted."',
      initials: 'EN',
      name: 'ETERNA NL',
      company: 'Fashion & Design',
      color: '#7F77DD'
    }
  ];

  var scene    = document.getElementById('testiScene');
  var dotsWrap = document.getElementById('testiDots');
  if (!scene || !dotsWrap) return;

  var N          = reviews.length;
  var ANGLE_STEP = 360 / N;
  var current    = 0;
  var rotateY    = 0;
  var animating  = false;
  var timer      = null;
  var held       = false;
  var videoWatching = false; /* TRUE while user is watching unmuted, blocks timer */

  var cards   = [];
  var videoEl = null;
  var muteBtn = null;

  /* ── BUILD CARDS ── */
  reviews.forEach(function (r, i) {
    var div = document.createElement('div');
    div.className = 'testi-card-3d';

    if (r.type === 'video') {
      div.classList.add('tc3-video-card');
      div.innerHTML =
        '<video class="tc3-video" src="' + r.src + '" playsinline muted loop preload="metadata"></video>' +
        '<button class="tc3-mute-btn" title="Toggle mute">' +
          '<svg class="icon-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>' +
          '<svg class="icon-unmuted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>' +
        '</button>' +
        '<div class="tc3-video-label">' + r.label + '</div>';

      videoEl = div.querySelector('.tc3-video');
      muteBtn = div.querySelector('.tc3-mute-btn');

      /* ── MUTE TOGGLE ── */
      muteBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        if (!videoEl.muted) {
          /* user is RE-MUTING, go back to loop mode */
          videoWatching = false;
          videoEl.muted = true;
          videoEl.loop  = true;
          muteBtn.classList.remove('unmuted');
          videoEl.play().catch(function(){});
          resetTimer();

        } else {
          /* user is UNMUTING, play to end then advance */
          videoWatching = true;
          videoEl.muted = false;
          videoEl.loop  = false;
          muteBtn.classList.add('unmuted');
          clearInterval(timer); /* kill the timer completely */
          videoEl.currentTime = 0;
          videoEl.play().catch(function(){});

          /* one-time listener: fires when video reaches the end */
          function onEnded() {
            videoEl.removeEventListener('ended', onEnded);
            videoWatching = false;
            videoEl.muted = true;
            videoEl.loop  = true;
            muteBtn.classList.remove('unmuted');
            goTo(current + 1); /* advance AFTER video finishes */
          }
          videoEl.addEventListener('ended', onEnded);
        }
      });

    } else {
      div.innerHTML =
        '<div class="tc3-stars">' + '★'.repeat(r.stars) + '</div>' +
        '<p class="tc3-quote">' + r.text + '</p>' +
        '<div class="tc3-author">' +
          '<div class="tc3-avatar" style="background:' + r.color + '">' + r.initials + '</div>' +
          '<div>' +
            '<div class="tc3-name">' + r.name + '</div>' +
            '<div class="tc3-company">' + r.company + '</div>' +
          '</div>' +
        '</div>';
    }

    scene.appendChild(div);
    cards.push(div);
  });

  var dots = reviews.map(function (r, i) {
    var btn = document.createElement('button');
    btn.className = 'testi-dot';
    btn.setAttribute('aria-label', (r.type === 'video' ? 'Video' : 'Review') + ' ' + (i + 1));
    if (r.type === 'video') btn.classList.add('testi-dot-video');
    btn.addEventListener('click', function () { goTo(i); });
    dotsWrap.appendChild(btn);
    return btn;
  });

  /* ── RADIUS ── */
  function getRadius() {
    var sw = scene.offsetWidth || 320;
    var cardW = Math.min(360, sw * 0.88);
    return Math.max(cardW * 0.65, 200);
  }

  /* ── POSITION CARDS ── */
  function positionCards() {
    var r = getRadius();
    cards.forEach(function (card, i) {
      var angle = ANGLE_STEP * i + rotateY;
      var rad   = angle * Math.PI / 180;
      var x     = Math.sin(rad) * r;
      var z     = Math.cos(rad) * r;
      var norm  = (z + r) / (2 * r);
      var scale = 0.78 + norm * 0.22;
      var alpha = 0.25 + norm * 0.75;

      card.style.transform =
        'translateX(calc(-50% + ' + x.toFixed(2) + 'px)) ' +
        'translateY(-50%) ' +
        'translateZ(' + z.toFixed(2) + 'px) ' +
        'scale(' + scale.toFixed(3) + ')';
      card.style.opacity = alpha.toFixed(3);
      card.style.zIndex  = Math.round(z + r);
    });
  }

  /* ── VIDEO SYNC ── */
  function syncVideo() {
    if (!videoEl) return;
    var frontIdx = ((current % N) + N) % N;
    if (reviews[frontIdx].type === 'video') {
      videoEl.play().catch(function(){});
    } else {
      videoEl.pause();
    }
  }

  /* ── UPDATE DOTS ── */
  function updateDots() {
    var active = ((current % N) + N) % N;
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === active);
    });
  }

  /* ── ANIMATION ── */
  function animateTo(targetAngle, duration, onDone) {
    animating = true;
    var startAngle = rotateY;
    var diff       = targetAngle - startAngle;
    var startTime  = null;

    function step(now) {
      if (!startTime) startTime = now;
      var t    = Math.min((now - startTime) / duration, 1);
      var ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
      rotateY  = startAngle + diff * ease;
      positionCards();
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        rotateY   = targetAngle;
        animating = false;
        if (onDone) onDone();
      }
    }
    requestAnimationFrame(step);
  }

  /* ── GO TO CARD ── */
  function goTo(index) {
    /* if user is watching unmuted video, do NOT advance automatically */
    if (videoWatching) return;
    current = ((index % N) + N) % N;
    animateTo(-current * ANGLE_STEP, 750, syncVideo);
    updateDots();
    resetTimer();
  }

  /* ── AUTO-ADVANCE TIMER ── */
  function next() {
    /* double-check: never fire while user is watching */
    if (held || videoWatching) return;
    goTo(current + 1);
  }

  function resetTimer() {
    clearInterval(timer);
    /* if currently watching unmuted video, don't start a new timer */
    if (videoWatching) return;
    var delay = (reviews[((current % N)+N)%N].type === 'video') ? 12000 : 5000;
    timer = setInterval(next, delay);
  }

  /* ── DRAG / SWIPE ── */
  var isDragging   = false;
  var dragStartX   = 0;
  var dragStartRot = 0;

  function onDragStart(clientX) {
    if (animating) return;
    isDragging   = true;
    held         = true;
    dragStartX   = clientX;
    dragStartRot = rotateY;
    clearInterval(timer);
  }

  function onDragMove(clientX) {
    if (!isDragging) return;
    var dx  = clientX - dragStartX;
    rotateY = dragStartRot + dx * 0.28;
    positionCards();
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    held       = false;
    var snapped = Math.round(-rotateY / ANGLE_STEP);
    current     = ((snapped % N) + N) % N;
    updateDots();
    animateTo(-current * ANGLE_STEP, 520, syncVideo);
    resetTimer();
  }

  /* Mouse */
  scene.addEventListener('mousedown', function (e) { onDragStart(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', function (e) { onDragMove(e.clientX); });
  window.addEventListener('mouseup', onDragEnd);

  /* Touch */
  scene.addEventListener('touchstart', function (e) { onDragStart(e.touches[0].clientX); }, { passive: true });
  scene.addEventListener('touchmove',  function (e) { onDragMove(e.touches[0].clientX); },  { passive: true });
  scene.addEventListener('touchend',   onDragEnd);

  /* Resize */
  window.addEventListener('resize', positionCards);

  /* ── KICK OFF ── */
  positionCards();
  updateDots();
  syncVideo();
  resetTimer();

})();