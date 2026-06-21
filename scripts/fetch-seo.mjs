// Build-time content fetch: pulls the exact prod metadata + article bodies
// exported from woodsteel.sk and writes them to lib/seo-export.json so they
// get bundled into the static build. If the fetch fails, the committed
// fallback (possibly an empty array) is kept and the app degrades gracefully.
import fs from "node:fs";
import path from "node:path";

const SRC =
  "https://raw.githubusercontent.com/denisnemec1707-ctrl/woodsteel-claudecode-cli-macbookair-projekt/main/lib/seo-export.json";
const OUT = path.join(process.cwd(), "lib", "seo-export.json");

try {
  const res = await fetch(SRC, { headers: { "User-Agent": "woodsteel-build" } });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("unexpected shape");
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(data));
  console.log(`[fetch-seo] wrote ${data.length} entries to lib/seo-export.json`);
} catch (err) {
  console.warn(`[fetch-seo] using committed fallback (${err.message})`);
}
