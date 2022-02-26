const kibria = {
    id: "101",
    money: 5000,
    name: "RJ kibria",
    major: 'bangla',
    isRich: false,
    // subjects: ['english', 'mathatics', 'economics', 'physics', 'chemistry', 'calculas'],
    // bestFriend: {
    //     name: 'kundu',
    //     major: 'english',
    // },
    // takeExam: function () {
    //     console.log("taking exam", this.name);
    // },
    treatDay: function (expense = 0) {
        this.money = this.money - expense;
        return this.money;
    }

}

const heroBalam = {
    id: "102",
    money: 6000,
    name: "Hero balam",
    major: 'cosmos',
    isRich: true,
    // subjects: ['english', 'mathatics', 'economics', 'physics', 'chemistry', 'calculas'],
    // bestFriend: {
    //     name: 'kundu',
    //     major: 'english',
    // },
    // takeExam: function () {
    //     console.log("taking exam", this.name);
    // },


}

//so bind ki kore ekta object er method onno object e use korar shomoy new object er this use korbe ager tar this use use hobe na 
const heroTreatday = kibria.treatDay.bind(heroBalam);

console.log(heroTreatday(500));
console.log(heroTreatday(100));
