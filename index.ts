import type { BST } from "./src/bst";
import type { Numbers } from "./src/numbers";

type tree = BST.fromArray<[5, 4, 10, 2, 20, 8]>;
type result = BST.search<tree, 10>;
