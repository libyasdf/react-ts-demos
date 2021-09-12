namespace f {
    /* 接口的兼容性 ts跟类型没关系 只跟属性有关系 */
    interface Animal {
        name: string;
        age: number
    }

    interface Person {
        name: string;
        age: number;
        speak: (word: string) => void
    }

    function getName(ani: Animal): string {
        return ani.name
    }

    let p: Person = {
        name: "lid",
        age: 10,
        speak() { }
    }

    getName(p) // Person也行 只要有需要的属性就可以

    /* 基本类型的兼容性*/
    let str: string | number
    let num: number = 1

    str = num
    num = str

    class Animal {
        name: string
    }
    // 类的兼容性
    class Brid extends Animal {
        swing: number
    }
    let a: Animal;
    a = new Brid() // 子类变量指向父类实例

    let b: Brid
    // b = new Animal() // 父类变量指向子类实例 （本质也是属性比较）
}

namespace c {
    // 函数兼容性
    type sunFunction = (a: number, b: number) => number;
    let sum: sunFunction;

    function f1(a: number, b: number): number {
        return a
    }

    sum = f1;
    function f2(a: number): number { // 参数可以少不能多
        return a
    }
    sum = f2
    //  比较返回值
    type GetPerson = () => { name: String, age: number }
    let getPerson; GetPerson
    function g1() {
        return { name: "as", age: 1 } // (可以多，不可以少)
    }
    getPerson = g1


    //函数参数的协变
    type logFun = (a: number | string) => void;
    let log: logFun;

    function log1(s: number | string | boolean) {

    }
    log = log1 // 需要的都满足 - 不能双向协变
}