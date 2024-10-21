import type { Numbers } from "./numbers";

export type tail<arr extends any[]> = arr extends [
	infer _,
	...infer xs,
]
	? xs
	: [];

export type tupleLongerThan<
	a extends any[],
	b extends any[],
> = b["length"] extends 0
	? a["length"] extends 0
		? false
		: true
	: tupleLongerThan<tail<a>, tail<b>>;

// export type distribute<
// 	a extends any[],
// 	b extends any[],
// 	acc extends any[][] = [],
// > = tupleLongerThan<a, b> extends true
// 	? _
// 	: acc[0]["length"];
