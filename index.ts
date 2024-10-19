import type { LinkedList as L } from "./src/linked-list";

type linkedListResult = L.pop<
	L.push<L.push<L.push<L.push<[0], 5>, 5>, 6>, 7>
>;
