// ==================================================
// GUIA RAPIDO (script.js)
// 1) Canvas: gradiente + estrelas
// 2) Animacao de entrada das secoes
// 3) Movimento do widget no scroll
// 4) Chat do widget conectado ao backend
// ==================================================
// criar sessão persistente do chat
const sessionId =
  localStorage.getItem("chat_session") || crypto.randomUUID();

localStorage.setItem("chat_session", sessionId);
const canvas = document.getElementById("space-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;

const config = {
  starsCount: 200,
};

const state = {
  width: window.innerWidth,
  height: window.innerHeight,
  time: 0,
  stars: [],
};

// ==================================================
// CRIAR ESTRELAS
// ==================================================

function createStars() {
  if (!ctx) return;

  state.stars = [];

  for (let i = 0; i < config.starsCount; i++) {
    state.stars.push({
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      radius: Math.random() * 1.8 + 0.4,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.025 + 0.01,
    });
  }
}

// ==================================================
// REDIMENSIONAR CANVAS
// ==================================================

function resizeCanvas() {
  if (!canvas || !ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  state.width = window.innerWidth;
  state.height = window.innerHeight;

  canvas.width = Math.floor(state.width * dpr);
  canvas.height = Math.floor(state.height * dpr);

  canvas.style.width = `${state.width}px`;
  canvas.style.height = `${state.height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  createStars();
}

// ==================================================
// DESENHAR FUNDO
// ==================================================

function drawBackground() {
  if (!ctx) return;

  const gradient = ctx.createLinearGradient(0, 0, 0, state.height);

  gradient.addColorStop(0, "#4a1a6b");
  gradient.addColorStop(1, "#0a0a1a");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, state.width, state.height);
}

// ==================================================
// DESENHAR ESTRELAS
// ==================================================

function drawStars() {
  if (!ctx) return;

  for (const star of state.stars) {
    const twinkle =
      0.45 + 0.55 * Math.sin(state.time * star.speed + star.phase);

    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${twinkle})`;
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ==================================================
// LOOP DE ANIMAÇÃO
// ==================================================

function render() {
  if (!ctx) return;

  state.time += 1;

  drawBackground();
  drawStars();

  requestAnimationFrame(render);
}

// ==================================================
// ANIMAÇÃO DAS SEÇÕES
// ==================================================

function initRevealObserver() {
  const sections = document.querySelectorAll(".reveal");

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// ==================================================
// MOVIMENTO DO WIDGET
// ==================================================

function initFloatingAgentMotion() {
  const widget = document.querySelector(".agent-float");

  if (!widget) return;

  let lastY = window.scrollY;
  let targetShift = 0;
  let currentShift = 0;

  window.addEventListener(
    "scroll",
    () => {
      const nowY = window.scrollY;
      const delta = nowY - lastY;

      lastY = nowY;

      targetShift += Math.max(-10, Math.min(10, delta * 0.2));
      targetShift = Math.max(-16, Math.min(16, targetShift));
    },
    { passive: true }
  );

  function animateWidget() {
    currentShift += (targetShift - currentShift) * 0.08;

    targetShift *= 0.92;

    widget.style.transform = `translateY(${currentShift.toFixed(2)}px)`;

    requestAnimationFrame(animateWidget);
  }

  animateWidget();
}

// ==================================================
// CHAT DO AGENTE (INTEGRADO COM FLASK)
// ==================================================

function initFloatingAgentChat() {

  const form = document.getElementById("agent-float-form");
  const input = document.getElementById("agent-float-input");
  const messages = document.getElementById("agent-float-messages");

  if (!form || !input || !messages) return;

  function appendMessage(text, sender) {

    const bubble = document.createElement("div");

    bubble.className = `agent-msg agent-msg--${sender}`;
    bubble.textContent = text;

    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;

  }

  form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const question = input.value.trim();

    if (!question) return;

    appendMessage(question, "user");

    input.value = "";

    // animação digitando
    const typing = document.createElement("div");
    typing.className = "agent-msg agent-msg--agent typing";

    typing.innerHTML = `
      <div class="typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;

    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    try {

      const response = await fetch("/perguntar", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

       body: JSON.stringify({
          pergunta: question,
          session_id: sessionId
        })

      });

      const data = await response.json();

      typing.remove();

      appendMessage(data.resposta, "agent");

    } catch (error) {

      typing.remove();

      appendMessage(
        "Erro ao conectar com o agente.",
        "agent"
      );

    }

  });

}

// ==================================================
// INICIALIZAÇÃO
// ==================================================

document.addEventListener("DOMContentLoaded", () => {

  resizeCanvas();

  if (ctx) render();

  initRevealObserver();

  initFloatingAgentMotion();

  initFloatingAgentChat();

  window.addEventListener("resize", resizeCanvas);

});