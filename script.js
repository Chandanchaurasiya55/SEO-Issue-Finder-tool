      // ── Custom cursor ──
      document.addEventListener("mousemove", (e) => {
        const c = document.getElementById("cur"),
          d = document.getElementById("curDot");
        c.style.left = e.clientX - 10 + "px";
        c.style.top = e.clientY - 10 + "px";
        d.style.left = e.clientX + "px";
        d.style.top = e.clientY + "px";
      });
      document.addEventListener(
        "mousedown",
        () => (document.getElementById("cur").style.transform = "scale(1.8)"),
      );
      document.addEventListener(
        "mouseup",
        () => (document.getElementById("cur").style.transform = "scale(1)"),
      );

      // ── Utils ──
      const $ = (id) => document.getElementById(id);
      const safe = (arr) => (Array.isArray(arr) ? arr : []);
      let pi;

      function showErr(m) {
        $("errWrap").classList.add("on");
        $("errMsg").textContent = m;
      }
      function hideErr() {
        $("errWrap").classList.remove("on");
      }

      function startP() {
        let p = 0;
        $("pFill").style.width = "0%";
        pi = setInterval(() => {
          p += Math.random() * 2.5;
          if (p > 88) p = 88;
          $("pFill").style.width = p + "%";
        }, 420);
      }
      function doneP() {
        clearInterval(pi);
        $("pFill").style.width = "100%";
      }

      async function animSteps() {
        for (let i = 1; i <= 5; i++) {
          await new Promise((r) => setTimeout(r, 950));
          if (i > 1) {
            const p = $("ls" + (i - 1));
            p.classList.remove("on");
            p.classList.add("done");
            p.querySelector(".lstep-ic").textContent = "✓";
          }
          $("ls" + i).classList.add("on");
        }
      }

      function switchTab(id, el) {
        document
          .querySelectorAll(".tab")
          .forEach((t) => t.classList.remove("active"));
        document
          .querySelectorAll(".tc")
          .forEach((t) => t.classList.remove("active"));
        el.classList.add("active");
        $("tab-" + id).classList.add("active");
      }

      // ── MAIN SCAN ──────────────────────────────────────────────
      async function go() {
        let raw = $("urlIn").value.trim();
        if (!raw) {
          showErr("Please enter a website URL.");
          return;
        }
        if (!raw.startsWith("http")) raw = "https://" + raw;
        try {
          new URL(raw);
        } catch (e) {
          showErr("Invalid URL format.");
          return;
        }

        hideErr();
        $("goBtn").disabled = true;
        $("loader").classList.add("on");
        $("results").classList.remove("on");

        [1, 2, 3, 4, 5].forEach((i, x) => {
          const s = $("ls" + i);
          s.classList.remove("on", "done");
          s.querySelector(".lstep-ic").textContent = [
            "🌐",
            "📄",
            "⚙️",
            "🎯",
            "📊",
          ][x];
        });
        $("ls1").classList.add("on");
        startP();
        animSteps();

        // ── Call Vercel Serverless Function ──────────────────────
        try {
          const res = await fetch("/api/seo-scan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: raw }),
          });

          if (!res.ok) {
            const error = await res.json();
            throw new Error(error.error || "Unknown error");
          }

          const data = await res.json();

          doneP();
          await new Promise((r) => setTimeout(r, 350));
          $("loader").classList.remove("on");
          render(raw, data);
        } catch (e) {
          doneP();
          $("loader").classList.remove("on");
          $("goBtn").disabled = false;
          showErr("Scan failed: " + e.message);
          console.error(e);
        }
      }

      // ── RENDER ────────────────────────────────────────────────
      function render(url, d) {
        const score =
          typeof d.score === "number" ? d.score : parseInt(d.score) || 50;
        const col =
          score >= 75
            ? "linear-gradient(135deg,#7c3aed,#9d5cf6)"
            : score >= 50
              ? "linear-gradient(135deg,#ff8c42,#ffb347)"
              : "linear-gradient(135deg,#ff4d6a,#ff7a8a)";

        document.querySelector(".ss-l").style.background = col;
        $("sNum").textContent = score;
        $("sGrade").textContent = d.gradeLabel || d.grade || "–";

        try {
          $("sDom").innerHTML = "🌐 " + new URL(url).hostname;
        } catch (e) {
          $("sDom").textContent = "🌐 " + url;
        }

        $("sHead").textContent = "SEO Report — " + (d.gradeLabel || "Complete");
        $("sDesc").textContent = d.summary || "";

        const s = d.stats || {};
        $("sStats").innerHTML = `
          <div class="ssi"><div class="ssi-n" style="color:var(--c1)">${s.critical || 0}</div><div class="ssi-l">Critical<br>Issues</div></div>
          <div class="ssi"><div class="ssi-n" style="color:var(--c2)">${s.warnings || 0}</div><div class="ssi-l">Warnings<br>Found</div></div>
          <div class="ssi"><div class="ssi-n" style="color:var(--t1)">${s.passed || 0}</div><div class="ssi-l">Checks<br>Passed</div></div>`;

        // ── Tabs ──
        $("tab-issues").innerHTML =
          `<div class="pgrid">${ip("📄", "iv", "On-Page SEO Issues", safe(d.onPage), "pbr")}${ip("✍️", "ir", "Content Issues", safe(d.onPage).slice(0, 3), "pbr")}</div>`;
        $("tab-technical").innerHTML =
          `<div class="pgrid">${ip("⚙️", "iv", "Technical Issues", safe(d.technical), "pbr")}${cp(safe(d.checks))}</div>`;
        $("tab-keywords").innerHTML = kp(safe(d.keywords));
        $("tab-actions").innerHTML =
          `<div class="pgrid">${lp("⚡", "it", "Quick Wins", safe(d.quickwins), "pbv", false)}${lp("💡", "iy", "Content Improvements", safe(d.content), "pby", false)}</div>`;

        $("results").classList.add("on");
        $("goBtn").disabled = false;
        $("results").scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // ── Panel builders ────────────────────────────────────────
      function ip(ico, icocls, title, items, bc) {
        const hi = items.filter((x) => x && x.sev === "high").length;
        const badge =
          hi > 0
            ? `<span class="pb ${bc}">${hi} Critical</span>`
            : `<span class="pb pbg">All Clear</span>`;
        const rows = items
          .map((it, i) => {
            if (!it) return "";
            const sc =
              it.sev === "high" ? "sh" : it.sev === "medium" ? "sm" : "sl";
            const sl =
              it.sev === "high" ? "HIGH" : it.sev === "medium" ? "MED" : "LOW";
            return `<div class="irow2" style="animation-delay:${i * 0.06}s">
            <span class="sbadge ${sc}">${sl}</span>
            <div>
              <div class="i-title">${it.issue || "—"}</div>
              <div class="i-fix"><b>→</b> ${it.fix || "—"}</div>
            </div>
          </div>`;
          })
          .join("");
        return `<div class="panel">
          <div class="ph"><div class="ph-l"><div class="ph-ico ${icocls}">${ico}</div><div class="ph-name">${title}</div></div>${badge}</div>
          <div class="panel-body">${rows || '<p style="color:var(--tx3);font-size:13px;padding:8px 0">No issues found ✓</p>'}</div>
        </div>`;
      }

      function cp(checks) {
        const p = checks.filter((c) => c && c.pass).length;
        const rows = checks
          .map((c, i) => {
            if (!c) return "";
            return `<div class="crow" style="animation-delay:${i * 0.05}s">
            <div class="cn">${c.name || "—"}</div>
            <div class="cv" style="color:${c.pass ? "var(--t1)" : "var(--c2)"}">${c.value || "—"}</div>
            <div class="ci">${c.pass ? "✅" : "⚠️"}</div>
          </div>`;
          })
          .join("");
        return `<div class="panel">
          <div class="ph"><div class="ph-l"><div class="ph-ico it">🔬</div><div class="ph-name">Technical Checks</div></div><span class="pb pbg">${p}/${checks.length} OK</span></div>
          <div class="panel-body">${rows}</div>
        </div>`;
      }

      function kp(kws) {
        const chips = kws
          .map((k, i) => {
            if (!k) return "";
            const dc =
              k.diff === "Easy" ? "ke" : k.diff === "Hard" ? "kh" : "km";
            return `<div class="kchip" data-kw="${k.kw || ""}" style="animation-delay:${i * 0.04}s">
            <span class="kw">${k.kw || "—"}</span>
            <span class="kv">${k.vol || "—"}</span>
            <span class="kd ${dc}">${k.diff || "—"}</span>
            <span class="ki">${k.intent || "—"}</span>
          </div>`;
          })
          .join("");
        return `<div class="panel full">
          <div class="ph"><div class="ph-l"><div class="ph-ico iv">🎯</div><div class="ph-name">Keyword Opportunities</div></div><span class="pb pbv">${kws.length} Keywords · Click to Copy</span></div>
          <div class="panel-body"><div class="kgrid">${chips || '<p style="color:var(--tx3);font-size:13px">No keywords found</p>'}</div></div>
        </div>`;
      }

      function lp(ico, icocls, title, items, bc, full) {
        const rows = items
          .map((it, i) => {
            if (!it) return "";
            return `<div class="lrow" style="animation-delay:${i * 0.06}s"><span class="la">▸</span><span>${it}</span></div>`;
          })
          .join("");
        return `<div class="panel${full ? " full" : ""}">
          <div class="ph"><div class="ph-l"><div class="ph-ico ${icocls}">${ico}</div><div class="ph-name">${title}</div></div><span class="pb ${bc}">${items.length} Items</span></div>
          <div class="panel-body">${rows}</div>
        </div>`;
      }

      // ── Click to copy keyword ─────────────────────────────────
      document.addEventListener("click", (e) => {
        const c = e.target.closest(".kchip");
        if (!c) return;
        navigator.clipboard.writeText(c.dataset.kw || "").catch(() => {});
        c.classList.add("cp");
        const el = c.querySelector(".kw");
        const orig = el.textContent;
        el.textContent = "Copied!";
        setTimeout(() => {
          c.classList.remove("cp");
          el.textContent = orig;
        }, 1200);
      });

      $("urlIn").addEventListener("keydown", (e) => {
        if (e.key === "Enter") go();
      });