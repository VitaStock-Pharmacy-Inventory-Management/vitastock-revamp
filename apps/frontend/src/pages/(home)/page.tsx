import { heroImage } from "@/assets/images";
import { IconBox } from "@/components/common/IconBox";
import { ImageOnline } from "@/components/common/Image";
import { NavLink } from "@/components/common/NavLink";
import { Button } from "@/components/ui";
import { Main } from "./-components/Main";

function HomePage() {
	return (
		<Main>
			<section className="flex w-full flex-col items-center py-[64px] text-center text-black">
				<h1
					className="max-w-[16ch] animate-fade-up text-[70px]/[72px] font-extrabold tracking-[-1.8px]
						text-balance delay-60"
				>
					Never run out of{" "}
					<span className="font-fraunces text-vitastock-222-83-52 italic">essential drugs</span>{" "}
					again.
				</h1>

				<p className="mt-6 max-w-[567px] animate-fade-up text-[18px] font-medium delay-120">
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
					className="mt-10 w-full max-w-[900px] rounded-[28px] border border-shadcn-border/60
						bg-shadcn-muted p-2 shadow-lg"
				>
					<ImageOnline src={heroImage} alt="Hero Image" className="rounded-[20px] bg-cover" />
				</div>
			</section>

			<section className="flex flex-col items-center py-[64px] pt-4 text-center text-black">
				<p className="text-[14px] font-bold text-vitastock-222-83-52 uppercase">The Problem</p>
				<h2
					className="max-w-[18ch] animate-fade-up text-[70px]/[72px] font-extrabold tracking-tight
						text-balance delay-60"
				>
					Managing inventory shouldn't feel{" "}
					<span className="font-fraunces text-vitastock-222-83-52 italic">this hard.</span>
				</h2>
				<p className="mt-4 max-w-[680px] animate-fade-up text-[18px] font-medium delay-120">
					Between serving patients and handling daily operations, keeping track of stock manually
					leads to mistakes, delays, and lost revenue.
				</p>
			</section>
		</Main>
	);
}

export default HomePage;
