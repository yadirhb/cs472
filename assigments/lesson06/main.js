/**
 * Exercise #1: Extends the String prototype and adds a filter function.
 * @param {String | String[]} words
 */
String.prototype.filter = function (words) {
  if (typeof words === "string") {
    return this.replace(words, "").replace("  ", " ");
  } else if (words instanceof Array) {
    return words
      .reduce((acc, current) => acc.replace(current, ""), this)
      .replace("  ", " ");
  }
};

// Example:
console.log("This house is not nice!".filter("not"));

/**
 * Exercise #2: Extends the Array prototype to add a bubble sort implementation.
 */
Array.prototype.bubbleSort = function () {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (this[j] > this[j + 1]) {
        const tmp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = tmp;
      }
    }
  }
  return this;
};

// Example:
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

/**
 * Exercise #3: Function constructor.
 * @param {String} name
 */
function Person(name) {
  this.name = name;
}

function Teacher(name) {
  Person.apply(this, [name]);

  this.teach = function (subject) {
    return `${this.name} is now teaching ${subject}`;
  };
}
Teacher.prototype = new Person();

const peter = new Teacher("Peter Pan");

console.log(peter.teach("Flying lessons"));

/**
 * Exercise #3: Object.create and Factory function
 */

function TeacherFactory(name) {
  return {
    name,
    teach: function (subject) {
      return `${name} is now teaching ${subject}`;
    },
  };
}
const wendy = Object.create(TeacherFactory("Wendy"));

console.log(wendy.teach("Growing up lessons"));

/**
 * Exercise #4: FACTORY FUNCTIONS
 */
function PersonFactory(name, age) {
  return {
    name,
    age,
    greeting: function () {
      return `Greetings, my name is ${name} and I am ${age} years old.`;
    },
    salute: function () {
      return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
    },
  };
}

function StudentFactory(person, major) {
  return {
    ...person,
    major,
    greeting: function () {
      console.log(`Hey, my name is ${person.name} and I am studying ${major}`);
    },
  };
}

function ProfessorFactory(person, department) {
  return {
    ...person,
    department,
    greeting: function () {
      console.log(
        `Good day, my name is ${person.name} and I am in the ${department} department`
      );
    },
  };
}

console.log("V1------------ FACTORY FUNCTIONS ----------------");
const v1Person = PersonFactory("Peter Pan", 12);
console.log(v1Person.greeting());
console.log(v1Person.salute());

const v1Student = StudentFactory(v1Person, "Growing up lessons");
v1Student.greeting();
console.log(v1Student.salute());

const v1Professor = ProfessorFactory(v1Person, "Flying security");
v1Professor.greeting();
console.log(v1Professor.salute());

/**
 * Exercise #4: FUNCTION CONSTRUCTOR
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greeting = function () {
  return `Greetings, my name is ${this.name} and I am ${this.age} years old.`;
};

Person.prototype.salute = function () {
  return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
};

function Student(major){
  this.major = major;

  this.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
  }
}

function Professor(department) {
  this.department = department;

  this.greeting = function () {
    console.log(
      `Good day, my name is ${this.name} and I am in the ${this.department} department`
    );
  };
}

console.log("V2----------- FUNCTION COSTRUCTORS --------------");
const v2Person = new Person("Peter Pan", 12);
console.log(v2Person.greeting());
console.log(v2Person.salute());

Student.prototype = v2Person;

const v2Student = new Student("Growing up lessons");
v2Student.greeting();
console.log(v2Student.salute());


Professor.prototype = v2Person;

const v2Professor = new Professor("Flying security");
v2Professor.greeting();
console.log(v2Professor.salute());