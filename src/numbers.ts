import type { tail } from "./utils";

type _sub<
	a extends any[],
	b extends any[],
> = b["length"] extends 0 ? a : _sub<tail<a>, tail<b>>;

type _gt<
	a extends any[],
	b extends any[],
> = b["length"] extends 0
	? a["length"] extends 0
		? false
		: true
	: _gt<tail<a>, tail<b>>;

type _div<
	a extends any[],
	b extends any[],
	acc extends any[] = [],
> = a["length"] extends 0
	? acc["length"]
	: _div<_sub<a, b>, b, [...acc, 0]>;

type _mul<
	a extends any[],
	b extends any[],
	acc extends any[] = [],
> = b["length"] extends 0
	? acc["length"]
	: _mul<a, _sub<b, [0]>, [...acc, ...a]>;

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

	export type sub<
		m extends number,
		n extends number,
		result = _sub<toTuple<m>, toTuple<n>>,
	> = result extends any[] ? result["length"] : 0;

	export type mul<
		m extends number,
		n extends number,
	> = _mul<toTuple<m>, toTuple<n>>;

	export type div<
		m extends number,
		n extends number,
	> = n extends 0
		? // yeah, sue me :p
			0
		: _div<toTuple<m>, toTuple<n>>;

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
