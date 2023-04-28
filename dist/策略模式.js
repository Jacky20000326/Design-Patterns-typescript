"use strict";
class FireSkill {
    doAction() {
        console.log('火焰');
    }
}
class HealSkill {
    doAction() {
        console.log('治愈');
    }
}
// class UseSkill {
//     Strategy: ISkill
//     constructor(Strategy:ISkill){
//         this.Strategy = Strategy 
//     }
//     ActionSkill(){
//         this.Strategy.doAction()
//     }
// }
// let concreteFireSkill = new UseSkill(new FireSkill());
// let concreteHealSkill = new UseSkill(new HealSkill());
