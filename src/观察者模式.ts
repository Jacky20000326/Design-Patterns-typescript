abstract class Subject {
    observers:Observer[]
    constructor(){

        this.observers = []
    }
    // 增加观察者
    public Attach(observer:Observer):void{
        this.observers.push(observer)
    }
    // 移除观察者
    public Detect(){
        this.observers = []
    }
  
    public Notify(){
        this.observers.forEach(item => {
            item.update()
        })
    }
}

abstract class Observer {
    update(){

    }
}

class ConcreteSubject extends Subject {
    private _subjectState:string
    get subjectState(){
        return this._subjectState
    }
    set subjectState(value){
        this._subjectState = value
    }
}

class ConcreteObserver extends Observer {
    private name:string
    private subject:ConcreteSubject
    private _ConcreteSubject:ConcreteSubject
    constructor(name:string,subject:ConcreteSubject){
        super()
        this.name = name
        this.subject = subject
    }
    update(){
        console.log(this.name,this.subject.subjectState)
        
    }

    get ConcreteSubject(){
        return this._ConcreteSubject
    }
    set ConcreteSubject(value){
        this._ConcreteSubject = value
    }
}

let concreteSubject = new ConcreteSubject()
concreteSubject.subjectState = "goodgood"
concreteSubject.Attach(new ConcreteObserver('a',concreteSubject))
concreteSubject.Attach(new ConcreteObserver('b',concreteSubject))
concreteSubject.Attach(new ConcreteObserver('c',concreteSubject))
concreteSubject.Notify()