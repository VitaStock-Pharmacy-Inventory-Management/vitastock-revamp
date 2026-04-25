import { NavLink } from "@/components/common/NavLink";
import { Button } from "@/components/ui";
import { Main } from "./auth/-components/Main";

function NotFoundPage() {
	return (
		<Main>
			<section className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-[120px] leading-none font-bold text-vitastock-218-100-39">404</h1>
				<h2 className="text-[30px] font-bold text-black">Page not found</h2>
				<p className="max-w-105 text-[14px] text-body-text">
					Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or
					did not exist in the first place.
				</p>

				<Button asChild={true} theme="primary" size="full-width" className="font-bold">
					<NavLink transitionType="regular" to="/">
						Go back home
					</NavLink>
				</Button>
			</section>
		</Main>
	);
}

export default NotFoundPage;
