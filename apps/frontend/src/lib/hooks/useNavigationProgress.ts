import { useProgress } from "@bprogress/react";
import { useEffect } from "react";
import { useNavigation } from "react-router";

export const useNavigationProgress = () => {
	const navigation = useNavigation();
	const { start, stop } = useProgress();

	useEffect(() => {
		navigation.state !== "idle" ? start() : stop();
	}, [navigation.state, start, stop]);
};
