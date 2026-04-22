import { ResponsiveImage } from "@responsive-image/react";
import { Image as UnPicImage } from "@unpic/react";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";

export function ImageResponsive(props: InferProps<typeof ResponsiveImage>) {
	return <ResponsiveImage width={"auto" as never} height={"auto" as never} {...props} />;
}

export function ImageOnline(props: InferProps<typeof UnPicImage>) {
	return <UnPicImage {...props} />;
}
