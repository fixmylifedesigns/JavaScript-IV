// CODE here for your Lambda Classes

//parent
class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}
//child
class Instructor extends Person {
  constructor(instructorattributes) {
    super(instructorattributes);
    this.specialty = instructorattributes.specialty;
    this.favLanguage = instructorattributes.favLanguage;
    this.catchPhrase = instructorattributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`;
  }
}
//child
class Student extends Person {
  constructor(studentattributes) {
    super(studentattributes);
    this.previousBackground = studentattributes.previousBackground;
    this.className = studentattributes.className;
    this.favSubjects = studentattributes.favSubjects;
  }
  listSubjects() {
    return this.favSubjects.forEach(function(list) {
      console.log(list);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}
//grandchild
class ProjectManagers extends Instructor {
  constructor(projectManagers) {
    super(projectManagers);
    this.gradClassName = projectManagers.gradClassName;
    this.favInstructor = projectManagers.favLanguage;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(studentname, subject) {
    return `${this.name} debugs ${studentname}'s code on ${subject}.`;
  }
}
// new inputs
const Instructor1 = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});
const Instructor2 = new Instructor({
  name: "Rocco",
  location: "Queens",
  age: 30,
  gender: "male",
  favLanguage: "HTML",
  specialty: "Front-end",
  catchPhrase: `My modern life`
});

const Student1 = new Student({
  name: "Irving",
  location: "Brooklyn",
  age: 26,
  gender: "male",
  previousBackground: "Bike Messenger",
  className: "web18",
  favSubjects: [`CSS`, "HTML"]
});
const Student2 = new Student({
  name: "Jose",
  location: "Brooklyn",
  age: 28,
  gender: "male",
  previousBackground: "Business",
  className: "web18",
  favSubjects: [`JS`, "C++", "Python"]
});

const PM1 = new ProjectManagers({
  name: "Jarred",
  location: "Cali",
  age: 19,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`,
  gradClassName: `web15`,
  favInstructor: `Fred`
});
const PM2 = new ProjectManagers({
  name: "Jimmy",
  location: "New York",
  age: 30,
  gender: "male",
  favLanguage: "C ++",
  specialty: "Back-end",
  catchPhrase: `Lets get it!`,
  gradClassName: `web15`,
  favInstructor: `Rocco`
});

//Instructor commands
// demo(subject)
// grade(student, subject)
// speak()
console.log(Instructor1.speak());
console.log(Instructor2.speak());
console.log(Instructor2.grade(Student1.name, "css"));

// ProductManager commands
// speak()
// demo(subject)
// grade(subject)
// standUp(channel)
// debugsCode(studentname, subject)
console.log(PM1.speak());
console.log(PM1.debugsCode(Student1.name, "css"));
console.log(PM2.speak());
console.log(PM2.standUp("Slack Web18"));

// Students commands
// speak()
// listSubjects()
// PRAssignment(subject)
// sprintChallenge(subject)
console.log(Student1.speak());
Student1.listSubjects();
console.log(Student2.speak());
Student2.listSubjects();
console.log(Student1.PRAssignment("Javascript-IV"))
console.log(Student2.PRAssignment("Javascript-II"))