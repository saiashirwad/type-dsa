import type { tail } from "./utils";

export namespace Numbers {
	export type toTuple<
		n extends number,
		acc extends any[] = [],
	> = acc["length"] extends n
		? acc
		: toTuple<n, [0, ...acc]>;

	export type add<n extends number, m extends number> = [
		...toTuple<n>,
		...toTuple<m>,
	]["length"];

	type _gt<
		a extends any[],
		b extends any[],
	> = b["length"] extends 0
		? a["length"] extends 0
			? false
			: true
		: _gt<tail<a>, tail<b>>;

	export type gt<n extends number, m extends number> = _gt<
		toTuple<n>,
		toTuple<m>
	>;

	export type lte<n extends number, m extends number> = gt<
		n,
		m
	> extends true
		? false
		: true;
}
