import { Outlet } from "react-router";
import { Footer } from "./-components/Footer";
import { NavBar } from "./-components/NavBar";

function HomeLayout() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default HomeLayout;
