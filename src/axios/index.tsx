import Axios from './Axios';

function createInstance() {
    let context = new Axios(); // this 指针上下文
    // 让request方法里的this永远指向new Axios()
    let instance = Axios.prototype.request.bind(context);
    instance = Object.assign(instance, Axios.prototype, context);
    return instance;
}

let axios = createInstance();

export default axios;