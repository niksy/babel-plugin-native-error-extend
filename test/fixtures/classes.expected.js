class Becky extends Error {
  constructor(message, options) {
    super(message, options);
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
  constructor(message, options) {
    super(message, options);
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
  constructor(Cooper, options) {
    super(Cooper, options);
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
  constructor(Scout, options) {
    super(Scout, options);
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
class Rosie extends Error {
  constructor(Bentley, Olive) {
    super(Bentley, Olive);
    this.name = this.constructor.name;
    this.message = Bentley;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(Bentley).stack;
    }
    console.log(Bentley, Olive);
  }
}
class Josie extends Error {
  constructor(Daisy = 'Daisy', options) {
    super(Daisy, options);
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
class Lady extends Error {
  constructor(Chase = 'Chase', Izzy) {
    super(Chase, Izzy);
    this.name = this.constructor.name;
    this.message = Chase;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(Chase).stack;
    }
    console.log(Chase, Izzy);
  }
}
class Gizmo {}
class Hannah extends Error {
  constructor(Tucker = 'Tucker', options) {
    super(Charlie, options);
    this.name = this.constructor.name;
    this.message = Charlie;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(Charlie).stack;
    }
    console.log(Tucker);
  }
}
class Oreo extends Error {
  constructor(Max = 'Max', Molly = 'Molly') {
    super(Rex, Baxter);
    this.name = this.constructor.name;
    this.message = Rex;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(Rex).stack;
    }
    console.log(Max, Molly);
  }
}
