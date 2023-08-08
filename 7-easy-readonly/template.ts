type MyReadonly<T> = {
    readonly [P in keyof T] : T[P];
}

//1.返回一个对象
//2.遍历obj   (js对象,ts接口)     in -> keyof(mapped) -> lookup
//3.加上readonly关键字   new
//4.通过key来获取obj接口里面的值