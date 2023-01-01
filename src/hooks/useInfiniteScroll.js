import { useState, useEffect } from "react";

export default function useInfiniteScroll(callback) {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (offset + window.outerHeight * 3 > document.body.scrollHeight) {
			callback?.call();
		}
	}, [offset]);

	return offset;
}
