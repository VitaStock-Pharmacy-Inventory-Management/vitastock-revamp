import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "@/components/common/slot";
import { cnMerge } from "@/lib/utils/cn";

// eslint-disable-next-line react-refresh/only-export-components
export const badgeVariants = tv({
	base: `inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border
	border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow]
	focus-visible:border-shadcn-ring focus-visible:ring-[3px] focus-visible:ring-shadcn-ring/50
	aria-invalid:border-shadcn-destructive aria-invalid:ring-shadcn-destructive/20
	dark:aria-invalid:ring-shadcn-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3`,

	defaultVariants: {
		variant: "default",
	},

	variants: {
		variant: {
			default: "bg-shadcn-primary text-shadcn-primary-foreground [a&]:hover:bg-shadcn-primary/90",
			destructive: `bg-shadcn-destructive text-white focus-visible:ring-shadcn-destructive/20
			dark:bg-shadcn-destructive/60 dark:focus-visible:ring-shadcn-destructive/40
			[a&]:hover:bg-shadcn-destructive/90`,
			ghost: "[a&]:hover:bg-shadcn-accent [a&]:hover:text-shadcn-accent-foreground",
			link: "text-shadcn-primary underline-offset-4 [a&]:hover:underline",
			outline: `border-shadcn-border text-shadcn-foreground [a&]:hover:bg-shadcn-accent
			[a&]:hover:text-shadcn-accent-foreground`,
			secondary:
				"bg-shadcn-secondary text-shadcn-secondary-foreground [a&]:hover:bg-shadcn-secondary/90",
		},
	},
});

function Badge(
	props: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }
) {
	const { asChild = false, className, variant = "default", ...restOfProps } = props;

	const Component = asChild ? Slot.Root : "span";

	return (
		<Component
			data-slot="badge"
			data-variant={variant}
			className={cnMerge(badgeVariants({ variant }), className)}
			{...restOfProps}
		/>
	);
}

export { Badge };
