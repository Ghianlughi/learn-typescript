class ClassA {
    name: string = 'class A';

}

class ClassBaru<T>{
    classProp:T ;
    
    constructor(classProp: T){
        this.classProp = classProp;
    }
}

const classA= new ClassA();
const classBaru = new ClassBaru(classA);