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

    static gradeStudent () {
        return Math.floor(Math.random() * (100 - 1)) + 1  
    }
  }

class Student extends Person {
    constructor (attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favoriteSubjects = attributes.favoriteSubjects
        this.grade = 74
        
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
        if (this.grade >= 70) {
        return true
        } else {
        return false
        }
    }

    
}
class ProjectManager extends Instructor {
    constructor (attributes) {
      super(attributes)
      this.gradClassName = attributes.gradClassName
      this.favoriteInstructor = attributes.favoriteInstructor
    }
  
    standUp (slackChannel) {
      return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }
  
    debugCode (student, subject) {
      return `${student.name}'s code on ${subject}`
    }
  }
