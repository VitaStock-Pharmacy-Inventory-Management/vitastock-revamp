import "react-router";

declare module "react-router" {
	// eslint-disable-next-line ts-eslint/consistent-type-definitions
	interface NavigateFunction {
		(to: To, options?: NavigateOptions): Promise<void>;
		(delta: number): Promise<void>;
	}
}
