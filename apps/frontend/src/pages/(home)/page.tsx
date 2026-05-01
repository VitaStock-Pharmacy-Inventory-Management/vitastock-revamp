import { tw } from "@zayne-labs/toolkit-core";
import { ForWithWrapper } from "@zayne-labs/ui-react/common/for";
import { heroImage } from "@/assets/images";
import { IconBox } from "@/components/common/IconBox";
import { ImageOnline } from "@/components/common/Image";
import { NavLink } from "@/components/common/NavLink";
import { Button } from "@/components/ui";
import { cnJoin } from "@/lib/utils/cn";
import { Main } from "./-components/Main";

const problems = [
	{
		accent: "Lost sale",
		accentIcon: "lucide:trending-down",
		classNames: {
			blur: tw`bg-vitastock-222-83-52/20`,
			card: tw`border-shadcn-foreground bg-shadcn-foreground text-shadcn-background`,
			chip: tw`bg-shadcn-background/10 text-shadcn-background/90 ring-1 ring-shadcn-background/15`,
			desc: tw`text-shadcn-background/70`,
			iconWrap: tw`bg-shadcn-background/10 text-shadcn-background ring-1 ring-shadcn-background/20`,
			title: tw`text-shadcn-background`,
		},
		desc: "Stockouts hit when you need them most, and patients walk away empty-handed.",
		icon: "lucide:package-x",
		title: "Running out of drugs",
	},
	{
		accent: "Wasted ₦",
		accentIcon: "lucide:alert-triangle",
		classNames: {
			blur: tw`bg-shadcn-destructive/10`,
			card: tw`border-shadcn-destructive/20 bg-shadcn-destructive/10 text-shadcn-foreground`,
			chip: tw`bg-shadcn-background/70 text-shadcn-destructive ring-1 ring-shadcn-destructive/20`,
			desc: tw`text-shadcn-foreground/70`,
			iconWrap: tw`bg-shadcn-destructive text-shadcn-background`,
			title: tw`text-shadcn-foreground`,
		},
		desc: "By the time you spot it on the shelf, the money and the trust is already gone.",
		icon: "lucide:calendar-clock",
		title: "Expired stock, found too late",
	},
	{
		accent: "5+ hrs / week",
		accentIcon: "lucide:alert-triangle",
		classNames: {
			blur: tw`bg-current`,
			card: tw`border-shadcn-border bg-shadcn-card text-shadcn-foreground`,
			chip: tw`bg-shadcn-muted text-shadcn-foreground/80 ring-1 ring-shadcn-border`,
			desc: tw`text-shadcn-muted-foreground`,
			iconWrap: tw`bg-shadcn-foreground text-shadcn-background`,
			title: tw`text-shadcn-foreground`,
		},
		desc: "Hours lost every week reconciling notebooks, spreadsheets, and memory.",
		icon: "lucide:clipboard-list",
		title: "Endless manual counting",
	},
	{
		accent: "Blind spots",
		accentIcon: "lucide:alert-triangle",
		classNames: {
			blur: tw`bg-white/20`,
			card: tw`border-vitastock-222-83-52 bg-vitastock-222-83-52 text-shadcn-primary-foreground`,
			chip: tw`bg-shadcn-primary-foreground/10 text-shadcn-primary-foreground ring-1
			ring-shadcn-primary-foreground/20`,
			desc: tw`text-shadcn-primary-foreground/80`,
			iconWrap: tw`bg-shadcn-primary-foreground/15 text-shadcn-primary-foreground ring-1
			ring-shadcn-primary-foreground/20`,
			title: tw`text-shadcn-primary-foreground`,
		},
		desc: "You only find out something's running out when a patient asks for it.",
		icon: "lucide:eye-off",
		title: "No clear view of what's low",
	},
];

function HomePage() {
	return (
		<Main>
			<section className="flex w-full flex-col items-center py-[64px] text-black">
				<h1
					className="max-w-[16ch] animate-fade-up text-center text-[70px]/[72px] font-extrabold
						tracking-[-1.8px] text-balance delay-60"
				>
					Never run out of{" "}
					<span className="font-fraunces text-vitastock-222-83-52 italic">essential drugs</span>{" "}
					again.
				</h1>

				<p className="mt-6 max-w-[567px] animate-fade-up text-center text-[18px] font-medium delay-120">
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
					<p className="text-center text-[14px] font-medium">
						No setup stress. Get started in minutes.
					</p>
				</div>

				<div
					className="mt-10 w-full max-w-[900px] rounded-[28px] border border-shadcn-border/60
						bg-shadcn-muted p-2 shadow-lg"
				>
					<ImageOnline
						src={heroImage}
						alt="Hero Image"
						width={912}
						height={896}
						className="rounded-[20px] bg-cover"
					/>
				</div>
			</section>

			<section className="flex flex-col items-center py-[64px] pt-4 text-black">
				<p className="text-[14px] font-bold text-vitastock-222-83-52 uppercase">The Problem</p>
				<h2
					className="max-w-[18ch] animate-fade-up text-center text-[70px]/[72px] font-extrabold
						tracking-tight text-balance delay-60"
				>
					Managing inventory shouldn't feel{" "}
					<span className="font-fraunces text-vitastock-222-83-52 italic">this hard.</span>
				</h2>
				<p className="mt-4 max-w-[680px] animate-fade-up text-center text-[18px] font-medium delay-120">
					Between serving patients and handling daily operations, keeping track of stock manually
					leads to mistakes, delays, and lost revenue.
				</p>

				<ForWithWrapper
					each={problems}
					className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
					renderItem={(problem) => {
						return (
							<li
								key={problem.title}
								className={cnJoin(
									`relative flex animate-fade-up flex-col justify-between overflow-hidden
									rounded-3xl border p-7 transition-all delay-120 duration-300
									hover:-translate-y-1 hover:shadow-md`,
									problem.classNames.card
								)}
							>
								<span
									className={cnJoin(
										"inline-grid size-12 place-items-center rounded-2xl",
										problem.classNames.iconWrap
									)}
								>
									<IconBox
										type="online"
										icon={problem.icon}
										width={24}
										height={24}
										className="size-6"
									/>
								</span>

								<h3
									className={cnJoin(
										"mt-6 text-[20px] font-extrabold tracking-[-0.5px]",
										problem.classNames.title
									)}
								>
									{problem.title}
								</h3>

								<p className={cnJoin("mt-3 text-[14px]", problem.classNames.desc)}>
									{problem.desc}
								</p>

								<div className="mt-6">
									<span
										className={cnJoin(
											`inline-flex items-center gap-1.5 rounded-full px-3 py-1.25 text-[12px]
											font-semibold`,
											problem.classNames.chip
										)}
									>
										<IconBox
											type="online"
											icon={problem.accentIcon}
											width={14}
											height={14}
											className="size-3.5"
										/>
										{problem.accent}
									</span>
								</div>

								<div
									aria-hidden="true"
									className={cnJoin(
										`pointer-events-none absolute -top-5 -right-5 size-[96px] rounded-full
										blur-3xl`,
										problem.classNames.blur
									)}
								/>
							</li>
						);
					}}
				/>
			</section>
		</Main>
	);
}

export default HomePage;
