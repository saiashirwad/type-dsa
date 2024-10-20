export type tail<arr extends any[]> = arr extends [
	infer _,
	...infer xs,
]
	? xs
	: [];
