namespace v {
    function demo(input: string | number | boolean) {
        if (typeof input === 'string') {
            input.toLowerCase()
        } else if (typeof input === 'number') {
            input.toFixed(2)
        } else {
            input
        }
    }

    class Animal {
        public name: string = "zg"
    }

    class Brid extends Animal {
        public swing: number = 2
    }

    function getName(a: Animal) {
        if (a instanceof Brid) {
            a.swing;
        } else {
            a.name;
        }
    }

    // null protect
    function getFirstLatter(s: string | null) {
        // if (a === null) {
        //     a = ''
        // }
        s = s || '';
        // 但判断不能放在其他函数里，再通过调用判断
        s.charAt(0)
    }

    // 
    let a = { b: "a" }
    // a?.b // 类似三元

    interface Button1 {
        class: "warning", // 写死的字面量 不可修改
        test1: ""
    }

    interface Button2 {
        class: "danger",
        test2: ""
    }

    type Button = Button1 | Button2

    function getButton(button: Button) {
        if (button.class === "warning") {
            button.test1;
        } else {
            button.test2;
        }
    }

    interface Brids {
        swing: string
    }

    interface Dog {
        leg: string
    }

    function getAnimal(x: Brids | Dog) {
        if ('swing' in x) {
            x.swing
        } else {
            x.leg
        }
    }
}

namespace w {
    // 自定义类型保护
    interface Brids {
        leg: number
    }

    interface Dog {
        leg: number
    }
    // 自定义类型保护器
    function isBirds(x: Brids | Dog): x is Brids {
        return x.leg === 2
    }

    function getAnimal(x: Brids | Dog) {
        if (isBirds(x)) {
            return x.leg;// 
        }
    }

}