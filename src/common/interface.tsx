// 用来描述对象有那些属性
interface Point {
    x: number
    y: number
}

let point: Point = { x: 0, y: 0 }

// 用来描述行为的抽象
interface Spokenable {
    speak(): void // 接口里不能放实现，只能放定义，所有的方法都是抽象的
}

interface Eatable {
    eat(): void // 接口里不能放实现，只能放定义，所有的方法都是抽象的
}

// 只能继承一个抽象类，但是可以实现多个接口
class Person implements Spokenable, Eatable {
    speak() {

    }
    eat() {

    }
}

// overload 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function attr(val: Boolean):void
// function attr(val: string):void{

// }

// function test(reporter: string): string { return 'make big news' }
// function test(runner: string): number { return 888 }


// override
namespace overrideTest {
    class Animal {
        constructor() { }
        speak() {
            throw new Error("")
        }
    }

    class Cat extends Animal {
        speak() {
            console.log("miao wu")
            super.speak()// 调父类的方法
        }
    }

}


// 任意属性
interface PlainObject {
    [propertName: string]: number
}

let obj: PlainObject = {
    x: 1
}

// 接口的继承
interface SpeakChinese extends Spokenable {
    speakChinese(): void
}

class LiLi implements SpeakChinese {
    speak() { }
    speakChinese() { }
}

// readOnly
interface Circle {
    readonly PI: number,
    width: number
}

let ball: Circle = {
    PI: 3.14,
    width: 10
}

// 接口约束函数
interface Discount {
    (price: number): number
}

let cost: Discount = function (price: number): number {
    return price * .8;
}

// 可索引接口
// 用来约束数组与对象
interface UserInterface {
    [index: number]: string
}

let arr: UserInterface = ["1", "2"];

console.log(arr);

let obj: UserInterface = {
    1: "1",
    2: "2"
}

// 类的接口 + 泛型
namespace D {
    interface Speakable {
        name: String
        speak(word: string): void
    }

    class Dog implements Speakable {
        name: string;
        speak() {

        }
    }

    class Animal {
        constructor(public name: string) {

        }
    }
    // 约束构造类型 使用new 来约束
    interface WithNameClass {
        new(name: string): Animal // 约束Animal
    }

    function createAnimal(clazz: WithNameClass, name: string) {
        return new clazz(name)
    }
    let a = createAnimal(Animal, "liby");
}

