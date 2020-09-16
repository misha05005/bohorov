/*let DataQuestoin = question => {
    let ask = prompt(question);
    return alert (`Ваши ответ: ${ask}`);
} 
DataQuestoin('Как вас зовут?');
DataQuestoin('С какго вы года?');
DataQuestoin('Чем вы заняты?');*/

/*let Person = {
    name: 'Иван Иваныч',
    age: 56,
    sayHello: function () {
        return `Привет,${this.name}Ваш вазраст${this.age}`
    }
};
console.log(Person);*/

let DataQuestoin = () => {
    const askList = [
        'Как вас зовут?',
        'Сколько вам лет?',
        'Вы женаты/замужем?',
        'Кем вы работаете?',
        'Какая у вас ЗП?',
        'Где вы были за границей последний раз?'   
    ];

    const answers = {
        name: null,
        age: null,
        family: null,
        job: null,
        abroad: null
    };

    let counter = 0 ;

    for (let key in answers){

        let ask = prompt(askList[counter]);
        answers[key]=ask;
        counter++;
    }

    return console.log(answers);;


};
DataQuestoin();

