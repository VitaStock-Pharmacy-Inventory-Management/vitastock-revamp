import type { MoniconConfig } from "@monicon/core";
import { iconsGenPlugin } from "./monicon-config/iconsGenPlugin.ts";

export default {
	icons: getIconsArray(),
	plugins: [iconsGenPlugin({ outputPath: ".monicon" })],
} satisfies MoniconConfig;

function getIconsArray() {
	return [
		"radix-icons:chevron-down",
		"lucide:chevron-down",
		"lucide:chevron-up",
		"lucide:check",
		"lucide:chevron-down",
		"radix-icons:dash",
		"radix-icons:dot-filled",
		"radix-icons:chevron-right",
		"lucide:x",
		"lucide:arrow-left",
		"lucide:arrow-right",
		"radix-icons:check",
		"lucide:chevron-left",
		"lucide:chevron-right",
		"lucide:chevrons-up-down",
		"lucide:search",
		"lucide:plus",
		"devicon:google",
	];
}
