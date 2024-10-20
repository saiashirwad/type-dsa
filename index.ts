import type { BST } from "./src/bst";
import type { Stack } from "./src/stack";

type tree = BST.fromArray<[5, 4, 10, 2, 20, 8]>;
type result = BST.search<tree, 10>;

type stack = Stack.fromArray<[1, 2, 3, 4, 5], 6>;
type popResult = Stack.pop<stack>;
