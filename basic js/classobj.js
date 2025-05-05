//prototype example
/* const employee={
    calctax(){
        console.log("tax is 10%");
    }
};
const karanArjun={
    salary:50000,
    calctax(){
        console.log("tax is 20%");
    }
};
karanArjun.__proto__=employee;
karanArjun.calctax(); */

//class & object example
/* class myclass{
    constructor(name){
        console.log("it will automatically called ,When the object is created");
        this.name=name;

    }
    a=10;
    Start(){
        console.log("start the class");
    }
}
let myobj=new myclass("Harpal");
console.log(myobj);
console.log(myobj.a);
console.log(myobj.Start()); */

//inheritance example
class person{
    constructor(name){
        console.log("parent calss constructor");
        console.log(this.name=name);

    }
    eat(){
        console.log("eat function");
    }
}
class developer extends person{
    constructor(name){
        super(name);//to invoke parent class constructor 
         console.log("child calss constructor");
    }
    work(){
        super.eat();
        console.log("developer build the website or webapplication");
    }
}
let myobj=new developer("Harpal patel");
