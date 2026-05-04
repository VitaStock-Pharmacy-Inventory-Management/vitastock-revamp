import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { cnMerge } from "@/lib/utils/cn";

function Main(props: InferProps<"main">) {
	const { className, ...restOfProps } = props;

	return <main className={cnMerge("flex w-full grow flex-col", className)} {...restOfProps} />;
}

export { Main };
