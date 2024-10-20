import type { tail } from "./utils";

export namespace Stack {
	export type create<value, capacity extends number> = {
		data: [value];
		capacity: capacity;
	};

	export type fromArray<
		arr extends number[],
		capacity extends number,
		acc extends {
			capacity: number;
			data: number[];
		} = {
			capacity: capacity;
			data: [];
		},
	> = arr["length"] extends 0
		? acc
		: fromArray<tail<arr>, capacity, push<acc, arr[0]>>;

	export type push<
		stack extends { data: any[]; capacity: number },
		value extends number,
	> = stack["data"]["length"] extends stack["capacity"]
		? stack
		: {
				data: [value, ...stack["data"]];
				capacity: stack["capacity"];
			};

	export type pop<
		stack extends { data: any[]; capacity: number },
	> = {
		data: tail<stack["data"]>;
		capacity: stack["capacity"];
	};

	export type peek<
		stack extends { data: any[]; capacity: number },
	> = stack["data"][0];
}
