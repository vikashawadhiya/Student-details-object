function Student(name, roll_no, class_name, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_name = class_name;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
  
    this.printTop3Subjects = function () {
  
        const sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => {
            return this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a];
        });
  
  
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]}`);
        }
    };
  
    this.printReportCard = function () {
  
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no}      |`);
        console.log(`| Class    - ${this.class_name}       |`);
        console.log(`| Section  - ${this.section}       |`);
        for (const subject in this.marks_of_5_subjects) {
            console.log(`|${subject}  - ${this.marks_of_5_subjects[subject]}|`);
        }
        const percentage = ((Object.values(this.marks_of_5_subjects).reduce((acc, curr) => acc + curr, 0) / 500) * 100).toFixed(1);
        console.log(`| Percentage - ${percentage} %|`);
        console.log("+--------------------+");
    };
  }
  
  
  const studentDetails = {
    name: "Huzaifa",
    roll_no: 16,
    class_name: "X",
    section: "A",
    marks_of_5_subjects: {
        science: 72,
        maths: 75,
        social_science: 79,
        english: 80,
        hindi: 67
    }
  };
  
  const huzaifa = new Student(studentDetails.name, studentDetails.roll_no, studentDetails.class_name, studentDetails.section, studentDetails.marks_of_5_subjects);
  
  huzaifa.printTop3Subjects();
  huzaifa.printReportCard();
  