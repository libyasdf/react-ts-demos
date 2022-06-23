import { waitForElementToBeRemoved } from "@testing-library/react";
import { type } from "os";

namespace a {
    interface Person3 {
        name: String;
        age: Number;
        gender: 'male' | 'female';
    }
    // keyof 索引类型查询操作符
    type Person3Keys = keyof Person3;
    const getValueByKey = (val: Person3, Key: Person3Keys) => {
        return val[Key];
    }

    let liby: Person3 = {
        name: 'liby',
        age: 29,
        gender: 'female'
    }
    let val = getValueByKey(liby, 'age');
    console.log('val:', val);
}

/*
 映射类型 in 去批量定义*/
namespace b {
    interface Person4 {
        name: String;
        age?: Number;
        gender?: 'male' | 'female';
    }
    // 只能用在type里
    // type p = {
    //     [key in keyof Person4]?: Person4[key];
    // }
    /* Partial的实现原理
       type Partial<T> = {
         [key in keyof T]?: T[key]
        }*/
    type p = Partial<Person4>;

    let s: p = {
        name: 'pw'
    }
    /* Required 实现原理
    type Required<T> = {
        [key in keyof T]-?: T[key]
    }*/
    type rp = Required<Person4>
    let s2: rp = {
        name: 's',
        age: 1,
        gender: 'female'
    }

    /* Readonly 实现原理
    type Readonly<T> = {
        readonly [key in keyof T]: T[key]
    }*/
    type readonlyPerson = Readonly<Person4>
    let roP: readonlyPerson = {
        name: 's',
        age: 1,
        gender: 'female'
    }

    /* Pick 实现原理
    type Pick<T, K extends keyof T> = {
      [key in K]: T[key]
    }*/
    type pickPerson = Pick<Person4, 'name'>
    let pp: pickPerson = {
        name: 'lib'
    }

    // class 也可以类型partial
    class Person {
        public name: string = 'zf'
    }

    type tc = Partial<Person>;
    let np: tc = {
        name: 's'
    }

    // 元组的类型和类型都是固定的
    let xx: [String, Number] = ['1', 1];

}

// interface - 真实的类型，可以被导入和导出
// type - 临时的别名，不会产生真正的类型
// class - 定义类， new XXX


namespace c {
    interface bird {
        name1: String
    }
    interface sky {
        name2: String
    }

    interface water {
        name3: String
    }
    interface fish {
        name4: String
    }

    interface fish2 {
        name4: String;
        age: Number;
    }

    type con<T> = T extends fish ? water : sky;
    let a: con<fish> = {// fish2 也可以这么用，只要包含对方的属性即可（只能多，不能少）
        name3: 'fish'
    }

    // 条件类型的分发
    let c1: con<fish | bird> = { name2: 's' } // water | sky
}

/* 内置条件类型 */
namespace d {
    // 从参数一中排除参数二
    type E = Exclude<String | Number, String>;
    let e: E = 10;

    // 提取
    type E2 = Extract<String | Number | null, String>;
    let e2: E2 = 's';

    // 不为空
    type E3 = NonNullable<null | undefined | String>;
    let e3: E3 = 's';

    function a() {
        return { name: 's', age: 10 };
    }

    // 得到返回值的类型
    type E4 = ReturnType<typeof a>;
    let e4: E4 = { name: '', age: 1 }

    // 构造函数的实例类型
    class efive {
        name: String;
        constructor(name: String) {
            this.name = name;
        }
    }
    type p = InstanceType<typeof efive>;
    let e6: p = new efive('zf');
}

namespace e {
    export class Dog {

    }
    // 类型声明(对于在TS中使用JS的问题)
    // 声明文件怎么写
    // - TS 重新
    // - 配上声明文件
    declare let name: String;
    declare function getName(): String;
    declare class Animal { name: String };

    declare const enum sd {
        Spring,
        winter
    }

    let arr: sd[] = [sd.Spring, sd.winter];

}

// 复杂类型声明
declare namespace jQuery {
    
    function ajax(url: String): void;
    let name: String;
    namespace fn {
        function extend(object:any): void;
    }
}
// 外部声明（外部声明文件）
// *.d.ts

namespace g {
    $('#root').click();
}