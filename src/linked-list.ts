type reverseArray<
	li extends any[],
	acc extends any[] = [],
> = li extends [infer x, ...infer xs]
	? reverseArray<xs, [x, ...acc]>
	: li extends [infer x]
		? [x]
		: acc;

export namespace LinkedList {
	export type create<value> = { value: value; next: null };

	export type toArray<
		li extends { value: any; next: any },
		acc extends any[] = [],
	> = li["next"] extends null
		? li["value"] extends null
			? acc
			: [...acc, li["value"]]
		: toArray<li["next"], [...acc, li["value"]]>;

	type _fromArray<
		arr extends any[],
		acc = null,
	> = arr extends [infer x, ...infer xs]
		? _fromArray<xs, { value: x; next: acc }>
		: arr extends [infer x]
			? { value: x; next: acc }
			: acc;

	export type fromArray<arr extends any[]> = _fromArray<
		reverseArray<arr>
	>;

	export type reverse<
		li extends { value: any; next: any },
	> = LinkedList.fromArray<
		reverseArray<LinkedList.toArray<li>>
	>;

	export type insertAtFront<
		li extends { value: any; next: any },
		value extends any,
	> = {
		value: value;
		next: li;
	};

	// meh
	export type push<
		li extends { value: any; next: any },
		value extends any,
	> = fromArray<[...toArray<li>, value]>;

	export type pop<
		li extends { value: any; next: any },
		acc = null,
	> = li["value"] extends null
		? "Can't pop from empty list"
		: li["next"] extends null
			? acc extends { value: any; next: any }
				? [reverse<acc>, li["value"]]
				: [{ value: null; next: null }, li["value"]]
			: pop<li["next"], { value: li["value"]; next: acc }>;

	export type tail<li extends { value: any; next: any }> =
		pop<li> extends [infer _, infer value] ? value : never;

	export type popAndDiscard<
		li extends { value: any; next: any },
	> = pop<li> extends [infer _li, infer _] ? _li : never;
}
