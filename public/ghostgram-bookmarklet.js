/**
 * GhostGram Web - Instagram Stealth Mode Bookmarklet
 * Author: Kai Liu (https://kkleon.com)
 * Version: 1.0.0
 * 
 * Functions:
 * 1. Blocks Instagram Story seen receipts (/api/v1/stories/reel/seen, stories_seen)
 * 2. Blocks Direct Message seen receipts (/direct_v2/threads/.../seen, mark_as_seen)
 * 3. Injects interactive Draggable Pink Floating Action Button & Glassmorphism Dashboard
 */

(function () {
  if (window.__GHOSTGRAM_ACTIVE__) {
    if (window.__GHOSTGRAM_TOGGLE_PANEL__) {
      window.__GHOSTGRAM_TOGGLE_PANEL__();
    } else {
      alert("👻 GhostGram 隱身模式已在運行中！");
    }
    return;
  }

  window.__GHOSTGRAM_ACTIVE__ = true;
  window.__GHOSTGRAM_CONFIG__ = {
    ghostMode: true,
    showToasts: true,
    storyBlocked: 0,
    dmBlocked: 0
  };

  // 1. Toast Notification System
  function showToast(message, icon = "👻") {
    if (!window.__GHOSTGRAM_CONFIG__.showToasts) return;
    const existing = document.getElementById("ghostgram-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "ghostgram-toast";
    toast.style.cssText = `
      position: fixed;
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(18, 18, 24, 0.95);
      color: #ffffff;
      border: 1px solid rgba(255, 45, 85, 0.6);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 45, 85, 0.35);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 9999px;
      padding: 10px 22px;
      font-size: 13px;
      font-weight: 500;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      z-index: 2147483647;
      display: flex;
      align-items: center;
      gap: 10px;
      pointer-events: none;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      transform: translate(-50%, -10px) scale(0.95);
    `;
    toast.innerHTML = `<span style="font-size:16px;">${icon}</span><span style="letter-spacing:0.3px;">${message}</span>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translate(-50%, 0) scale(1)";
    });

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translate(-50%, -10px) scale(0.95)";
      setTimeout(() => toast.remove(), 350);
    }, 2800);
  }

  // 2. Network Interceptors (fetch & XMLHttpRequest)
  const origFetch = window.fetch;
  window.fetch = async function (...args) {
    const url = typeof args[0] === "string" ? args[0] : (args[0] && args[0].url ? args[0].url : "");
    if (window.__GHOSTGRAM_CONFIG__.ghostMode) {
      if (url.includes("/api/v1/stories/reel/seen") || url.includes("stories_seen")) {
        window.__GHOSTGRAM_CONFIG__.storyBlocked++;
        updateBadge();
        showToast("已隱身攔截限時動態已讀打點", "👁️");
        return new Response(JSON.stringify({ status: "ok" }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }
      if (url.includes("/direct_v2/threads/") && (url.includes("/seen") || url.includes("mark_as_seen"))) {
        window.__GHOSTGRAM_CONFIG__.dmBlocked++;
        updateBadge();
        showToast("已隱身攔截私訊已讀標記", "💬");
        return new Response(JSON.stringify({ status: "ok" }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    return origFetch.apply(this, args);
  };

  const origOpen = XMLHttpRequest.prototype.open;
  const origSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    this.__gg_url = url;
    return origOpen.apply(this, [method, url, ...rest]);
  };
  XMLHttpRequest.prototype.send = function (...args) {
    const url = this.__gg_url || "";
    if (window.__GHOSTGRAM_CONFIG__.ghostMode) {
      if (url.includes("/api/v1/stories/reel/seen") || url.includes("stories_seen")) {
        window.__GHOSTGRAM_CONFIG__.storyBlocked++;
        updateBadge();
        showToast("已隱身攔截限時動態已讀打點", "👁️");
        Object.defineProperty(this, "status", { value: 200, writable: true });
        Object.defineProperty(this, "responseText", { value: JSON.stringify({ status: "ok" }), writable: true });
        this.dispatchEvent(new Event("load"));
        return;
      }
      if (url.includes("/direct_v2/threads/") && (url.includes("/seen") || url.includes("mark_as_seen"))) {
        window.__GHOSTGRAM_CONFIG__.dmBlocked++;
        updateBadge();
        showToast("已隱身攔截私訊已讀標記", "💬");
        Object.defineProperty(this, "status", { value: 200, writable: true });
        Object.defineProperty(this, "responseText", { value: JSON.stringify({ status: "ok" }), writable: true });
        this.dispatchEvent(new Event("load"));
        return;
      }
    }
    return origSend.apply(this, args);
  };

  // 3. Floating Draggable Button & Control Panel
  const btn = document.createElement("div");
  btn.id = "ghostgram-fab";
  btn.style.cssText = `
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FF2D55 0%, #E1306C 50%, #F77737 100%);
    box-shadow: 0 8px 24px rgba(225, 48, 108, 0.45), 0 2px 8px rgba(0,0,0,0.25);
    cursor: pointer;
    z-index: 2147483646;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    touch-action: none;
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
  `;
  btn.innerHTML = `
    <svg style="width:32px;height:32px;fill:white;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));" viewBox="0 0 24 24">
      <path d="M12 2C7.58 2 4 5.58 4 10v9.5c0 .69.69 1.15 1.31.84L7.5 19.3l2.19 1.04c.4.19.88.19 1.28 0l2.03-.97 2.03.97c.4.19.88.19 1.28 0l2.19-1.04 2.19 1.04c.62.31 1.31-.15 1.31-.84V10c0-4.42-3.58-8-8-8zm-2.5 10c-.83 0-1.5-.67-1.5-1.5S8.67 9 9.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
    <div id="ghostgram-badge" style="position:absolute;top:-4px;right:-4px;background:#10B981;color:white;font-size:10px;font-weight:700;padding:2px 6px;border-radius:10px;border:2px solid #fff;display:none;box-shadow:0 2px 6px rgba(0,0,0,0.2);">0</div>
  `;

  // Control Panel Modal
  const panel = document.createElement("div");
  panel.id = "ghostgram-panel";
  panel.style.cssText = `
    position: fixed;
    bottom: 110px;
    right: 40px;
    width: 320px;
    background: rgba(22, 22, 28, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    padding: 20px;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(225, 48, 108, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 2147483646;
    display: none;
    animation: ggFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  function renderPanel() {
    const isGhost = window.__GHOSTGRAM_CONFIG__.ghostMode;
    const isToast = window.__GHOSTGRAM_CONFIG__.showToasts;
    panel.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:between;margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:10px;height:10px;border-radius:50%;background:${isGhost ? '#10B981' : '#EF4444'};box-shadow:0 0 8px ${isGhost ? '#10B981' : '#EF4444'};"></div>
          <span style="font-weight:700;font-size:15px;letter-spacing:0.3px;">GhostGram 隱身中控</span>
        </div>
        <button id="gg-close-btn" style="background:none;border:none;color:#888;cursor:pointer;font-size:16px;padding:4px;margin-left:auto;">✕</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:rgba(255,255,255,0.05);border-radius:14px;">
          <div>
            <div style="font-size:13px;font-weight:600;">👻 隱身模式</div>
            <div style="font-size:11px;color:#aaa;">攔截限動與私訊已讀打點</div>
          </div>
          <label style="position:relative;display:inline-block;width:44px;height:24px;cursor:pointer;">
            <input type="checkbox" id="gg-ghost-toggle" ${isGhost ? 'checked' : ''} style="opacity:0;width:0;height:0;">
            <span style="position:absolute;inset:0;background:${isGhost ? '#FF2D55' : '#444'};border-radius:24px;transition:0.2s;">
              <span style="position:absolute;height:18px;width:18px;left:${isGhost ? '22px' : '3px'};bottom:3px;background:white;border-radius:50%;transition:0.2s;"></span>
            </span>
          </label>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:rgba(255,255,255,0.05);border-radius:14px;">
          <div>
            <div style="font-size:13px;font-weight:600;">🔔 攔截浮動提示</div>
            <div style="font-size:11px;color:#aaa;">攔截成功時顯示通知</div>
          </div>
          <label style="position:relative;display:inline-block;width:44px;height:24px;cursor:pointer;">
            <input type="checkbox" id="gg-toast-toggle" ${isToast ? 'checked' : ''} style="opacity:0;width:0;height:0;">
            <span style="position:absolute;inset:0;background:${isToast ? '#FF2D55' : '#444'};border-radius:24px;transition:0.2s;">
              <span style="position:absolute;height:18px;width:18px;left:${isToast ? '22px' : '3px'};bottom:3px;background:white;border-radius:50%;transition:0.2s;"></span>
            </span>
          </label>
        </div>
      </div>

      <div style="display:grid;grid-cols:2;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
        <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:10px;text-align:center;">
          <div style="font-size:11px;color:#888;">已攔截限動</div>
          <div style="font-size:18px;font-weight:700;color:#FF2D55;" id="gg-stat-story">${window.__GHOSTGRAM_CONFIG__.storyBlocked} 次</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:10px;text-align:center;">
          <div style="font-size:11px;color:#888;">已攔截私訊</div>
          <div style="font-size:18px;font-weight:700;color:#F77737;" id="gg-stat-dm">${window.__GHOSTGRAM_CONFIG__.dmBlocked} 次</div>
        </div>
      </div>

      <div style="text-align:center;font-size:11px;color:#666;">
        GhostGram Web • 由 <a href="https://kkleon.com" target="_blank" style="color:#FF2D55;text-decoration:none;">Kai Liu</a> 開發
      </div>
    `;

    document.getElementById("gg-close-btn").onclick = () => { panel.style.display = "none"; };
    document.getElementById("gg-ghost-toggle").onchange = (e) => {
      window.__GHOSTGRAM_CONFIG__.ghostMode = e.target.checked;
      renderPanel();
      showToast(window.__GHOSTGRAM_CONFIG__.ghostMode ? "隱身模式已啟用" : "隱身模式已停用", window.__GHOSTGRAM_CONFIG__.ghostMode ? "👻" : "⚠️");
    };
    document.getElementById("gg-toast-toggle").onchange = (e) => {
      window.__GHOSTGRAM_CONFIG__.showToasts = e.target.checked;
      renderPanel();
    };
  }

  function updateBadge() {
    const total = window.__GHOSTGRAM_CONFIG__.storyBlocked + window.__GHOSTGRAM_CONFIG__.dmBlocked;
    const badge = document.getElementById("ghostgram-badge");
    if (badge) {
      badge.textContent = total;
      badge.style.display = total > 0 ? "block" : "none";
    }
    const statStory = document.getElementById("gg-stat-story");
    const statDm = document.getElementById("gg-stat-dm");
    if (statStory) statStory.textContent = `${window.__GHOSTGRAM_CONFIG__.storyBlocked} 次`;
    if (statDm) statDm.textContent = `${window.__GHOSTGRAM_CONFIG__.dmBlocked} 次`;
  }

  // 4. Draggable Logic
  let isDragging = false;
  let startX, startY, initialX, initialY;

  btn.addEventListener("mousedown", (e) => {
    isDragging = false;
    startX = e.clientX;
    startY = e.clientY;
    const rect = btn.getBoundingClientRect();
    initialX = rect.left;
    initialY = rect.top;

    function onMouseMove(moveEvent) {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        isDragging = true;
        btn.style.right = "auto";
        btn.style.bottom = "auto";
        btn.style.left = `${initialX + dx}px`;
        btn.style.top = `${initialY + dy}px`;
      }
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  btn.addEventListener("click", () => {
    if (!isDragging) {
      togglePanel();
    }
  });

  function togglePanel() {
    if (panel.style.display === "none" || panel.style.display === "") {
      renderPanel();
      panel.style.display = "block";
      // Adjust panel position relative to button
      const rect = btn.getBoundingClientRect();
      panel.style.bottom = "auto";
      panel.style.right = "auto";
      let top = rect.top - 290;
      let left = rect.left - 130;
      if (top < 10) top = rect.bottom + 10;
      if (left < 10) left = 10;
      if (left + 330 > window.innerWidth) left = window.innerWidth - 340;
      panel.style.top = `${top}px`;
      panel.style.left = `${left}px`;
    } else {
      panel.style.display = "none";
    }
  }

  window.__GHOSTGRAM_TOGGLE_PANEL__ = togglePanel;

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  showToast("👻 GhostGram 隱身模式已成功注入 Instagram！", "✨");
})();
