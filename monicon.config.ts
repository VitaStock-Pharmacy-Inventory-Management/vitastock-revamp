import type { MoniconConfig } from "@monicon/core";
import { iconsGenPlugin } from "./monicon-config/iconsGenPlugin.ts";

const iconsArray = [
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
];

export default {
	icons: iconsArray,
	plugins: [iconsGenPlugin({ outputPath: ".monicon" })],
} satisfies MoniconConfig;
