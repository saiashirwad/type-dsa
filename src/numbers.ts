import type { Tuple } from "./tuple";

export namespace Numbers {
	export type toTuple<
		n extends number,
		acc extends any[] = [],
	> = acc["length"] extends n
		? acc
		: toTuple<n, [0, ...acc]>;

	export type min<
		m extends number,
		n extends number,
	> = gt<m, n> extends true ? n : m;

	export type add<
		n extends number,
		m extends number,
	> = [...toTuple<n>, ...toTuple<m>]["length"];

	export type sub<
		m extends number,
		n extends number,
		result = Tuple.sub<toTuple<m>, toTuple<n>>,
	> = result extends any[] ? result["length"] : 0;

	export type mul<
		m extends number,
		n extends number,
	> = Tuple.mul<toTuple<m>, toTuple<n>>;

	export type div<
		m extends number,
		n extends number,
	> = n extends 0
		? // yeah, sue me :p
			0
		: Tuple.div<toTuple<m>, toTuple<n>>;

	export type mod<
		m extends number,
		n extends number,
	> = Tuple.mod<
		Tuple.of<m>,
		Tuple.of<n>
	> extends infer result extends any[]
		? result["length"]
		: 0;

	export type gt<
		n extends number,
		m extends number,
	> = Tuple.gt<toTuple<n>, toTuple<m>>;

	export type lte<
		n extends number,
		m extends number,
	> = gt<n, m> extends true ? false : true;

	export type isEven<n extends number> = mod<
		n,
		2
	> extends 0
		? true
		: false;

	export type isOdd<n extends number> = mod<
		n,
		2
	> extends 0
		? false
		: true;
}
