"use strict";
class Subject {
    constructor() {
        this.observers = [];
    }
    // 增加观察者
    Attach(observer) {
        this.observers.push(observer);
    }
    // 移除观察者
    Detect() {
        this.observers = [];
    }
    Notify() {
        this.observers.forEach(item => {
            item.update();
        });
    }
}
class Observer {
    update() {
    }
}
class ConcreteSubject extends Subject {
    get subjectState() {
        return this._subjectState;
    }
    set subjectState(value) {
        this._subjectState = value;
    }
}
class ConcreteObserver extends Observer {
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
    }
    update() {
        console.log(this.name);
    }
    get ConcreteSubject() {
        return this._ConcreteSubject;
    }
    set ConcreteSubject(value) {
        this._ConcreteSubject = value;
    }
}
let concreteSubject = new ConcreteSubject();
concreteSubject.Attach(new ConcreteObserver('a', concreteSubject));
concreteSubject.Attach(new ConcreteObserver('b', concreteSubject));
concreteSubject.Attach(new ConcreteObserver('c', concreteSubject));
concreteSubject.Notify();
