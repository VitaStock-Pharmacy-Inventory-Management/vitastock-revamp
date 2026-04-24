import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: ["apps/frontend/.monicon", "eslint.config.js"],
	react: true,
	tailwindcssBetter: {
		settings: { entryPoint: "apps/frontend/tailwind.css" },
	},
	tanstack: {
		query: true,
	},
	typescript: {
		tsconfigPath: ["apps/*/tsconfig.json", "packages/*/tsconfig.json"],
	},
});
