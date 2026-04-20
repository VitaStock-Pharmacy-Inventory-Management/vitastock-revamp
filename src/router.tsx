import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { SonnerToaster } from "./components/common/Toaster";
import { Providers } from "./Providers";

/* Layouts */

const routes = createRoutesFromElements(
	<Route>
		{/* <Route path="/" Component={lazy(() => import("./pages/(home)/page"))} /> */}

		{/* <Route Component={DashboardLayout}>
			<Route path="/dashboard" Component={lazy(() => import("./pages/dashboard/page"))} />
			<Route path="/inventory" Component={lazy(() => import("./pages/dashboard/inventory/page"))} />
			<Route path="/reports" Component={lazy(() => import("./pages/dashboard/reports/page"))} />
			<Route path="/alerts" Component={lazy(() => import("./pages/dashboard/alerts/page"))} />
			<Route path="/settings" Component={lazy(() => import("./pages/dashboard/settings/page"))} />
		</Route> */}

		{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
		{/* <Route path="*" Component={lazy(() => import("./pages/not-found.page"))} /> */}
	</Route>
);

const browserRouter = createBrowserRouter(routes);

export function Router() {
	return (
		<Providers>
			<RouterProvider router={browserRouter} />
			<SonnerToaster />
		</Providers>
	);
}
