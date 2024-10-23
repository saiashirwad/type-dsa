import type { Numbers } from "./numbers";
import type { splitN } from "./split-n";

type merge<a extends number[], b extends number[]> = [a, b] extends [
	[],
	infer xs extends number[],
]
	? xs
	: [a, b] extends [infer xs extends number[], []]
		? xs
		: [a, b] extends [
					[infer x extends number, ...infer xs extends number[]],
					[infer y extends number, ...infer ys extends number[]],
				]
			? Numbers.lte<x, y> extends true
				? [x, ...merge<xs, b>]
				: [y, ...merge<a, ys>]
			: [...a, ...b];

export type mergeSort<arr extends number[]> = arr extends []
	? []
	: arr extends [infer x]
		? [x]
		: splitN<arr, Numbers.div<arr["length"], 2>> extends [
					infer l extends number[],
					infer r extends number[],
				]
			? merge<mergeSort<l>, mergeSort<r>>
			: never;
