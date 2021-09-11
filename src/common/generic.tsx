import React from "react";

namespace a {
    // 泛型
    function createArray<T = number>(length: number, value: T): Array<T> {
        let result: Array<T> = [];
        for (let i = 0; i < length; i++) {
            result[i] = value
        }
        return result;
    }
    // 泛型类似与一只参数
    let res = createArray<number>(3, 1)
    console.log(res);
    // 类数组
    function sum(...args: any[]) {
        // let args:IArguments = arguments

    }
    sum(1, 2, 3)

    // 需要tsconfig lib 配置dom，才会有HTMLElement
    let root: HTMLElement | null = document.getElementById("root");
    let children: HTMLCollection = root?.children;
    let childrenNode: NodeListOf<ChildNode> = root?.childNodes

    class MyArray<T>{
        private list: T[] = []
        add(val: T) {

        }
        get(): T {
            let res = this.list[0]
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i] > res) {
                    res = this.list[i]
                }
            }
            return res;

        }
    }

    let arr = new MyArray<number>()
    arr.add(1); arr.add(2); arr.add(3);
    let res3 = arr.get()
    console.log(res3);

    // interface 泛型
    interface Calculte {
        <T>(a: T, b: T): T
    }
    let add: Calculte = function <T>(a: T, b: T): T {
        return a;
    }
    let res5 = add<number>(5, 5)

    // 多个类型参数 for example: switch two properties
    function swap<A, B>(tuple: [A, B]): [B, A] {
        return [tuple[1], tuple[0]];
    }
    let res6 = swap<string, number>(["d", 1]);

    // let a = 1, b = 2;
    // [a, b] = [b, a]

    // default type for generic
    function defaultFun<T = number>(val: string): T | null {
        let t: T | null = null;
        return t;
    }

    // 泛型的约束
    // 预先不知道具体类型，而导致的不能访问具体方法
    interface lengthWise {
        lenhth: number
    }
    function logger<T extends lengthWise>(val: T) {
        console.log(val.lenhth);

    }

    // 约束
    interface Cart<T> {
        list: T[]
    }

    let cart: Cart<string> = {
        list: ["1"]
    }

    // 泛型类型别名
    type Cart2<T> = { list: T[] } | T[];
    let c1: Cart2<string> = { list: ["1"] };
    let c2: Cart2<string> = ["1"]

    // interface 实实在在的接口，是一种真正的类型（大名
    // type一般用来定义别名，并不是真正的类型（小名
}

// 1. 尽量用interface代替type
// 2. interface可以在任何地方被调用
// 3. 联合类型/元组类型，type更合适 （比如两个interface的联合）