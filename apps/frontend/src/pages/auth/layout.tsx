import { Outlet } from "react-router";
import { AuthSidePanel } from "./-components/AuthSidePanel";

function AuthLayout() {
	return (
		<div className="flex grow">
			<AuthSidePanel />
			<Outlet />
		</div>
	);
}

export default AuthLayout;
