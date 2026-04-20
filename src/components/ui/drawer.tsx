"use client";

import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { Fragment as ReactFragment, useLayoutEffect } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cnMerge } from "@/lib/utils/cn";

function DrawerTrigger(props: InferProps<typeof DrawerPrimitive.Trigger>) {
	return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}
function DrawerPortal(props: InferProps<typeof DrawerPrimitive.Portal>) {
	return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}
function DrawerClose(props: InferProps<typeof DrawerPrimitive.Close>) {
	return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerRoot(props: InferProps<typeof DrawerPrimitive.Root> & { trapFocus?: boolean }) {
	const { children, trapFocus = true, ...restOfProps } = props;

	// NOTE - This is a hack to prevent radix within vaul from trapping focus like a massive idiot🙂

	useLayoutEffect(() => {
		if (trapFocus) return;

		const controller = new AbortController();

		document.addEventListener("focusin", (e) => e.stopImmediatePropagation(), {
			signal: controller.signal,
		});
		document.addEventListener("focusout", (e) => e.stopImmediatePropagation(), {
			signal: controller.signal,
		});

		return () => controller.abort();
	}, [trapFocus]);

	return (
		<DrawerPrimitive.Root data-slot="drawer-root" {...restOfProps}>
			{children}
		</DrawerPrimitive.Root>
	);
}

function DrawerOverlay(props: InferProps<typeof DrawerPrimitive.Overlay>) {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Overlay
			data-slot="drawer-overlay"
			className={cnMerge(
				`fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0
				data-[state=open]:animate-in data-[state=open]:fade-in-0`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function DrawerContent(
	props: InferProps<typeof DrawerPrimitive.Content> & { withHandle?: boolean; withPortal?: boolean }
) {
	const { children, className, withHandle = true, withPortal = true, ...restOfProps } = props;

	const PortalElement = withPortal ? DrawerPrimitive.Portal : ReactFragment;

	return (
		<PortalElement>
			<DrawerOverlay />

			<DrawerPrimitive.Content
				data-slot="drawer-content"
				className={cnMerge(
					`group/drawer-content fixed z-50 flex h-auto flex-col bg-shadcn-background
					data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0
					data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh]
					data-[vaul-drawer-direction=bottom]:rounded-t-lg
					data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0
					data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:border-r
					data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0
					data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0
					data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24
					data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg
					data-[vaul-drawer-direction=top]:border-b`,
					className
				)}
				{...restOfProps}
			>
				{withHandle && (
					<span
						className="mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-shadcn-muted
							group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
					/>
				)}

				{children}
			</DrawerPrimitive.Content>
		</PortalElement>
	);
}

function DrawerHeader(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	return (
		<div
			data-slot="drawer-header"
			className={cnMerge(
				`flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center
				group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function DrawerFooter(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	return (
		<div
			data-slot="drawer-footer"
			className={cnMerge("mt-auto flex flex-col gap-2 p-4", className)}
			{...restOfProps}
		/>
	);
}

function DrawerTitle(props: InferProps<typeof DrawerPrimitive.Title>) {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Title
			data-slot="drawer-title"
			className={cnMerge("font-semibold text-shadcn-foreground", className)}
			{...restOfProps}
		/>
	);
}

const DrawerDescription = (props: InferProps<typeof DrawerPrimitive.Description>) => {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Description
			data-slot="drawer-description"
			className={cnMerge("text-sm text-shadcn-muted-foreground", className)}
			{...restOfProps}
		/>
	);
};

export const Root = DrawerRoot;

export const Overlay = DrawerOverlay;

export const Content = DrawerContent;

export const Header = DrawerHeader;

export const Footer = DrawerFooter;

export const Title = DrawerTitle;

export const Description = DrawerDescription;

export const Trigger = DrawerTrigger;

export const Portal = DrawerPortal;

export const Close = DrawerClose;
