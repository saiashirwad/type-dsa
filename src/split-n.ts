import type { Numbers } from "./numbers";

export type splitN<
	arr extends any[],
	size extends number,
	i extends number = Numbers.min<size, arr["length"]>,
	iAcc extends any[] = [],
	nAcc extends any[][] = [],
> = arr["length"] extends 0
	? nAcc
	: [arr, Numbers.sub<i, 1>] extends [
				[infer x, ...infer xs],
				infer i extends number,
			]
		? i extends 0
			? splitN<
					xs,
					size,
					Numbers.min<size, xs["length"]>,
					[],
					[...nAcc, [...iAcc, x]]
				>
			: splitN<xs, size, i, [...iAcc, x], nAcc>
		: nAcc;
