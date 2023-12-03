function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

student1.setSubject('Algebra');
student2.setSubject('Geometry');


Student.prototype.addMarks = function(...marksToadd) {
	if (this.marks) {
      this.marks.push(...marksToadd);
	}
}
student1.addMarks(4, 5, 4, 5);
student2.addMarks();


Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}
	return sum / this.marks.length;
}
student1.getAverage();
student2.getAverage();


Student.prototype.exclude = function(reason) {
   		delete this.subject;
		delete this.marks;
        this.excluded = reason;
}
student2.exclude('плохая учёба');

console.log(student1);
console.log(student2);