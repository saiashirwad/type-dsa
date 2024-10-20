export namespace LinkedList {
	export type create<value> = { value: value; next: null };

	export type insertAtFront<
		li extends { value: any; next: any },
		value extends any,
	> = {
		value: value;
		next: li;
	};

	export type push<
		li extends { value: any; next: any },
		value extends any,
	> = li["next"] extends null
		? {
				value: li["value"];
				next: { value: value; next: null };
			}
		: {};

	// export type push<li extends any[], value extends any> = [
	// 	...li,
	// 	value,
	// ];
	//
	// export type pop<
	// 	li extends any[],
	// 	acc extends any[] = [],
	// > = li extends []
	// 	? [[], null]
	// 	: li extends [infer x]
	// 		? [[], x]
	// 		: li extends [infer x1, infer x2]
	// 			? [[...acc, x1], x2]
	// 			: li extends [infer x, ...infer xs]
	// 				? pop<xs, [...acc, x]>
	// 				: never;
}
