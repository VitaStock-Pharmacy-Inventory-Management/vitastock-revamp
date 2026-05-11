"use client";

import { For } from "@/components/common/for";
import { IconBox } from "@/components/common/IconBox";
import { NavLink } from "@/components/common/NavLink";
import { Sidebar } from "@/components/ui";
import { Logo } from "@/pages/-components/Logo";

const navItems = [
	{ icon: "lucide:layout-dashboard", isActive: true, title: "Dashboard", href: "/dashboard" },
	{ icon: "lucide:archive", isActive: false, title: "Inventory", href: "/dashboard/inventory" },
	{ icon: "lucide:bar-chart-3", isActive: false, title: "Reports", href: "/dashboard/reports" },
	{ icon: "lucide:triangle-alert", isActive: false, title: "Alerts", href: "/dashboard/alerts" },
	{ icon: "lucide:settings", isActive: false, title: "Settings", href: "/dashboard/settings" },
];

function DashboardSidebar() {
	return (
		<Sidebar.Provider
			sidebarWidth="256px"
			sidebarWidthIcon="68px"
			className="shrink-0 transition-[width] duration-300 ease-in-out
				data-[state=collapsed]:w-(--sidebar-width-icon) data-[state=expanded]:w-(--sidebar-width)"
		>
			<Sidebar.Root
				collapsible="icon"
				classNames={{
					base: "bg-[hsl(210,9%,96%)]",
					container: "border-r-[hsl(231,20%,80%,0.2)]",
					inner: "gap-7 bg-[hsl(210,9%,96%)]",
				}}
			>
				<Sidebar.Header className="relative px-3 pt-5">
					<Logo
						width={48}
						classNames={{
							base: "flex items-center gap-3 overflow-hidden",
							image: "size-12",
						}}
					>
						<h3
							className="text-[20px] leading-none font-extrabold tracking-tight
								text-vitastock-primary-main group-data-[collapsible=icon]:hidden"
						>
							VitaStock
						</h3>
					</Logo>

					<Sidebar.Trigger
						className="absolute top-8 -right-8 z-20 text-vitastock-body-color
							hover:text-vitastock-primary-dark"
					/>
				</Sidebar.Header>

				<Sidebar.Content className="px-3">
					<Sidebar.Group className="p-0">
						<Sidebar.Menu className="gap-2">
							<For
								each={navItems}
								renderItem={(item) => (
									<Sidebar.MenuItem key={item.title}>
										<Sidebar.MenuButton
											isActive={item.isActive}
											tooltip={item.title}
											className={`h-11 gap-3.5 rounded-lg px-3.5 text-[0.95rem] font-medium
											transition-colors ${
												item.isActive ?
													`bg-vitastock-226-100-84/60 text-vitastock-primary-dark
														hover:bg-vitastock-226-100-84/80
														hover:text-vitastock-primary-dark`
												:	`text-vitastock-body-color hover:bg-black/5
													hover:text-vitastock-primary-dark`
											}`}
											asChild={true}
										>
											<NavLink to={item.href}>
												<IconBox
													icon={item.icon}
													type="online"
													className={`size-[1.15rem] shrink-0 ${
														item.isActive ?
															"text-vitastock-primary-dark"
														:	"text-vitastock-body-color"
													}`}
												/>
												<span>{item.title}</span>
											</NavLink>
										</Sidebar.MenuButton>
									</Sidebar.MenuItem>
								)}
							/>
						</Sidebar.Menu>
					</Sidebar.Group>
				</Sidebar.Content>

				<Sidebar.Rail />
			</Sidebar.Root>
		</Sidebar.Provider>
	);
}

export { DashboardSidebar };
