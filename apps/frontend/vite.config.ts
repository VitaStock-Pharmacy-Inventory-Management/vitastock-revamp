import { monicon } from "@monicon/vite";
import { setupPlugins } from "@responsive-image/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		monicon(),
		setupPlugins({
			format: ["avif"],
			include: /^[^?]+\.(png|jpg|svg)\?.*responsive.*$/,
			lqip: { type: "thumbhash" },
			w: [640, 1200],
		}),
	],
	resolve: {
		tsconfigPaths: true,
	},
});
