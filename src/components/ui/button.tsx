"use client";

import type { InferProps, PolymorphicPropsStrict } from "@zayne-labs/toolkit-react/utils";
import type { Prettify } from "@zayne-labs/toolkit-type-helpers";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "@/components/common/slot";
import { cnJoin } from "@/lib/utils/cn";
import { SpinnerIcon } from "../icons/SpinnerIcon";

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
	base: `flex items-center justify-center rounded-[8px] text-[14px] font-medium
	shadow-[0_1px_2px_hsl(0,0%,0%,0.05)]`,

	defaultVariants: {
		size: "medium",
		theme: "primary",
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
			"full-width": "h-[46px] w-full px-6",

			medium: "h-9.5 px-4 text-[14px]",
		},

		theme: {
			primary: "bg-vitastock-218-100-39 text-white",

			"primary-ghost": "border border-[hsl(231,20%,80%)] bg-transparent text-black",
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
				<SpinnerIcon />
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
