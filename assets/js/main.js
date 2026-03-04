// assets/js/script.js
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.style.display === "flex";
  nav.style.display = isOpen ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.right = "4%";
  nav.style.top = "64px";
  nav.style.background = "rgba(15,17,21,.95)";
  nav.style.border = "1px solid rgba(255,255,255,.08)";
  nav.style.padding = "12px";
  nav.style.borderRadius = "14px";
  nav.style.gap = "12px";
});

// Copiar (WhatsApp e endereço)
const copyHint = document.getElementById("copyHint");
const copyButtons = document.querySelectorAll("[data-copy]");

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

copyButtons.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-copy") || "";
    const ok = await copyToClipboard(text);

    if (copyHint) {
      copyHint.textContent = ok ? "Copiado!" : "Não foi possível copiar. Se quiser, copie manualmente.";
      window.clearTimeout(copyHint._t);
      copyHint._t = window.setTimeout(() => (copyHint.textContent = ""), 1800);
    }
  });
});