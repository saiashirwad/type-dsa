export namespace LinkedList {
	export type push<li extends any[], value extends any> = [
		...li,
		value,
	];

	export type pop<
		li extends any[],
		acc extends any[] = [],
	> = li extends []
		? [[], null]
		: li extends [infer x]
			? [[], x]
			: li extends [infer x1, infer x2]
				? [[...acc, x1], x2]
				: li extends [infer x, ...infer xs]
					? pop<xs, [x, ...acc]>
					: never;
}
