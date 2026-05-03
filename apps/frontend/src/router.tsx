import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { SonnerToaster } from "./components/common/Toaster";
import ErrorPage from "./pages/error";
import RootLayout from "./pages/layout";
import { Providers } from "./Providers";

/* Layouts */
const HomeLayout = lazy(() => import("./pages/(home)/layout"));
const AuthLayout = lazy(() => import("./pages/(home)/auth/layout"));

const NotFoundPage = lazy(() => import("./pages/not-found"));

const routes = createRoutesFromElements(
	<Route Component={RootLayout} errorElement={<ErrorPage />}>
		<Route Component={HomeLayout}>
			<Route path="/" Component={lazy(() => import("./pages/(home)/page"))} />
		</Route>

		<Route Component={AuthLayout}>
			<Route path="/auth/signup" Component={lazy(() => import("./pages/(home)/auth/signup/page"))} />
			<Route path="/auth/signin" Component={lazy(() => import("./pages/(home)/auth/signin/page"))} />
			<Route
				path="/auth/verify-email"
				Component={lazy(() => import("./pages/(home)/auth/verify-email/page"))}
			/>
			<Route
				path="/auth/verify-email/success"
				Component={lazy(() => import("./pages/(home)/auth/verify-email/success/page"))}
			/>
			<Route
				path="/auth/forgot-password"
				Component={lazy(() => import("./pages/(home)/auth/forgot-password/page"))}
			/>
			<Route
				path="/auth/reset-password"
				Component={lazy(() => import("./pages/(home)/auth/reset-password/page"))}
			/>
			<Route
				path="/auth/reset-password/success"
				Component={lazy(() => import("./pages/(home)/auth/reset-password/success/page"))}
			/>
		</Route>

		{/* <Route Component={DashboardLayout}>
			<Route path="/dashboard" Component={lazy(() => import("./pages/dashboard/page"))} />
			<Route path="/inventory" Component={lazy(() => import("./pages/dashboard/inventory/page"))} />
			<Route path="/reports" Component={lazy(() => import("./pages/dashboard/reports/page"))} />
			<Route path="/alerts" Component={lazy(() => import("./pages/dashboard/alerts/page"))} />
			<Route path="/settings" Component={lazy(() => import("./pages/dashboard/settings/page"))} />
		</Route> */}

		{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
		<Route path="*" Component={NotFoundPage} />
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
