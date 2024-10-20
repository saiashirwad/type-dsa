type split<
	arr extends any[],
	a extends any[] = [],
	b extends any[] = [],
> = arr extends [infer x]
	? [[x], []]
	: arr extends [infer x, infer y, ...infer xs]
		? split<xs, [...a, x], [...b, y]>
		: arr extends [infer x]
			? [a, [...b, x]]
			: [a, b];

// for now
type merge<a extends number[], b extends number[]> = [
	...a,
	...b,
];

export type mergeSort<
	arr extends number[],
	splits extends [number[], number[]] = split<arr>,
> = arr extends []
	? []
	: arr extends [infer x]
		? [x]
		: merge<mergeSort<splits[0]>, mergeSort<splits[1]>>;

type result = mergeSort<[20, 3, 2, 5]>;
