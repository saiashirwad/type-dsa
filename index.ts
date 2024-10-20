import type { LinkedList as L } from "./src/linked-list";

type lol = {
	value: 2;
	next: {
		value: 5;
		next: {
			value: 10;
			next: {
				value: 20;
				next: null;
			};
		};
	};
};

type popped = L.pop<lol>;
type tail = L.tail<lol>;
type poppedResult = L.popAndDiscard<lol>;

type lolol = L.reverse<lol>;

type result = L.toArray<lol>;
type li = L.fromArray<[2, 3, 4]>;

// type r = L.pop<lol>;
