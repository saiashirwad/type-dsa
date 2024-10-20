import type { LinkedList as L } from "./src/linked-list";

// type result = L.insertAtFront<L.push<L.create<2>, 5>, 20>;

// type linkedListResult = L.pop<
// 	L.push<L.push<L.push<L.push<[0], 5>, 5>, 6>, 7>
// >;
//
// type result = L.pop<L.push<[1, 2, 3], 5>>;
//

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

type lolol = L.reverse<lol>;

type result = L.toArray<lol>;
type li = L.fromArray<[2, 3, 4]>;

// type r = L.pop<lol>;
