import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { logo } from "@/assets/images";
import { ImageOnline } from "@/components/common/Image";
import { cnMerge } from "@/lib/utils/cn";
import { NavLink } from "./NavLink";

function Logo(
	props: Pick<Partial<InferProps<typeof ImageOnline>>, "className" | "src" | "width"> & {
		as?: "div" | typeof NavLink;
		children?: React.ReactNode;
		classNames?: { base?: string; image?: string };
	}
) {
	const { as: Element = NavLink, children, className, classNames, src, ...restOfProps } = props;

	return (
		<Element to="/" className={classNames?.base}>
			<ImageOnline
				src={src ?? logo}
				alt="Logo"
				priority={true}
				className={cnMerge("shrink-0", className, classNames?.image)}
				{...restOfProps}
			/>
			{children}
		</Element>
	);
}

export { Logo };
