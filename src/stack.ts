import type { Tuple } from "./tuple";

export namespace Stack {
	export type Type = {
		capacity: number;
		data: any[];
	};

	export type create<
		value,
		capacity extends number,
	> = {
		data: [value];
		capacity: capacity;
	};

	export type fromArray<
		arr extends number[],
		capacity extends number,
		acc extends Type = {
			capacity: capacity;
			data: [];
		},
	> = arr["length"] extends 0
		? acc
		: fromArray<
				Tuple.tail<arr>,
				capacity,
				push<acc, arr[0]>
			>;

	export type push<
		stack extends Type,
		value extends number,
	> = stack["data"]["length"] extends stack["capacity"]
		? stack
		: {
				data: [value, ...stack["data"]];
				capacity: stack["capacity"];
			};

	export type pop<stack extends Type> = {
		data: Tuple.tail<stack["data"]>;
		capacity: stack["capacity"];
	};

	export type peek<stack extends Type> =
		stack["data"][0];
}
