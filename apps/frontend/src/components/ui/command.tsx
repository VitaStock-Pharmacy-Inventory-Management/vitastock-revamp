import { Command as CommandPrimitive } from "cmdk";
import { cnMerge } from "@/lib/utils/cn";
import { IconBox } from "../common/IconBox";
import * as DialogPrimitive from "./dialog";

function CommandRoot(props: React.ComponentProps<typeof CommandPrimitive>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive
			data-slot="command-root"
			className={cnMerge(
				`flex size-full flex-col overflow-hidden rounded-md bg-shadcn-popover
				text-shadcn-popover-foreground`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function CommandDialog(
	props: Pick<React.ComponentProps<typeof DialogPrimitive.Content>, "withCloseButton">
		& React.ComponentProps<typeof DialogPrimitive.Root> & {
			className?: string;
			description?: string;
			title?: string;
		}
) {
	const {
		children,
		className,
		description = "Search for a command to run...",
		title = "Command Palette",
		withCloseButton = true,
		...restOfProps
	} = props;

	return (
		<DialogPrimitive.Root {...restOfProps}>
			<DialogPrimitive.Header className="sr-only">
				<DialogPrimitive.Title>{title}</DialogPrimitive.Title>
				<DialogPrimitive.Description>{description}</DialogPrimitive.Description>
			</DialogPrimitive.Header>

			<DialogPrimitive.Content
				className={cnMerge("overflow-hidden p-0", className)}
				withCloseButton={withCloseButton}
			>
				<CommandRoot
					className="**:data-[slot=command-input-wrapper]:h-12
						[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:size-5
						[&_[cmdk-item]_svg]:size-5 **:[[cmdk-group-heading]]:px-2
						**:[[cmdk-group-heading]]:font-medium
						**:[[cmdk-group-heading]]:text-shadcn-muted-foreground **:[[cmdk-group]]:px-2
						**:[[cmdk-input]]:h-12 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3"
				>
					{children}
				</CommandRoot>
			</DialogPrimitive.Content>
		</DialogPrimitive.Root>
	);
}

function CommandInput(props: React.ComponentProps<typeof CommandPrimitive.Input>) {
	const { className, ...restOfProps } = props;

	return (
		<div data-slot="command-input-wrapper" className="flex h-9 items-center gap-2 border-b px-3">
			<IconBox icon="lucide:search" className="size-4 shrink-0 opacity-50" />

			<CommandPrimitive.Input
				data-slot="command-input"
				className={cnMerge(
					`flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden
					placeholder:text-shadcn-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,
					className
				)}
				{...restOfProps}
			/>
		</div>
	);
}

function CommandList(props: React.ComponentProps<typeof CommandPrimitive.List>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.List
			data-slot="command-list"
			className={cnMerge("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className)}
			{...restOfProps}
		/>
	);
}

function CommandEmpty(props: React.ComponentProps<typeof CommandPrimitive.Empty>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.Empty
			data-slot="command-empty"
			className={cnMerge("py-6 text-center text-sm", className)}
			{...restOfProps}
		/>
	);
}

function CommandGroup(props: React.ComponentProps<typeof CommandPrimitive.Group>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.Group
			data-slot="command-group"
			className={cnMerge(
				`overflow-hidden p-1 text-shadcn-foreground **:[[cmdk-group-heading]]:px-2
				**:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs
				**:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-shadcn-muted-foreground`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function CommandSeparator(props: React.ComponentProps<typeof CommandPrimitive.Separator>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.Separator
			data-slot="command-separator"
			className={cnMerge("-mx-1 h-px bg-shadcn-border", className)}
			{...restOfProps}
		/>
	);
}

function CommandItem(props: React.ComponentProps<typeof CommandPrimitive.Item>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.Item
			data-slot="command-item"
			className={cnMerge(
				`relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden
				select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50
				data-[selected=true]:bg-shadcn-accent data-[selected=true]:text-shadcn-accent-foreground
				[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
				[&_svg:not([class*='text-'])]:text-shadcn-muted-foreground`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function CommandShortcut(props: React.ComponentProps<"span">) {
	const { className, ...restOfProps } = props;

	return (
		<span
			data-slot="command-shortcut"
			className={cnMerge("ml-auto text-xs tracking-widest text-shadcn-muted-foreground", className)}
			{...restOfProps}
		/>
	);
}

export {
	CommandRoot as Root,
	CommandDialog as Dialog,
	CommandInput as Input,
	CommandList as List,
	CommandEmpty as Empty,
	CommandGroup as Group,
	CommandItem as Item,
	CommandShortcut as Shortcut,
	CommandSeparator as Separator,
};
