import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { NavLink } from "react-router";
import { logo } from "@/assets/images";
import { ImageResponsive } from "@/components/common/Image";

function Logo(props: Pick<InferProps<typeof ImageResponsive>, "className" | "width">) {
	return (
		<NavLink to="/">
			<ImageResponsive src={logo} alt="Logo" {...props} />
		</NavLink>
	);
}

export { Logo };
