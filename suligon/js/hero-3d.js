/*
 * Hero 3D stage: a real, unbranded aluminum laptop (loaded from
 * assets/models/laptop.glb) that opens and turns as the visitor scrolls
 * through the hero, its screen looping a stylized "building this website"
 * animation (code typing on the left, the page assembling itself on the
 * right — echoing Suligon's own real process).
 *
 * Scroll-linked, not scroll-*jacked*: page scroll behaves normally the
 * whole time. `.hero-stage-track` is a tall block with a `position: sticky`
 * viewport inside it; how far the visitor has scrolled through that block
 * (0..1) drives the laptop's open angle, turntable rotation and camera.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

(function initHero3D() {
  "use strict";

  const track = document.getElementById("hero-stage-track");
  const stage = document.getElementById("hero-stage");
  const frame = document.querySelector(".hero-stage-frame");
  const canvas = document.getElementById("hero-canvas");
  if (!track || !stage || !frame || !canvas) return;

  let gl = null;
  try {
    gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
  } catch (e) {
    gl = null;
  }
  if (!gl) {
    track.style.display = "none";
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------------------------------------------------------------------
  // renderer / scene / camera
  // ---------------------------------------------------------------------
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);

  const key = new THREE.DirectionalLight(0xfff3e6, 2.2);
  key.position.set(2.6, 3.6, 3.2);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0xe0562f, 2.2);
  rim.position.set(-3.2, 1.6, -2.6);
  scene.add(rim);

  const fill = new THREE.AmbientLight(0x5c5346, 0.8);
  scene.add(fill);

  const underglow = new THREE.PointLight(0xf2a679, 1.4, 9);
  underglow.position.set(0, -1.4, 1.8);
  scene.add(underglow);

  // ---------------------------------------------------------------------
  // laptop rig — populated once assets/models/laptop.glb finishes loading
  // ---------------------------------------------------------------------
  const rig = new THREE.Group();
  scene.add(rig);

  const laptop = new THREE.Group();
  laptop.visible = false;
  rig.add(laptop);

  // soft contact shadow grounding the laptop against the backdrop
  function buildShadowTexture(){
    const s = 256;
    const canvas = document.createElement("canvas");
    canvas.width = s;
    canvas.height = s;
    const ctx = canvas.getContext("2d");
    const grad = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grad.addColorStop(0, "rgba(25,18,12,0.4)");
    grad.addColorStop(0.55, "rgba(25,18,12,0.18)");
    grad.addColorStop(1, "rgba(25,18,12,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    return canvas;
  }
  const shadowTex = new THREE.CanvasTexture(buildShadowTexture());
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.6, 3.2),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.set(0, -0.62, 0.1);
  laptop.add(shadow);

  // Keyboard deck: the GLB's "GreyDarker" inset (Body001) ships as a plain
  // flat-colored surface with no keys baked in — paint a plausible key grid
  // onto it so the open laptop doesn't read as a blank slab next to the
  // trackpad.
  function buildKeyboardTexture() {
    const w = 512, h = 512;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#3a3c40";
    ctx.fillRect(0, 0, w, h);
    const rows = [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((l) => ({ l, u: 1 })),
      [{ l: "", u: 1.3 }, ..."QWERTYUIOP".split("").map((l) => ({ l, u: 1 }))],
      [{ l: "", u: 1.5 }, ..."ASDFGHJKL".split("").map((l) => ({ l, u: 1 }))],
      [{ l: "", u: 1.8 }, ..."ZXCVBNM".split("").map((l) => ({ l, u: 1 }))],
    ];
    const margin = w * 0.05, gap = w * 0.007;
    const areaX = margin, areaW = w - margin * 2;
    const areaY = h * 0.04, areaH = h * 0.7;
    const rowH = (areaH - gap * (rows.length - 1)) / rows.length;
    rows.forEach((row, ri) => {
      const totalUnits = row.reduce((s, k) => s + k.u, 0);
      const unitW = (areaW - gap * (row.length - 1)) / totalUnits;
      let x = areaX;
      const y = areaY + ri * (rowH + gap);
      row.forEach((key) => {
        const kw = key.u * unitW;
        roundRect(ctx, x, y, kw, rowH, Math.min(kw, rowH) * 0.2);
        ctx.fillStyle = "#1c1e22";
        ctx.fill();
        if (key.l) {
          ctx.fillStyle = "rgba(230,230,225,0.8)";
          ctx.font = `600 ${Math.round(rowH * 0.42)}px -apple-system, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(key.l, x + kw / 2, y + rowH / 2 + 1);
        }
        x += kw + gap;
      });
    });
    const sbY = areaY + rows.length * (rowH + gap);
    roundRect(ctx, areaX + areaW * 0.26, sbY, areaW * 0.48, rowH, rowH * 0.2);
    ctx.fillStyle = "#1c1e22";
    ctx.fill();
    return canvas;
  }

  // ---------------------------------------------------------------------
  // screen content: code typing (left) + the page assembling itself (right)
  // — drawn on a canvas texture mapped onto the GLB's "LCD Screen" mesh.
  // ---------------------------------------------------------------------
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  const screenCanvas = document.createElement("canvas");
  screenCanvas.width = 1024;
  screenCanvas.height = 640;
  const sctx = screenCanvas.getContext("2d");
  const screenTex = new THREE.CanvasTexture(screenCanvas);
  screenTex.colorSpace = THREE.SRGBColorSpace;
  screenTex.flipY = true;

  const codeLines = [
    { indent: 0, text: '<header class="nav">', color: "#F2A679" },
    { indent: 1, text: '<img src="logo.png">', color: "#A6A29A" },
    { indent: 0, text: "</header>", color: "#F2A679" },
    { indent: 0, text: '<section class="hero">', color: "#F2A679" },
    { indent: 1, text: "<h1>Built for you.</h1>", color: "#F5F3EE" },
    { indent: 1, text: "<button>Start</button>", color: "#E0562F" },
    { indent: 0, text: "</section>", color: "#F2A679" },
  ];

  // Timeline: type code + build a small preview (0 → CODE_END), wipe the
  // editor away (→ WIPE_END), then hold on the finished page at full width
  // (→ LOOP) before cutting back to the start — the "it opens into a real
  // website" beat the laptop is there to sell.
  const CODE_END = 7.2;
  const WIPE_END = 8.4;
  const LOOP = 16.5;

  function easeOutCubicLocal(x) { return 1 - Math.pow(1 - x, 3); }

  function drawScreen(elapsed) {
    const w = screenCanvas.width, h = screenCanvas.height;
    const t = elapsed % LOOP;

    sctx.clearRect(0, 0, w, h);

    const fullCodeW = w * 0.46;
    let codeW = fullCodeW;
    if (t >= CODE_END && t < WIPE_END){
      codeW = fullCodeW * (1 - easeOutCubicLocal((t - CODE_END) / (WIPE_END - CODE_END)));
    } else if (t >= WIPE_END){
      codeW = 0;
    }
    const wipeProgress = t < CODE_END ? 0 : t < WIPE_END ? (t - CODE_END) / (WIPE_END - CODE_END) : 1;

    if (codeW > 1){
      sctx.fillStyle = "#17181a";
      sctx.fillRect(0, 0, codeW, h);
    }
    sctx.fillStyle = "#f7f6f2";
    sctx.fillRect(codeW, 0, w - codeW, h);

    // window chrome — same traffic-light dots whether it's the editor or
    // the browser, like any real desktop window.
    sctx.fillStyle = codeW > w * 0.1 ? "rgba(255,255,255,0.06)" : "rgba(21,23,26,0.05)";
    sctx.fillRect(0, 0, w, 34);
    const dots = ["#ff5f57", "#febc2e", "#28c840"];
    dots.forEach((c, i) => {
      sctx.fillStyle = c;
      sctx.beginPath();
      sctx.arc(24 + i * 22, 17, 6, 0, Math.PI * 2);
      sctx.fill();
    });
    if (wipeProgress > 0.35){
      const barAlpha = Math.min(1, (wipeProgress - 0.35) / 0.4);
      sctx.globalAlpha = barAlpha;
      sctx.fillStyle = "rgba(21,23,26,0.06)";
      roundRect(sctx, w * 0.32, 7, w * 0.36, 20, 10);
      sctx.fill();
      sctx.fillStyle = "#5A5D63";
      sctx.font = '13px "SF Mono", ui-monospace, Consolas, monospace';
      sctx.textBaseline = "middle";
      sctx.textAlign = "center";
      sctx.fillText("suligon.com", w * 0.5, 17);
      sctx.textAlign = "left";
      sctx.textBaseline = "top";
      sctx.globalAlpha = 1;
    }

    // --- code panel: lines type in, then hold ---
    if (codeW > 1){
      sctx.save();
      sctx.beginPath();
      sctx.rect(0, 34, codeW, h - 34);
      sctx.clip();
      sctx.font = '20px "SF Mono", ui-monospace, Consolas, monospace';
      sctx.textBaseline = "top";
      const charsPerSec = 24;
      const typeWindow = 7.2;
      let remaining = Math.floor(Math.min(t, typeWindow) * charsPerSec);
      codeLines.forEach((ln, i) => {
        const full = "  ".repeat(ln.indent) + ln.text;
        const show = Math.max(0, Math.min(full.length, remaining));
        remaining -= full.length;
        const str = full.slice(0, show);
        sctx.fillStyle = ln.color;
        sctx.fillText(str, 20, 50 + i * 30);
        if (show > 0 && show < full.length && Math.floor(elapsed * 2) % 2 === 0){
          const cw = sctx.measureText(str).width;
          sctx.fillStyle = "#E0562F";
          sctx.fillRect(20 + cw + 2, 50 + i * 30, 9, 22);
        }
      });
      sctx.restore();
    }

    // --- preview panel: builds small alongside the code, then takes over
    //     the full screen once the editor has wiped away ---
    const pad = 28 + (w * 0.05) * wipeProgress;
    const px = codeW + pad;
    const pw = w - codeW - pad * 2;
    const scale = 1 + 0.7 * wipeProgress;
    const topY = 42 * wipeProgress;
    let py = 60 - topY * 0.4;
    const revealAt = (sec) => Math.max(0, Math.min(1, (t - sec) / 0.6));

    sctx.globalAlpha = revealAt(1.0);
    sctx.fillStyle = "rgba(21,23,26,0.05)";
    roundRect(sctx, px, py, pw, 30 * scale, 8);
    sctx.fill();
    sctx.fillStyle = "#15171A";
    sctx.fillRect(px + 14 * scale, py + 11 * scale, 50 * scale, 8 * scale);
    sctx.fillStyle = "#E0562F";
    roundRect(sctx, px + pw - 70 * scale, py + 7 * scale, 56 * scale, 16 * scale, 8);
    sctx.fill();
    py += 48 * scale;

    sctx.globalAlpha = revealAt(2.3);
    sctx.fillStyle = "#15171A";
    sctx.fillRect(px, py, pw * 0.8, 14 * scale);
    sctx.fillRect(px, py + 22 * scale, pw * 0.55, 14 * scale);
    py += 62 * scale;

    sctx.globalAlpha = revealAt(3.3);
    sctx.fillStyle = "#8A8D85";
    sctx.fillRect(px, py, pw * 0.7, 8 * scale);
    sctx.fillRect(px, py + 14 * scale, pw * 0.5, 8 * scale);
    py += 44 * scale;

    sctx.globalAlpha = revealAt(4.1);
    sctx.fillStyle = "#E0562F";
    roundRect(sctx, px, py, 96 * scale, 26 * scale, 13);
    sctx.fill();
    py += 56 * scale;

    const cardW = (pw - 32) / 3;
    const cardH = 90 * scale;
    for (let i = 0; i < 3; i++) {
      sctx.globalAlpha = revealAt(4.9 + i * 0.35);
      sctx.fillStyle = "rgba(21,23,26,0.035)";
      sctx.strokeStyle = "rgba(21,23,26,0.14)";
      sctx.lineWidth = 1;
      roundRect(sctx, px + i * (cardW + 16), py, cardW, cardH, 12);
      sctx.fill();
      sctx.stroke();
      sctx.fillStyle = i === 1 ? "#E0562F" : "rgba(21,23,26,0.4)";
      sctx.beginPath();
      sctx.arc(px + i * (cardW + 16) + 18, py + 22, 6, 0, Math.PI * 2);
      sctx.fill();
    }
    sctx.globalAlpha = 1;

    screenTex.needsUpdate = true;
  }

  // ---------------------------------------------------------------------
  // load the real model — Body/Body001 (base/keyboard deck) stay put;
  // Screen/LCD (the lid) get reparented into a runtime hinge pivot so we
  // can swing them open/closed. The GLB's hinge axis is Z (not the X a
  // desk-standing laptop would suggest) and the two halves sit apart along
  // X, not Y — `attach()` preserves each mesh's baked world transform while
  // moving it under the pivot, so we don't need to hand-derive that offset.
  // ---------------------------------------------------------------------
  let hingePivot = null;
  let lcdMesh = null;
  let modelReady = false;

  // Angles are additional rotation.z applied on top of the lid's own baked
  // pose. More negative folds the lid down onto the keyboard (closed);
  // less negative stands it up (open).
  // The opening has two speeds: REST starts nearly shut, the first slice of
  // scroll (SCROLL_SWING_FRACTION) swings it open fast to QUICK (~90°),
  // then the rest of the scroll continues opening it further but gently —
  // a quick "it opens" beat up front instead of one flat lerp over the
  // whole track.
  const HINGE_CLOSED_DELTA = -1.4;
  const HINGE_REST_DELTA = -1.3;
  const HINGE_QUICK_DELTA = -0.5;
  const HINGE_OPEN_DELTA = -0.3;
  const SCROLL_SWING_FRACTION = 0.25;

  function easeOutBack(x) {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  }

  let introStart = null;
  const INTRO_DURATION = 1.1;

  window.__heroDebug = { status: "loading", THREE };

  const loader = new GLTFLoader();
  loader.load(
    "./assets/models/laptop.glb",
    (gltf) => {
      try {
      window.__heroDebug.status = "onload-start";
      const root = gltf.scene;
      laptop.add(root);

      const body = root.getObjectByName("Body");
      const body001 = root.getObjectByName("Body001");
      const screenMesh = root.getObjectByName("Screen");
      const lcd = root.getObjectByName("LCD");
      window.__heroDebug.names = { body: !!body, body001: !!body001, screenMesh: !!screenMesh, lcd: !!lcd };

      // Brushed-aluminum unibody — lighter than near-black so it still
      // reads as a real machine finish rather than a dark silhouette.
      [body, body001].forEach((mesh) => {
        if (!mesh || !mesh.material) return;
        mesh.material.metalness = mesh === body ? 0.88 : 0.86;
        mesh.material.roughness = mesh === body ? 0.3 : 0.33;
        mesh.material.envMapIntensity = 1;
        mesh.material.needsUpdate = true;
      });

      if (body001 && body001.geometry.attributes.uv) {
        // This inset's baked UVs are an unrelated crop of the shared atlas
        // (like the LCD's), which is meaningless for a texture we're
        // painting ourselves — replace them with a straightforward top-down
        // projection of each vertex's own X/Z position instead.
        const bPos = body001.geometry.attributes.position;
        let bMinX = Infinity, bMaxX = -Infinity, bMinZ = Infinity, bMaxZ = -Infinity;
        for (let i = 0; i < bPos.count; i++) {
          bMinX = Math.min(bMinX, bPos.getX(i)); bMaxX = Math.max(bMaxX, bPos.getX(i));
          bMinZ = Math.min(bMinZ, bPos.getZ(i)); bMaxZ = Math.max(bMaxZ, bPos.getZ(i));
        }
        const bSpanX = bMaxX - bMinX || 1, bSpanZ = bMaxZ - bMinZ || 1;
        const bUV = new Float32Array(bPos.count * 2);
        for (let i = 0; i < bPos.count; i++) {
          bUV[i * 2] = (bPos.getX(i) - bMinX) / bSpanX;
          bUV[i * 2 + 1] = (bPos.getZ(i) - bMinZ) / bSpanZ;
        }
        body001.geometry.setAttribute("uv", new THREE.BufferAttribute(bUV, 2));
        const kbTex = new THREE.CanvasTexture(buildKeyboardTexture());
        kbTex.colorSpace = THREE.SRGBColorSpace;
        body001.material.map = kbTex;
        body001.material.color.set(0xffffff);
        body001.material.needsUpdate = true;
      }

      if (lcd && lcd.material) {
        // The LCD quad's UVs are a small crop of the model's shared texture
        // atlas (e.g. u/v spans ~0.63-0.87 / 0.26-0.49, not 0-1) — mapping
        // our own full-canvas screenTex onto that as-is only shows a single
        // stretched-blank patch of it (the "nothing shows on the screen"
        // bug). Re-spread those UVs across the full 0-1 range so the whole
        // canvas — not a sliver of it — covers the screen.
        const uv = lcd.geometry.attributes.uv;
        if (uv) {
          let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
          for (let i = 0; i < uv.count; i++) {
            minU = Math.min(minU, uv.getX(i)); maxU = Math.max(maxU, uv.getX(i));
            minV = Math.min(minV, uv.getY(i)); maxV = Math.max(maxV, uv.getY(i));
          }
          const spanU = maxU - minU || 1, spanV = maxV - minV || 1;
          for (let i = 0; i < uv.count; i++) {
            // U and V are swapped on this mesh relative to the screen's own
            // up/right (confirmed by projecting each vertex to screen space
            // — the u axis tracked top/bottom, v tracked left/right), which
            // rotated the drawn browser chrome into the wrong corner.
            const u = (uv.getX(i) - minU) / spanU;
            const v = (uv.getY(i) - minV) / spanV;
            uv.setXY(i, v, u);
          }
          uv.needsUpdate = true;
        }

        // Drive the display off the same canvas timeline as before. A lit
        // PBR material (metalness/clearcoat reflecting the environment)
        // buried the code/website content under reflections — a strong
        // *white* emissive (not tinted) makes the canvas content read at
        // its own true colors regardless of scene lighting or viewing
        // angle, the same way the old unlit screen always stayed legible.
        // Still respects the model's own KHR_materials_clearcoat on top.
        lcd.material.map = screenTex;
        lcd.material.emissive = new THREE.Color(0xffffff);
        lcd.material.emissiveMap = screenTex;
        lcd.material.emissiveIntensity = 1;
        lcd.material.toneMapped = true;
        lcd.material.needsUpdate = true;
        lcdMesh = lcd;
      }

      if (screenMesh && lcd) {
        hingePivot = new THREE.Group();
        // Pivot must sit exactly at the lid's own authored position — this
        // *is* the hinge edge in this model (dropping the x component here
        // was the bug: it put the rotation axis 0.35 units away from the
        // real hinge, so opening swung the lid sideways through empty
        // space instead of tilting it back like a real screen).
        hingePivot.position.copy(screenMesh.position);
        laptop.add(hingePivot);
        laptop.updateMatrixWorld(true);
        hingePivot.attach(screenMesh);
        hingePivot.attach(lcd);
        hingePivot.rotation.z = reduceMotion ? HINGE_REST_DELTA : HINGE_CLOSED_DELTA;
      }

      laptop.visible = true;
      modelReady = true;
      introStart = reduceMotion ? null : clock.getElapsedTime();
      resize();
      window.__heroDebug.status = "ready";
      window.__heroDebug.hingePivot = hingePivot;
      window.__heroDebug.lcd = lcd;
      window.__heroDebug.screenMesh = screenMesh;
      window.__heroDebug.camera = camera;
      window.__heroDebug.rig = rig;
      window.__heroDebug.render = () => renderer.render(scene, camera);
      window.__heroDebug.applyRestPose = () => {
        hingePivot.rotation.z = HINGE_REST_DELTA;
        rig.rotation.y = RIG_ROT_START;
        rig.position.y = 0;
        camera.position.z = CAM_Z_START * aspectFactor;
        camera.position.y = CAM_Y_START;
        camera.lookAt(0, 0.5, 0);
      };
      } catch (e) {
        window.__heroDebug.status = "exception";
        window.__heroDebug.error = String((e && e.stack) || e);
      }
    },
    undefined,
    (err) => {
      // Model failed to load (offline dev server, bad path, etc.) — hide
      // the stage rather than showing an empty canvas.
      window.__heroDebug.status = "error";
      window.__heroDebug.error = String(err && err.message || err);
      track.style.display = "none";
    }
  );

  // ---------------------------------------------------------------------
  // scroll-driven progress (read each frame, no scroll listener needed)
  // ---------------------------------------------------------------------
  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function scrollProgress() {
    const rect = track.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return 1;
    return clamp(-rect.top / total, 0, 1);
  }

  // The GLB's own front (the screen's face normal) points along its local
  // +X axis, not +Z — with no turntable offset the camera was looking at
  // it edge-on (the "starts from the side" bug). -PI/2 turns the model to
  // face the camera; the small remainder is the same turntable nudge the
  // old procedural laptop had, straightening out as you scroll in.
  const RIG_ROT_START = -Math.PI / 2 + 0.4, RIG_ROT_END = -Math.PI / 2 + 0.1;
  const CAM_Z_START = 12.5, CAM_Z_END = 9.0;
  const CAM_Y_START = 1.7, CAM_Y_END = 1.1;
  const LOOK_Y_START = 1.1, LOOK_Y_END = 0.9;

  // Tuned against a landscape-ish frame. A narrower/taller one (phones in
  // portrait, small tablets) has much less horizontal room at the same
  // camera distance, so the laptop reads as oversized — push the camera
  // back as the frame gets more portrait. Wide desktop monitors just get
  // more side margin instead of a zoomed-in laptop: pulling the camera in
  // to "fill" the extra width also grows the laptop vertically (a
  // perspective camera scales both axes together), which was cropping the
  // top/bottom of the open lid on ordinary widescreen desktops — so the
  // floor is 1 (never zoom in past the reference distance), only the
  // ceiling pushes back for portrait/narrow frames.
  const REFERENCE_ASPECT = 1.5;
  const ASPECT_FACTOR_MIN = 1.0;
  const ASPECT_FACTOR_MAX = 3.5;
  let aspectFactor = 1;

  // The GLB's own bounding box (~1.73 x 1.38 x 1.98) is noticeably smaller
  // than the old procedural laptop's footprint — scale it up uniformly so
  // it fills the same on-screen frame the camera distances above were
  // tuned for.
  const MODEL_SCALE = 1.7;
  laptop.scale.setScalar(MODEL_SCALE);

  let currentProgress = reduceMotion ? 1 : 0;

  function resize() {
    const w = frame.clientWidth, h = frame.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    aspectFactor = Math.min(ASPECT_FACTOR_MAX, Math.max(ASPECT_FACTOR_MIN, REFERENCE_ASPECT / aspect));
  }

  let visible = true;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { visible = e.isIntersecting; }),
    { threshold: 0 }
  );
  io.observe(stage);

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    if (!visible || !modelReady) return;

    const target = reduceMotion ? 1 : scrollProgress();
    currentProgress = reduceMotion ? 1 : lerp(currentProgress, target, 0.09);
    const p = easeOutCubic(currentProgress);
    const elapsed = clock.getElapsedTime();

    if (hingePivot && !window.__heroDebug.freeze) {
      // Two-phase mapping straight off raw scroll fraction: a fast swing
      // to ~90° over the first quarter of the track, then a gentler
      // continuation the rest of the way — not one flat lerp end to end.
      const scrollDelta = currentProgress < SCROLL_SWING_FRACTION
        ? lerp(HINGE_REST_DELTA, HINGE_QUICK_DELTA, easeOutCubic(currentProgress / SCROLL_SWING_FRACTION))
        : lerp(HINGE_QUICK_DELTA, HINGE_OPEN_DELTA, (currentProgress - SCROLL_SWING_FRACTION) / (1 - SCROLL_SWING_FRACTION));
      if (introStart !== null) {
        const introT = clamp((elapsed - introStart) / INTRO_DURATION, 0, 1);
        const introEase = easeOutBack(introT);
        hingePivot.rotation.z = lerp(HINGE_CLOSED_DELTA, scrollDelta, introEase);
        if (introT >= 1) introStart = null;
      } else {
        hingePivot.rotation.z = lerp(hingePivot.rotation.z, scrollDelta, 0.08);
      }
    }
    if (lcdMesh) {
      // Always legible — a small brighten toward full scroll for polish,
      // never dark enough to hide the code/website content.
      lcdMesh.material.emissiveIntensity = lerp(0.85, 1.15, p);
    }
    rig.rotation.y = lerp(RIG_ROT_START, RIG_ROT_END, p) + (reduceMotion ? 0 : Math.sin(elapsed * 0.6) * 0.015);
    rig.position.y = reduceMotion ? 0 : Math.sin(elapsed * 0.9) * 0.03;

    camera.position.z = lerp(CAM_Z_START, CAM_Z_END, p) * aspectFactor;
    camera.position.y = lerp(CAM_Y_START, CAM_Y_END, p);
    camera.lookAt(0, lerp(LOOK_Y_START, LOOK_Y_END, p), 0);

    drawScreen(elapsed);
    renderer.render(scene, camera);
  }

  resize();
  window.addEventListener("resize", resize);
  new ResizeObserver(resize).observe(stage);
  // Belt-and-suspenders: re-measure once more shortly after load in case
  // web fonts or a late layout shift changed the frame's size right after
  // the first (correct-at-the-time) reading.
  window.setTimeout(resize, 400);

  animate();
})();
