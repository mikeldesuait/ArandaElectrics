/* =========================================================
   main.js — interacciones de UI
   - Menú móvil accesible
   - Año dinámico
   - Smooth-scroll con offset del header sticky
   - Cierre del menú al cambiar idioma
   ========================================================= */
(() => {
  "use strict";
  /* ---------- 1. MENÚ MÓVIL ---------- */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function openMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    // Bloqueo de scroll solo en móvil (cuando el menú está en modo columna)
    if (window.matchMedia("(max-width: 959px)").matches) {
      document.body.style.overflow = "hidden";
    }
  }
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });
    // Cerrar al hacer click en un enlace interno
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 959px)").matches) closeMenu();
      });
    });
    // Cerrar con Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });
    // Reajustar si se pasa a desktop con el menú abierto
    const mq = window.matchMedia("(min-width: 960px)");
    const onResize = (e) => { if (e.matches) closeMenu(); };
    if (mq.addEventListener) mq.addEventListener("change", onResize);
    else mq.addListener(onResize); // fallback Safari antiguo
  }
  /* ---------- 2. AÑO DINÁMICO ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  /* ---------- 3. SMOOTH-SCROLL CON OFFSET ---------- */
  /* El header es sticky (~64px). Leemos su altura real y desplazamos
     el scroll para que el título de la sección no quede tapado. */
  const header = document.querySelector(".site-header");
  function scrollToHash(hash) {
    if (!hash || hash === "#") return;
    const target = document.querySelector(hash);
    if (!target) return;
    const headerH = header ? header.getBoundingClientRect().height : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
    window.scrollTo({ top, behavior: "smooth" });
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      scrollToHash(href);
      // Actualizar la URL sin recargar (para compartir y volver atrás)
      history.pushState(null, "", href);
    });
  });
  // Si llega ya con #hash en la URL
  if (window.location.hash) {
    // pequeño timeout para asegurar layout cargado
    window.setTimeout(() => scrollToHash(window.location.hash), 60);
  }
  /* ---------- 4. CERRAR MENÚ AL CAMBIAR IDIOMA ---------- */
  document.addEventListener("langchange", () => {
    if (window.matchMedia("(max-width: 959px)").matches) closeMenu();
  });
})();
