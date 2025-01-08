//Schritt 1: Schreiben Sie eine Funktion, die einen Schüler mit seinen Noten ausgibt, wobei ein Schüler mit Vornamen, Nachnamen, Alter und einer Liste der Noten ausgegeben werden soll.
//Anton Meier (17)
// ==============================
// Grades: 1,4,3,1,3,2,1,2
console.log();
console.log("Aufgabe 1");
type Student ={
    firstName: string;
    lastName: string;
    age: number;
    grades :(number | string |undefined)[];
};

function printStudent(student:Student){
    const separator = '='.repeat(30);
    console.log(`Student: ${student.firstName} ${student.lastName} (Age: ${student.age})`);
    console.log(separator);
    console.log(`Grades: ${student.grades.join(', ')}`);
}

const student1: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [3, 4, 3, 5, 3, 2, 1, 2],
};
printStudent(student1);
console.log();
console.log("Aufgabe 2");

//Schritt 2: Zeichenfolgen und Zahlen als Noten zulassen Aufgabe:
const student2: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age : 17,
    grades: ["A",2,"F",3,1,"B",2,5],
};
printStudent(student2);
console.log();
console.log("Aufgabe 3");

//Schritt 3: „undefiniert“ als Wert zulassen (angezeigt als *) Aufgabe:
function printStudentUndefined(student: Student): void {
    const separator = '='.repeat(30);
    const formattedGrades = student.grades.map((grade) =>
        grade === undefined ? "*" : grade
    );

    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log(separator);
    console.log(`Grades: ${formattedGrades.join(',')}`);
}

const student3: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, undefined, 3, 1, "B", undefined, 5],
};

printStudentUndefined(student3);
console.log();
console.log("Aufgabe 4");

//Step 4: Print a list of all students in the console Task:

function printAllStudents(students: Student[]): void {
    students.forEach((student) => {
        printStudentUndefined(student);
        console.log(); // Leerzeile zwischen den Ausgaben
    });
}
const students: Student[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, "A", undefined, 1, 2],
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A", undefined, 1],
    },
    {
        firstName: "Cäsar",
        lastName: "SchmidtVonHamburg_Altona______",
        age: 17,
        grades: ["A", 1, undefined, 3, 2, 4, 5],
    },
];
printAllStudents(students);

console.log();
console.log("Aufgabe Bonus 1");

function printStudentWithNameLong(student: Student): void {

    const nameLong= `${student.firstName} ${student.lastName} (${student.age})`;
    const separator = '='.repeat(nameLong.length);
    const formattedGrades = student.grades.map((grade) =>
        grade === undefined ? "*" : grade
    );

    console.log(nameLong);
    console.log(separator);
    console.log(`Grades: ${formattedGrades.join(',')}`);

}

function printAllStudentsWithSeparator(students: Student[]): void {
    students.forEach((student) => {
        printStudentWithNameLong(student);
        console.log(); // Empty line for spacing between students
    });
}
printAllStudentsWithSeparator(students);

console.log();
console.log("Aufgabe Bonus 2");
type SubjectGrades = {
    [subject: string]: (number | string | undefined)[];
};
