import { tw } from "@zayne-labs/toolkit-core";
import { Fragment } from "react";
import {
	appDashboardImg,
	appSignupImg,
	heroImg,
	howAddStockImg,
	howAlertsImg,
	howTrackImg,
	SquiggleArrowIcon,
} from "@/assets/images";
import { ForWithWrapper } from "@/components/common/for";
import { IconBox } from "@/components/common/IconBox";
import { ImageOnline } from "@/components/common/Image";
import { NavLink } from "@/components/common/NavLink";
import { Button } from "@/components/ui/button";
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

const bullets = [
	"Log stock in seconds",
	"See what's low instantly",
	"Get alerted before drugs expire",
	"Always know what's available",
];

const howItWorksSteps = [
	{
		alt: "Pharmacist uploading stock inventory data",
		desc: "Set up your inventory quickly and conveniently with a simple drug list.",
		image: howAddStockImg,
		title: "Add or import your drugs",
	},
	{
		alt: "Pharmacist reviewing live inventory dashboard on a tablet",
		desc: "Stock-in and stock-out actions take just seconds.",
		image: howTrackImg,
		title: "Log stock as it comes in or goes out",
	},
	{
		alt: "Smartphone showing a low stock notification alert",
		desc: "Receive notifications for low stock and nearing expiry, and stay in control.",
		image: howAlertsImg,
		title: "Get automatic alerts",
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
						className="rounded-full px-8
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
						src={heroImg}
						alt="Hero Image"
						width={912}
						height={896}
						priority={true}
						className="rounded-[20px] bg-cover"
					/>
				</div>
			</section>

			<section id="problem" className="flex flex-col items-center py-[80px] text-black">
				<p
					className="text-center text-[14px] font-bold tracking-wider text-vitastock-222-83-52
						uppercase"
				>
					The Problem
				</p>
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

			<section
				id="solution"
				className="flex flex-col items-center gap-20 py-[80px] text-black lg:flex-row"
			>
				<div className="relative aspect-5/4 w-full">
					<span
						className="absolute top-6 right-0 h-[88%] w-[78%] rounded-4xl bg-vitastock-222-83-52/10"
					/>

					<span
						className="absolute top-0 left-0 w-[58%] overflow-hidden rounded-2xl bg-shadcn-card
							shadow-xl ring-1 ring-shadcn-border"
					>
						<ImageOnline src={appSignupImg} alt="VitaStock sign up screen" className="w-full" />
					</span>

					<span
						className="absolute right-0 bottom-0 w-[68%] overflow-hidden rounded-2xl bg-shadcn-card
							shadow-2xl ring-1 ring-shadcn-border"
					>
						<ImageOnline
							src={appDashboardImg}
							alt="VitaStock dashboard screen"
							className="block w-full"
						/>
					</span>
				</div>

				<div>
					<p
						className="text-center text-[14px] font-bold tracking-wider text-vitastock-222-83-52
							uppercase"
					>
						The solution
					</p>

					<h2
						className="mt-3 max-w-[18ch] animate-fade-up text-[70px]/[72px] font-extrabold
							tracking-tight text-balance delay-60"
					>
						A simpler way to manage{" "}
						<span className="font-fraunces text-vitastock-222-83-52 italic">pharmacy inventory</span>
					</h2>

					<p className="mt-5 text-[18px]">
						VitaStock replaces notebooks, spreadsheets and guesswork with one simple, dependable
						workflow, so essential drugs are always in stock and nothing expires on the shelf.
					</p>

					<ForWithWrapper
						className="mt-7 flex flex-col gap-3"
						each={bullets}
						renderItem={(bullet) => (
							<li key={bullet} className="flex items-start gap-3 text-base">
								<span
									className="grid size-6 shrink-0 place-items-center rounded-full
										bg-vitastock-222-83-52/10 text-vitastock-222-83-52"
								>
									<IconBox icon="lucide:check" className="size-3.5 *:stroke-3" />
								</span>
								<p className="text-black">{bullet}</p>
							</li>
						)}
					/>

					<Button
						className="mt-9 rounded-full px-8
							shadow-[0_20px_60px_-10px_theme(--color-vitastock-218-100-39/0.35)]"
						asChild={true}
					>
						<NavLink to="/auth/signup">
							Get Started for Free
							<IconBox icon="lucide:arrow-right" />
						</NavLink>
					</Button>
				</div>
			</section>

			<section id="how-it-works" className="flex flex-col gap-20 py-[80px] text-black">
				<div className="flex flex-col items-center gap-5 text-center">
					<span
						className="inline-flex items-center gap-2 rounded-full border
							border-vitastock-222-83-52/20 bg-vitastock-222-83-52/5 px-4 py-1.5 text-xs font-bold
							tracking-wider text-vitastock-222-83-52 uppercase"
					>
						<span className="size-1.5 rounded-full bg-vitastock-222-83-52" />
						How it works
					</span>
					<h2
						className="animate-fade-up text-center text-[70px]/[72px] font-extrabold tracking-tight
							text-balance delay-60"
					>
						Stress Free{" "}
						<span className="font-fraunces text-vitastock-222-83-52 italic">Operations.</span>
					</h2>
					<p className="text-[18px] text-balance">
						From your first upload to your first saved expiry — VitaStock takes the chaos out of
						pharmacy inventory in three simple steps.
					</p>
				</div>

				<ForWithWrapper
					each={howItWorksSteps}
					className="mt-20 grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-x-4
						[--image-container-height:250px]"
					renderItem={(step, index) => (
						<Fragment key={step.title}>
							<li className="flex columns-[1fr] flex-col items-center gap-8 text-center">
								<span
									className="rounded-full border-[1.5px] border-dashed border-shadcn-border p-3
										ring-1 ring-shadcn-border"
								>
									<div className="overflow-hidden rounded-full">
										<ImageOnline
											src={step.image}
											alt={step.alt}
											width={768}
											height={768}
											className="h-(--image-container-height) rounded-full object-cover"
										/>
									</div>
								</span>

								<div className="flex grow flex-col items-center justify-between gap-3">
									<p className="text-[12px] font-bold tracking-[0.2em] uppercase">
										Step — 0{index + 1}
									</p>

									<h3
										className="font-bricolage-grotesque text-[24px] font-extrabold tracking-tight
											text-balance"
									>
										{step.title}
									</h3>
									<p className="max-w-[270px] text-center text-pretty">{step.desc}</p>
								</div>
							</li>

							{index < howItWorksSteps.length - 1 && (
								<SquiggleArrowIcon
									className="mt-[calc(var(--image-container-height)/2)]
										text-vitastock-222-83-52/70"
								/>
							)}
						</Fragment>
					)}
				/>
			</section>
		</Main>
	);
}

export default HomePage;
