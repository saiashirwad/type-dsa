import type { Numbers } from "./numbers";
import type { Tuple } from "./tuple";

type result2 = Tuple.takeN<Tuple.of<10>, 5>;

type split<
	arr extends any[],
	n extends number = 2,
	acc extends any[] = [],
> = n extends 0 ? acc : _;

// tbd
type merge<a extends number[], b extends number[]> = [
	...a,
	...b,
];

export type mergeSort<arr extends number[]> =
	arr extends []
		? []
		: arr extends [infer x extends number]
			? [x]
			: Tuple.split<
						arr,
						Numbers.div<arr["length"], 2>
					> extends [
						infer a extends number[],
						infer b extends number[],
					]
				? merge<mergeSort<a>, mergeSort<b>>
				: arr;

type result = mergeSort<[20, 3, 2, 5]>;
