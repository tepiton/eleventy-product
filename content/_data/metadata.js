const title = "Northlight Analytics";

export default {
	title,
	tagline: "Product analytics for teams that ship",
	description:
		`${title} turns raw product events into clear decisions: funnels, retention, and cohorts without SQL. Placeholder brand for the eleventy-product template.`,
	url: "https://example.com/",
	email: "hello@example.com",
	language: "en",
	image: "/img/og.png",
	author: {
		name: "Your Name",
	},
	cta: {
		label: "Start free",
		href: "/#pricing",
	},

	// The brand palette. Each pair is [dark-mode, light-mode]; these drive
	// accents, links, and buttons site-wide (css/index.css keeps the neutral
	// surfaces). Changing accent[0] also changes the favicon/OG mark the next
	// time scripts/generate-icons.mjs runs.
	brand: {
		accent: ["#7aa2f7", "#3b5bdb"],
		accentStrong: ["#9dbaff", "#2f4ec0"],
		accentContrast: ["#0c1220", "#ffffff"],
	},
};
