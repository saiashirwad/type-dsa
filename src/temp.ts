import type { Numbers } from "./numbers";
import type { Tuple } from "./tuple";

type split<
	arr extends any[],
	nPerSplit extends number,
	i = Numbers.add<nPerSplit, 1> extends infer i extends
		number
		? i
		: nPerSplit,
> = i;

type result = split<Tuple.range<10>, 5>;
