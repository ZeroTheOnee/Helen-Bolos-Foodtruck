/* ========================================
   Promocoes - Controle central
   ======================================== */

const CONFIG = {
  promocaoDoDia: "cupom" // valores: "raspadinha", "cupom", "nenhuma"

};
function podeResgatarPromo() {
  const ultimoResgate = localStorage.getItem("promoResgate");
  const hoje = new Date().toDateString();

  return ultimoResgate !== hoje;
}

function marcarResgatePromo() {
  localStorage.setItem("promoResgate", new Date().toDateString());
}

(function () {
  const PROMO_CONFIG = {
    cupons: ["DESC5"],
    premiosRaspadinha: ["DESC5"]
  };

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function notify(message) {
    if (typeof showToast === "function") {
      showToast(message);
    }
  }

  function initPromocoes() {
    if (!podeResgatarPromo()) return;
    if (CONFIG.promocaoDoDia === "raspadinha") {
      initRaspadinha();
      return;
    }

    if (CONFIG.promocaoDoDia === "cupom") {
      initCupomEscondido();
    }
  }

  function initCupomEscondido() {
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "hidden-coupon-trigger";
    trigger.setAttribute("aria-label", "Cupom secreto escondido");
    trigger.innerHTML = "<span>*</span>";

    const position = getRandomCouponPosition();
    trigger.style.left = position.left;
    trigger.style.top = position.top;

    trigger.addEventListener("click", () => revealCoupon(trigger));
    document.body.appendChild(trigger);
  }

  function getRandomCouponPosition() {
    const safeLeft = window.innerWidth < 560 ? [8, 78] : [8, 88];
    const safeTop = window.innerWidth < 560 ? [18, 82] : [16, 78];
    const left = Math.floor(safeLeft[0] + Math.random() * (safeLeft[1] - safeLeft[0]));
    const top = Math.floor(safeTop[0] + Math.random() * (safeTop[1] - safeTop[0]));

    return {
      left: `${left}vw`,
      top: `${top}vh`
    };
  }

  function revealCoupon(trigger) {
    const couponCode = randomItem(PROMO_CONFIG.cupons);
    trigger.remove();

    const modal = document.createElement("div");
    modal.className = "promo-found-pop";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `
      <div class="promo-found-card">
        <h2>Parabéns! Você encontrou um cupom secreto 🎉</h2>
        <div class="promo-code-box">
          <span>Código promocional</span>
          <strong>${couponCode}</strong>
        </div>
        <button type="button" class="promo-action-btn" data-close-promo>Resgatar</button>
      </div>
    `;

    modal.querySelector("[data-close-promo]").addEventListener("click", () => {
      modal.remove();
      marcarResgatePromo();
      applyPromotionalCoupon(couponCode);
    });

    document.body.appendChild(modal);
  }

  function initRaspadinha() {
    const premio = randomItem(PROMO_CONFIG.premiosRaspadinha);
    const modal = document.createElement("div");
    modal.className = "scratch-overlay";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `
      <div class="scratch-card">
        <h2>Raspe e descubra seu prêmio 🎁</h2>
        <p>Use o dedo no celular ou o mouse no computador para revelar sua promoção.</p>
        <div class="scratch-area">
          <div class="scratch-prize">
            <div class="scratch-prize-box">
              <span>Seu prêmio</span>
              <strong>5% OFF</strong>
            </div>
          </div>
          <canvas class="scratch-canvas" aria-label="Area da raspadinha"></canvas>
        </div>
        <div class="scratch-actions">
          <button type="button" class="promo-action-btn scratch-redeem">Resgatar</button>
          <button type="button" class="promo-secondary-btn scratch-dismiss">Fechar</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const canvas = modal.querySelector(".scratch-canvas");
    const redeemButton = modal.querySelector(".scratch-redeem");
    const dismissButton = modal.querySelector(".scratch-dismiss");

    setupScratchCanvas(canvas, () => {
      revealScratch(canvas, redeemButton);
    });

    redeemButton.addEventListener("click", () => {
      modal.remove();
      marcarResgatePromo();
      applyPromotionalCoupon(premio);
    });

    dismissButton.addEventListener("click", () => {
      modal.remove();
    });
  }

  function setupScratchCanvas(canvas, onComplete) {
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let isDrawing = false;
    let completed = false;
    let isCanvasReady = false;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(rect.width * ratio);
      canvas.height = Math.floor(rect.height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      paintScratchCover(ctx, rect.width, rect.height);
      canvas.closest(".scratch-area").classList.add("is-ready");
      isCanvasReady = true;
    }

    function getPoint(event) {
      const rect = canvas.getBoundingClientRect();
      const pointer = event.touches ? event.touches[0] : event;
      return {
        x: pointer.clientX - rect.left,
        y: pointer.clientY - rect.top
      };
    }

    function scratch(event) {
      if (!isDrawing || completed || !isCanvasReady) return;
      event.preventDefault();

      const point = getPoint(event);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";

      if (getScratchedPercent(canvas, ctx) >= 50) {
        completed = true;
        onComplete();
      }
    }

    requestAnimationFrame(resizeCanvas);

    canvas.addEventListener("mousedown", (event) => {
      isDrawing = true;
      scratch(event);
    });
    canvas.addEventListener("mousemove", scratch);
    window.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    canvas.addEventListener("touchstart", (event) => {
      isDrawing = true;
      scratch(event);
    }, { passive: false });
    canvas.addEventListener("touchmove", scratch, { passive: false });
    canvas.addEventListener("touchend", () => {
      isDrawing = false;
    });
  }

  function paintScratchCover(ctx, width, height) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#f6dfaa");
    gradient.addColorStop(0.5, "#c79043");
    gradient.addColorStop(1, "#7b4a1d");

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(27, 18, 8, 0.78)";
    ctx.font = "800 18px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("RASPE AQUI", width / 2, height / 2);

    ctx.fillStyle = "rgba(255, 248, 237, 0.2)";
    for (let x = -width; x < width * 2; x += 22) {
      ctx.fillRect(x, 0, 8, height * 2);
    }
  }

  function getScratchedPercent(canvas, ctx) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparentPixels = 0;

    for (let index = 3; index < imageData.length; index += 4) {
      if (imageData[index] < 128) transparentPixels++;
    }

    return (transparentPixels / (imageData.length / 4)) * 100;
  }

  function revealScratch(canvas, redeemButton) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = "none";
    redeemButton.classList.add("is-visible");
  }

  function applyPromotionalCoupon(couponCode) {
    if (typeof window.applyPromoCoupon === "function") {
      window.applyPromoCoupon(couponCode);
      return;
    }

    const couponInput = document.getElementById("couponInput");
    if (couponInput) {
      couponInput.value = couponCode;
    }

    notify("Cupom preenchido no pedido");
  }

  document.addEventListener("DOMContentLoaded", initPromocoes);
})();
