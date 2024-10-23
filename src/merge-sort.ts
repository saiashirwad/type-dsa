import type { Numbers } from "./numbers";
import type { Tuple } from "./tuple";

type _split<
	arr extends any[],
	nPerSplit extends number,
	i extends number = nPerSplit,
	iAcc extends any[] = [],
	nAcc extends any[][] = [],
> = arr["length"] extends 0
	? nAcc
	: [arr, Numbers.sub<i, 1>] extends [
				[infer x, ...infer xs],
				infer i extends number,
			]
		? i extends 0
			? _split<
					xs,
					nPerSplit,
					nPerSplit,
					[],
					[...nAcc, [...iAcc, x]]
				>
			: _split<xs, nPerSplit, i, [...iAcc, x], nAcc>
		: nAcc;

type result = _split<Tuple.range<10>, 5>;

// tbd
type merge<a extends number[], b extends number[]> = [
	...a,
	...b,
];

// export type mergeSort<arr extends number[]> =
// 	arr extends []
// 		? []
// 		: arr extends [infer x extends number]
// 			? [x]
// 			: Tuple.split<
// 						arr,
// 						Numbers.div<arr["length"], 2>
// 					> extends [
// 						infer a extends number[],
// 						infer b extends number[],
// 					]
// 				? merge<mergeSort<a>, mergeSort<b>>
// 				: arr;

// type mergeSortResult = mergeSort<[20, 3, 2, 5]>;
