import { useEffect } from "react";
import { useRouteError } from "react-router";
import { IconBox } from "@/components/common/IconBox";
import { Button } from "@/components/ui";
import { Logo } from "@/pages/-components/Logo";
import { Main } from "@/pages/(home)/auth/-components/Main";

function ErrorPage() {
	const error = useRouteError();

	console.error("Route Error:", error);

	const isChunkLoadError =
		error instanceof Error
		&& (error.message.includes("Failed to fetch dynamically imported module")
			|| error.name === "ChunkLoadError");

	useEffect(() => {
		const hasReloaded = sessionStorage.getItem("chunk-load-reloaded");

		if (isChunkLoadError && !hasReloaded) {
			sessionStorage.setItem("chunk-load-reloaded", "true");
			window.location.reload();
		}
	}, [isChunkLoadError]);

	const details =
		isChunkLoadError ?
			{
				actionFn: () => window.location.reload(),
				actionLabel: "Reload Now",
				bgText: "UP",
				icon: "lucide:refresh-cw" as const,
				iconColor: "text-vitastock-218-100-39",
				message:
					"We've updated VitaStock with new features. Please reload the page to get the latest version.",
				title: "App Update Available",
			}
		:	{
				actionFn: () => window.location.reload(),
				actionLabel: "Try Again",
				bgText: "500",
				icon: "material-symbols:error-outline-rounded" as const,
				iconColor: "text-destructive",
				message: error instanceof Error ? error.message : "Something went wrong on our end.",
				title: "Unexpected Error",
			};

	return (
		<Main>
			<section className="relative isolate flex flex-col items-center gap-10 text-center">
				<span
					className="absolute right-[256px] -z-1 size-[384px] bg-vitastock-218-100-39/5
						mix-blend-overlay blur-3xl"
				/>
				<span
					className="absolute left-[96px] -z-1 size-full bg-vitastock-226-100-84/10 mix-blend-overlay
						blur-3xl"
				/>

				<div className="flex flex-col items-center gap-6">
					<div className="flex items-center gap-3">
						<Logo width={48} className="w-12 animate-pulse" />
						<span className="text-[28px] font-extrabold tracking-tight text-black">VitaStock</span>
					</div>

					<span
						className="relative grid size-30 place-items-center rounded-2xl border
							border-[hsl(231,20%,80%)] bg-white shadow-xl shadow-vitastock-218-100-39/10"
					>
						<p className="absolute -z-1 text-[112px] font-extrabold text-[hsl(210,4%,91%,0.6)]">
							{details.bgText}
						</p>
						<IconBox type="online" icon={details.icon} className={`size-10 ${details.iconColor}`} />
					</span>
				</div>

				<div className="flex flex-col gap-4">
					<h1 className="text-[48px] font-bold text-black">{details.title}</h1>
					<p className="max-w-[405px] text-[18px] text-[hsl(215,16%,47%)]">{details.message}</p>
				</div>

				<div className="flex gap-4">
					<Button className="px-8" onClick={details.actionFn}>
						{details.actionLabel}
					</Button>
					{!isChunkLoadError && (
						<Button theme="primary-ghost" onClick={() => window.location.assign("/")}>
							<IconBox type="online" icon="lucide:arrow-left" className="size-3.5" />
							<p>Back to Home</p>
						</Button>
					)}
				</div>
			</section>
		</Main>
	);
}

export default ErrorPage;
