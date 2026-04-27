import { IconBox } from "@/components/common/IconBox";
import { Button } from "@/components/ui";
import { Main } from "./auth/-components/Main";

function NotFoundPage() {
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

				<span
					className="relative grid size-[96px] place-items-center rounded-[12px] border
						border-[hsl(231,20%,80%)] bg-white"
				>
					<p className="absolute -z-1 text-[192px] font-extrabold text-[hsl(210,4%,91%,0.6)]">404</p>
					<IconBox
						icon="material-symbols:troubleshoot"
						className="size-10 text-vitastock-218-100-39"
					/>
				</span>

				<div className="flex flex-col gap-4">
					<h1 className="text-[48px] font-bold text-black">Page not found</h1>
					<p className="max-w-[405px] text-[18px]">
						The page you’re looking for doesn’t exist or has been moved.
					</p>
				</div>

				<div className="flex gap-4">
					<Button className="px-8">Go to Dashboard</Button>
					<Button theme="primary-ghost">
						<IconBox icon="lucide:arrow-left" className="size-3.5" />
						<p>Back</p>
					</Button>
				</div>
			</section>
		</Main>
	);
}

export default NotFoundPage;
