import { useForm } from "react-hook-form";
import { IconBox } from "@/components/common/IconBox";
import { NavLink } from "@/components/common/NavLink";
import { Button, Form } from "@/components/ui";
import { Logo } from "@/pages/-components/Logo";
import { Main } from "../-components/Main";

function SigninPage() {
	const form = useForm({});

	const onSubmit = form.handleSubmit(() => {});

	return (
		<Main>
			<section
				className="flex w-full max-w-[420px] flex-col items-center gap-12 rounded-[16px] border
					border-[hsl(210,6%,93%)] bg-white p-8 shadow-[0_1px_2px_hsl(0,0%,0%,0.05)]"
			>
				<div className="flex flex-col gap-1">
					<Logo width={96} className="w-[96px]" />
					<h1 className="text-[30px] font-bold text-black">VitaStock</h1>
				</div>

				<Form.Root form={form} onSubmit={(event) => void onSubmit(event)} className="w-full gap-8">
					<div className="flex flex-col gap-4">
						<Form.Field control={form.control} name="email">
							<Form.Input
								placeholder="Email Address"
								className="h-[50px] rounded-[8px] bg-[hsl(210,9%,96%)] p-4"
							/>

							<Form.ErrorMessage />
						</Form.Field>

						<Form.Field control={form.control} name="password">
							<Form.Input
								placeholder="Password"
								type="password"
								classNames={{ inputGroup: "h-[50px] rounded-[8px] bg-[hsl(210,9%,96%)] p-4" }}
							/>

							<Form.ErrorMessage />

							<NavLink
								transitionType="regular"
								to="/auth/forgot-password"
								className="mt-1 self-end text-[14px] text-vitastock-218-100-39"
							>
								Forgot password?
							</NavLink>
						</Form.Field>
					</div>

					<div className="flex flex-col gap-4">
						<Form.Submit asChild={true}>
							{(formState) => (
								<Button
									isDisabled={formState.isSubmitting}
									isLoading={formState.isSubmitting}
									theme="primary"
									size="full-width"
									className="font-bold"
								>
									Sign in
								</Button>
							)}
						</Form.Submit>

						<Button theme="secondary-outline" size="full-width" className="gap-2 font-bold">
							<IconBox icon="devicon:google" className="size-5" />
							<p>Sign in with Google</p>
						</Button>
					</div>

					<p className="text-center text-[14px]">
						I don't have an account.{" "}
						<NavLink
							transitionType="regular"
							className="font-semibold text-vitastock-218-100-39"
							to="/auth/signup"
						>
							Sign up
						</NavLink>
					</p>
				</Form.Root>
			</section>
		</Main>
	);
}

export default SigninPage;
