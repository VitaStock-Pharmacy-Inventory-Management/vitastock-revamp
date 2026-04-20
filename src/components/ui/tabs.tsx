import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { Tabs as TabsPrimitive } from "radix-ui";
import { cnMerge } from "@/lib/utils/cn";

function TabsRoot(props: InferProps<typeof TabsPrimitive.Root>) {
	const { className, ...restOfProps } = props;

	return (
		<TabsPrimitive.Root
			data-slot="tabs-root"
			className={cnMerge("flex flex-col gap-2", className)}
			{...restOfProps}
		/>
	);
}

function TabList(props: InferProps<typeof TabsPrimitive.List>) {
	const { className, ...restOfProps } = props;

	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cnMerge(
				`inline-flex h-9 w-fit items-center justify-center rounded-lg bg-shadcn-muted p-[3px]
				text-shadcn-muted-foreground`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function TabsTrigger(props: InferProps<typeof TabsPrimitive.Trigger>) {
	const { className, ...restOfProps } = props;

	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cnMerge(
				`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border
				border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-shadcn-foreground
				transition-[color,box-shadow] focus-visible:border-shadcn-ring focus-visible:ring-[3px]
				focus-visible:ring-shadcn-ring/50 focus-visible:outline-1 focus-visible:outline-shadcn-ring
				disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-shadcn-background
				data-[state=active]:shadow-sm dark:text-shadcn-muted-foreground
				dark:data-[state=active]:border-shadcn-input dark:data-[state=active]:bg-shadcn-input/30
				dark:data-[state=active]:text-shadcn-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0
				[&_svg:not([class*='size-'])]:size-4`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function TabsContent(props: InferProps<typeof TabsPrimitive.Content>) {
	const { className, ...restOfProps } = props;

	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cnMerge("flex-1 outline-none", className)}
			{...restOfProps}
		/>
	);
}

export const Root = TabsRoot;

export const List = TabList;

export const Trigger = TabsTrigger;

export const Content = TabsContent;
