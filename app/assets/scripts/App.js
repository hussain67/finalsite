var $ = require('jquery');
//const Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person{
    payTax(){
        console.log("Succided");
    }
}

const john = new Person("John", "Green");
john.greet();

const david = new Adult("David", "RED");
david.greet();
david.payTax();
