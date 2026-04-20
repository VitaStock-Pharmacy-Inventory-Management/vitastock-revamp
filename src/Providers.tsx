import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Awaitable } from "@zayne-labs/toolkit-type-helpers";
import { getQueryClient } from "@/lib/react-query/queryClient";

type ProvidersProps = {
	children: React.ReactNode;
	onPrefetch?: (queryClient: QueryClient) => Awaitable<void>;
};

export function Providers(props: ProvidersProps) {
	const { children, onPrefetch } = props;

	const queryClient = getQueryClient();

	void onPrefetch?.(queryClient);

	return (
		<QueryClientProvider client={queryClient}>
			{children}

			<ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
		</QueryClientProvider>
	);
}
