const student = {
    id: "101",
    money: 5000,
    name: "RJ kibria",
    major: 'bangla',
    isRich: false,
    subjects: ['english', 'mathatics', 'economics', 'physics', 'chemistry', 'calculas'],
    bestFriend: {
        name: 'kundu',
        major: 'english',
    },
    takeExam: function () {
        console.log("taking exam", this.name);
    },
    treatDay: function (expense = 0, boksish = 20) {
        this.money = this.money - expense - boksish;
        return this.money;
    }

}

student.takeExam();

console.log(student.treatDay(300, 100));
console.log(student.treatDay(200, 50));
