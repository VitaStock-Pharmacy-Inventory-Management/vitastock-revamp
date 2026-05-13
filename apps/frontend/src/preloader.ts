import { lockScroll, on } from "@zayne-labs/toolkit-core";

const removePreloader = () => {
	const preloaderElement = document.querySelector("#preloader");

	if (!preloaderElement) return;

	lockScroll({ lock: true, targetElement: () => document.documentElement });

	preloaderElement.classList.add("hidden");

	on(
		preloaderElement,
		"transitionend",
		() => {
			preloaderElement.remove();
			lockScroll({ lock: false, targetElement: () => document.documentElement });
		},
		{ once: true }
	);
};

on(document, "app:ready" as never, removePreloader, { once: true });
