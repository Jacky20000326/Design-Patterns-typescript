"use strict";
class CookNoodel {
    Excute() {
        console.log('煮面');
    }
}
class CookRice {
    Excute() {
        console.log('煮饭');
    }
}
class Waiter {
    constructor() {
        this.order = [];
    }
    setOrder(command) {
        this.order.push(command);
    }
    ExcuteOrder() {
        this.order.forEach(item => {
            item.Excute();
        });
    }
}
let concreteCookNoodel = new CookNoodel();
let concreteCookRice = new CookRice();
let waiter = new Waiter();
waiter.setOrder(concreteCookNoodel);
waiter.setOrder(concreteCookRice);
waiter.ExcuteOrder();
