"use strict";
class AccessDepartment {
    InsetData() {
        console.log('insert Access Data');
    }
    GetDepartment() {
        console.log('get department from access');
    }
}
class MysqlDepartment {
    InsetData() {
        console.log('insert mysql Data');
    }
    GetDepartment() {
        console.log('get department from mysql');
    }
}
class createAccessFactory {
    CreateDepartment() {
        return new AccessDepartment();
    }
}
class createMysqlFactory {
    CreateDepartment() {
        return new MysqlDepartment();
    }
}
let factory = {
    AccessFactory: new createAccessFactory().CreateDepartment,
    MysqlFactory: new createMysqlFactory().CreateDepartment
};
let concreteAccess = factory["AccessFactory"]();
concreteAccess.GetDepartment();
