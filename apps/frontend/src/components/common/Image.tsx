import { ResponsiveImage } from "@responsive-image/react";
import { Image as UnPicImage } from "@unpic/react";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";

export function ImageResponsive(props: InferProps<typeof ResponsiveImage> & { priority?: boolean }) {
	const { priority, ...restOfProps } = props;

	return (
		<ResponsiveImage
			width={"auto" as never}
			height={"auto" as never}
			loading="lazy"
			{...(priority && { fetchPriority: "high", loading: "eager" })}
			{...restOfProps}
		/>
	);
}

export function ImageOnline(
	props: Omit<InferProps<typeof UnPicImage>, "layout"> & {
		layout?: InferProps<typeof UnPicImage>["layout"];
		priority?: boolean;
	}
) {
	const { layout = "fullWidth", priority, src, ...restOfProps } = props;

	return (
		<UnPicImage
			layout={layout as never}
			src={src}
			loading="lazy"
			{...(priority && { fetchPriority: "high", loading: "eager" })}
			{...(restOfProps as object)}
		/>
	);
}
