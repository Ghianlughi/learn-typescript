"use strict";
class ClassA {
    constructor() {
        this.name = 'class A';
    }
}
class ClassBaru {
    constructor(classProp) {
        this.classProp = classProp;
    }
}
const classA = new ClassA();
const classBaru = new ClassBaru(classA);
