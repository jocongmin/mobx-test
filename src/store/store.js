import TestStore from  './test.js';
import NextStore from "./next.js";
import NewStore from "./new.js";
import FormStore from "./form.js";
import MenuStore from "./menu.js";
import NumChange from "./comm/numChange.js"
import GoTestStore from "./goTestStore.js"

export default {
	testStore:new TestStore(),
	nextStore:new NextStore(),
	newStore:new NewStore(),
	formStore:new FormStore(),
	menuStore:new MenuStore(),
	numChange:new NumChange(),
	goTestStore:new GoTestStore
}
