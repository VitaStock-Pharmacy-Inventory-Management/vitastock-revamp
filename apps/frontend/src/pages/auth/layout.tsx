import { Outlet } from "react-router";
import { authBg, logoInverted } from "@/assets/images";
import { ImageResponsive } from "@/components/common/Image";

function AuthLayout() {
	return (
		<div className="flex grow">
			<aside
				className="relative m-8 flex w-full max-w-[580px] flex-col gap-[64px] p-[64px]
					shadow-[0_8px_10px_-6px_hsl(0,0%,0%,0.1),0_20px_25px_-5px_hsl(0,0%,0%,0.1)]"
			>
				<div className="absolute inset-0 isolate -z-1">
					<span
						className="absolute inset-0 size-full rounded-[24px] bg-vitastock-225-34-44
							mix-blend-multiply"
					/>
					<ImageResponsive
						src={authBg}
						alt="Auth Background"
						width={600}
						height={960}
						className="absolute inset-0 size-full rounded-[24px] mix-blend-multiply"
					/>
				</div>

				<div className="flex items-center gap-3">
					<ImageResponsive
						src={logoInverted}
						alt="Logo"
						width={64}
						height={58}
						className="w-[64px]"
					/>
					<h2 className="text-[36px] font-bold text-white">VitaStock</h2>
				</div>

				<div className="flex flex-col gap-8">
					<h3 className="text-[56px]/[70px] font-medium tracking-[-1.6px] text-white">
						Track inventory. Prevent stockouts. Reduce expiry losses.
					</h3>

					<p className="text-[18px] text-[hsl(226,100%,85%)]">
						Real-time stock tracking and predictive depletion alerts. Automated FEFO (First Expire,
						First Out) management. Seamless bulk import and dispensing workflows.
					</p>
				</div>

				<p className="mt-[64px] text-[14px] text-white">© 2026 VitaStock. All rights reserved.</p>
			</aside>

			<Outlet />
		</div>
	);
}

export default AuthLayout;
