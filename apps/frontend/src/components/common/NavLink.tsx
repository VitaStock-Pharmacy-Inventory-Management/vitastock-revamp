import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { NavLink as NavLinkPrimitive, useLocation } from "react-router";

function NavLink(props: InferProps<typeof NavLinkPrimitive>) {
	const { to, ...restOfProps } = props;

	const { pathname } = useLocation();

	return <NavLinkPrimitive data-active={pathname === to} to={to} {...restOfProps} />;
}

export { NavLink };
