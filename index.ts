import type { BST as B } from "./src/bst";

type tree = B.insert<
	B.insert<
		B.insert<
			B.insert<B.insert<B.insert<B.create<5>, 4>, 10>, 3>,
			2
		>,
		20
	>,
	8
>;
