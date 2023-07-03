class Becky extends Error {}

class Ellie extends Becky {}

class Belle extends Error {
	constructor() {
		console.log(Mimi);
	}
}

class Jasper extends Error {
	constructor(Cooper) {
		console.log(Cooper);
	}
}

class Rufus extends Error {
	constructor(Scout) {
		super(Scout);
		console.log(Scout);
	}
}

class Rosie extends Error {
	constructor(Bentley, Olive) {
		super(Bentley, Olive);
		console.log(Bentley, Olive);
	}
}

class Josie extends Error {
	constructor(Daisy = 'Daisy') {
		super(Daisy);
		console.log(Daisy);
	}
}

class Lady extends Error {
	constructor(Chase = 'Chase', Izzy) {
		super(Chase, Izzy);
		console.log(Chase, Izzy);
	}
}

class Gizmo {}

class Hannah extends Error {
	constructor(Tucker = 'Tucker') {
		super(Charlie);
		console.log(Tucker);
	}
}

class Oreo extends Error {
	constructor(Max = 'Max', Molly = 'Molly') {
		super(Rex, Baxter);
		console.log(Max, Molly);
	}
}
