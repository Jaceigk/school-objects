function School(student, classroom, term, gender){
    this.student = student;
    this.classroom = classroom;
    this.term = term;
    this.gender = gender;

}

let Bob= new School('Bob', 7, 'Term 2', 'male');
console.log(Bob);