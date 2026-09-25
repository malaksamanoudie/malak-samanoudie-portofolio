const icons = {
  email: `<svg class="icon-stroke" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  chart: `<svg viewBox="0 0 48 48" fill="none" stroke-width="3"><path d="M8 40V25h8v15M20 40V15h8v25M32 40V8h8v32M5 40h38"/></svg>`,
  dashboard: `<svg viewBox="0 0 48 48" fill="none" stroke-width="3"><rect x="5" y="7" width="38" height="30" rx="3"/><path d="M11 29l7-7 6 5 11-12M11 42h26"/></svg>`,
  briefcase: `<svg viewBox="0 0 48 48" fill="none" stroke-width="3"><rect x="5" y="14" width="38" height="26" rx="4"/><path d="M17 14V9h14v5M5 24h38M20 24v4h8v-4"/></svg>`,
  code: `<svg viewBox="0 0 48 48" fill="none" stroke-width="3"><path d="m17 13-11 11 11 11M31 13l11 11-11 11M28 7 20 41"/></svg>`,
  brain: `<svg viewBox="0 0 48 48" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M24 12a8 8 0 0 0-15 4 7 7 0 0 0 0 13 8 8 0 0 0 15 4V12Zm0 0a8 8 0 0 1 15 4 7 7 0 0 1 0 13 8 8 0 0 1-15 4M15 16c4 0 6 2 6 5m-8 10c4 0 6-2 6-5m14-10c-4 0-6 2-6 5m8 10c-4 0-6-2-6-5"/></svg>`,
  database: `<svg viewBox="0 0 48 48" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="24" cy="10" rx="16" ry="6"/><path d="M8 10v14c0 3.3 7.2 6 16 6s16-2.7 16-6V10M8 24v14c0 3.3 7.2 6 16 6s16-2.7 16-6V24"/></svg>`,
  book: `<svg viewBox="0 0 48 48" fill="none" stroke-width="3"><path d="M7 9h12c5 0 7 3 7 7v24c0-4-2-7-7-7H7V9Zm34 0H29c-2 0-3 .4-3 1"/><path d="M41 9v24H29c-1 0-2 .1-3 .5"/></svg>`,
  linkedin: `<svg class="icon-fill" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.5H3.5V21h3V8.5ZM5 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 5 3ZM21 14.1c0-3.77-2.01-5.52-4.69-5.52-2.16 0-3.13 1.19-3.67 2.03V8.87h-3V21h3v-6.01c0-1.58.3-3.11 2.26-3.11 1.93 0 1.96 1.81 1.96 3.21V21H21v-6.9Z"/></svg>`,
  github: `<svg class="icon-fill" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7A11.3 11.3 0 0 0 8.42 22.72c.57.1.78-.24.78-.55v-2.13c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.03 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0 1 12 6.06a10.9 10.9 0 0 1 2.87.39c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.36-5.23 5.65.41.35.78 1.05.78 2.12v3.02c0 .31.2.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></svg>`,
  whatsapp: `<svg class="icon-fill" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.88L2 22l5.25-1.55A9.94 9.94 0 1 0 12.04 2Zm0 17.98a8 8 0 0 1-4.08-1.12l-.29-.17-3.12.92.94-3.04-.19-.31a8 8 0 1 1 6.74 3.72Zm4.39-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.2 7.2 0 0 1-1.34-1.66c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>`
};

const EMAILJS_CONFIG = Object.freeze({
  publicKey: "1145euWmwKq2JZNvQ",
  serviceId: "service_n4kr33o",
  clientTemplateId: "template_ezgipt9",
  notificationTemplateId: "template_6evft2c"
});

let site = null;
let projects = [];
let currentRoute = "about";
let lastFocusedElement = null;
let lastGalleryFocusedElement = null;
let lastSuccessFocusedElement = null;

const el = (sel) => document.querySelector(sel);
const panel = el("#pagePanel");

function esc(value = "") {
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}

async function loadData() {
  const [siteRes, projectsRes] = await Promise.all([
    fetch("data/site.json"),
    fetch("data/projects.json")
  ]);
  site = await siteRes.json();
  projects = await projectsRes.json();
}

function profile() {
  el("#profileName").textContent = site.name;
  el("#roleTags").innerHTML = site.roles.map(role => `<span class="role-tag">${esc(role)}</span>`).join("");
  const contact = site.contact;
  const rows = [
    ["email","Email",contact.email,`mailto:${contact.email}`],
    ["phone","Phone",contact.phone,`tel:${contact.phone.replace(/\s/g,'')}`],
    ["location","Location",contact.location,null]
  ];
  el("#contactList").innerHTML = rows.map(([icon,label,value,href]) => `
    <div class="contact-item">
      <div class="contact-icon">${icons[icon]}</div>
      <div class="contact-meta"><small>${label}</small>${href ? `<a href="${href}">${esc(value)}</a>` : `<span>${esc(value)}</span>`}</div>
    </div>`).join("");

  const socials = [];
  if (contact.linkedin) socials.push(`<a class="social-link" href="${contact.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icons.linkedin}</a>`);
  if (contact.github) socials.push(`<a class="social-link" href="${contact.github}" target="_blank" rel="noreferrer" aria-label="GitHub">${icons.github}</a>`);
  if (contact.phone) socials.push(`<a class="social-link" href="https://wa.me/${contact.phone.replace(/\D/g, '')}" target="_blank" rel="noreferrer" aria-label="WhatsApp">${icons.whatsapp}</a>`);
  socials.push(`<a class="social-link" href="mailto:${contact.email}" aria-label="Email">${icons.email}</a>`);
  el("#socialRow").innerHTML = socials.join("");

  const img = el("#profileImage");
  img.addEventListener("error", () => {
    img.style.display = "none";
    el("#profileFallback").style.display = "grid";
  }, { once: true });
  if (img.complete && !img.naturalWidth) img.dispatchEvent(new Event("error"));
}

function heading(title) {
  return `<div class="section-title-wrap"><h2 class="section-title">${esc(title)}</h2><div class="section-accent"></div></div>`;
}

function googleDriveDownloadUrl(url = "") {
  const fileId = url.match(/\/file\/d\/([^/]+)/)?.[1]
    || url.match(/[?&]id=([^&]+)/)?.[1];
  return fileId ? `https://drive.google.com/uc?export=download&id=${encodeURIComponent(fileId)}` : url;
}

function counterMarkup(value) {
  const match = String(value).match(/^(.*?)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return esc(value);
  const [, prefix, number, suffix] = match;
  const decimals = number.includes(".") ? number.split(".")[1].length : 0;
  return `<span class="counter" data-counter-value="${esc(number)}" data-counter-prefix="${esc(prefix)}" data-counter-suffix="${esc(suffix)}" data-counter-decimals="${decimals}" aria-label="${esc(value)}">${esc(`${prefix}${(0).toFixed(decimals)}${suffix}`)}</span>`;
}

function aboutPage() {
  return `
    ${heading("About Me")}
    <div class="copy"><p>${esc(site.summary)}</p><p>I combine business analysis with hands-on data analytics, helping translate requirements and raw information into structured reporting, useful dashboards and clearer business decisions.</p></div>

    <section class="content-block">
      <h3 class="content-heading">Analytics Snapshot</h3>
      <div class="stats-grid">${site.stats.map(s => `<div class="stat-card"><div class="stat-value">${counterMarkup(s.value)}</div><div class="stat-label">${esc(s.label)}</div></div>`).join("")}</div>
    </section>

    <section class="content-block">
      <h3 class="content-heading">What I'm Doing</h3>
      <div class="services-grid">${site.services.map(s => `<article class="service-card"><div class="service-icon">${icons[s.icon] || icons.chart}</div><div><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p></div></article>`).join("")}</div>
    </section>

    <section class="content-block">
      <h3 class="content-heading">Education & Languages</h3>
      <div class="services-grid">
        <article class="service-card"><div class="service-icon">${icons.book}</div><div><h3>${esc(site.education[0].degree)}</h3><p>${esc(site.education[0].school)}<br>${esc(site.education[0].description)}</p></div></article>
        <article class="service-card"><div class="service-icon">${icons.briefcase}</div><div><h3>Languages</h3><p>${site.languages.map(esc).join("<br>")}</p></div></article>
      </div>
    </section>`;
}

function timelineSection(title, items) {
  return `<section class="timeline-card"><h3 class="subhead"><span class="subhead-icon">${icons.book}</span>${esc(title)}</h3><div class="timeline-list">${items.map(item => `<article class="timeline-item"><div class="timeline-dot">›</div><div><h3>${esc(item.role || item.degree)}${item.company ? `, ${esc(item.company)}` : ''}</h3><div class="timeline-period">${esc(item.period)}</div><p>${esc(item.school || item.description)}</p>${item.school && item.description ? `<p>${esc(item.description)}</p>`:''}</div></article>`).join("")}</div></section>`;
}

function resumePage() {
  return `
    ${heading("Resume")}
    <a class="download-btn" href="${esc(googleDriveDownloadUrl(site.cvUrl))}" download>Download CV ⇩</a>
    <div style="clear:both; margin-bottom:20px;"></div>
    <div class="resume-section">
      ${timelineSection("Professional Experience", site.experience)}
      ${timelineSection("Education", site.education)}
      <section class="skills-card"><h3 class="content-heading">Skills & Interests</h3>${site.skills.map(s => `<div class="skill-row"><div class="skill-label"><span>${esc(s.label)}</span></div><div class="skill-track"><div class="skill-fill" style="width:${Number(s.level)}%"></div></div></div>`).join("")}</section>
    </div>`;
}

function certificateVisual(certificate) {
  const placeholder = `<div class="certificate-placeholder"><strong>CERTIFICATE</strong><span>${esc(certificate.title)}</span></div>`;
  if (!certificate.image) return `<div class="certificate-visual">${placeholder}</div>`;

  return `<div class="certificate-visual has-image"><img class="certificate-image" src="${esc(certificate.image)}" alt="${esc(certificate.title)} certificate" loading="lazy">${placeholder}</div>`;
}

function certificateCard(certificate) {
  const interactive = certificate.image
    ? ` class="certificate-card is-clickable" data-certificate-image="${esc(certificate.image)}" role="button" tabindex="0" aria-label="Open ${esc(certificate.title)} certificate"`
    : ` class="certificate-card"`;

  return `<article${interactive}><div><h3>${esc(certificate.title)}</h3><div class="card-meta">${esc(certificate.date)}</div><p class="card-description">Issued by ${esc(certificate.issuer)}<br>${esc(certificate.description)}</p></div>${certificateVisual(certificate)}</article>`;
}

function certificatesPage() {
  return `${heading("Certificates")}<div class="certificates-list">${site.certificates.map(certificateCard).join("")}</div>`;
}

function projectsPage() {
  return `${heading("Projects")}<div class="projects-list">${projects.map(p => `<article class="project-card" data-project="${esc(p.id)}" role="button" tabindex="0" aria-label="View details for ${esc(p.title)}"><div class="project-copy"><h3>${esc(p.title)}</h3><div class="project-year">${esc(p.year)}</div><p>${esc(p.description)}</p><div class="project-tools">${p.tools.map(t => `<span class="project-tool">${esc(t)}</span>`).join("")}</div></div><img class="project-thumb" src="${esc(p.cover)}" alt="${esc(p.title)} cover"></article>`).join("")}</div>`;
}

function awardsPage() {
  return `${heading("Awards")}<div class="awards-list">${site.awards.map(a => `<article class="award-card"><div><h3>${esc(a.title)}</h3><div class="card-meta">Issued by ${esc(a.issuer)} · ${esc(a.date)}</div><p class="card-description">${esc(a.description)}</p></div><div class="certificate-visual"><div><strong>ACADEMIC EXCELLENCE</strong><span>${esc(a.date)}</span></div></div></article>`).join("")}</div>`;
}

function contactPage() {
  return `${heading("Contact")}
    <section class="contact-intro"><div><span class="eyebrow">Let's connect</span><h2>Have a project or opportunity in mind?</h2><p>Send me a message and I’ll get back to you as soon as possible.</p></div><a class="direct-email" href="mailto:${site.contact.email}">${icons.email}<span><small>Email me directly</small>${esc(site.contact.email)}</span></a></section>
    <section class="contact-card"><h2>Send me a message</h2><form class="form-grid" id="contactForm"><div class="form-row"><div class="form-field"><label for="contactName">Name</label><input id="contactName" name="name" autocomplete="name" placeholder="Your name" required></div><div class="form-field"><label for="contactEmail">Email</label><input id="contactEmail" name="email" type="email" autocomplete="email" placeholder="you@example.com" required></div></div><div class="form-field"><label for="contactSubject">Subject</label><input id="contactSubject" name="subject" placeholder="Subject"></div><div class="form-field"><label for="contactMessage">Message</label><textarea id="contactMessage" name="message" placeholder="Your message" required></textarea></div><button class="submit-btn" type="submit"><span class="submit-btn-label">Send message</span></button><p class="form-status" id="contactFormStatus" role="status" aria-live="polite"></p></form></section>`;
}

function renderRoute(route) {
  currentRoute = route;
  document.querySelectorAll(".nav-item").forEach(btn => {
    const isActive = btn.dataset.route === route;
    btn.classList.toggle("active", isActive);
    if (isActive) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
  const pages = { about: aboutPage, resume: resumePage, certificates: certificatesPage, projects: projectsPage, awards: awardsPage, contact: contactPage };
  panel.innerHTML = (pages[route] || aboutPage)();
  bindDynamicEvents();
  closeMobileNav();
  history.replaceState(null, "", `#${route}`);
  window.scrollTo({top:0,behavior:"smooth"});
}

function setMobileNav(open) {
  const toggle = el(".nav-toggle");
  const nav = el("#portfolioNav");
  if (!toggle || !nav) return;
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
}

function closeMobileNav() {
  setMobileNav(false);
}

function bindDynamicEvents() {
  startCounters();
  panel.querySelectorAll(".certificate-image").forEach(image => {
    const showPlaceholder = () => {
      image.hidden = true;
      image.parentElement.classList.remove("has-image");
      const card = image.closest(".certificate-card");
      card?.classList.remove("is-clickable");
      card?.removeAttribute("data-certificate-image");
      card?.removeAttribute("role");
      card?.removeAttribute("tabindex");
      card?.removeAttribute("aria-label");
    };
    image.addEventListener("error", showPlaceholder, { once: true });
    if (image.complete && !image.naturalWidth) showPlaceholder();
  });
  panel.querySelectorAll("[data-certificate-image]").forEach(card => {
    const openCertificate = () => {
      if (!card.dataset.certificateImage) return;
      openGalleryImage(
        card.dataset.certificateImage,
        card.querySelector("img")?.alt || "Certificate",
        card
      );
    };
    card.addEventListener("click", openCertificate);
    card.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openCertificate();
    });
  });
  panel.querySelectorAll("[data-project]").forEach(card => {
    card.addEventListener("click", () => openProject(card.dataset.project));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProject(card.dataset.project);
      }
    });
  });
  const form = el("#contactForm");
  if (form) form.addEventListener("submit", sendContactEmails);
}

async function sendContactEmails(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector(".submit-btn");
  const buttonLabel = form.querySelector(".submit-btn-label");
  const status = form.querySelector("#contactFormStatus");
  const publicKeyMissing = !EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === "YOUR_EMAILJS_PUBLIC_KEY";

  if (publicKeyMissing || !window.emailjs) {
    status.textContent = publicKeyMissing
      ? "Email service setup is incomplete. Please email me directly for now."
      : "The email service could not load. Please check your connection and try again.";
    status.className = "form-status error";
    return;
  }

  const data = new FormData(form);
  const templateParams = {
    name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    subject: String(data.get("subject") || "").trim() || "Portfolio enquiry",
    message: String(data.get("message") || "").trim()
  };

  submitButton.disabled = true;
  form.setAttribute("aria-busy", "true");
  buttonLabel.textContent = "Sending…";
  // status.textContent = "Sending your message…";
  status.className = "form-status pending";

  let notificationSent = false;

  try {
    const options = { publicKey: EMAILJS_CONFIG.publicKey };

    await window.emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.notificationTemplateId,
      templateParams,
      options
    );
    notificationSent = true;

    // EmailJS accepts one request per second, so keep the two template sends apart.
    await new Promise(resolve => window.setTimeout(resolve, 1100));

    await window.emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.clientTemplateId,
      { email: templateParams.email, name: templateParams.name },
      options
    );

    form.reset();
    status.textContent = "";
    status.className = "form-status";
    openSuccessModal(templateParams.name);
  } catch (error) {
    console.error("EmailJS contact form error:", error);
    if (notificationSent) {
      form.reset();
      // status.textContent = "Your message was received, but the confirmation email could not be sent.";
      // status.className = "form-status warning";
    } else {
      // status.textContent = "Your message could not be sent. Please try again or email me directly.";
      // status.className = "form-status error";
    }
  } finally {
    submitButton.disabled = false;
    form.removeAttribute("aria-busy");
    buttonLabel.textContent = "Send message";
  }
}

function startCounters() {
  const counters = panel.querySelectorAll("[data-counter-value]");
  if (!counters.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animate = counter => {
    if (counter.dataset.counted === "true") return;
    counter.dataset.counted = "true";

    const target = Number(counter.dataset.counterValue);
    const decimals = Number(counter.dataset.counterDecimals);
    const prefix = counter.dataset.counterPrefix;
    const suffix = counter.dataset.counterSuffix;
    const render = value => {
      counter.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
    };

    if (reduceMotion || !Number.isFinite(target)) {
      render(target);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      render(target * eased);
      if (progress < 1 && counter.isConnected) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animate(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });
  counters.forEach(counter => observer.observe(counter));
}

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  const gallery = Array.isArray(p.gallery) ? p.gallery.filter(Boolean) : [];
  const galleryMarkup = gallery.length ? `
    <h3 style="margin-top:24px">Project Gallery</h3>
    <div class="modal-gallery">${gallery.map((img, index) => `
      <button class="gallery-image-button" type="button" data-gallery-image="${esc(img)}" aria-label="Open ${esc(p.title)} gallery image ${index + 1}">
        <img src="${esc(img)}" alt="${esc(p.title)} project image ${index + 1}">
      </button>`).join("")}
    </div>` : "";
  lastFocusedElement = document.activeElement;
  el("#projectModalContent").innerHTML = `<div class="modal-body"><div class="card-meta">${esc(p.category)} · ${esc(p.year)}</div><h2 id="projectModalTitle">${esc(p.title)}</h2><img class="modal-cover" src="${esc(p.cover)}" alt=""><p>${esc(p.description)}</p><h3>Highlights</h3><ul class="modal-highlights">${p.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul><div class="project-tools">${p.tools.map(t => `<span class="project-tool">${esc(t)}</span>`).join("")}</div>${galleryMarkup}</div>`;
  const modal = el("#projectModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelectorAll("[data-gallery-image]").forEach(button => {
    button.addEventListener("click", () => openGalleryImage(
      button.dataset.galleryImage,
      button.querySelector("img")?.alt || `${p.title} project image`,
      button
    ));
  });
  modal.querySelector(".modal-close").focus();
}

function openGalleryImage(src, alt, trigger) {
  lastGalleryFocusedElement = trigger;
  const lightbox = el("#imageLightbox");
  const image = el("#lightboxImage");
  image.src = src;
  image.alt = alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox-close").focus();
}

function closeGalleryImage(restoreFocus = true) {
  const lightbox = el("#imageLightbox");
  if (!lightbox.classList.contains("open")) return false;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  el("#lightboxImage").removeAttribute("src");
  if (!el("#projectModal").classList.contains("open")) document.body.style.overflow = "";
  if (restoreFocus) lastGalleryFocusedElement?.focus();
  lastGalleryFocusedElement = null;
  return true;
}

function closeModal() {
  const modal = el("#projectModal");
  if (!modal.classList.contains("open")) return;
  closeGalleryImage(false);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lastFocusedElement?.focus();
  lastFocusedElement = null;
}

function openSuccessModal(name) {
  const modal = el("#successModal");
  lastSuccessFocusedElement = document.activeElement;
el("#successModalMessage").textContent =
  `Thank you for reaching out${name ? `, ${name}` : ""}! I’ve received your message and will get back to you as soon as possible.`;  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeSuccessModal() {
  const modal = el("#successModal");
  if (!modal.classList.contains("open")) return false;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lastSuccessFocusedElement?.focus();
  lastSuccessFocusedElement = null;
  return true;
}

async function init() {
  try {
    await loadData();
    profile();
    document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => renderRoute(btn.dataset.route)));
    el(".nav-toggle")?.addEventListener("click", event => {
      const isOpen = event.currentTarget.getAttribute("aria-expanded") === "true";
      setMobileNav(!isOpen);
    });
    document.querySelectorAll("[data-close-modal]").forEach(n => n.addEventListener("click", closeModal));
    document.querySelectorAll("[data-close-success-modal]").forEach(n => n.addEventListener("click", closeSuccessModal));
    document.querySelectorAll("[data-close-lightbox]").forEach(n => n.addEventListener("click", () => closeGalleryImage()));
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        if (!closeGalleryImage() && !closeSuccessModal()) closeModal();
        closeMobileNav();
      }
    });
    window.matchMedia("(min-width: 681px)").addEventListener("change", event => {
      if (event.matches) closeMobileNav();
    });
    const requested = location.hash.replace("#", "");
    renderRoute(["about","resume","certificates","projects","awards","contact"].includes(requested) ? requested : "about");
  } catch (err) {
    panel.innerHTML = `${heading("Portfolio could not load")}<div class="copy"><p>This site reads its content from JSON files. Run it through a local web server instead of opening index.html directly.</p><p>Example: <code>python3 -m http.server 8080</code></p></div>`;
    console.error(err);
  }
}

init();
