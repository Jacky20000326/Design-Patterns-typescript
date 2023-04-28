// Interface 只描述有哪些 Method 和 Property ，不包含怎麼執行。
// Interface 只做描述，不做動作
interface ISkill {
    doAction():void;
}

class FireSkill implements ISkill {
    doAction(): void{
        console.log('火焰')
    }
}

class HealSkill implements ISkill {
    doAction(): void {
        console.log('治愈')  
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



