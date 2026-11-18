/* =========================================================
   contact.js — validación + envío del formulario
   - Validación nativa con feedback inline accesible
   - Honeypot silencioso
   - Fallback mailto: hasta tener endpoint
   ========================================================= */
(() => {
  "use strict";
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const honeypot = document.getElementById("website");
  // Cuando tengas Formspree / Worker, cambia "null" por la URL.
  const ENDPOINT = null;
  // Fallback: mailto con destinatario
  const MAILTO = "hello@arandaelectrics.com";
  // Mensajes de error traducidos (mismo esquema que i18n.js)
  const MSG = {
    en: {
      required: "This field is required.",
      email: "Please enter a valid email address.",
      sending: "Sending…",
      success: "Thanks! We'll be in touch the same day.",
      sent: "Your email app should open. If nothing happens, WhatsApp us.",
      error: "Couldn't send. Please WhatsApp us instead.",
      generic: "Please review the highlighted fields."
    },
    es: {
      required: "Este campo es obligatorio.",
      email: "Introduce un email válido.",
      sending: "Enviando…",
      success: "¡Gracias! Te responderemos el mismo día.",
      sent: "Se abrirá tu correo. Si no pasa nada, escríbenos por WhatsApp.",
      error: "No se pudo enviar. Escríbenos por WhatsApp.",
      generic: "Revisa los campos marcados."
    }
  };
  function lang() {
    return document.documentElement.lang === "es" ? "es" : "en";
  }
  function t(key) {
    return (MSG[lang()] || MSG.en)[key] || MSG.en[key] || "";
  }
  // --- Pintar/limpiar estado de un campo ---
  function markInvalid(field, messageKey) {
    field.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");
    // Mensaje inline asociado por id: <input-Id>-error
    const errId = `${field.id}-error`;
    let errEl = document.getElementById(errId);
    if (!errEl) {
      errEl = document.createElement("small");
      errEl.id = errId;
      errEl.className = "form-error";
      // aria-describedby ya lo tiene message (hint); apilamos
      const existing = field.getAttribute("aria-describedby");
      field.setAttribute(
        "aria-describedby",
        existing ? `${existing} ${errId}` : errId
      );
      field.insertAdjacentElement("afterend", errEl);
    }
    errEl.textContent = t(messageKey);
  }
  function clearInvalid(field) {
    field.classList.remove("is-invalid");
    field.removeAttribute("aria-invalid");
    const errEl = document.getElementById(`${field.id}-error`);
    if (errEl) errEl.remove();
  }
  // --- Validar un campo individual ---
  function validateField(field) {
    if (!field.willValidate) return true;
    if (!field.checkValidity()) {
      // Si el navegador indica un tipo email mal formado
      if (field.type === "email" && field.validity.typeMismatch) {
        markInvalid(field, "email");
      } else {
        markInvalid(field, "required");
      }
      return false;
    }
    clearInvalid(field);
    return true;
  }
  // --- Validación en vivo (blur + input) ---
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    if (field === honeypot) return;
    field.addEventListener("blur", () => {
      if (field.value.trim() !== "") validateField(field);
    });
    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid")) validateField(field);
    });
  });
  // --- Construir datos del formulario ---
  function buildPayload() {
    const fd = new FormData(form);
    fd.delete("website"); // honeypot fuera
    return fd;
  }
  // --- Fallback mailto ---
  function submitViaMailto() {
    const fd = buildPayload();
    const lines = [];
    for (const [key, value] of fd.entries()) {
      lines.push(`${key}: ${value}`);
    }
    const subject = encodeURIComponent("Website enquiry — Aranda Electrics");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${MAILTO}?subject=${subject}&body=${body}`;
  }
  // --- Submit ---
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Honeypot: bot rellena → nos callamos
    if (honeypot && honeypot.value.trim() !== "") return;
    // Validar todos los campos
    let allValid = true;
    form.querySelectorAll("input, select, textarea").forEach((field) => {
      if (field === honeypot || !field.willValidate) return;
      if (!validateField(field)) allValid = false;
    });
    if (!allValid) {
      if (status) status.textContent = t("generic");
      // Foco al primer inválido (accesibilidad)
      const firstInvalid = form.querySelector(".is-invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    if (status) status.textContent = t("sending");
    // Sin endpoint todavía → mailto
    if (!ENDPOINT) {
      submitViaMailto();
      if (status) status.textContent = t("sent");
      return;
    }
    // Envío real
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: buildPayload(),
        headers: { Accept: "application/json" }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      if (status) status.textContent = t("success");
      form.reset();
      form.querySelectorAll(".is-invalid").forEach(clearInvalid);
    } catch (err) {
      console.error("[contact] send failed:", err);
      if (status) status.textContent = t("error");
    }
  });
  // --- Al cambiar idioma: repintar errores visibles ---
  document.addEventListener("langchange", () => {
    form.querySelectorAll(".is-invalid").forEach((field) => {
      const errEl = document.getElementById(`${field.id}-error`);
      if (!errEl) return;
      // Repetir validación para regenerar el mensaje en el nuevo idioma
      validateField(field);
    });
    if (status && status.textContent) status.textContent = "";
  });
})();
