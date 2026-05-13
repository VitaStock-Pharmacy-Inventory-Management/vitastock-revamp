/* eslint-disable react/no-unstable-default-props */
"use client";

import { createCustomContext } from "@zayne-labs/toolkit-react";
import { motion } from "motion/react";
import { Progress as ProgressPrimitive } from "radix-ui";
import { useMemo } from "react";

type ProgressContextType = {
	value: number;
};

const [ProgressContextProvider, useProgressContext] = createCustomContext<ProgressContextType>({
	name: "ProgressContext",
});

function ProgressRoot(props: React.ComponentProps<typeof ProgressPrimitive.Root>) {
	const { value } = props;

	const contextValue = useMemo(() => ({ value: value ?? 0 }), [value]);

	return (
		<ProgressContextProvider value={contextValue}>
			<ProgressPrimitive.Root data-slot="progress-root" {...props} />
		</ProgressContextProvider>
	);
}

const MotionProgressIndicator = motion.create(ProgressPrimitive.Indicator);

function ProgressIndicator(props: React.ComponentProps<typeof MotionProgressIndicator>) {
	const { transition = { damping: 30, stiffness: 100, type: "spring" }, ...restOfProps } = props;

	const { value } = useProgressContext();

	return (
		<MotionProgressIndicator
			data-slot="progress-indicator"
			animate={{ x: `-${100 - (value || 0)}%` }}
			transition={transition}
			{...restOfProps}
		/>
	);
}

export {
	ProgressRoot as Root,
	ProgressIndicator as Indicator,
	// eslint-disable-next-line react-refresh/only-export-components
	useProgressContext,
};
