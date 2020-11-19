class Becky extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }

}

class Ellie extends Becky {}

class Belle extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }

    console.log(Mimi);
  }

}

class Jasper extends Error {
  constructor(Cooper) {
    super(Cooper);
    this.name = this.constructor.name;
    this.message = Cooper;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(Cooper).stack;
    }

    console.log(Cooper);
  }

}

class Rufus extends Error {
  constructor(Scout) {
    super(Scout);
    this.name = this.constructor.name;
    this.message = Scout;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(Scout).stack;
    }

    console.log(Scout);
  }

}

class Josie extends Error {
  constructor(Daisy = 'Daisy') {
    super(Daisy);
    this.name = this.constructor.name;
    this.message = Daisy;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(Daisy).stack;
    }

    console.log(Daisy);
  }

}

class Gizmo {}
