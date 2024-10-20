export namespace Numbers {
	export type toTuple<
		n extends number,
		acc extends any[] = [],
	> = acc["length"] extends n
		? acc
		: toTuple<n, [0, ...acc]>;

	type add<n extends number, m extends number> = [
		...toTuple<n>,
		...toTuple<m>,
	]["length"];
}
