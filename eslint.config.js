import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: [".monicon", "eslint.config.js"],
	react: true,
	tailwindcssBetter: true,
	typescript: true,
	tanstack: {
		query: true,
	},
});
