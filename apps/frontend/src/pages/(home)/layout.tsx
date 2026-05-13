import { Outlet } from "react-router";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { Footer } from "./-components/Footer";
import { NavBar } from "./-components/NavBar";

function HomeLayout() {
	return (
		<>
			<LoadingScreen isVisible={false} loadingText="Welcome to Vitastock" />
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default HomeLayout;
