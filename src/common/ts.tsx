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