import type { LinkedList as L } from "./src/linked-list";

type result = L.insertAtFront<L.push<L.create<2>, 5>, 20>;

// type linkedListResult = L.pop<
// 	L.push<L.push<L.push<L.push<[0], 5>, 5>, 6>, 7>
// >;
//
// type result = L.pop<L.push<[1, 2, 3], 5>>;
