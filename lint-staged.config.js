export default {
	"*.{ts,tsx,_parallel-1_}": () => ["pnpm lint:type-check"],
	"*.{ts,tsx,_parallel-2_}": () => ["pnpm lint:eslint"],
};
