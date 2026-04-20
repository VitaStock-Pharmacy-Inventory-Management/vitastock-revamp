import { ResponsiveImage } from "@responsive-image/react";
import { Image as UnPicImage } from "@unpic/react";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";

function ImageResponsive(props: InferProps<typeof ResponsiveImage>) {
	return <ResponsiveImage {...props} />;
}

function ImageOnline(props: InferProps<typeof UnPicImage>) {
	return <UnPicImage {...props} />;
}

export { ImageResponsive, ImageOnline };
