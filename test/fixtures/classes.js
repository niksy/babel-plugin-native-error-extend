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

class Josie extends Error {
	constructor(Daisy = 'Daisy') {
		super(Daisy);
		console.log(Daisy);
	}
}
