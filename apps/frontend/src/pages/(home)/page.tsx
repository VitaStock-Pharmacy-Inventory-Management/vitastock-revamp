import { heroImage } from "@/assets/images";
import { IconBox } from "@/components/common/IconBox";
import { ImageResponsive } from "@/components/common/Image";
import { NavLink } from "@/components/common/NavLink";
import { Button } from "@/components/ui";
import { Main } from "./-components/Main";

function HomePage() {
	return (
		<Main>
			<section className="flex flex-col items-center pt-4 pb-[64px] text-center">
				<h1
					className="max-w-[16ch] animate-fade-up font-inter text-[70px]/[72px] font-extrabold
						tracking-tight text-balance text-black delay-60"
				>
					Never run out of{" "}
					<span className="font-serif font-extrabold text-vitastock-218-100-39 italic">
						essential drugs
					</span>{" "}
					again.
				</h1>

				<p className="mt-6 animate-fade-up text-[20px] font-medium text-balance delay-120 md:text-xl">
					Real-time stock tracking, expiry alerts, and fast inventory workflows, built for busy
					pharmacies and dispensaries.
				</p>

				<div className="mt-8 flex animate-fade-up flex-col items-center gap-4 delay-180">
					<Button
						className="rounded-full
							shadow-[0_20px_60px_-10px_theme(--color-vitastock-218-100-39/0.35)]"
						asChild={true}
					>
						<NavLink to="/auth/signup">
							Get Started for Free
							<IconBox icon="lucide:arrow-right" />
						</NavLink>
					</Button>
					<p className="text-[14px] font-medium">No setup stress. Get started in minutes.</p>
				</div>

				<div
					className="mt-10 w-full rounded-[28px] border border-shadcn-border/60 bg-shadcn-muted p-2
						shadow-lg"
				>
					<ImageResponsive src={heroImage} alt="Hero Image" className="rounded-[20px] bg-cover" />
				</div>
			</section>
		</Main>
	);
}

export default HomePage;
