import type { Numbers } from "./numbers";
import type { Tuple } from "./tuple";

export namespace BST {
	export type create<value> = {
		value: value;
		left: null;
		right: null;
	};

	export type fromArray<
		arr extends number[],
		acc = null,
	> = arr["length"] extends 0
		? acc
		: fromArray<
				Tuple.tail<arr>,
				acc extends {
					value: any;
					left: any;
					right: any;
				}
					? insert<acc, arr[0]>
					: { value: arr[0]; left: null; right: null }
			>;

	export type insert<
		root extends { value: any; left: any; right: any },
		value extends number,
	> = Numbers.gt<root["value"], value> extends false
		? {
				value: root["value"];
				left: root["left"];
				right: root["right"] extends null
					? {
							value: value;
							left: null;
							right: null;
						}
					: insert<root["right"], value>;
			}
		: {
				value: root["value"];
				right: root["right"];
				left: root["left"] extends null
					? { value: value; left: null; right: null }
					: insert<root["left"], value>;
			};

	export type search<
		root extends { value: any; left: any; right: any },
		value extends number,
	> = root["value"] extends value
		? value
		: Numbers.gt<root["value"], value> extends true
			? root["left"] extends {
					value: any;
					left: any;
					right: any;
				}
				? search<root["left"], value>
				: never
			: root["right"] extends {
						value: any;
						left: any;
						right: any;
					}
				? search<root["right"], value>
				: never;
}
