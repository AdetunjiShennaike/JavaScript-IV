// CODE here for your Lambda Classes

/*Starting information
* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
*/

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

/*#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

class Person {
  constructor(basicInfo){
    this.name = basicInfo.name;
    this.age = basicInfo.age;
    this.location = basicInfo.location;
    this.gender = basicInfo.gender;
  };

  speak(){
    console.log(`Hey! My name is ${this.name}, and I am from ${this.location}. It's very nice to meet you!`);
  }
}

/*#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Person {
  constructor(teacherInfo){
    super(teacherInfo);
    this.specialty = teacherInfo.specialty;
    this.favLanguage = teacherInfo.favLanguage;
    this.catchPhrase = teacherInfo.catchPhrase;
  }

  demo(subject) {
    console.log(`Alright class, today we will be learning about ${subject}, and I'm super excited.`);
  }

  grade(student, subject) {
    console.log(`${student.name}, sorry to let you know you didn't pass the last ${subject} test, but you are still passing. With a some more effort you could still get an A`);
  }

  grade(student){
    let amount = function () {
      min = Math.ceil(-100);
      max = Math.floor(100);
      return Math.floor(Math.random() * (100 - (-100)) + (-100)); //The maximum is exclusive and the minimum is inclusive
    };
    console.log(`${student.name} I have added ${amount()} to your grade.`);
    return student.grade + amount();
  }
}

/*#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/

class Student extends Person {
  constructor(studentInfo){
    super(studentInfo);
    this.previousBackground = studentInfo.previousBackground;
    this.className = studentInfo.className;
    this.favSubjects = studentInfo.favSubjects;
  }

  listsSubjects(){
    console.log(`Hi, my name's ${this.name} and these are the subjects that I like ${this.favSubjects}.`);
  }

  PRAssignment(subject){
    console.log(`${this.name} has submitted the PR for ${subject}`);
  }

  sprintChallenge(subject){
    console.log(`${this.name} has begun with the attempt to make the greatest spring challenge submission for ${subject}]`);
  }
}

/*#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor {
  constructor(PMInfo){
    super(PMInfo);
    this.gradClassName = PMInfo.gradClassName;
    this.favInstructor = PMInfo.favInstructor;
  }

  standUp(channel){
    console.log(`${this.name} announces to ${channel}: @channel "Hey everyone! Get ready for standup with your favorite PM(also your only PM haha)`);
  }

  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const jane = new Instructor({
  name: 'Jane',
  location: 'Brooklyn',
  age: 33,
  gender: 'female',
  favLanguage: 'Java',
  specialty: 'Databases',
  catchPhrase: `HUE HUE HUE`
});

const kate = new ProjectManager({
  name: 'Kate',
  location: 'Arizona',
  age: 29,
  gender: 'female',
  favLanguage: 'C+',
  specialty: 'Back-end',
  catchPhrase: `Take a deep breathe and 30 secs, then think again.`,
  gradClassName: 'WEB20',
  favInstructor: 'Jane'
});

const satoshi = new ProjectManager({
  name: 'Satoshi',
  location: 'North Carolina',
  age: 49,
  gender: 'male',
  favLanguage: 'SCSS',
  specialty: 'Front-end',
  catchPhrase: `Take things 1 block at a time.`,
  gradClassName: 'UI12',
  favInstructor: 'Jane'
});

const olade = new ProjectManager({
  name: 'Olade',
  location: 'Boston',
  age: 26,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `If it works or doesn't work, isn't important, always figure out why.`,
  gradClassName: 'NET10',
  favInstructor: 'fred'
});

const josh = new Student({
  name: 'Josh',
  location: 'Bay Area',
  age: 40,
  gender: 'male',
  favSubjects: ['Python','HTML','Java','CSS'],
  className: 'UI12',
  previousBackground: `FullStack Dev lacking a design eye`
});

const kehinde = new Student({
  name: 'Kehinde',
  location: 'Orange County',
  age: 20,
  gender: 'male',
  favSubjects: ['Ruby','Python','C','Wamp'],
  className: 'NET10',
  previousBackground: `Intern for startup (that failed)<- [not his fault]`
});

const hiromi = new Student({
  name: 'Hiromi',
  location: 'Wyoming',
  age: 27,
  gender: 'female',
  favSubjects: ['HTML','CSS','JS'],
  className: 'WEB20',
  previousBackground: `7/11 employee`
});

const magda = new Student({
  name: 'Magda',
  location: 'Houston',
  age: 20,
  gender: 'female',
  favSubjects: 'CSS',
  className: 'UI12',
  previousBackground: `Graphic Designer(self employed)`
});

// console.log(magda.listsSubjects());
// console.log(hiromi.PRAssignment('git'));
// console.log(josh.sprintChallenge('design'));
// console.log(jane.grade(josh, 'design'));
// console.log(kate.speak());
// console.log(kehinde.listsSubjects());
// console.log(olade.standUp('NET10'));
// console.log(satoshi.debugsCode(hiromi, 'preprocessing'));
// console.log(fred.demo('slack'));
// console.log(kehinde);


/*#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

this.grade = studentInfo.grade;
studentInfo.grade = Math.min(100, Math.max(0, int));



console.log();
console.log();
console.log();
console.log();
console.log();



