// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
      this.name = attributes.name
      this.age = attributes.age
      this.location = attributes.location
    }
    speak () {
      return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor (attributes) {
      super(attributes)
      this.specialty = attributes.specialty
      this.favoriteLanguages = attributes.favoriteLanguages
      this.catchPhrase = attributes.catchPhrase
    }
  
    demo (subject) {
      return `Today we are learning about ${subject}.`
    }
  
    grade (student, subject) {
      return `${student.name} receives a perfect score on ${subject}.`
    }

    gradeStudent () {
        return Math.floor(Math.random() * (90 - 50)) + 50
    }
  }

class Student extends Person {
    constructor (attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favoriteSubjects = attributes.favoriteSubjects
        this.grade = 10
        
    }

    listsSubjects () {
        return this.favoriteSubjects
    }

    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }

    graduate () {
        return this.grade >= 70 ? true : false;
    }

    
}
class ProjectManager extends Instructor {
    constructor (attributes) {
      super(attributes)
      this.gradClassName = attributes.gradClassName
      this.favoriteInstructor = attributes.favoriteInstructor
    }
  
    standUp (slackChannel) {
      return `${this.name} announces to ${slackChannel}, @channel standup times!`
    }
  
    debugCode (student, subject) {
      return `${student.name}'s code on ${subject}`
    }
  }
const instructor =  new Instructor(
    {
        name: "Dan", 
        age: 32, 
        location: "Denver", 
        specialty: "Redux", 
        favoriteLanguages: "JS, React", 
        catchPhrase: "Kittypuff"
    }
)

const student = new Student(
    {
        name: "Thai", 
        age: 35, 
        location: "Los Angeles", 
        previousBackground: "Developer", 
        className: "WEB21", 
        favoriteSubjects: ["Math", "Engineering", "Cooking"]
    }    
)

const pm = new ProjectManager(
    {
        name: "Mary", 
        age: 29, 
        location: "Atlanta", 
        gradClassName: "CS3", 
        favoriteInstructor: "Josh",
        specialty: "Vue", 
        favoriteLanguages: "Vue, Python", 
        catchPhrase: "Let's roll"
    }    
)
/* INSTRUCTOR */
console.log("Instructor", instructor);
console.log("Instructor speaks ", instructor.speak());
console.log("Instructor demos ", instructor.demo("React"));
console.log("Instructor announces a student's grade ", instructor.grade({name: "Thai"}, "JS Fundamental"))
console.log("*********************************************");
/*STUDENT*/

console.log("Student ", student);
console.log("Student speaks ", student.speak());
console.log("Student's favorite subjects are: ", (student.listsSubjects()).join(", "));
console.log("PR Assignment announcement: ", student.PRAssignment("CSS"));
console.log("Sprint Challenge annoucement: ", student.sprintChallenge("Preprocessor"));
console.log("*********************************************");

/*Project Manager*/
console.log("PM ", pm);
console.log("PM StandUp ", pm.standUp("WEB21"));
console.log("PM Debug Code ", pm.debugCode({name: "John"}, "Javascript"))

console.log("*********************************************");
console.log("STRETCH")
let counter = 0;
while(!student.graduate()) {
    console.log(`${student.name}'s current grade for ${student.className} is: ${student.grade}`)
    let studentGrade = instructor.gradeStudent();
    student.grade = 10;
    console.log(`Class grade: ${instructor.name} gives ${student.name} a ${studentGrade} for ${student.className}`);
    student.grade = student.grade + studentGrade;
    console.log(`${student.name} receives a ${student.grade} in ${student.className}`)
    student.graduate() ? console.log(`${student.name} is passing ${student.className}`) : console.log(`${student.name} is not passing ${student.className}`)
    counter++;

}
console.log(`Instructor ${instructor.name} graded ${counter} times`);





