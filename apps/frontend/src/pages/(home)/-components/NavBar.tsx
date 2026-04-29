import { useScrollObserver } from "@zayne-labs/toolkit-react";
import { ForWithWrapper } from "@zayne-labs/ui-react/common/for";
import { NavLink } from "@/components/common/NavLink";
import { Button } from "@/components/ui/button";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { Logo } from "@/pages/-components/Logo";
import { navLinkItems } from "../-constants/navLinkItems";

function NavBar() {
	const { isScrolled, observedElementRef } = useScrollObserver({
		rootMargin: "0px",
	});

	return (
		<header
			ref={observedElementRef}
			className={cnJoin(
				`sticky top-0 z-500 flex h-[72px] w-full items-center justify-between bg-white/80 px-8
				backdrop-blur-xl transition-shadow duration-300 ease-[ease]`,
				isScrolled && "shadow-[0_1px_2px_hsl(0,0%,0%,0.05)]"
			)}
		>
			<div className="flex items-center gap-2">
				<Logo width={48} className="w-12" />
				<h3 className="text-[20px] font-bold text-black">VitaStock</h3>
			</div>

			<DesktopNavigation />
		</header>
	);
}

function DesktopNavigation(props: { className?: string }) {
	const { className } = props;

	return (
		<section className={cnMerge("flex w-full items-center", className)}>
			<ForWithWrapper
				as="nav"
				className="mx-auto flex min-w-fit gap-8 text-[15px] font-semibold text-black"
				each={navLinkItems}
				renderItem={(linkItem) => (
					<NavLink
						key={linkItem.title}
						transitionType="regular"
						to={linkItem.href}
						className="hover:text-vitastock-218-100-39"
					>
						{linkItem.title}
					</NavLink>
				)}
			/>

			<div className="flex min-w-fit items-center gap-3">
				<Button theme="primary-ghost" className="h-10">
					Signin
				</Button>

				<Button className="h-10">Sign up for free</Button>
			</div>
		</section>
	);
}

export { NavBar };
