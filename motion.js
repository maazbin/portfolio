(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) document.documentElement.classList.add("motion");

  /* ── Progress rail ── */
  var rail = document.querySelector(".rail");
  function onScroll() {
    var root = document.documentElement;
    var max = root.scrollHeight - window.innerHeight;
    if (rail) rail.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Swap word ── */
  var swap = document.querySelector(".swap");
  var words = ["holds.", "ships.", "audits.", "scales.", "survives."];
  var wordIndex = 0;
  function nextWord() {
    if (!swap || reduce) return;
    wordIndex = (wordIndex + 1) % words.length;
    swap.textContent = words[wordIndex];
    swap.classList.remove("tick");
    void swap.offsetWidth;
    swap.classList.add("tick");
  }
  if (!reduce) window.setInterval(nextWord, 2400);

  /* ── Video ── */
  var video = document.querySelector(".hero-video");
  var sound = document.querySelector(".sound-btn");
  function syncVideo() {
    if (!video || reduce) return;
    var box = video.getBoundingClientRect();
    var visible = box.bottom > 80 && box.top < window.innerHeight - 40;
    if (visible) {
      if (video.paused) video.play().catch(function () {});
    } else if (!video.paused) {
      video.pause();
    }
  }
  if (video && reduce) video.controls = true;
  if (sound && video) {
    sound.addEventListener("click", function () {
      video.muted = !video.muted;
      var on = !video.muted;
      sound.setAttribute("aria-pressed", on ? "true" : "false");
      sound.textContent = on ? "Sound on" : "Sound off";
      if (on) video.play().catch(function () {});
    });
  }
  syncVideo();

  /* ── Canvas field on hero ── */
  var field = document.querySelector(".field");
  var hero = document.querySelector(".hero");
  if (field && hero && !reduce) {
    var ctx = field.getContext("2d");
    var dots = [];
    for (var n = 0; n < 28; n++) {
      dots.push({ a: Math.random() * Math.PI * 2, r: 40 + Math.random() * 180, s: 0.15 + Math.random() * 0.35 });
    }
    function paint(t) {
      var rect = hero.getBoundingClientRect();
      var w = Math.max(1, Math.floor(rect.width));
      var h = Math.max(1, Math.floor(rect.height));
      if (field.width !== w) field.width = w;
      if (field.height !== h) field.height = h;
      ctx.clearRect(0, 0, w, h);
      var cx = w * 0.22, cy = h * 0.42;
      dots.forEach(function (dot, i) {
        var ang = dot.a + t * 0.00015 * dot.s;
        var x = cx + Math.cos(ang) * dot.r;
        var y = cy + Math.sin(ang * 0.8) * dot.r * 0.45;
        ctx.beginPath();
        ctx.arc(x, y, i % 5 === 0 ? 2.2 : 1.1, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? "rgba(47,79,66,0.45)" : "rgba(196,52,29,0.55)";
        ctx.fill();
      });
      ctx.strokeStyle = "rgba(196,52,29,0.28)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(cx, cy, 150, 70, t * 0.0002, 0, Math.PI * 1.4);
      ctx.stroke();
      if (!document.hidden) requestAnimationFrame(paint);
    }
    requestAnimationFrame(paint);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) requestAnimationFrame(paint);
    });
  }
  function raf() { syncVideo(); if (!document.hidden) requestAnimationFrame(raf); }
  document.addEventListener("visibilitychange", function () { if (!document.hidden) requestAnimationFrame(raf); });
  requestAnimationFrame(raf);

  /* ── Work plate system ── */
  var plates = Array.prototype.slice.call(document.querySelectorAll(".plate"));
  var labelNum = document.querySelector(".stage-num");
  var labelName = document.querySelector(".stage-name");
  var pieces = Array.prototype.slice.call(document.querySelectorAll(".piece[data-plate]"));
  function showPlate(el) {
    var id = el.getAttribute("data-plate");
    plates.forEach(function (plate) {
      plate.classList.toggle("on", plate.getAttribute("data-plate") === id);
    });
    pieces.forEach(function (piece) { piece.classList.toggle("is-on", piece === el); });
    if (labelNum) labelNum.textContent = el.getAttribute("data-num") || "";
    if (labelName) labelName.textContent = el.getAttribute("data-name") || "";
  }
  pieces.forEach(function (el) {
    el.addEventListener("pointerenter", function () { showPlate(el); });
    el.addEventListener("focus", function () { showPlate(el); });
  });
  if (pieces[0]) showPlate(pieces[0]);

  /* ── Stack tabs ── */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".stack-tab"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".stack-panel"));
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        t.classList.toggle("active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });
      panels.forEach(function (panel) {
        var isTarget = panel.getAttribute("data-panel") === target;
        panel.classList.toggle("active", isTarget);
      });
    });
  });

  /* ── Cursor dot ── */
  var cursor = document.querySelector(".dot");
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (cursor && fine && !reduce) {
    window.addEventListener("pointermove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }, { passive: true });
  }

  /* ── Scroll reveal ── */
  if (!reduce && "IntersectionObserver" in window) {
    document.querySelectorAll(".card, .piece, .section-head, .tech-item, .stat").forEach(function (el) {
      el.classList.add("reveal");
    });
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        seen.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { seen.observe(el); });
  }
})();
