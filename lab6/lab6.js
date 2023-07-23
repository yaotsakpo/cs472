// Exercise 1=================================================
String.prototype.filter = function (bannedWords) {
  const words = this.split(" ");
  const filteredWords = words.filter((word) => !bannedWords.includes(word));
  return filteredWords.join(" ");
};

console.log("This house is not nice!".filter(["not"]));

// Exercise 2=================================================
Array.prototype.bubbleSort = function () {
  let isSorted;
  for (let i = 0; i < this.length; i++) {
    isSorted = true;
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  return this;
};

const arr = [6, 4, 0, 3, -2, 1];
arr.bubbleSort();
console.log(arr);

// Exercise 3-1=================================================

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

function Teacher(name) {
  Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}.`);
};

const teacher1 = new Teacher("John Doe");
teacher1.teach("Mathematics");

// Exercise 3-2=================================================
function createPerson(name) {
  return {
    name: name,
    sayHello: function () {
      console.log(`Hello, my name is ${this.name}.`);
    },
  };
}

const teacherPrototype = createPerson("John Doe");

teacherPrototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}.`);
};

const teacher2 = Object.create(teacherPrototype);
teacher2.teach("History");

// Exercise 4-1=================================================

function Person2(name, age) {
  this.name = name;
  this.age = age;
}

Person2.prototype.greeting = function () {
  console.log(
    `Greetings, my name is ${this.name} and I am ${this.age} years old.`
  );
};

Person2.prototype.salute = function () {
  console.log(
    "Good morning! In case I don't see you, good afternoon, good evening, and good night!"
  );
};

function Student(name, age, major) {
  Person2.call(this, name, age);
  this.major = major;
}

Student.prototype = Object.create(Person2.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function () {
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
  Person2.call(this, name, age);
  this.department = department;
}

Professor.prototype = Object.create(Person2.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greeting = function () {
  console.log(
    `Good day, my name is ${this.name} and I am in the ${this.department} department.`
  );
};

const student_instance1 = new Student("Alice", 20, "Computer Science");
const professor_instance1 = new Professor("Dr. Smith", 45, "Physics");

student_instance1.greeting();
student_instance1.salute();

professor_instance1.greeting();
professor_instance1.salute();

// Exercise 4-2=================================================

function Person3(name, age) {
  this.name = name;
  this.age = age;

  this.greeting = function () {
    console.log(
      `Greetings, my name is ${this.name} and I am ${this.age} years old.`
    );
  };

  this.salute = function () {
    console.log(
      "Good morning! In case I don't see you, good afternoon, good evening, and good night!"
    );
  };
}

function Student(name, age, major) {
  Person3.call(this, name, age);
  this.major = major;

  this.greeting = function () {
    console.log(
      `Hey, my name is ${this.name} and I am studying ${this.major}.`
    );
  };
}

function Professor(name, age, department) {
  Person3.call(this, name, age);
  this.department = department;

  this.greeting = function () {
    console.log(
      `Good day, my name is ${this.name} and I am in the ${this.department} department.`
    );
  };
}

const student_instance2 = new Student("Alice", 20, "Computer Science");
const professor_instance2 = new Professor("Dr. Smith", 45, "Physics");

student_instance2.greeting();
student_instance2.salute();

professor_instance2.greeting();
professor_instance2.salute();
