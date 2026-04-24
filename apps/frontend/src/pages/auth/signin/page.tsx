import { useForm } from "react-hook-form";
import { logo } from "@/assets/images";
import { IconBox } from "@/components/common/IconBox";
import { ImageResponsive } from "@/components/common/Image";
import { NavLink } from "@/components/common/NavLink";
import { Button, Form } from "@/components/ui";

function SigninPage() {
	const form = useForm({});

	const onSubmit = form.handleSubmit(() => {});

	return (
		<main className="flex w-full grow flex-col items-center justify-center gap-[48px]">
			<header className="flex flex-col items-center">
				<ImageResponsive src={logo} alt="Logo" width={96} className="w-[96px]" />
				<h1 className="text-[30px] font-bold text-black">VitaStock</h1>
			</header>

			<Form.Root
				form={form}
				onSubmit={(event) => void onSubmit(event)}
				className="w-full max-w-[420px] gap-8"
			>
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
					<Form.StateSubscribe>
						{(formState) => (
							<Form.Submit asChild={true}>
								<Button
									isDisabled={formState.isSubmitting}
									isLoading={formState.isSubmitting}
									theme="primary"
									size="full-width"
									className="font-bold"
								>
									Sign in
								</Button>
							</Form.Submit>
						)}
					</Form.StateSubscribe>

					<Button theme="primary-ghost" size="full-width" className="gap-2 font-bold">
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
		</main>
	);
}

export default SigninPage;
