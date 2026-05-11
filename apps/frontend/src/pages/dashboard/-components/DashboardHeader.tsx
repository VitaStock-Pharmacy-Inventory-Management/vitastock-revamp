import { IconBox } from "@/components/common/IconBox";
import { Button, Form } from "@/components/ui";

function DashboardHeader() {
	return (
		<header
			className="flex w-full items-center justify-between border-b border-[hsl(231,20%,80%,0.15)] py-7
				pr-6 pl-10"
		>
			<Form.InputGroup
				className="h-10 w-full max-w-[576px] gap-3.5 rounded-[12px] border
					border-[hsl(231,20%,80%,0.3)] bg-white px-4 py-1 text-[14px]"
			>
				<Form.InputLeftItem>
					<IconBox type="online" icon="lucide:search" />
				</Form.InputLeftItem>

				<Form.InputPrimitive
					type="search"
					placeholder="Search inventory..."
					className="h-full placeholder:text-[14px]"
				/>
			</Form.InputGroup>

			<div className="flex items-center gap-6">
				<Button unstyled={true} className="relative hover:text-vitastock-primary-main">
					<IconBox type="online" icon="lucide:bell" className="size-5" />
					<span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-shadcn-destructive" />
				</Button>

				<Button
					unstyled={true}
					className="flex size-9 items-center justify-center rounded-full bg-vitastock-primary-main
						text-white shadow-md"
				>
					<IconBox type="online" icon="lucide:user" className="size-4.5" />
				</Button>
			</div>
		</header>
	);
}

export { DashboardHeader };
