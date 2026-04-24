"use client";

import { useControllableState } from "@zayne-labs/toolkit-react";
import { createContext, use, useEffect, useMemo, useRef, useState } from "react";
import * as Command from "@/components/ui/command";
import { shadcnButtonVariants, type ShadcnButtonProps } from "@/components/ui/constants";
import * as Popover from "@/components/ui/popover";
import { cnMerge } from "@/lib/utils/cn";
import { IconBox } from "../common/IconBox";

type ComboboxData = {
	label: string;
	value: string;
};

type ComboboxContextType = {
	data: ComboboxData[];
	inputValue: string;
	onOpenChange: (open: boolean) => void;
	onValueChange: (value: string) => void;
	open: boolean;
	setInputValue: (value: string) => void;
	setWidth: (width: number) => void;
	type: string;
	value: string;
	width: number;
};

const ComboboxContext = createContext<ComboboxContextType>({
	data: [],
	inputValue: "",
	onOpenChange: () => {},
	onValueChange: () => {},
	open: false,
	setInputValue: () => {},
	setWidth: () => {},
	type: "item",
	value: "",
	width: 200,
});

type ComboboxProps = React.ComponentProps<typeof Popover.Root> & {
	data: ComboboxData[];
	defaultValue?: string;
	onOpenChange?: (open: boolean) => void;
	onValueChange?: (value: string) => void;
	open?: boolean;
	type: string;
	value?: string;
};

function ComboboxRoot(props: ComboboxProps) {
	const {
		data,
		defaultOpen = false,
		defaultValue,
		onOpenChange: controlledOnOpenChange,
		onValueChange: controlledOnValueChange,
		open: controlledOpen,
		type,
		value: controlledValue,
		...restOfProps
	} = props;

	const [value, onValueChange] = useControllableState({
		defaultProp: defaultValue,
		onChange: controlledOnValueChange,
		prop: controlledValue,
	});

	const [open, onOpenChange] = useControllableState({
		defaultProp: defaultOpen,
		onChange: controlledOnOpenChange,
		prop: controlledOpen,
	});

	const [width, setWidth] = useState(200);
	const [inputValue, setInputValue] = useState("");

	const contextValue = useMemo(
		() => ({
			data,
			inputValue,
			onOpenChange,
			onValueChange,
			open,
			setInputValue,
			setWidth,
			type,
			value,
			width,
		}),
		[data, inputValue, onOpenChange, onValueChange, open, type, value, width]
	);

	return (
		<ComboboxContext value={contextValue}>
			<Popover.Root {...restOfProps} open={open} onOpenChange={onOpenChange} />
		</ComboboxContext>
	);
}

function ComboboxTrigger(props: ShadcnButtonProps & { classNames?: { base?: string; icon?: string } }) {
	const { children, className, classNames, ...restOfProps } = props;

	const { data, setWidth, type, value } = use(ComboboxContext);

	const elementRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		// Create a ResizeObserver to detect width changes
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const newWidth = (entry.target as HTMLElement).offsetWidth;

				if (!newWidth) continue;

				setWidth(newWidth);
			}
		});

		if (elementRef.current) {
			resizeObserver.observe(elementRef.current);
		}

		// Clean up the observer when component unmounts
		return () => {
			resizeObserver.disconnect();
		};
	}, [setWidth]);

	return (
		<Popover.Trigger asChild={true}>
			<button
				type="button"
				{...restOfProps}
				className={cnMerge(shadcnButtonVariants({ className, variant: "outline" }), classNames?.base)}
				ref={elementRef}
			>
				{children ?? (
					<span className="flex w-full items-center justify-between gap-2">
						{value ? data.find((item) => item.value === value)?.label : `Select ${type}...`}

						<IconBox
							icon="lucide:chevrons-up-down"
							className={cnMerge("size-4 shrink-0 text-shadcn-muted-foreground", classNames?.icon)}
						/>
					</span>
				)}
			</button>
		</Popover.Trigger>
	);
}

function ComboboxContent(
	props: React.ComponentProps<typeof Command.Root> & {
		popoverOptions?: React.ComponentProps<typeof Popover.Content>;
	}
) {
	const { className, popoverOptions, ...restOfProps } = props;
	const { width } = use(ComboboxContext);

	return (
		<Popover.Content className={cnMerge("p-0", className)} style={{ width }} {...popoverOptions}>
			<Command.Root {...restOfProps} />
		</Popover.Content>
	);
}

function ComboboxInput(
	props: React.ComponentProps<typeof Command.Input> & {
		defaultValue?: string;
		onValueChange?: (value: string) => void;
		value?: string;
	}
) {
	const {
		defaultValue,
		onValueChange: controlledOnValueChange,
		value: controlledValue,
		...restOfProps
	} = props;
	const { inputValue, setInputValue, type } = use(ComboboxContext);

	const [value, onValueChange] = useControllableState({
		defaultProp: defaultValue ?? inputValue,
		onChange: (newValue) => {
			// Sync with context state
			setInputValue(newValue);
			// Call external onChange if provided
			controlledOnValueChange?.(newValue);
		},
		prop: controlledValue,
	});

	return (
		<Command.Input
			onValueChange={onValueChange}
			placeholder={`Search ${type}...`}
			value={value}
			{...restOfProps}
		/>
	);
}

function ComboboxList(props: React.ComponentProps<typeof Command.List>) {
	return <Command.List {...props} />;
}

function ComboboxEmpty(props: React.ComponentProps<typeof Command.Empty>) {
	const { children, ...restOfProps } = props;

	const { type } = use(ComboboxContext);

	return <Command.Empty {...restOfProps}>{children ?? `No ${type} found.`}</Command.Empty>;
}

function ComboboxGroup(props: React.ComponentProps<typeof Command.Group>) {
	return <Command.Group {...props} />;
}

function ComboboxItem(props: React.ComponentProps<typeof Command.Item>) {
	const { onSelect, ...restOfProps } = props;
	const { onOpenChange, onValueChange } = use(ComboboxContext);

	return (
		<Command.Item
			onSelect={(currentValue) => {
				onValueChange(currentValue);
				onOpenChange(false);
				onSelect?.(currentValue);
			}}
			{...restOfProps}
		/>
	);
}

function ComboboxSeparator(props: React.ComponentProps<typeof Command.Separator>) {
	return <Command.Separator {...props} />;
}

type ComboboxCreateNewProps = {
	children?: (inputValue: string) => React.ReactNode;
	className?: string;
	onCreateNew: (value: string) => void;
};

function ComboboxCreateNew(props: ComboboxCreateNewProps) {
	const { children, className, onCreateNew } = props;
	const { inputValue, onOpenChange, onValueChange, type } = use(ComboboxContext);

	if (!inputValue.trim()) {
		return null;
	}

	const handleCreateNew = () => {
		onCreateNew(inputValue.trim());
		onValueChange(inputValue.trim());
		onOpenChange(false);
	};

	return (
		<button
			className={cnMerge(
				`relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm
				outline-none select-none aria-selected:bg-shadcn-accent
				aria-selected:text-shadcn-accent-foreground data-disabled:pointer-events-none
				data-disabled:opacity-50`,
				className
			)}
			onClick={handleCreateNew}
			type="button"
		>
			{children ?
				children(inputValue)
			:	<>
					<IconBox icon="lucide:plus" className="size-4 text-shadcn-muted-foreground" />
					<span>{`Create new ${type}: "${inputValue}"`}</span>
				</>
			}
		</button>
	);
}

export const Root = ComboboxRoot;
export const Trigger = ComboboxTrigger;
export const Content = ComboboxContent;
export const Input = ComboboxInput;
export const List = ComboboxList;
export const Empty = ComboboxEmpty;
export const Group = ComboboxGroup;
export const Item = ComboboxItem;
export const Separator = ComboboxSeparator;
export const CreateNew = ComboboxCreateNew;
