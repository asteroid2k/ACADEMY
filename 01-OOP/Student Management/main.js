const logErr = (msg) => console.log(`%c ${msg}`, "color:red;");

// STUDENT CLASS
class Student {
  #me = "A NORMAL STUDENT"; //private
  _name; //protected
  _age;
  _grade;
  _courses = [];
  _gpa = 0.0;

  static whoami() {
    console.log("A STUDENT FROM JUJUTSU HIGH");
  }

  constructor(name, age, grade) {
    this._name = name;
    this._age = age;
    this._grade = grade;
  }
  // Setter/Getter for name
  get name() {
    return this._name;
  }
  //set methods must have exactly one parameter
  set name(newName) {
    if (newName.length < 2) {
      logErr("Name too short");
      return;
    }
    this._name = newName;
  }
  // Setter/Getter for age
  get age() {
    return this._age;
  }
  set age(newAge) {
    if (newAge < 0) {
      logErr("Invalid age");
      return;
    }
    this._age = newAge;
  }
  // Setter/Getter for grade
  get grade() {
    return this._grade;
  }
  set grade(newGrade) {
    if (newGrade < 0 || newGrade > 12) {
      logErr("Invalid grade");
      return;
    }
    this._grade = newGrade;
  }
  // Setter/Getter for courses
  setCourses(courses, append = true) {
    if (courses.length < 1) {
      logErr("Courses empty");
      return;
    }
    if (append) {
      this._courses = this._courses.concat(courses);
      return;
    }
    this._courses = courses;
  }
  addCourse(course) {
    if (course.length < 2) {
      logErr("Course name too short");
      return;
    }
    this._courses.push(course);
  }
  get courses() {
    return this._courses;
  }
  // Setter/Getter for courses
  get gpa() {
    return this._gpa;
  }
  calculateGpa(newGpa) {
    this._gpa = newGpa;
    console.log(`GPA:${newGpa}`);
  }

  //Methods
  printCourses() {
    console.log(`Courses:\n${this._courses.join(", ")}`);
  }
  sayHello() {
    console.log(
      `I am ${this._name} from grade ${
        this.grade
      }.\nI study ${this._courses.join(", ")}`
    );
  }
}

// ______________________________________________
let studentRoll = [];
/**
 *
 * Creates a student object
 * @param {string} name
 * @param {number} age
 * @param {string[]} courses
 * @param {number} grade
 * @returns {Student} new student object
 */
function createStudent(name, age, courses, grade) {
  // create student
  // return student
}

/**
 * Adds student to studentRoll array
 * @param {Student} student
 */
function enrollStudent(student) {
  //append student to studentRoll array
}

/**
 * Search students by given name
 * @param {string} name
 */
function searchStudent(name) {}

/**
 * Returns list of students in given grade
 * @param {number} grade
 * @returns {Student[]}
 */
function filterStudentsByGrade(grade) {}

/**
 * Returns list of students who have ages between minAge and maxAge
 * @param {number} minAge
 * @param {number} maxAge
 * @returns {Student[]}
 */
function filterStudentsByAge(minAge, maxAge) {}
