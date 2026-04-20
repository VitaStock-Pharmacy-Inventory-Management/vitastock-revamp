"use client";

import type { InferProps, PolymorphicPropsStrict } from "@zayne-labs/toolkit-react/utils";
import type { Prettify } from "@zayne-labs/toolkit-type-helpers";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "@/components/common/slot";
import { cnJoin } from "@/lib/utils/cn";

export type ButtonProps = InferProps<"button">
	& Prettify<
		VariantProps<typeof buttonVariants> & {
			asChild?: boolean;
			isLoading?: boolean;
			loadingStyle?: "replace-content" | "side-by-side";
			unstyled?: boolean;
		}
	>;

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = tv({
	base: `inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap
	ring-offset-shadcn-background transition-colors focus-visible:ring-2 focus-visible:ring-shadcn-ring
	focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none
	disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,

	defaultVariants: {
		size: "default",
		variant: "default",
	},

	variants: {
		disabled: {
			true: "cursor-not-allowed opacity-60",
		},

		isDisabled: {
			true: "cursor-not-allowed",
		},

		isLoading: {
			true: "grid content-center",
		},

		size: {
			default: "h-10 px-4 py-2",
			icon: "size-10",
			lg: "h-11 rounded-md px-8",
			sm: "h-9 rounded-md px-3",
		},

		theme: {
			default: "bg-shadcn-primary text-shadcn-primary-foreground hover:bg-shadcn-primary/90",
			destructive:
				"bg-shadcn-destructive text-shadcn-destructive-foreground hover:bg-shadcn-destructive/80",
			ghost: "hover:bg-shadcn-accent hover:text-shadcn-accent-foreground",
			link: "text-shadcn-primary underline-offset-4 hover:underline",
			outline: `border border-shadcn-input bg-shadcn-background hover:bg-shadcn-accent
			hover:text-shadcn-accent-foreground`,
			secondary: "bg-shadcn-secondary text-shadcn-secondary-foreground hover:bg-shadcn-secondary/80",
		},
	},
});

function Button<TElement extends React.ElementType = "button">(
	props: PolymorphicPropsStrict<TElement, ButtonProps>
) {
	const {
		as: Element = "button",
		asChild,
		children,
		className,
		isDisabled = false,
		disabled = isDisabled,
		isLoading = false,
		loadingStyle = "replace-content",
		size,
		theme,
		type = "button",
		unstyled,
		...restOfProps
	} = props;

	const Component = asChild ? Slot.Root : Element;

	const BTN_CLASSES =
		!unstyled ?
			buttonVariants({
				className,
				disabled,
				isDisabled,
				isLoading,
				size,
				theme,
			})
		:	className;

	const withIcon = (
		<>
			<Slot.Slottable>
				{loadingStyle === "replace-content" ?
					<div className="invisible [grid-area:1/1]">{children}</div>
				:	children}
			</Slot.Slottable>

			<span
				className={cnJoin(
					"flex justify-center",
					loadingStyle === "replace-content" && "[grid-area:1/1]"
				)}
			>
				{/* <WhiteSpinnerIcon /> */}
			</span>
		</>
	);

	// == This technique helps prevents content shift when replacing children with spinner icon
	return (
		<Component type={type} className={BTN_CLASSES} disabled={disabled || isDisabled} {...restOfProps}>
			{isLoading ? withIcon : children}
		</Component>
	);
}

export { Button };
