"use strict";
class Archer {
    getType() {
        console.log('我是弓箭手');
    }
}
class Warrior {
    getType() {
        console.log('我是斗士');
    }
}
class ArcherTrainingCamp {
    trainAdventurer() {
        console.log('训练一个弓箭手');
        return new Archer();
    }
}
class WarriorTrainingCamp {
    trainAdventurer() {
        console.log('训练一个斗士');
        return new Warrior();
    }
}
//用鬥士訓練營訓練鬥士
let concreteWarriorTrainingCamp = new WarriorTrainingCamp();
let member = concreteWarriorTrainingCamp.trainAdventurer();
console.log(member.getType());
