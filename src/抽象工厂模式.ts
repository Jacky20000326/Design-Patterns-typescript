interface IDepartment {
    InsetData():void
    GetDepartment():void
}

interface IFactory {
    CreateDepartment():IDepartment
}

class AccessDepartment implements IDepartment {
    InsetData():void {
        console.log('insert Access Data')
    }
    GetDepartment():void{
        console.log('get department from access')
    }
}

class MysqlDepartment implements IDepartment {
    InsetData():void {
        console.log('insert mysql Data')
    }
    GetDepartment():void{
        console.log('get department from mysql')
    }
}

class createAccessFactory implements IFactory {
    CreateDepartment(){
        return new AccessDepartment()
    }
}
class createMysqlFactory implements IFactory {
    CreateDepartment(){
        return new MysqlDepartment()
    }
}

let factory =  {
    AccessFactory: new createAccessFactory().CreateDepartment,
    MysqlFactory: new createMysqlFactory().CreateDepartment
}

let concreteAccess = factory["AccessFactory"]()

concreteAccess.GetDepartment()


