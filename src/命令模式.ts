interface Command {
    Excute():void
}

class CookNoodel implements Command{
    Excute(): void {
        console.log('煮面')
    }
}

class CookRice implements Command{
    Excute(): void {
        console.log('煮饭')
    }
}

class Waiter {
    private order:Command[] 
    constructor(){
        this.order = []
    }
    public setOrder(command:Command):void{
        this.order.push(command)
    }
    public ExcuteOrder(){
        this.order.forEach(item => {
            item.Excute()
        })
    }
}
let concreteCookNoodel = new CookNoodel()
let concreteCookRice = new CookRice()
let waiter = new Waiter()
waiter.setOrder(concreteCookNoodel)
waiter.setOrder(concreteCookRice)
waiter.ExcuteOrder()