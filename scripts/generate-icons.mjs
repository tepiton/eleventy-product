// Regenerates the raster icons (favicon, apple-touch, OG image) in
// public/icons/ and public/img/ from the inline brand mark below.
// Uses sharp (already installed as an @11ty/eleventy-img dependency).
//
//   node scripts/generate-icons.mjs
//
// The accent comes from metadata.js's `brand` block — change it there,
// run the script, and commit the results.

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";
import metadata from "../content/_data/metadata.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// BG matches --color-bg (a neutral; lives in css/index.css). The accent
// is brand-owned, so it shares its source with the CSS.
const BG = "#1a1d23";
const ACCENT = metadata.brand.accent[0];

// A four-point north star: the Northlight mark.
const STAR = `<path d="M256 88l44 124 124 44-124 44-44 124-44-124-124-44 124-44 44-124z" fill="${ACCENT}"/>`;

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="${BG}"/>${STAR}</svg>`;

// OG card: mark on a dark field with a soft glow, no text (keeps it
// font-independent).
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="${BG}"/>
	<circle cx="600" cy="315" r="220" fill="${ACCENT}" opacity="0.08"/>
	<circle cx="600" cy="315" r="150" fill="${ACCENT}" opacity="0.1"/>
	<g transform="translate(600 315) scale(0.42) translate(-256 -256)">${STAR}</g>
</svg>`;

const outputs = [
	["public/icons/favicon.svg", Buffer.from(iconSvg), null],
	["public/icons/favicon-32.png", null, { file: "favicon-32.png", width: 32, height: 32 }],
	["public/icons/favicon-512.png", null, { file: "favicon-512.png", width: 512, height: 512 }],
	["public/icons/apple-touch-icon.png", null, { file: "apple-touch-icon.png", width: 180, height: 180 }],
	["public/img/og.png", null, { file: "og.png", width: 1200, height: 630, from: ogSvg }],
];

await mkdir(path.join(root, "public/icons"), { recursive: true });
await mkdir(path.join(root, "public/img"), { recursive: true });

for (const [relPath, buffer, raster] of outputs) {
	const abs = path.join(root, relPath);
	if (buffer) {
		await writeFile(abs, buffer);
	} else if (raster.from) {
		await sharp(Buffer.from(raster.from)).resize(raster.width, raster.height).png().toFile(abs);
	} else {
		await sharp(path.join(root, "public/icons/favicon.svg")).resize(raster.width, raster.height).png().toFile(abs);
	}
	console.log(`wrote ${relPath}`);
}
