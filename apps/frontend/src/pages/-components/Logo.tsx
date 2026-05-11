import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { NavLink } from "react-router";
import { logo } from "@/assets/images";
import { ImageOnline } from "@/components/common/Image";
import { cnMerge } from "@/lib/utils/cn";

function Logo(
	props: Pick<Partial<InferProps<typeof ImageOnline>>, "className" | "src" | "width"> & {
		children?: React.ReactNode;
		classNames?: { base?: string; image?: string };
	}
) {
	const { children, className, classNames, src, ...restOfProps } = props;

	return (
		<NavLink to="/" className={classNames?.base}>
			<ImageOnline
				src={src ?? logo}
				alt="Logo"
				priority={true}
				className={cnMerge("shrink-0 object-contain", className, classNames?.image)}
				{...restOfProps}
			/>
			{children}
		</NavLink>
	);
}

export { Logo };
