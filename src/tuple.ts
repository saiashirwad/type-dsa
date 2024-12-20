import type { Numbers } from "./numbers";

export namespace Tuple {
	export type of<
		n extends number,
		acc extends any[] = [],
	> = acc["length"] extends n
		? acc
		: of<n, [0, ...acc]>;

	export type reverse<
		a extends any[],
		acc extends any[] = [],
	> = a["length"] extends 0
		? acc
		: a extends [infer x, ...infer xs]
			? reverse<xs, [x, ...acc]>
			: never;

	export type range<
		n extends number,
		acc extends number[] = [],
	> = n extends 0
		? reverse<acc>
		: [sub<of<n>, [0]>, of<n>] extends [
					infer n extends any[],
					infer zeros extends any[],
				]
			? range<
					n["length"],
					[...acc, sub<zeros, [0]>["length"]]
				>
			: never;

	export type sub<
		a extends any[],
		b extends any[],
	> = b["length"] extends 0
		? a
		: sub<tail<a>, tail<b>>;

	export type div<
		a extends any[],
		b extends any[],
		acc extends any[] = [],
	> = a["length"] extends 0
		? acc["length"]
		: div<sub<a, b>, b, [...acc, 0]>;

	export type mul<
		a extends any[],
		b extends any[],
		acc extends any[] = [],
	> = b["length"] extends 0
		? acc
		: mul<a, sub<b, [0]>, [...acc, ...a]>;

	export type tail<arr extends any[]> = arr extends [
		infer _,
		...infer xs,
	]
		? xs
		: [];

	export type gt<
		a extends any[],
		b extends any[],
	> = b["length"] extends 0
		? a["length"] extends 0
			? false
			: true
		: gt<tail<a>, tail<b>>;

	export type lte<
		a extends any[],
		b extends any[],
	> = gt<a, b> extends true ? false : true;

	type _takeN<
		arr extends any[],
		n extends any[],
		acc extends any[] = [],
	> = n["length"] extends 0
		? acc
		: arr[0] extends undefined
			? acc
			: _takeN<
					tail<arr>,
					sub<n, [0]>,
					[...acc, arr[0]]
				>;

	export type takeN<
		arr extends any[],
		n extends number,
	> = _takeN<arr, of<n>>;

	type _consume<
		arr extends any[],
		n extends any[],
	> = n["length"] extends 0
		? arr
		: _consume<tail<arr>, sub<n, [0]>>;

	export type consume<
		arr extends any[],
		n extends number,
	> = _consume<arr, of<n>>;

	export type _split<
		arr extends any[],
		n extends any[],
		acc extends any[] = [],
	> = arr["length"] extends 0
		? acc
		: _split<
				_consume<arr, n>,
				n,
				[...acc, _takeN<arr, n>]
			>;

	export type split<
		arr extends any[],
		n extends number,
	> = _split<arr, of<n>>;

	export type mod<
		a extends any[],
		b extends any[],
	> = a["length"] extends 0
		? []
		: sub<a, b> extends infer c extends any[]
			? lte<b, c> extends true
				? mod<c, b>
				: c
			: [];

	export type isEven<a extends any[]> = mod<
		a,
		of<2>
	> extends [0]
		? false
		: true;

	export type isOdd<a extends any[]> =
		isEven<a> extends true ? false : true;
}
